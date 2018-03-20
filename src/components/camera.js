import React from "react";
import { Image, Segment, Item } from "semantic-ui-react";
import PageShell from "../components/PageShell";
import { TransitionGroup } from "react-transition-group"; // ES6
import Camera from "react-camera";
import uuidv4 from "uuid/v4";

class About extends React.Component {
  state = { pictures: [] };
  takePicture = (pictures = []) => {
    this.camera.capture().then(blob => {
      const source = URL.createObjectURL(blob);
      // debugger;
      // console.log("before", source);
      // this.setState(prevState => {
      //   pictures: [...prevState.pictures, source];
      // });
      // URL.revokeObjectURL(source);
      // console.log("after", source);
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => {
        URL.revokeObjectURL(this.src);
      };
    });
  };
  componentDidMount = () => {};
  render() {
    console.log("pictures", this.state);
    const items = this.state.pictures.map(picture => {
      return (
        <Item>
          <Item.Image src={picture} />
        </Item>
      );
    });
    return (
      <div style={style.container} onClick={this.takePicture}>
        <Camera
          style={{ position: "relative" }}
          ref={cam => {
            this.camera = cam;
          }}
        />
        <div style={style.captureContainer} onClick={this.takePicture}>
          <div style={style.captureButton} />
        </div>
        <img
          style={style.captureImage}
          ref={img => {
            this.img = img;
          }}
        />
        <Item.Group>
          <Item>
            <Item.Content>I go here</Item.Content>
          </Item>
          {items}
        </Item.Group>
      </div>
    );
  }
}
const style = {
  preview: {
    position: "relative"
  },
  captureContainer: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    zIndex: 1,
    bottom: 0,
    width: "100%",
    backgroundColor: "red"
  },
  captureButton: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    height: 56,
    width: 56,
    color: "#000",
    margin: 20
  },
  captureImage: {
    width: "30%"
  }
};
export default About;
