import { styled } from "@stitches/react";
const SolvedProblemsContainer = styled("div", {
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyContent: "center",
    alignItems: "center",
    border: "solid",
    borderColor: "AliceBlue",
    height: "320px",
    width: "550px",
    padding: "10px 10px 10px 10px",
});
const SolvedProblemContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

});
const ProblemInfoContainer = styled("div", {
    display: "flex",
    flexDirection: "row",
    width: "max-content",
    justifyContent: "center",
    alignItems: "center",
});
const ProblemHeader = styled("a", {
    textDecoration: "underline",
    textDecorationThickness: "2.5px",
    fontSize: "large",
    fontWeight: "bolder",
    color: "Green",
    paddingBottom: "5px",
});
const ProblemInfoHeader = styled('h3', {
    height: "inherit",
    marginRight: "15px"
})
const ProblemInfo = styled("p", {
    display: "flex",
    fontWeight: "bolder",
    flexDirection: "row",
    fontSize: "x-small",
    padding: "0 10px 0 10px",
    margin: "2px 10px 2px 10px",
    justifyContent: "center",
    alignItems: "center",
});
export { ProblemHeader, ProblemInfo, ProblemInfoContainer, ProblemInfoHeader, SolvedProblemContainer, SolvedProblemsContainer }