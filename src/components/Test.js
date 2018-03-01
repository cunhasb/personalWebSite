import React from "react";
import ParallaxHover from "react-parallax-hover";

class Example extends React.Component {
  render() {
    const styles = {
      width: "300px",
      height: "300px",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      margin: "0 auto",
      padding: "80"
    };

    return <div style={styles}>{this.props.children}</div>;
  }
}

export const Test = props => {
  return (
    <ParallaxHover
      width={600}
      height={600}
      borderRadius={2}
      rotation={9}
      shine={0}
      shadow={0}
      scale={9}
    >
      <Example>
        <img src="http://lorempixel.com/300/300/" alt="" />
      </Example>
    </ParallaxHover>
  );
};
