import https from "https";
import url from "url";
import { Buffer } from "buffer";
import fs from "fs";
const getPluralsightInfo = () => {
  let body;
  https.get(
    "https://app.pluralsight.com/profile/zakhary-oliver",
    (response) => {
      response.setEncoding("utf-8");
      response.on("data", (data) => {
        body += data;
      });
      response.on("close", (join) => {
        fs.writeFileSync("./pluralsightContent.js", body, (err) => {
          console.log(err);
        });
      });
    }
  );
};
getPluralsightInfo();
