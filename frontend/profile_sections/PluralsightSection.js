import { useState, useEffect } from "react";
import http from "http";
const PluralsightSection = () => {
  const [body, setBody] = useState();
  useEffect(() => {
    http.get("http://localhost:3200/pluralsight", (response) => {
      let body = "";
      response.on("data", (data) => {
        body += data;
      });
      response.on("close", (form) => {
        setBody(JSON.parse(body));
      });
    });
    console.log(body);
  }, []);
  return <div></div>;
};

export default PluralsightSection;
