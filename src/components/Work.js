import React, { Component } from "react";
import { Container, Header, Image, List } from "semantic-ui-react";

import ParallaxHover from "react-parallax-hover";

export default class Work extends Component {
  state = { animation: "scale", duration: 3600, visible: false };

  handleVisibility = () => this.setState({ visible: !this.state.visible });
  componentDidMount() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <Container fluid>
        <List
          animated
          verticalAlign="middle"
          size="massive"
          style={{
            marginLeft: "10%",
            position: "absolute",
            top: "250px",
            width: "50%"
          }}
        >
          <List.Item>
            <List.Content>
              <List.Header>SMS</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Peekr</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Manager</List.Header>
            </List.Content>
          </List.Item>
        </List>
        <Container style={{ width: "20%" }}>
          <ParallaxHover width="1000" height="600">
            <div
              style={{
                backgroundColor: "red",
                width: "60%",
                height: "60%"
              }}
            />
          </ParallaxHover>
        </Container>
      </Container>
    );
  }
}
