import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import Tilt from "react-tilt";
import { styles } from "../styles/contact";
import { css } from "aphrodite";

class Contact extends Component {
  state = {
    animation: "fly left",
    duration: 20000,
    visible: false,
    position: { x: 0, y: 0 }
  };

  handleVisibility = () => this.setState({ visible: !this.state.visible });
  componentDidMount() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <div className={css(styles.outerWrapper)}>
        <Tilt
          classname={css(styles.outerTilt)}
          options={{ scale: 1, reverse: true, max: 35 }}
        >
          <div className={css(styles.innerDiv)} />
        </Tilt>
        <div className={css(styles.headerDiv)}>
          <Header className={css(styles.header)}>
            <p>{this.props.title}</p>

            <p>
              {this.props.email.text}
              <a href={this.props.email.href}>email</a>
            </p>
            <p>
              {this.props.linkedIn.text}
              <a href={this.props.linkedIn.href}> linkedIn or </a>
              <a href={this.props.github.href}> Github</a>
            </p>
            <p>
              {this.props.phone.text}
              <a href={this.props.phone.href}> phone</a>
            </p>
          </Header>
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store.parameters.contact;
};
export default connect(mapStateToProps)(Contact);
