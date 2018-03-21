import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setPointerType } from "../actions";
import { takePicture } from "../actions/picturesActions";
import { withRouter, NavLink } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";

class HeaderMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    this.props.takePicture(this.props.pictures.refItem);
    return this.setState({ activeItem: name });
  };

  handleMouseEnter = e => {
    this.props.setPointerType("hover");
  };
  handleMouseLeave = e => {
    this.props.setPointerType("default");
  };
  render() {
    const { activeItem } = this.state;

    return (
      <div className="ui text menu">
        <NavLink
          to="/home"
          className={css(styles.navLink) + " " + "header item"}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          FABIANO S. CUNHA
        </NavLink>
        <div className="right menu">
          <NavLink
            to="/work"
            className={css(styles.navLink) + " " + "header item"}
            name="WORK"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            active={activeItem === "WORK" ? "true" : undefined}
            onClick={e => this.handleItemClick(e, { name: "WORK" })}
          >
            WORK
          </NavLink>
          <NavLink
            to="/about"
            className={css(styles.navLink) + " " + "header item"}
            name="ABOUT"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            active={activeItem === "ABOUT" ? "true" : undefined}
            onClick={e => this.handleItemClick(e, { name: "ABOUT" })}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={css(styles.navLink) + " " + "header item"}
            name="CONTACT"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            active={activeItem === "CONTACT" ? "true" : undefined}
            onClick={e => this.handleItemClick(e, { name: "CONTACT" })}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store;
};

const styles = StyleSheet.create({
  navLink: {
    cursor: "none",
    styles: "none"
  }
});
export default withRouter(
  connect(mapStateToProps, { setPointerType, takePicture })(HeaderMenu)
);
