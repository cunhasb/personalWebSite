import React, { Component } from "react";
import {
  Menu,
  Icon,
  Label,
  Container,
  Header,
  Transition,
  Visible,
  Image,
  Button
} from "semantic-ui-react";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import ParallaxHover from "react-parallax-hover";

export default class Contact extends Component {
  state = { animation: "scale", duration: 3600, visible: false };

  handleVisibility = () => this.setState({ visible: !this.state.visible });
  componentDidMount() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <Container fluid>
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
