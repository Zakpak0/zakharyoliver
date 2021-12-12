import { styled } from "@stitches/react";
import Image from "next/dist/client/image";
import { blackA, limeA, yellowA, amberA, mint, whiteA } from "@radix-ui/colors";
const PluralsightInfoContainer = styled('div', {
    height: "1200px",
    width: "1400px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "75px 2fr 3fr",
    gridTemplateAreas: `'activity activity activity activity'
                         'course course badge badge'
                         '. learning learning .'`,
})
const ActivityDataContainer = styled('div', {
    height: "100%",
    width: "100%",
    gridArea: "activity",
    textAlign: "center",
    border: "solid",
    borderColor: "white",
    borderWidth: "0.005rem"
})
const ActivityHoursViewedHeader = styled('h3', {
    marginRight: 10,
    marginLeft: 10,
    'color': "SeaGreen",
    textAlign: "center",
    font: "caption",
})
const ActivityHours = styled("code", {
    marginRight: 10,
    marginLeft: 10,
    color: "Black",
    font: "caption",
    fontSize: "larger"
})
const BadgeDataContainer = styled('div', {
    height: "100%",
    width: "100%",
    gridArea: "badge",

})
const BadgeContainerHeader = styled('h4', {
    textAlign: "center",
    color: "GhostWhite",
    fontSize: "25px",
    fontWeight: "lighter",
})
const BadgeContentContainer = styled('div', {
    background: "Black",
    border: "solid",
    borderColor: "white",
    borderWidth: "0.005rem",
    padding: "0 0 0 10px"
})
const BadgeInfoBody = styled("div", {
    background: `linear-gradient(174.59deg, ${mint.mint9} -38.91%, ${mint.mint12} 95.67%)`,
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
    padding: "5px 25px 5px 25px",
    margin: "8px 10px 10px 8px",
    border: "solid",
    borderColor: "white",
    borderWidth: "0.005rem"
})
const BadgeTitle = styled('h4', {
    color: `${whiteA.whiteA12}`,
    textShadow: "1.0px 1.0px Black",
    padding: "0 0 5px 0",
    textAlign: "left",
    fontSize: "x-large",
    textDecoration: "underline"
})
const BadgeDate = styled('code', {
    color: "WhiteSmoke",
    fontWeight: "bolder"
})
const BadgeImage = styled(Image, {})
const BadgeDescription = styled("p", {
    color: "WhiteSmoke",
    fontWeight: "normal"
})
const CourseDataContainer = styled('div', {
    gridArea: "course",
    height: "100%",
    width: "100%"
})
const CourseContainerHeader = styled('h4', {
    textAlign: "center",
    color: "GhostWhite",
    fontSize: "25px",
    fontWeight: "lighter",
})
const CourseContentContainer = styled('div', {
    background: "Black",
    border: "solid",
    borderColor: "white",
    borderWidth: "0.005rem"
})
const CourseInfoBody = styled('div', {
    background: `linear-gradient(174.59deg, ${mint.mint9} -38.91%, ${mint.mint12} 95.67%)`,
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
    padding: "5px 25px 5px 25px",
    margin: "8px 10px 10px 8px",
    border: "solid",
    borderColor: "white",
    borderWidth: "0.005rem",
})
const CourseTitle = styled('a', {
    color: `${whiteA.whiteA12}`,
    textShadow: "1.0px 1.0px Black",
    padding: "0 0 5px 0",
    textAlign: "left",
    fontSize: "x-large",
    textDecoration: "underline"
})
const CourseDate = styled('code', {
    color: "WhiteSmoke",
    fontWeight: "normal"
})
const CourseInstructor = styled('p', {
    color: "WhiteSmoke",
    fontWeight: "normal"
})
const CourseLevel = styled('p', {
    color: "WhiteSmoke",
    fontWeight: "normal"
})
const LearningDataContainer = styled('div', {
    gridArea: "learning",
    height: "100%",
    width: "100%"
})
const LearningContainerHeader = styled('h4', {
    textAlign: "center",
    color: "GhostWhite",
    fontSize: "25px",
    fontWeight: "lighter",

})
const LearningContentContainer = styled('div', {
    background: "Black",
    border: "solid",
    borderColor: "white",
    borderWidth: "0.005rem"
})
const LearningInfoBody = styled('div', {
    background: `linear-gradient(174.59deg, ${mint.mint9} -38.91%, ${mint.mint12} 95.67%)`,
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
    padding: "5px 25px 5px 25px",
    margin: "8px 10px 10px 8px",
    border: "solid",
    borderColor: "white",
    borderWidth: "0.005rem"
})
const LearningTitle = styled('a', {
    color: `${whiteA.whiteA12}`,
    textShadow: "1.0px 1.0px Black",
    padding: "0 0 5px 0",
    textAlign: "left",
    fontSize: "x-large",
    textDecoration: "underline"
})
const LearningPercentComplete = styled('code', {
    color: "WhiteSmoke",
    fontWeight: "normal",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})
const LearningInstructor = styled('p', {
    color: "WhiteSmoke",
    fontWeight: "normal"
})
const LearningLevel = styled('p', {
    color: "WhiteSmoke",
    fontWeight: "normal"
})


export {
    PluralsightInfoContainer,
    BadgeDataContainer,
    BadgeContentContainer,
    BadgeContainerHeader,
    BadgeTitle,
    BadgeDate,
    BadgeInfoBody,
    BadgeImage,
    BadgeDescription,
    ActivityDataContainer,
    ActivityHoursViewedHeader,
    ActivityHours,
    CourseDataContainer,
    CourseContainerHeader,
    CourseContentContainer,
    CourseInfoBody,
    CourseTitle,
    CourseDate,
    CourseInstructor,
    CourseLevel,
    LearningDataContainer,
    LearningContainerHeader,
    LearningContentContainer,
    LearningInfoBody,
    LearningTitle,
    LearningPercentComplete,
    LearningInstructor,
    LearningLevel
}