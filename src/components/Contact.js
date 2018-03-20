import React, { Component } from "react";
import { Container, Header, Transition } from "semantic-ui-react";
import ParallaxHover from "react-parallax-hover";

class Contact extends Component {
  state = {
    animation: "scale",
    duration: 3600,
    visible: false,
    position: { x: 0, y: 0 }
  };

  handleVisibility = () => this.setState({ visible: !this.state.visible });
  componentDidMount() {
    this.setState({ visible: !this.state.visible });
  }
  handleMouseMove = e => {
    console.log("x=", e.clientX, "y=", e.clientY);
    this.setState({ position: { x: e.clientX, y: e.clientY } });
    // debugger;
  };
  render() {
    return (
      <Container
        onMouseMove={this.handleMouseMove}
        fluid
        style={{ cursor: "none" }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            left: this.state.position.x,
            top: this.state.position.y
          }}
        />
        <Transition.Group
          animation={this.state.animation}
          duration={this.state.duration}
        >
          {this.state.visible && (
            <Header
              style={{
                fontSize: "3em",
                position: "absolute",
                left: "30%",
                top: "250px",
                width: "50%"
              }}
            >
              <p>{"Contact"}</p>

              <p>
                {"I'm Fabiano a Fullstack Developer, what do you believe in?"}
              </p>
            </Header>
          )}
          <image
            style={{
              width: "570px",
              height: "500px",
              backgroundColor: "red",
              perspective: "1000px",
              float: "left"
            }}
          />
          <ParallaxHover width="1000" height="600" />
        </Transition.Group>
      </Container>
    );
  }
}

export default Contact;
