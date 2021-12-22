import path from "path";

const basePath = path.resolve(__dirname, "..");

const config = {
  basePath,
  port: process.env.PORT ?? 5500,
  token: process.env.TOKEN ?? "magic.token",
  privateKeyPath: path.join(basePath, "/auth/rsa_prv.pem"),
};

export default config;
