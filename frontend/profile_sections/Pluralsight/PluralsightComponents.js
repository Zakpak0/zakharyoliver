import { styled } from "@stitches/react";

const PluralsightInfoContainer = styled('div', {
    height: 320,
    width: 550,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 2fr 1fr"
})
const ActivityDataContainer = styled('div', {
    height: 100,
    width: 100,
    border: "solid"
})
const BadgeDataContainer = styled('div', {
    height: 200,
    width: 200,
    border: "solid"

})
const CourseDataContainer = styled('div', {
    border: "solid",
    height: 200,
    width: 200
})
const LearningDataContainer = styled('div', {
    border: "solid",
    height: 200,
    width: 200
})

export { PluralsightInfoContainer, BadgeDataContainer, ActivityDataContainer, CourseDataContainer, LearningDataContainer }