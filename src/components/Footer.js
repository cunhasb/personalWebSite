import React, { Component } from "react";
import { Menu, Icon, Header, Grid } from "semantic-ui-react";
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
        <Grid>
          <Grid.Column columns={2} mobile={8} tablet={11} computer={12}>
            <Menu text>
              <Menu.Item
                className={css(styles.menuItem)}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                target="_blank"
                href="https://www.linkedin.com/in/fabiano-cunha/"
              >
                <Icon fitted size="big" name="linkedin" />
              </Menu.Item>
              <Menu.Item
                className={css(styles.menuItem)}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                target="_blank"
                href="https://github.com/cunhasb"
              >
                <Icon fitted size="big" name="github" />
              </Menu.Item>
              <Menu.Item
                className={css(styles.menuItem)}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                target="_blank"
                href="https://medium.com/@cunhasb"
              >
                <Icon fitted size="big" name="medium" />
              </Menu.Item>
              <Menu.Item
                className={css(styles.menuItem)}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                href="mailto:fabianocunhadev@gmail.com?subject=More%20Info"
              >
                <Icon fitted size="big" name="mail" />
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column
            only="tablet computer"
            textAlign="right"
            columns={2}
            mobile={8}
            tablet={5}
            computer={4}
          >
            <Menu text>
              <Menu.Item>
                <Header className={css(styles.copyright)}>
                  &copy;2018 Fabiano S. Cunha
                </Header>
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default connect(null, { setPointerType })(Footer);
