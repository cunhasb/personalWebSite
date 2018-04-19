import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { styles } from "../styles/footer";
import { css } from "aphrodite";
import { connect } from "react-redux";
import { setPointerType } from "../actions";

class Footer extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleMouseEnter = e => {
    this.props.setPointerType("hover");
  };
  handleMouseLeave = e => {
    this.props.setPointerType("default");
  };

  render() {
    return (
      <div className={css(styles.outerWrapper)}>
        <Menu text>
          <Menu.Item
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            href="https://www.linkedin.com/in/fabiano-cunha/"
          >
            <Icon name="linkedin" />
          </Menu.Item>
          <Menu.Item
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            href="https://github.com/cunhasb"
          >
            <Icon name="github" />
          </Menu.Item>
          <Menu.Item
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            href="https://medium.com/@cunhasb"
          >
            <Icon name="medium" />
          </Menu.Item>
          <Menu.Item
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            href="mailto:fabianocunhadev@gmail.com?subject=More%20Info"
          >
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
export default connect(null, { setPointerType })(Footer);
