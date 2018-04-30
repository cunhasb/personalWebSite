import { StyleSheet } from "aphrodite";
import { screenSize } from "./screenSizes";

export const styles = StyleSheet.create({
  header: {
    fontSize: "4em",
    color: "white",
    textShadow: "4px 4px 4px #000",
    position: "absolute",
    marginTop: "-37.2%",
    left: "0",
    right: "0",
    [screenSize.smartphone]: {
      fontSize: "2em",
      marginTop: "-37.2%"
    },
    [screenSize.smartphoneLandascape]: {
      fontSize: "3em",
      marginTop: "-37.2%"
    }
  },
  image: {
    width: "90%",
    marginTop: "2.5%"
  },
  div: {
    position: "absolute",
    marginTop: "-62%"
  }
});
