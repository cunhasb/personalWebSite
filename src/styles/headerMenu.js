import { StyleSheet } from "aphrodite";
import { screenSize } from "./screenSizes";
import {
  leftScreenRound,
  disappear,
  flyLeft,
  rotate,
  rotateYby,
  rotateFront
} from "./animations";

export const styles = StyleSheet.create({
  // Divs
  hover: {
    ":hover": {
      backfaceVisibility: "hidden",
      animationName: [rotate],
      animationDuration: "2s",
      animationIterationCount: "1"
    }
  },
  menu: {
    [screenSize.smartphone]: {
      fontSize: "2vw"
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: "2vw"
    }
  },
  navLink: {
    ":any-link": {
      height: "5vh",
      cursor: "none",
      styles: "none",
      fontSize: "1.5em"
    }
  },
  homeLink: {
    cursor: "none",
    height: "2em"
  },
  container: {
    pointerEvents: "none",
    position: "relative",
    perspective: "800px",
    width: "18em",
    height: "2em",
    textAlign: "center"
  },
  homeDivFirstRender: {
    width: "100%",
    height: "100%",
    position: "absolute",
    transformStyle: "preserve-3d"
  },
  homeDivBack: {
    width: "100%",
    height: "100%",
    position: "absolute",
    transformStyle: "preserve-3d",
    animationFillMode: "forwards",
    animationName: [rotateYby(180)],
    animationDuration: "2s",
    animationIterationCount: "1"
  },
  homeDivFront: {
    width: "100%",
    height: "100%",
    position: "absolute",
    transformStyle: "preserve-3d",
    animationName: [rotateFront],
    animationDuration: "1s",
    animationIterationCount: "1"
  },
  front: {
    margin: 0,
    display: "block",
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    [screenSize.smartphone]: {
      fontSize: "2em"
    }
  },
  back: {
    margin: 0,
    display: "block",
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    transform: "rotateY( 180deg )",
    [screenSize.smartphone]: {
      fontSize: "2em"
    }
  }
});
