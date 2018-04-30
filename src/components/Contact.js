import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";
import Tilt from "react-tilt";
import { setPointerType } from "../actions/";
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
          className={css(styles.outerTilt)}
          options={{ scale: 1, reverse: true, max: 35 }}
        >
          <div className={css(styles.innerDiv)} />
        </Tilt>
        <div className={css(styles.headerDiv)}>
          <Header className={css(styles.header)}>
            <p>{this.props.title}</p>

            <p>
              {this.props.email.text}
              <a
                className={css(styles.a)}
                onMouseEnter={() => this.props.setPointerType("hover")}
                onMouseLeave={() => this.props.setPointerType("default")}
                href={this.props.email.href}
              >
                email
              </a>
            </p>
            <p>
              {this.props.linkedIn.text}
              <a
                className={css(styles.a)}
                onMouseEnter={() => this.props.setPointerType("hover")}
                onMouseLeave={() => this.props.setPointerType("default")}
                target="_blank"
                href={this.props.linkedIn.href}
              >
                LinkedIn
              </a>{" "}
              <a
                className={css(styles.a)}
                onMouseEnter={() => this.props.setPointerType("hover")}
                onMouseLeave={() => this.props.setPointerType("default")}
                target="_blank"
                href={this.props.github.href}
              >
                Github
              </a>
            </p>
            <p>
              {this.props.phone.text}
              <a
                className={css(styles.a)}
                onMouseEnter={() => this.props.setPointerType("hover")}
                onMouseLeave={() => this.props.setPointerType("default")}
                target="_blank"
                href={this.props.phone.href}
              >
                phone
              </a>
            </p>
            <p>
              {this.props.resume.text}
              <a
                className={css(styles.a)}
                onMouseEnter={() => this.props.setPointerType("hover")}
                onMouseLeave={() => this.props.setPointerType("default")}
                target="_blank"
                href={this.props.resume.href}
              >
                resume
              </a>
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
export default connect(mapStateToProps, { setPointerType })(Contact);
