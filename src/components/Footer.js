import React, { Component } from "react";
import { Menu, Icon, Label } from "semantic-ui-react";

export default class Footer extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div style={{ marginTop: "8%" }}>
        <Menu stackable size="huge">
          <Menu.Item>
            <Icon name="linkedin" />
          </Menu.Item>
          <Menu.Item>
            <Icon name="github" />
          </Menu.Item>
          <Menu.Item>
            <Icon name="mail" />
          </Menu.Item>
          <Menu.Item>
            <Icon name="twitter" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>&copy;2018 Fabiano S. Cunha</Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
