require("dotenv").config({ path: "./.env.custom" });

module.exports = {
  reactStrictMode: true,
  env : {
    ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
  }
}
