import React from "react";
import { Image, Segment, Item } from "semantic-ui-react";
import PageShell from "../components/PageShell";
import { TransitionGroup } from "react-transition-group"; // ES6
import Webcam from "react-webcam";
import uuidv4 from "uuid/v4";

class About extends React.Component {
  state = { pictures: [] };
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const props = this;
    const imageSrc = this.webcam.getScreenshot();
    this.setState(prevState => {
      return { pictures: [...prevState.pictures, imageSrc] };
    });
    // debugger;
  };
  render() {
    console.log("pictures", this.state);
    const items = this.state.pictures.map(picture => {
      return (
        <Item key={uuidv4()}>
          <Item.Image src={picture} />
        </Item>
      );
    });
    return (
      <div>
        {`Este e o meu state ${this.state}`}
        <Webcam
          style={{ visibility: "hidden" }}
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
        <button onClick={this.capture}>Capture photo</button>
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
