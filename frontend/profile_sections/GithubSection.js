import { useState, useEffect } from "react";
import http from "http";
import { H1, H2, A, P, Button, Input, Div } from "../pages/index.tsx";
const GithubSection = () => {
  const [repo_count, set_repo_count] = useState();
  const [contribution_data, set_contribution_data] = useState();
  const [repo_data, set_repo_data] = useState();
  useEffect(() => {
    http.get("http://localhost:3200/github", (response) => {
      let body = "";
      response.on("data", (data) => {
        body += data;
      });
      response.on("close", (form) => {
        let data = JSON.parse(body);
        data.map((point) => {
          if (point.Repo_Count_Data) {
            set_repo_count(point.Repo_Count_Data);
          }
          if (point.Repo_Data) {
            set_repo_data(point.Repo_Data);
          }
          if (point.Contributions_Data) {
            set_contribution_data(point.Contributions_Data);
          }
        });
      });
    });
  }, []);
  return (
    <div>
      Repo Count: {JSON.stringify(repo_count)}
      Contribution Data: {JSON.stringify(contribution_data)}
      Repo Data: {JSON.stringify(repo_data)}
    </div>
  );
};

export default GithubSection;
