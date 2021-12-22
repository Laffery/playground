const crypto = require("crypto");
const fs = require("fs");

crypto.generateKeyPair(
  "rsa",
  {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: "top secret",
    },
  },
  (err, public, private) => {
    if (err) {
      console.log(err);
      return;
    }

    fs.writeFileSync("src/auth/rsa_pub.pem", public);
    fs.writeFileSync("src/auth/rsa_prv.pem", private);
  }
);
