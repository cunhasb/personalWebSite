import React, { Component } from "react";
import {
  Container,
  Header,
  Transition,
  Responsive,
  Segment,
  Grid,
  Image
} from "semantic-ui-react";
import Tilt from "react-tilt";
import { css } from "aphrodite";
import { styles } from "../styles/home";

export default class Home extends Component {
  state = { animation: "scale", duration: 4000, visible: false };

  handleVisibility = () => this.setState({ visible: !this.state.visible });
  componentDidMount() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    console.log("home", this.props);
    return (
      <div className={css(styles.outerWrapper)}>
        <div className={css(styles.leftDiv)} />
        <Grid className={css(styles.grid)}>
          <Grid.Column className={css(styles.columnLeft)} />
          <Grid.Column className={css(styles.columnRight)}>
            <Tilt
              options={{
                scale: 1,
                max: 25,
                reverse: true
              }}
              className={css(styles.outerTilt)}
            >
              <Responsive minWidth={800}>
                <div className={css(styles.tiltDiv)} />
              </Responsive>
            </Tilt>
            <Transition.Group
              className={css(styles.transitionGroup)}
              animation={this.state.animation}
              duration={this.state.duration}
            >
              {this.state.visible && (
                <Header className={css(styles.header)}>
                  <p>{"I believe that with hard-work, creativity, and a"}</p>
                  <p className={css(styles.m3)}>
                    {"extra dose of perseverance, all things are possible."}
                  </p>

                  <p className={css(styles.m6)}>
                    {"I'm Fabiano a Fullstack Developer."}
                  </p>
                  <p className={css(styles.m9)}>{"What do you believe in?"}</p>
                </Header>
              )}
            </Transition.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
