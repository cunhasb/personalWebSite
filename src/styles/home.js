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
const translateKeyframes = {
  "0%": {
    position: "relative",
    background: "red",
    marginTop: "-20vh",
    right: "0%",
    height: "120vh",
    width: "100px"
  },

  "50%": {
    marginTop: "-20vh",
    background: "red",
    position: "relative",
    height: "120vh",
    width: "100vw"
  }
};

const opacityKeyframes = {
  from: {
    opacity: 1
  },

  to: {
    opacity: 1
  }
};
const disappear = {
  "0%": {
    opacity: 0
  },

  "75%": {
    opacity: 0
  },
  "100%": { opacity: 1 }
};
export const styles = StyleSheet.create({
  // Divs
  outerWrapper: {
    height: "80vh",
    width: "100vw",
    left: "-12.5%",
    position: "relative",
    pointerEvents: "none",
    animationName: [translateKeyframes, opacityKeyframes],
    animationDuration: "5s",
    animationIterationCount: "1",
    [screenSize.portrait]: {
      left: "0%",
      top: "0%",
      width: "100%",
      height: "100%"
    }
  },
  leftDiv: {
    position: "fixed",
    pointerEvents: "auto",
    top: "0px",
    left: "0px",
    height: "100%",
    width: "31.25%",
    backgroundImage: `url(${require("../images/fabianoSketch.png")})`,
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    animationName: [disappear],
    animationDuration: "5s",
    animationIterationCount: "1",
    [screenSize.portrait]: {
      position: "relative",
      width: "70vw",
      height: "70vh",
      margin: "auto",
      backgroundOrigin: "padding-box",
      backgroundPosition: "left top",
      backgroundSize: "cover"
    }
  },
  tiltDiv: {
    position: "absolute",
    left: "-10%",
    top: "17vh",
    width: "75vh",
    height: "45vh",
    backgroundColor: "rgba(250,250,250,0.6)",
    transform: "matrix3d(1,0,0.00,0.0003,0.00,1,0.00,0,0,0,1,0,200,0,0,1)",
    transformStyle: "preserve-3d",

    [screenSize.portrait]: {
      position: "relative",
      width: "100%",
      left: "0px",
      top: "0px"
    }
  },
  // Grid
  grid: {
    height: "100%",
    animationName: [disappear],
    animationDuration: "3s",
    animationIterationCount: "1",
    [screenSize.portrait]: {
      margin: "0px",
      padding: "0px",
      position: "relative"
    }
  },
  columnLeft: {
    width: "32.5%",
    [screenSize.portrait]: {
      width: "0%"
    }
  },
  columnRight: {
    width: "67.5%",
    [screenSize.portrait]: {
      textAlign: "center",
      width: "100%",
      height: "100%"
    }
  },

  // Tilts
  outerTilt: {
    position: "relative",
    pointerEvents: "auto",
    bottom: "0%",
    height: "100%",
    width: "100%",
    [screenSize.portrait]: {
      position: "relative",
      width: "100%"
    }
  },
  // Transitions
  transitionGroup: {
    position: "absolute",
    top: "0px",
    [screenSize.portrait]: {
      position: "relative"
    }
  },
  // Header
  header: {
    position: "relative",
    marginTop: "20vh",
    left: "10vw",
    fontSize: "2vw",
    pointerEvents: "none",
    [screenSize.portrait]: {
      left: "0px",
      marginTop: "5%"
    }
  },
  // p
  m3: { margin: "3%" },
  m6: { margin: "6%" },
  m9: { margin: "9%" }
});
