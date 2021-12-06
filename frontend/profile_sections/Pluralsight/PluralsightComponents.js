import { styled } from "@stitches/react";
import Image from "next/dist/client/image";
import { blackA, limeA, yellowA, amberA, mint, whiteA } from "@radix-ui/colors";
const PluralsightInfoContainer = styled('div', {
    height: "1000px",
    width: "1200px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "75px 2fr 3fr",
    gridTemplateAreas: `'activity activity activity activity'
                         'course course badge badge'
                         'learning learning learning learning'`,
})
const ActivityDataContainer = styled('div', {
    height: "100%",
    width: "100%",
    gridArea: "activity",
    textAlign: "center"
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
})
const BadgeContentContainer = styled('div', {
    background: "Black",
})
const BadgeInfoBody = styled("div", {
    background: `linear-gradient(174.59deg, ${mint.mint9} -38.91%, ${mint.mint12} 95.67%)`,
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
    padding: "0 5px 0 5px",
    margin: "8px 10px 10px 8px",
    border: "solid",
    borderColor: "white",
    borderWidth: "0.005rem"
})
const BadgeTitle = styled('h4', {
    borderRadius: 8,
    backgroundColor: limeA.limeA9,
    color: `${whiteA.whiteA12}`,
    textShadow: "1.0px 1.0px Black",
    padding: "0 0 5px 0",
    textAlign: "center",
    boxShadow: "1.5px 1.5px Black"
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
    textAlign: "center"
})
const CourseContentContainer = styled('div', {
    background: "Black",
})
const CourseInfoBody = styled('div', {
    background: `linear-gradient(174.59deg, ${mint.mint9} -38.91%, ${mint.mint12} 95.67%)`,
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
    padding: "10px 5px 10px 5px",
    margin: "8px 10px 10px 8px",
    border: "solid",
    borderColor: "white",
    borderWidth: "0.005rem"
})
const CourseTitle = styled('a', {
    textDecoration: "underline",
    textDecorationThickness: "2.5px",
    fontWeight: "bolder",
    borderRadius: 8,
    backgroundColor: amberA.amberA9,
    color: `${whiteA.whiteA12}`,
    textShadow: "1.0px 1.0px Black",
    padding: "0 0 5px 0",
    textAlign: "center",
    boxShadow: "1.5px 1.5px Black"
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

})
const LearningContentContainer = styled('div', {
    background: "Black",
})
const LearningInfoBody = styled('div', {
    background: `linear-gradient(174.59deg, ${mint.mint9} -38.91%, ${mint.mint12} 95.67%)`,
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
    padding: "10px 5px 10px 5px",
    margin: "8px 10px 10px 8px",
    border: "solid",
    borderColor: "white",
    borderWidth: "0.005rem"
})
const LearningTitle = styled('a', {
    textDecoration: "underline",
    textDecorationThickness: "2.5px",
    fontWeight: "bolder",
    borderRadius: 8,
    backgroundColor: yellowA.yellowA9,
    color: `${whiteA.whiteA12}`,
    textShadow: "1.0px 1.0px Black",
    padding: "0 0 5px 0",
    textAlign: "center",
    boxShadow: "1.0px 1.0px Black"
})
const LearningPercentComplete = styled('code', {
    color: "WhiteSmoke",
    fontWeight: "normal"
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