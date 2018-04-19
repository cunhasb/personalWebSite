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
    animationIterationCount: "1"
  },
  navLink: {
    // cursor: "none",
    styles: "none",
    fontSize: "2vw",
    ":hover": {
      transform: "translateX(50px)",
      fontSize: "3vw"
    }
  },
  active: {
    transform: "translateX(50px)",
    ":hover": {
      transform: "translateX(0px)"
    }
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
    // position: "relative",
    // pointerEvents: "none",
    // bottom: "0%",
    // height: "100%",
    // width: "100%",
    // [screenSize.portrait]: {
    //   position: "relative",
    //   width: "100%"
    // },
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
    fontSize: "1.5vw"
  },
  seeIt: { color: "white", cursor: "none" },
  perspectiveOutter: {
    position: "relative",
    webkitPerspective: "3000px",
    perspective: "3000px"
  },
  image: {
    // cursor: "none",
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
