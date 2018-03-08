import React, { Component } from "react";
import { Button, Dimmer, Header, Image } from "semantic-ui-react";

export default class About extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2">Title</Header>

        <Button primary>Add</Button>
        <Button>View</Button>
      </div>
    );

    return (
      <div
        style={{
          width: "600px",
          backgroundImage: `url("../images/pexels-photo-316466.jpeg")`
        }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
      >
        Hello
        {active ? content : null}
      </div>
    );
  }
}
