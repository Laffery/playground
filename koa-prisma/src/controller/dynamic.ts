import { Context } from "koa";
import Router from "@koa/router";
import message from "utils/message";
const router = new Router();

router.prefix("/dynamic");
router.post(`/list`, async (ctx: Context) => {
  await ctx.state.db.$connect();
  const dynamics = await ctx.state.db.dynamic.findMany();

  // const { dir } = ctx.request.body;
  ctx.body = message({ data: dynamics });
});

router.post(`/put`, async (ctx: Context) => {
  const { key, value } = ctx.request.body;

  if (/(.){1,20}/.test(key)) {
    // image
    if (/(.){1,16}(\.jpeg|\.jpg|\.png)/.test(key)) {
      const base64 = value.replace(/^data:image\/\w+; *base64,/, "");
      ctx.body = message({
        data: await ctx.state.cos.put(key, Buffer.from(base64, "base64")),
      });
    } else {
      ctx.body = message({ data: await ctx.state.cos.put(key, value) });
    }
  } else {
    ctx.body = message({
      code: 400,
      message: "filename is too long",
    });
  }
});

router.post(`/delete`, async (ctx: Context) => {
  const { key } = ctx.request.body;
  ctx.body = message({
    data: await ctx.state.cos.delete(key),
  });
});

export default router;
