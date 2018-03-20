import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";

export default class Footer extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div
        style={
          {
            //position: "absolute", bottom: "0px" }}>
          }
        }
      >
        <Menu text size="huge">
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
