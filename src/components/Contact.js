import React, { Component } from "react";
import { Container, Header, Transition } from "semantic-ui-react";
import Tilt from "react-tilt";

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

  render() {
    return (
      <div
        style={{
          position: "relative",
          left: "-10vw",
          width: "100vw",
          height: "75vh"
        }}
      >
        <Tilt
          options={{ scale: 1, reverse: true, max: 35 }}
          style={{ width: "100%", height: "100%" }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "40%",
              height: "25vw",
              backgroundColor: "rgba(250,250,250,0.6)",
              transform: "translate(-50%,-50%)",
              transformStyle: "preserve-3d"
            }}
          />
        </Tilt>
        <Transition.Group
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
          }}
          animation={this.state.animation}
          duration={this.state.duration}
        >
          {this.state.visible && (
            <Header
              style={{
                fontSize: "4vw"
              }}
            >
              <p>{"Contact"}</p>

              <p>
                {"I'm Fabiano a Fullstack Developer, what do you believe in?"}
              </p>
            </Header>
          )}
        </Transition.Group>
      </div>
    );
  }
}

export default Contact;
