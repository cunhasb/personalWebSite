import { StyleSheet } from "aphrodite";
import { screenSize } from "./screenSizes";
import { leftScreenRound, disappear, flyLeft } from "./animations";

export const styles = StyleSheet.create({
  // Divs
  outerWrapper: {
    position: "relative",
    left: "-10vw",
    width: "100vw",
    height: "75vh",
    animationName: [leftScreenRound],
    animationDuration: "5s",
    animationIterationCount: "1",
    [screenSize.small]: { left: "0%" }
  },
  innerDiv: {
    position: "absolute",
    top: "55%",
    left: "50%",
    width: "60%",
    height: "35vw",
    backgroundColor: "rgba(250,250,250,0.6)",
    transform: "translate(-50%,-50%)",
    transformStyle: "preserve-3d",
    animationName: [disappear],
    animationDuration: "5s",
    animationIterationCount: "1"
  },
  headerDiv: {
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    animationName: [disappear],
    animationDuration: "5s",
    animationIterationCount: "1"
  },

  // Tilts
  outerTilt: {
    width: "100%",
    height: "100%"
  },

  // Header
  header: {
    fontSize: "3vw",
    animationName: [flyLeft],
    animationDelay: "3s",
    animationDuration: "5s",
    animationIterationCount: "1"
  },
  // Links
  a: { color: "red" }
});
