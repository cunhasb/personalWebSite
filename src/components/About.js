import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/picturesActions";
import {
  Image,
  Segment,
  Header,
  Item,
  Container,
  Grid
} from "semantic-ui-react";
import PageShell from "../components/PageShell";
import { TransitionGroup } from "react-transition-group"; // ES6
import Webcam from "react-webcam";
import uuidv4 from "uuid/v4";
import Tilt from "react-tilt";

class About extends React.Component {
  render() {
    console.log("pictures", this.state);
    console.log(this.props);
    const items = this.props.pictures.map(picture => {
      return (
        <Item key={uuidv4()}>
          <Item.Image src={picture} />
        </Item>
      );
    });
    return (
      <div style={{ position: "relative" }}>
        <Tilt
          className="Tilt"
          options={{ max: 15, scale: 1, reverse: true }}
          style={{
            width: "100%",
            height: "85vh",
            position: "relative",
            bottom: "0%"
          }}
        >
          <Grid stackable style={{}}>
            <Grid.Row>
              <Grid.Column width={6}>
                <Tilt
                  className="Tilt"
                  options={{ max: 1, scale: 1, reverse: true }}
                  style={{
                    bottom: "0px",
                    width: "700px",
                    height: "350px",
                    position: "absolute",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(250,250,250,0.4)"
                  }}
                />
                <Tilt
                  className="Tilt"
                  options={{ max: 1, scale: 1, reverse: true }}
                  style={{
                    left: "13.8%",
                    backgroundColor: "blue",
                    width: "100%",
                    position: "relative",
                    bottom: "2%"
                  }}
                >
                  <Image
                    src={`${require("../images/fabianoSketch2.png")}`}
                    style={{}}
                  />
                </Tilt>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Tilt>
        <div
          style={{
            position: "absolute",
            backgroundColor: "green",
            left: "50%",
            bottom: "50%"
          }}
        >
          <Header>{this.props.parameters.about}</Header>
        </div>
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
const mapStateToProps = store => {
  return {
    pictures: store.pictures.pictures,
    refItem: store.pictures.refItem,
    parameters: store.parameters
  };
};
export default connect(mapStateToProps, actions)(About);
