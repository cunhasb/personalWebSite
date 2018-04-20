import React, { Component } from "react";
import { Menu, Icon, Header } from "semantic-ui-react";
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
            className={css(styles.menuItem)}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            href="https://www.linkedin.com/in/fabiano-cunha/"
          >
            <Icon size="big" name="linkedin" />
          </Menu.Item>
          <Menu.Item
            className={css(styles.menuItem)}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            href="https://github.com/cunhasb"
          >
            <Icon size="big" name="github" />
          </Menu.Item>
          <Menu.Item
            className={css(styles.menuItem)}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            href="https://medium.com/@cunhasb"
          >
            <Icon size="big" name="medium" />
          </Menu.Item>
          <Menu.Item
            className={css(styles.menuItem)}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            href="mailto:fabianocunhadev@gmail.com?subject=More%20Info"
          >
            <Icon size="big" name="mail" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Header>&copy;2018 Fabiano S. Cunha</Header>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
export default connect(null, { setPointerType })(Footer);
