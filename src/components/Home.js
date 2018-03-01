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

export default class Home extends Component {
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
                left: "40%",
                top: "250px",
                width: "50%"
              }}
            >
              <p>{"I believe that with hard-work, creativity, and an"}</p>
              <p style={{ marginLeft: "3%" }}>
                {"extra dose of perseverance, all things are possible."}
              </p>

              <p style={{ marginLeft: "6%" }}>
                {"I'm Fabiano a Fullstack Developer."}
              </p>
              <p style={{ margin: "9%" }}>{"What do you believe in?"}</p>
            </Header>
          )}
          <image
            style={{
              width: "560px",
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
