import { useState, useEffect } from "react";
import http from "http";
import { H1, H2, A, P, Button, Input, Div } from "../pages/index.tsx";
const CalendarSection = () => {
  const [body, setBody] = useState();
  useEffect(() => {
    http.get("http://localhost:3200/listevents", (response) => {
      let body = "";
      response.on("data", (data) => {
        body += data;
      });
      response.on("close", (form) => {
        setBody(JSON.parse(body));
      });
    });
  }, []);
  return <div>{JSON.stringify(body)}</div>;
};

export default CalendarSection;
