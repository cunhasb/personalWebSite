import React, { Component } from "react";
import {
  Container,
  Header,
  Transition,
  Responsive,
  Segment,
  Grid,
  Image
} from "semantic-ui-react";
import Tilt from "react-tilt";

export default class Home extends Component {
  state = { animation: "scale", duration: 4000, visible: false };

  handleVisibility = () => this.setState({ visible: !this.state.visible });
  componentDidMount() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    console.log("home", this.props);
    return (
      <div
        style={{
          height: "80vh",
          width: "100vw",
          left: "-12.5%",
          position: "relative",
          pointerEvents: "none"
        }}
      >
        <div
          style={{
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
          }}
        />
        <Grid
          style={{
            height: "100%"
          }}
        >
          <Grid.Column
            width={5}
            style={{
              height: "100%",
              top: "0px",
              left: "0px"
            }}
          />
          <Grid.Column width={11}>
            <Tilt
              options={{
                scale: 1,
                max: 25,
                reverse: true
              }}
              style={{
                position: "relative",
                pointerEvents: "auto",
                bottom: "0%",
                height: "100%",
                width: "100%"
              }}
            >
              <Responsive minWidth={480}>
                <div
                  options={{ scale: 1 }}
                  style={{
                    position: "absolute",
                    top: "15vh",
                    width: "75vh",
                    height: "45vh",
                    backgroundColor: "rgba(250,250,250,0.6)",
                    transform:
                      "matrix3d(1,0,0.00,0.0003,0.00,1,0.00,0,0,0,1,0,200,0,0,1)",
                    transformStyle: "preserve-3d"
                  }}
                />
              </Responsive>
            </Tilt>
            <Transition.Group
              style={{ position: "absolute", top: "0px" }}
              animation={this.state.animation}
              duration={this.state.duration}
            >
              {this.state.visible && (
                <Header
                  style={{
                    position: "relative",
                    marginTop: "18vh",
                    left: "15vw",
                    fontSize: "2vw",
                    pointerEvents: "none"
                  }}
                >
                  <p>{"I believe that with hard-work, creativity, and a"}</p>
                  <p style={{ marginLeft: "3%" }}>
                    {"extra dose of perseverance, all things are possible."}
                  </p>

                  <p style={{ marginLeft: "6%" }}>
                    {"I'm Fabiano a Fullstack Developer."}
                  </p>
                  <p style={{ margin: "9%" }}>{"What do you believe in?"}</p>
                </Header>
              )}
            </Transition.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
