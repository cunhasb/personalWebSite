import React, { Component } from "react";
import { Container, Header, Transition } from "semantic-ui-react";
import { connect } from "react-redux";
import Tilt from "react-tilt";
import { css } from "aphrodite";

class Contact extends Component {
  state = {
    animation: "fly left",
    duration: 4600,
    visible: false,
    position: { x: 0, y: 0 }
  };

  handleVisibility = () => this.setState({ visible: !this.state.visible });
  componentDidMount() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    console.log("contact", this.props);
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
                fontSize: "3vw"
              }}
            >
              <p>{this.props.title}</p>

              <p>
                {this.props.email.text}
                <a href={this.props.email.href}>email</a>
              </p>
              <p>
                {this.props.linkedIn.text}
                <a href={this.props.linkedIn.href}> linkedIn or </a>
                <a href={this.props.github.href}> Github</a>
              </p>
              <p>
                {this.props.phone.text}
                <a href={this.props.phone.href}> phone</a>
              </p>
            </Header>
          )}
        </Transition.Group>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store.parameters.contact;
};
export default connect(mapStateToProps)(Contact);
