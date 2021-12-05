import { useState, useEffect } from "react";
import http from "http";
import ScrollBar from "../../components/Scroll";
import { PluralsightInfoContainer, ActivityDataContainer, BadgeDataContainer, CourseDataContainer, LearningDataContainer } from './PluralsightComponents'
const PluralsightSection = () => {
  const [activity_data, set_activity_data] = useState();
  const [badge_data, set_badge_data] = useState();
  const [course_data, set_course_data] = useState();
  const [learning_data, set_learning_data] = useState();

  useEffect(() => {
    http.get(
      process.env.NEXT_PUBLIC_BACKEND_LAN + "/pluralsight",
      (response) => {
        let body = "";
        response.on("data", (data) => {
          body += data;
        });
        response.on("close", (form) => {
          let data = JSON.parse(body);
          data.map((point) => {
            if (point.Activity_Data) {
              console.log(point.Activity_Data)
              let { hoursViewed, subjectViews } = point.Activity_Data
              set_activity_data(<div>Hours Viewed {hoursViewed}</div>);
            }
            if (point.Badge_Data) {
              set_badge_data(point.Badge_Data.map((badges) => {
                let { name, description, iconUrl, dateAchieved } = badges
                return (<div>
                  <div>{name}</div>
                  <div>{description}</div>
                  <div>{iconUrl}</div>
                  <div>{dateAchieved}</div>
                </div>)
              }));
            }
            if (point.Course_Data) {
              set_course_data(point.Course_Data.map((courses) => {
                let { displayName, level, timeCompleted, title } = courses
                return (
                  <div>
                    <div>{displayName}</div>
                    <div>{level}</div>
                    < div > {timeCompleted}</div >
                    <div>{title}</div>
                  </div>)
              }));
            }
            if (point.Learning_Data) {
              set_learning_data(point.Learning_Data.map((learning) => {
                let { displayName, level, title, percentComplete } = learning
                return (<div><div>{displayName}</div>
                  <div>{level}</div>
                  <div>{title}</div>
                  <div>{percentComplete}</div>
                </div>)
              }));
            }
          });
        });
      }
    );
  }, []);
  return (
    <>
      <PluralsightInfoContainer>
        <ScrollBar
          height={"max-content"}
          width={"max-content"}
          content={<ActivityDataContainer>{activity_data}</ActivityDataContainer>}
        />
        <ScrollBar
          height={"max-content"}
          width={"max-content"}
          content={<BadgeDataContainer>
            {badge_data}
          </BadgeDataContainer>}
        />
        <ScrollBar
          height={"max-content"}
          width={"max-content"}
          content={
            <CourseDataContainer>
              {course_data}
            </CourseDataContainer>}
        />

        <ScrollBar
          height={"max-content"}
          width={"max-content"}
          content={
            <LearningDataContainer>
              {learning_data}
            </LearningDataContainer>
          }
        />
      </PluralsightInfoContainer>
    </>
  );
};

export default PluralsightSection;
