import { StyleSheet } from "aphrodite";

export const styles = StyleSheet.create({
  mainContainer: { position: "relative", width: "85vw", height: "75vh" },
  navLink: {
    cursor: "none",
    styles: "none",
    fontSize: "2vw",
    ":hover": {
      transform: "translateX(50px)",
      fontSize: "3vw"
    }
  },
  list: {
    marginLeft: "3vw",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "60vw"
  },
  tiltContainer: {
    position: "relative",
    top: "50%",
    width: "40vw",
    height: "30vw",
    transform: "translateY(-50%)"
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
    width: "80%",
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
