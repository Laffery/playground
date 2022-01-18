import Koa from "koa";
import config from "config/config.default";
import fs from "fs";
import path from "path";

// toolchain
import { cosConfig } from "config/cos.config";
import { PrismaClient } from "@prisma/client";

// middlewares
import bodyParser from "koa-bodyparser";
import jwt from "koa-jwt";
import logger from "middleware/logger";

// controllers
import userController from "controller/user";
import blogController from "controller/blog";
import dynamicController from "controller/dynamic";

const app = new Koa();
const { port } = config;
const COSClient = require("@laffery/cos-db");
app.use(async (ctx, next) => {
  // set private secret key
  ctx.state.secret = fs.readFileSync(
    path.resolve(__dirname, "./auth/rsa_prv.pem")
  );
  // init COS client
  ctx.state.cos = new COSClient(cosConfig);
  // init prisma database client
  ctx.state.db = new PrismaClient();
  await next();
});

// parse request body
app.use(bodyParser());

// logger
app.use(logger);

// check auth
app.use(
  jwt({
    secret: "shared-secret",
    debug: app.env === "development",
    cookie: "token",
  }).unless({
    // paths can be visited without jwt
    path: [
      /^\/user\/(register|login)/,
      /^\/blog\/(list)/,
      /^\/dynamic\/(list)/,
    ],
  })
);

// routes
app.use(userController.allowedMethods()).use(userController.routes());
app.use(blogController.allowedMethods()).use(blogController.routes());
app.use(dynamicController.allowedMethods()).use(dynamicController.routes());

app.listen(port, () => {
  console.log(`Server start on http://localhost:${port}`);
});
