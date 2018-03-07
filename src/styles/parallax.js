export const parallaxStyles = (x = 45, y = 45, z = 0) => {
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
      webkitTransform: `rotateX(${x}deg)`,
      webkitTransform: `rotateY(${y}45deg)`,
      webKitTransform: `rotateZ(${z}deg)`,
      transformStyle: "preserve-3d",
      transform: `rotateX(${x}deg)`,
      transform: `rotateY(${x}deg)`,
      transform: `rotateZ(${x}deg)`
    }
  };
};
