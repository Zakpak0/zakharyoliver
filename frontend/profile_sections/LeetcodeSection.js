import { useState, useEffect } from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import http from "http";
import { H1, H2, A, P, Button, Input, Div } from "../pages/index.tsx";
const LeetcodeSection = () => {
  const [recent_subs, set_recent_subs] = useState();
  useEffect(() => {
    http.get("http://localhost:3200/leetcode", (response) => {
      let body = "";
      response.on("data", (data) => {
        body += data;
      });
      response.on("close", (form) => {
        let data = JSON.parse(body);
        data.map((point) => {
          if (point.Recent_Subs) {
            set_recent_subs(point.Recent_Subs);
          }
        });
      });
    });
  }, []);
  return (
    <>
      <Div css={{}}>Recent Subs: {JSON.stringify(recent_subs)}</Div>
    </>
  );
};

export default LeetcodeSection;
