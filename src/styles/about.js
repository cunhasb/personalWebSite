import { StyleSheet } from "aphrodite";

export const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    left: "-5vw",
    height: "87vh",
    width: "89vw"
  },
  gridWrapper: {
    position: "absolute",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  },

  image: {
    margin: "auto",
    marginBottom: "5%",
    maxWidth: "90%",
    height: "auto"
  },
  responsive: {
    "@media only screen and (max-width: 700px)": {
      ".container": {
        width: "100%",
        backgroundColor: "black"
      },
      image: {
        maxWidth: "100%",
        height: "auto"
      }
    },
    "@media only screen and (max-width: 500px)": {
      ".container": {
        width: "100%",
        backgroundColor: "white"
      },
      tilt: {
        left: "13.8%",
        width: "100%",
        position: "relative",
        bottom: "58%"
      },
      image: {
        maxWidth: "100%",
        height: "auto"
      }
    }
  }
});
