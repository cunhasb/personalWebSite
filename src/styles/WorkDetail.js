import { StyleSheet } from "aphrodite";
import { openCloseOpen, disappear, flyLeft, blink } from "./animations";

export const styles = StyleSheet.create({
  // Divs
  outerWrapper: {
    animationName: [openCloseOpen],
    animationDuration: "5s",
    animationIterationCount: "1"
  },
  divFeatured: {
    position: "absolute",
    fontFamily: "Open Sans Condensed",
    color: "white",
    textShadow: "0px 0px 2px #43AABA",
    marginTop: "15%"
  },
  divFeaturedHeader: {
    position: "relative",
    fontFamily: "Open Sans Condensed",
    color: "white",
    textAlign: "center",
    textShadow: "0px 0px 2px #43AABA",
    fontSize: "4em"
  },
  divFeaturedP: {
    position: "relative",
    fontFamily: "Open Sans Condensed",
    textAlign: "justified",
    maxWidth: "90%",
    left: "10%",
    color: "white",
    textShadow: "0px 0px 2px #43AABA",
    fontSize: "2em",
    marginTop: "35px"
  },
  chevronContainer: {
    position: "relative",
    marginTop: "-8%",
    marginRight: "1%",
    float: "right",
    width: "4vw",
    height: "4vw",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    border: ".2vw solid rgba(248,248,248,1)",
    borderRadius: "50%",
    textAlign: "center",
    animationName: [blink],
    animationDuration: "2s",
    animationIterationCount: "infinite"
  },
  chevron: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "2vw",
    height: "2vw",
    borderBottom: ".3vw solid rgba(248,248,248,1)",
    borderRight: ".3vw solid rgba(248,248,248,1)",
    transform: "translate(-50%,-75%) rotate(45deg)"
  },
  // Grid
  grid: {
    animationName: [disappear],
    animationDuration: "6.5s",
    animationIterationCount: "1"
  },
  firstRow: {
    height: "100vh",
    width: "85vw",
    animationName: [flyLeft],
    animationDelay: "6.5s",
    animationDuration: "4",
    animationIterationCount: "1"
  },
  // Links
  navLink: {
    cursor: "none",
    styles: "none"
  }
});
