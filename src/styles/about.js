import { StyleSheet } from "aphrodite";
import { screenSize } from "./screenSizes";
import { leftScreenRound, disappear } from "./animations";

export const styles = StyleSheet.create({
  // Divs
  outerWrapper: {
    position: "relative",
    left: "-5vw",
    height: "87vh",
    width: "89vw",
    animationName: [leftScreenRound],
    animationDuration: "5s",
    animationIterationCount: "1",
    [screenSize.small]: { left: "0%" }
  },
  outerContainer: {
    position: "relative",
    height: "100%",
    width: "auto",
    margin: "auto",
    animationName: [disappear],
    animationDuration: "5s",
    animationIterationCount: "1"
  },
  imageContainer: {
    position: "absolute",
    width: "45%",
    top: "50%",
    left: "0%",
    transform: "translateY(-50%)",
    [screenSize.smartphone]: {
      position: "relative",
      width: "auto",
      padding: "0"
    }
  },
  headerContainer: {
    position: "absolute",
    width: "49%",
    top: "50%",
    right: "0%",
    transform: "translateY(-50%)",
    animationName: [disappear],
    animationDuration: "5s",
    animationIterationCount: "1",
    [screenSize.smartphone]: {
      position: "relative",
      width: "auto"
    }
  },
  // Tilts
  outerTilt: {
    width: "100%",
    height: "100%"
  },
  imageTilt: {
    bottom: "0px",
    width: "100%",
    height: "50%",
    position: "absolute",
    backgroundColor: "rgba(250,250,250,0.6)"
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    animationName: [disappear],
    animationDuration: "5s",
    animationIterationCount: "1",
    [screenSize.small]: { left: "0%" },
    [screenSize.desktop]: {
      marginLeft: "13%",
      paddingBottom: "3%"
    }
  }
});
