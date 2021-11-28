import { useState, useEffect} from "react"
import { mapPluralsightData } from "../webscrappers/pluralsight/service"
const PluralsightSection = () => {
mapPluralsightData((courseData) => {}, (learningData) => {}, (badgeData) => {}, (activityData) => {})
return (
    <div></div>
)
}

export default PluralsightSection