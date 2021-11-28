import { useState, useEffect } from "react";
import http from "http";
import { H1, H2, A, P, Button, Input, Div } from "../pages/index.js";
const GithubSection = () => {
  const [body, setBody] = useState();
  useEffect(() => {
    http.get("http://localhost:3200/github", (response) => {
      let body = "";
      response.on("data", (data) => {
        body += data;
      });
      response.on("close", (form) => {
        setBody(JSON.parse(body));
      });
    });
  }, []);
  console.log(body);
  return <div>{JSON.stringify(body)}</div>;
};

export default GithubSection;
