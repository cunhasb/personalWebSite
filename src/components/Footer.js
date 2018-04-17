import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { styles } from "../styles/footer";
import { css } from "aphrodite";

export default class Footer extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div className={css(styles.outerWrapper)}>
        <Menu text>
          <Menu.Item href="https://www.linkedin.com/in/fabiano-cunha/">
            <Icon name="linkedin" />
          </Menu.Item>
          <Menu.Item href="https://github.com/cunhasb">
            <Icon name="github" />
          </Menu.Item>
          <Menu.Item href="https://medium.com/@cunhasb">
            <Icon name="medium" />
          </Menu.Item>
          <Menu.Item href="mailto:fabianocunhadev@gmail.com?subject=More%20Info">
            <Icon name="mail" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>&copy;2018 Fabiano S. Cunha</Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
