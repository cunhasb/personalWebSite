import ParallaxHover from "react-parallax-hover";
import React, { Component } from "react";

export const Parallax = props => {
  {
    return (
      <div>
        <ParallaxHover width="500" height="300">
          <img ref="image" src="http://lorempixel.com/500/300/abstract/" />
          <h1 ref="text">Parallax Hover</h1>
        </ParallaxHover>
      </div>
    );
  }
};
export const Test = props => {
  return <div>Here I am</div>;
};
