import { StyleSheet } from "aphrodite";
import { openCloseOpen, disappear, flyLeft, blink } from "./animations";
import { screenSize } from "./screenSizes";

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
    // textShadow: "0px 0px 2px #43AABA",
    textShadow: "4px 4px 4px #000",
    marginTop: "15%",
    [screenSize.smartphoneLandscape]: {
      fontSize: ".65em"
    },
    [screenSize.portrait]: {
      marginTop: "50%"
    }
  },
  divFeaturedHeader: {
    position: "relative",
    fontFamily: "Open Sans Condensed",
    color: "white",
    textAlign: "center",
    // textShadow: "0px 0px 2px #43AABA",
    textShadow: "4px 4px 4px #000",
    fontSize: "4em"
  },
  divFeaturedP: {
    position: "relative",
    fontFamily: "Open Sans Condensed",
    textAlign: "justified",
    maxWidth: "85%",
    left: "10%",
    color: "white",
    // textShadow: "0px 0px 2px #43AABA",
    textShadow: "2px 2px 4px #000",
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
  chevronDiv: {
    width: "85vw",
    height: "4vw",
    position: "relative",
    top: "80%",
    [screenSize.smartphoneLandscape]: {
      top: "70%"
    }
  },
  chevronContainer2: {
    left: "50%",
    transform: "translateX(50vw)",
    bottom: "10%",
    position: "absolute",
    width: "4vw",
    height: "4vw",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    border: ".2vw solid rgba(0,0,0)",
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
    borderBottom: ".3vw solid rgba(0,0,0)",
    borderRight: ".3vw solid rgba(0,0,0)",
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
  container: {
    float: "right",
    width: "78%",
    marginBottom: "8%",
    [screenSize.portrait]: {
      marginTop: "50%"
    }
  },
  // Links
  navLink: {
    cursor: "none",
    styles: "none"
  }
});
