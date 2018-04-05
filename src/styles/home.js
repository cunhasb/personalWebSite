import { StyleSheet } from "aphrodite";
const screenSize = {
  smartphone: "@media only screen and (max-width:479px)",
  smartphoneLandscape:
    "@media only screen and (min-width:480px) and (max-width:599px)",
  smallTablet: "@media only screen and (min-width:600px) and (max-width:767px)",
  smallTabletLandscape:
    "@media only screen and (min-width:800px) and (max-width:1023)",
  tablet: "@media only screen and (min-width:768) and (max-width:1023)",
  tabletLandscape:
    "@media only screen and (min-width:769px) and (max-width:1024px)",
  desktop: "@media only screen and (min-width:992px)",
  portrait: "@media only screen and (orientation:portrait)",
  landscape: "@media only screen and (orientation:landscape)",
  small: "@media only screen and (max-width:600px)"
};
export const styles = StyleSheet.create({
  // Divs
  outerWrapper: {
    height: "80vh",
    width: "100vw",
    left: "-12.5%",
    position: "relative",
    pointerEvents: "none",
    [screenSize.small]: { left: "0%" }
  },
  leftDiv: {
    position: "fixed",
    pointerEvents: "auto",
    top: "0px",
    left: "0px",
    height: "100%",
    width: "31.25%",
    backgroundImage: `url(${require("../images/fabianoSketch.png")})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundClip: "borderBox"
  },
  tiltDiv: {
    position: "absolute",
    left: "-10%",
    top: "17vh",
    width: "75vh",
    height: "45vh",
    backgroundColor: "rgba(250,250,250,0.6)",
    transform: "matrix3d(1,0,0.00,0.0003,0.00,1,0.00,0,0,0,1,0,200,0,0,1)",
    transformStyle: "preserve-3d"
  },
  // Grid
  grid: { height: "100%" },
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

  // Tilts
  outerTilt: {
    position: "relative",
    pointerEvents: "auto",
    bottom: "0%",
    height: "100%",
    width: "100%"
  },
  // Transitions
  transitionGroup: {
    position: "absolute",
    top: "0px"
  },
  // Header
  header: {
    position: "relative",
    marginTop: "20vh",
    left: "10vw",
    fontSize: "2vw",
    pointerEvents: "none"
  },
  // p
  m3: { margin: "3%" },
  m6: { margin: "6%" },
  m9: { margin: "9%" }
});
