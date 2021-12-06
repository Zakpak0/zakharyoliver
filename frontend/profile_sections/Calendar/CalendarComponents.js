import { styled } from "@stitches/react";
import { theme } from "../../stitches.config";
import {
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { amberA } from "@radix-ui/colors";
const DateString = styled("h3", {
    background: "rgba(17, 34, 52, 0.90)",
    padding: "5px 5px 5px 5px",
    borderRadius: 8,
    height: '100px',
    width: "100px",
    textAlign: "center"
});
const CalendarContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    border: "solid",
    borderColor: "AliceBlue",
    justifyContent: "center",
    height: "320px",
    width: "550px",
    alignItems: "center",
    padding: "2px 2px 2px 2px",
    background: "Black"
});
const CalendarBody = styled("div", {
    margin: "5px 5px 5px 5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(17, 34, 52, 0.90)",
    padding: "5px 5px 5px 5px",
    borderRadius: 8
});
const Button = styled("button", {
    display: "contents",
});
const LeftIcon = styled(DoubleArrowLeftIcon, {
    margin: "3px 10px 50px 5px",
});
const RightIcon = styled(DoubleArrowRightIcon, {
    margin: "3px 5px 50px 10px",
});
const DateIcon = styled("p", {

    display: "flex",
    border: "solid",
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    margin: "3px 10px 3px 10px",
});
const CalanderGrid = styled("div", {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 2fr 2fr 2fr 2fr 2fr",
});
export { CalanderGrid, CalendarBody, CalendarContainer, DateIcon, DateString, RightIcon, LeftIcon, Button }