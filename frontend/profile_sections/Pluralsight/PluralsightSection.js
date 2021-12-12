import { useState, useEffect } from "react";
import http from "http";
import ScrollBar from "../../components/Scroll";
import { PluralsightInfoContainer, ActivityDataContainer, BadgeDataContainer, CourseDataContainer, LearningDataContainer, ActivityHoursViewedHeader, ActivityHours, LearningContainerHeader, CourseContainerHeader, BadgeContainerHeader, BadgeTitle, BadgeDate, BadgeImage, BadgeInfoBody, BadgeContentContainer, BadgeDescription, CourseInfoBody, CourseTitle, CourseDate, CourseLevel, LearningInfoBody, LearningTitle, LearningInstructor, LearningPercentComplete, LearningLevel, CourseContentContainer, LearningContentContainer, CourseInstructor } from './PluralsightComponents'
import ProgressBar from "../../components/Progress";
const PluralsightSection = ({ themeMode, theme }) => {
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
              set_activity_data(<ActivityHoursViewedHeader>Total Course Content Viewed:<ActivityHours>{hoursViewed}</ActivityHours></ActivityHoursViewedHeader>);
            }
            if (point.Badge_Data) {
              set_badge_data(point.Badge_Data.map((badges) => {
                let { name, description, iconUrl, dateAchieved } = badges
                return (
                  <BadgeInfoBody
                    css={{
                      background: "black",
                      backgroundImage: `url(${iconUrl})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      borderColor: themeMode ? "black" : "white",
                    }}
                  >
                    <BadgeTitle
                      css={{
                        textShadow: themeMode ? "0.5px 0.5px White" : "1.0px 1.0px Black",
                        color: themeMode ? theme.colors.text : theme.colors.textDark
                      }}
                    >{name}</BadgeTitle>
                    <BadgeDate
                      css={{
                        color: themeMode ? theme.colors.text : theme.colors.textDark
                      }}
                    >Earned: {new Date(dateAchieved).toDateString()}</BadgeDate>
                    {/* <BadgeImage src={iconUrl}
                      height={100}
                      width={100}
                    /> */}
                    <BadgeDescription
                      css={{
                        color: themeMode ? theme.colors.text : theme.colors.textDark
                      }}
                    >{description}</BadgeDescription>
                  </BadgeInfoBody>)
              }));
            }
            if (point.Course_Data) {
              set_course_data(point.Course_Data.map((courses) => {
                let { displayName, level, timeCompleted, title, slug } = courses
                let link = title.toLowerCase()
                return (
                  <CourseInfoBody
                    css={{
                      backgroundImage: `url(https://pluralsight.imgix.net/course-images/${slug}-v1.jpg), url(https://pluralsight.imgix.net/course-images/${slug}-v1.png)`,
                      borderColor: themeMode ? "black" : "white",
                    }}
                  >
                    <CourseTitle
                      css={{
                        textShadow: themeMode ? "0.5px 0.5px White" : "1.0px 1.0px Black",

                        color: themeMode ? theme.colors.text : theme.colors.textDark
                      }}
                      href={`https://www.google.com/search?q=${link}`}>{title}</CourseTitle>
                    <CourseInstructor
                      css={{
                        color: themeMode ? theme.colors.text : theme.colors.textDark
                      }}
                    >Instructor: {displayName}</CourseInstructor>
                    <CourseLevel
                      css={{
                        color: themeMode ? theme.colors.text : theme.colors.textDark
                      }}
                    >Course Level: {level}</CourseLevel>
                    <CourseDate
                      css={{
                        color: themeMode ? theme.colors.text : theme.colors.textDark
                      }}
                    >Completion Date: {new Date(timeCompleted).toDateString()}</CourseDate>
                  </CourseInfoBody>)
              }));
            }
            if (point.Learning_Data) {
              set_learning_data(point.Learning_Data.map((learning) => {
                let { displayName, level, title, percentComplete } = learning
                let link = title.toLowerCase()
                return (
                  <LearningInfoBody
                    css={{
                      background: themeMode ? `${theme.colors.container}` : `${theme.colors.containerDark}`,
                      borderColor: themeMode ? "black" : "white",
                    }}
                  >
                    <LearningTitle
                      css={{
                        textShadow: themeMode ? "1.0px 1.0px White" : "1.0px 1.0px Black",

                        color: themeMode ? theme.colors.text : theme.colors.textDark
                      }}
                      href={`https://www.google.com/search?q=${link}`}>{title}</LearningTitle>
                    <LearningInstructor
                      css={{
                        textShadow: themeMode ? "1.0px 1.0px White" : "1.0px 1.0px Black",

                        color: themeMode ? theme.colors.text : theme.colors.textDark
                      }}
                    >{displayName}</LearningInstructor>
                    <LearningPercentComplete
                      css={{
                        textShadow: themeMode ? "1.0px 1.0px White" : "1.0px 1.0px Black",

                        color: themeMode ? theme.colors.text : theme.colors.textDark
                      }}
                    ><ProgressBar progress={Math.floor(percentComplete)} />{Math.floor(percentComplete)}%</LearningPercentComplete>
                    <LearningLevel
                      css={{
                        textShadow: themeMode ? "1.0px 1.0px White" : "1.0px 1.0px Black",
                        color: themeMode ? theme.colors.text : theme.colors.textDark
                      }}
                    >{level}</LearningLevel>
                  </LearningInfoBody>)
              }));
            }
          });
        });
      }
    );
  }, []);
  return (
    <>
      {/* <PluralsightInfoContainer> */}
      {/* <ActivityDataContainer
      > */}
      <ScrollBar
        height={"75px"}
        width={"100%"}
        content={activity_data}
      />
      {/* </ActivityDataContainer> */}
      {/* <BadgeDataContainer
        css={{
        }}
      >
        <BadgeContainerHeader
          css={{
            color: themeMode ? theme.colors.text : theme.colors.textDark
          }}
        >Badges Earned: {badge_data ? badge_data.length : ""}</BadgeContainerHeader> */}
      <ScrollBar
        height={"500px"}
        width={"100%"}
        content={
          <BadgeContentContainer
            css={{
              gridArea: "pluralsight",
              borderColor: themeMode ? "Black" : "White",
              background: themeMode ? "White" : `Black`
            }}
          >
            {badge_data}
          </BadgeContentContainer>
        }
      />
      {/* </BadgeDataContainer> */}
      {/* <CourseDataContainer
      >
        <CourseContainerHeader
          css={{
            color: themeMode ? theme.colors.text : theme.colors.textDark
          }}
        >Courses Completed:  {course_data ? course_data.length : ""}</CourseContainerHeader> */}
      <ScrollBar
        height={"500px"}
        width={"100%"}
        content={
          <CourseContentContainer
            css={{
              gridArea: "pluralsight",
              borderColor: themeMode ? "Black" : "White",
              background: themeMode ? "White" : `Black`
            }}
          >
            {course_data}
          </CourseContentContainer>
        }
      />
      {/* </CourseDataContainer> *
       <LearningDataContainer>
        <LearningContainerHeader
          css={{
            color: themeMode ? theme.colors.text : theme.colors.textDark
          }}
        >Courses Currently In Progress:  {learning_data ? learning_data.length : ""}</LearningContainerHeader> */}
      <ScrollBar
        height={"300px"}
        width={"100%"}
        content={
          <LearningContentContainer
            css={{
              gridArea: "pluralsight",
              borderColor: themeMode ? "Black" : "White",
              background: themeMode ? "White" : `Black`
            }}
          >
            {learning_data}
          </LearningContentContainer>
        }

      />
      {/* </LearningDataContainer> */}
      {/* </PluralsightInfoContainer> */}
    </>
  );
};

export default PluralsightSection;
