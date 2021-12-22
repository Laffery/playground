import crypto from "crypto";
import fs from "fs";
import config from "config/config.default";

const privateKey = fs.readFileSync(config.privateKeyPath).toString();

export const encrypt = (data: string, key: string) =>
  crypto.publicEncrypt(key, Buffer.from(data));

export const decrypt = (encrypted: string) => {
  console.log(privateKey);
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey,
      passphrase: "top secret",
    },
    Buffer.from(encrypted, "base64")
  );

  return decrypted.toString();
};
