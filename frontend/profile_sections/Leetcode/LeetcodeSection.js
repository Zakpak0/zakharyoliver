import { useState, useEffect } from "react";
import http from "http";
import ProgressBar from '../../components/Progress'
import ScrollBar from "../../components/Scroll"
import { ProblemHeader, ProblemInfo, ProblemInfoContainer, ProblemInfoHeader, SolvedProblemContainer, SolvedProblemsContainer } from "./LeetcodeComponents"
const LeetcodeSection = () => {
  const [recent_subs, set_recent_subs] = useState();
  const [loading, set_loading] = useState(true)
  const [problems, set_problems] = useState();
  const [progress, set_progress] = useState(0)
  const [loading_header, set_loading_header] = useState()
  useEffect(() => {
    console.log(recent_subs)
    if (recent_subs && typeof (recent_subs) == "object") {
      setTimeout(() => {
        set_loading_header("Manipulating Data")
        set_progress(50)
      }, 500)
      setTimeout(() => {
        return set_problems(
          sortProblems(recent_subs).map((data) => {
            setTimeout(() => { set_progress(90), set_loading_header("Making the data look good screen") }, 1500)
            let { runtime, header, language, link, difficulty, difficultyColor } = data;
            return (
              <>
                <SolvedProblemContainer>
                  <ProblemHeader href={`https://leetcode.com/problems/${link}`}>{header}</ProblemHeader>
                  <ProblemInfoContainer>
                    <ProblemInfo><ProblemInfoHeader>Runtime:</ProblemInfoHeader> {runtime}</ProblemInfo>
                    <ProblemInfo style={{
                      borderLeft: "solid",
                      marginLeft: "5px",
                      fontWeight: ""
                    }}><ProblemInfoHeader>Coding Language:</ProblemInfoHeader><code
                      style={{
                        fontSize: "12px"
                      }}
                    > {language}</code> </ProblemInfo>
                    <ProblemInfo style={{
                      borderLeft: "solid",
                      marginLeft: "5px",
                      color: difficultyColor,
                      borderLeftColor: "black"
                    }}><ProblemInfoHeader
                      style={{
                        color: "initial"
                      }}
                    >Difficulty:</ProblemInfoHeader> {difficulty}</ProblemInfo>
                  </ProblemInfoContainer>
                </SolvedProblemContainer>


              </>
            );
          }))
      }, 1000)
    }
  }, [recent_subs])
  useEffect(() => {
    set_progress(25), set_loading_header("Calling Leetcode"),
      setTimeout(() => {
        http.get(
          process.env.NEXT_PUBLIC_BACKEND_LAN + "/leetcode",
          (response) => {
            let body = "";
            response.on("data", (data) => {
              body += data;
            });
            response.on("close", (form) => {
              let data = JSON.parse(body);
              data.map((point) => {
                if (point.Recent_Subs) {
                  set_recent_subs(point.Recent_Subs)
                }

              });
            })
          });
      }, 500)
  }, []);
  useEffect(() => {
    if (progress == 90) {
      setTimeout(() => {
        set_progress(100)
        set_loading_header("Cleaning up for a smoothe transition")
        setTimeout(() => {
          set_loading(false)
        }, 1500)
      }, 500)
    }

  }, [progress])
  const sortProblems = (promiseData) => {
    setTimeout(() => { set_progress(75), set_loading_header("Sorting Data") }, 500)
    if (recent_subs) {
      let formmattedData = promiseData.map((points) => {
        let { runtime, title, timestamp, lang, difficulty } = points;
        let header = title;
        let link = title.toLowerCase().replaceAll(" ", "-")
        let language = lang;
        let difficultyColor
        if (difficulty == "Easy") {
          difficultyColor = "Green"
        } else if (difficulty == "Medium") {
          difficultyColor = "Yellow"
        } else if (difficulty == "Hard") {
          difficultyColor = "Red"
        }
        return { runtime, header, language, link, difficulty, difficultyColor };
      });
      return formmattedData
    }
  };
  return (
    <>
      <ScrollBar
        content={<SolvedProblemsContainer>{loading ?
          <ProgressBar
            loading_header={loading_header}
            progress={progress} />
          : problems}</SolvedProblemsContainer>}
      />


    </>
  );
};

export default LeetcodeSection;
