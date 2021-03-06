import { StyleSheet } from "aphrodite";
import { openCloseOpen, disappear } from "./animations";
import { screenSize } from "./screenSizes";

export const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    width: "85vw",
    height: "75vh",
    animationName: [openCloseOpen],
    animationDuration: "5s",
    animationIterationCount: "1",
    [screenSize.smartphoneLandscape]: {}
  },
  navLink: {
    cursor: "none",
    styles: "none",
    fontSize: "3vw",
    color: "white",
    textShadow: "4px 4px 4px #000",
    ":hover": {
      transform: "translateX(50px)",
      fontSize: "3vw"
    }
  },
  active: {
    transform: "translateX(50px)"
  },
  list: {
    marginLeft: "3vw",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "60vw",
    animationName: [disappear],
    animationDuration: "5s",
    animationIterationCount: "1"
  },
  tiltContainer: {
    position: "relative",
    left: "10%",
    top: "50%",
    width: "60vw",
    height: "30vw",
    transform: "translateY(-50%)",
    animationName: [disappear],
    animationDuration: "5s",
    animationIterationCount: "1",
    [screenSize.portrait]: {
      // visibility: "hidden"
    }
  }, // tilt
  tilt: {
    position: "relative",
    marginTop: "5%",
    width: "100%",
    height: "30vw"
  },
  tiltWrapper: {
    position: "relative",
    height: "25vw",
    width: "38vw",
    float: "right"
  },
  tiltOuterDivMain: {
    position: "absolute",
    top: "10%",
    height: "25vw",
    width: "38vw",
    backgroundColor: "rgba(250,250,250,0.5)",
    border: "5px black"
  },
  tiltInnerDivMain: {
    position: "absolute",
    left: "80%",
    top: "60%",
    zIndex: 1,
    fontSize: "1.5vw",
    [screenSize.portrait]: { left: "50%" },
    [screenSize.landscape]: { left: "50%" }
  },
  seeIt: {
    color: "white",
    cursor: "none",
    textShadow: "4px 4px 4px #000",
    [screenSize.smartphone]: { fontSize: "2em" },
    [screenSize.smartphoneLandscape]: { fontSize: "1.5em" }
  },
  perspectiveOutter: {
    position: "relative",
    webkitPerspective: "3000px",
    perspective: "3000px"
  },
  image: {
    cursor: "none",
    position: "absolute",
    marginLeft: "3%",
    top: "5%",
    width: "37.5vw",
    zIndex: 0
  },
  progress: {
    marginTop: "2%",
    marginLeft: "50%",
    width: "50%",
    zIndex: 1
  }
});
