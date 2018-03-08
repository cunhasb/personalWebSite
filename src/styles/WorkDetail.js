export const styles = () => {
  return {
    perspectiveOutter: {
      position: "relative",
      webkitPerspective: "3000px",
      perspective: "3000px"
    },
    perspectiveLayer: {
      position: "relative",
      padding: "50px",
      background: "rgba(100,100,100,0.5)",
      webkitTransformStyle: "preserve-3d",
      webkitTransform: "rotateX(45deg)",
      webkitTransform: "rotateY(45deg)",
      webKitTransform: "rotateZ(45deg)",
      transformStyle: "preserve-3d",
      transform: "rotateX(45deg)",
      transform: "rotateY(25deg)"
    },
    outter: {
      background: "rgba(0,0,0,0.01)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      perspective: "3000px",
      zIndex: -1
    },
    inner: {
      width: 700,
      height: 500,
      position: "absolute",
      margin: "auto",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      textAlign: "center"
    },
    header: {
      fontFamily: "Open Sans Condensed",
      color: "white",
      textShadow: "0px 0px 2px #43AABA",
      fontSize: "2em",
      marginTop: "35px",
      fontWeight: 600
    },
    paragraph: {
      fontFamily: "Roboto",
      fontSize: "20px",
      color: "white",
      letterSpacing: "0.62px",
      lineHeight: "30px",
      fontWeight: 300
    },
    button: {
      fontFamily: "Roboto",
      borderRadius: "100px",
      background: "#247B8A",
      textDecoration: "none",
      color: "white",
      textAlign: "center",
      padding: "20px",
      marginTop: "40px",
      fontWeight: 100,
      display: "block"
    },
    infoLayerStyle: {
      position: "relative",
      marginTop: "-60px"
    },
    infoLayerStylePerspective: {
      position: "relative",
      padding: "50px",
      background: "rgba(100,100,100,0.5)",
      webkitTransformStyle: "preserve-3d",
      webkitTransform: "rotateX(45deg)",
      transformStyle: "preserve-3d",
      transform: "rotateX(45deg)"
    },
    bgLayerStyle: {
      position: "absolute",
      height: "100%",
      transform: "translate(-15%, 17%)"
    },
    selectedStyle: {
      fontSize: "2em"
    },
    listStyle: {
      fontSize: "1em"
    },
    divFeatured: {
      position: "absolute",
      marginLeft: "20%",
      fontFamily: "Open Sans Condensed",
      color: "white",
      textShadow: "0px 0px 2px #43AABA",
      marginTop: "15%"
    },
    divFeaturedHeader: {
      fontFamily: "Open Sans Condensed",
      color: "white",
      textShadow: "0px 0px 2px #43AABA",
      fontSize: "4em"
    },
    divFeaturedP: {
      fontFamily: "Open Sans Condensed",
      color: "white",
      textShadow: "0px 0px 2px #43AABA",
      fontSize: "2em",
      marginTop: "35px"
    }
  };
};
