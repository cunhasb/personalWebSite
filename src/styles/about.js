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
    left: "-20vw",
    marginTop: "-20vh",
    right: "0%",
    height: "120vh",
    width: "100px"
  },

  "50%": {
    left: "-10vw",
    marginTop: "-20vh",
    background: "red",
    position: "relative",
    height: "120vh",
    width: "100vw",
    borderRadius: "50%"
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
    position: "relative",
    left: "-5vw",
    height: "87vh",
    width: "89vw",
    animationName: [translateKeyframes, opacityKeyframes],
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
