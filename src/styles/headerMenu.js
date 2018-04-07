import { StyleSheet } from "aphrodite";
import { screenSize } from "./screenSizes";
import { leftScreenRound, disappear, flyLeft, rotate } from "./animations";

export const styles = StyleSheet.create({
  // Divs
  home: {
    ":hover": {
      animationName: [rotate],
      animationDuration: "3s",
      animationIterationCount: "1"
    }
  },
  navLink: {
    cursor: "none",
    styles: "none"
  }
});
