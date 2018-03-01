import React, { Component } from "react";
import { Menu, Icon, Label } from "semantic-ui-react";
import { withRouter, NavLink } from "react-router-dom";

class HeaderMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable style={{ marginBottom: "8%" }}>
        <NavLink to="/home">
          <Menu.Item>FABIANO S. CUNHA</Menu.Item>
        </NavLink>
        <Menu.Menu position="right">
          <NavLink to="/work">
            <Menu.Item
              name="WORK"
              active={activeItem === "WORK"}
              onClick={this.handleItemClick}
            >
              WORK
            </Menu.Item>
          </NavLink>
          <NavLink to="/about">
            <Menu.Item
              name="ABOUT"
              active={activeItem === "ABOUT"}
              onClick={this.handleItemClick}
            >
              ABOUT
            </Menu.Item>
          </NavLink>
          <NavLink to="/contact">
            <Menu.Item
              name="CONTACT"
              active={activeItem === "CONTACT"}
              onClick={this.handleItemClick}
            >
              CONTACT
            </Menu.Item>
          </NavLink>
        </Menu.Menu>
      </Menu>
    );
  }
}
export default withRouter(HeaderMenu);
