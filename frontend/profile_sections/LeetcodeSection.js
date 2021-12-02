import { useState, useEffect } from "react";
import http from "http";
import { styled } from "@stitches/react";
const LeetcodeSection = () => {
  const [recent_subs, set_recent_subs] = useState();
  const sortProblems = (promiseData) => {
    if (recent_subs) {
      let formmattedData = promiseData.map((points) => {
        let { runtime, title, timestamp, lang } = points;
        let header = title;
        let language = lang;
        let time = new Date(timestamp).toUTCString();
        return [{ runtime, header, time, language }];
      });
      return formmattedData;
    }
  };
  const [problems, set_problems] = useState(
    sortProblems(recent_subs).map((data) => {
      let { runtime, header, time, language } = data;
      return (
        <>
          <SolvedProblemContainer>
            <ProblemHeader>{header}</ProblemHeader>
            <ProblemInfoContainer>
              <ProblemInfo>{runtime}</ProblemInfo>
              <ProblemInfo>{language}</ProblemInfo>
              <ProblemInfo>{time}</ProblemInfo>
            </ProblemInfoContainer>
          </SolvedProblemContainer>
        </>
      );
    })
  );
  const SolvedProblemsContainer = styled("div", {
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyContent: "center",
    alignItems: "center",
    height: "250px",
    width: "550px",
    padding: "10px 10px 10px 10px",
  });
  const SolvedProblemContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
  });
  const ProblemInfoContainer = styled("div", {
    display: "flex",
    flexDirection: "row",
  });
  const ProblemHeader = styled("h3", {});
  const ProblemInfo = styled("p", {
    border: "solid",
  });
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
      <SolvedProblemsContainer>{problems}</SolvedProblemsContainer>
    </>
  );
};

export default LeetcodeSection;
