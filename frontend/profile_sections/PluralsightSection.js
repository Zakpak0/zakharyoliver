import { useState, useEffect } from "react";
import http from "http";
import { H1, H2, A, P, Button, Input, Div } from "../pages/index.tsx";
const PluralsightSection = () => {
  const [activity_data, set_activity_data] = useState();
  const [badge_data, set_badge_data] = useState();
  const [course_data, set_course_data] = useState();
  const [learning_data, set_learning_data] = useState();
  useEffect(() => {
    http.get("http://localhost:3200/pluralsight", (response) => {
      let body = "";
      response.on("data", (data) => {
        body += data;
      });
      response.on("close", (form) => {
        let data = JSON.parse(body);
        data.map((point) => {
          if (point.Activity_Data) {
            set_activity_data(point.Activity_Data);
          }
          if (point.Badge_Data) {
            set_badge_data(point.Badge_Data);
          }
          if (point.Course_Data) {
            set_course_data(point.Course_Data);
          }
          if (point.Learning_Data) {
            set_learning_data(point.Learning_Data);
          }
        });
      });
    });
  }, []);
  return (
    <div>
      Activity Data:
      {JSON.stringify(activity_data)}
      Badge Data: {JSON.stringify(badge_data)}
      Course Data: {JSON.stringify(course_data)}
      Learning Data: {JSON.stringify(learning_data)}
    </div>
  );
};

export default PluralsightSection;
