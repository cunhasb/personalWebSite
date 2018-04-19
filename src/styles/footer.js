import { StyleSheet } from "aphrodite";
import { screenSize } from "./screenSizes";
import { leftScreen, disappear } from "./animations";

export const styles = StyleSheet.create({
  // Divs
  outerWrapper: {
    cursor: "none",
    bottom: "0px",
    position: "absolute",
    width: "85vw",
    height: "10vh",

    [screenSize.portrait]: {
      margin: "0px",
      padding: "0px",
      position: "relative"
    }
  },
  menuItem: {
    cursor: "none"
  }
});
