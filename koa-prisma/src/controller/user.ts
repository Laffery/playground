import { Context } from "koa";
import Router from "@koa/router";
import jwt from "jsonwebtoken";
import message from "utils/message";
import { User } from "user";

import {
  findByEmail,
  findByUsername,
  createUser,
  updateUser,
} from "service/user";
const router = new Router();

router.prefix("/user");

// register
router.post("/register", async (ctx: Context) => {
  const { email, username, password } = ctx.request.body;
  if (!email || !username || !password) {
    let code = 400;
    if (!email) ctx.body = message({ code, message: "email cannot be empty" });
    else if (!username)
      ctx.body = message({ code, message: "username cannot be empty" });
    else ctx.body = message({ code, message: "password cannot be empty" });
    return;
  }

  const user = await findByEmail(ctx.state.db, email);

  if (user) {
    ctx.body = message({ code: 202, message: "the email has been registered" });
    return;
  }

  const res = await createUser(ctx.state.db, {
    email,
    username,
    password,
  });

  ctx.body = message(
    res ? {} : { code: 203, message: "failed to create a user" }
  );
});

// login
router.post("/login", async (ctx: Context) => {
  const { email, username, password } = ctx.request.body;
  if (!email && !username) {
    ctx.body = message({
      code: 400,
      message: "email and username cannot be empty",
    });
    return;
  }

  if (!password) {
    ctx.body = message({
      code: 400,
      message: "password cannot be empty",
    });
    return;
  }

  const user = await (email ? findByEmail : findByUsername)(
    ctx.state.db,
    email || username
  );

  if (!user) {
    ctx.body = message({ code: 201, message: "no such user" });
    return;
  }

  const token = jwt.sign(user, ctx.state.secret);
  ctx.cookies.set("token", token);
  ctx.body = message({});
});

// update user profile
router.post("/update", async (ctx: Context) => {
  const token = ctx.cookies.get("token");
  let res = jwt.verify(token, ctx.state.secret);

  if (!res) {
    ctx.body = message({ code: 401, message: "invalid token" });
    return;
  }

  const user = ctx.request.body["user"] as User;

  if (!user || (!user.email && !user.username)) {
    ctx.body = message({ code: 400, message: "no such user" });
    return;
  }

  const originUser = await (user.email ? findByEmail : findByUsername)(
    ctx.state.db,
    user.email || user.username
  );

  if (!originUser) {
    ctx.body = message({ code: 201, message: "no such user" });
    return;
  }

  res = await updateUser(ctx.state.db, user);

  if (!res) {
    ctx.body = message({ code: 203, message: "failed to update a user" });
    return;
  }

  const newToken = jwt.sign(user, ctx.state.secret);
  ctx.cookies.set("token", newToken);
  ctx.body = message({});
});

// follow somebody

// cancel following somebody

export default router;
