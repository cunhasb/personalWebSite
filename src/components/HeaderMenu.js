import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setPointerType } from "../actions";
import { takePicture } from "../actions/picturesActions";
import { withRouter, NavLink } from "react-router-dom";

class HeaderMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    const x = this.props;
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
      <div
        className="ui text menu"
        style={{ marginBottom: "3%", cursor: " none" }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <NavLink to="/home" className="header item">
          FABIANO S. CUNHA
        </NavLink>
        <div className="right menu" position="right">
          <NavLink
            to="/work"
            className="header item"
            name="WORK"
            active={activeItem === "WORK" ? "true" : undefined}
            onClick={e => this.handleItemClick(e, { name: "WORK" })}
          >
            WORK
          </NavLink>
          <NavLink
            to="/about"
            className="header item"
            name="ABOUT"
            active={activeItem === "ABOUT" ? "true" : undefined}
            onClick={e => this.handleItemClick(e, { name: "ABOUT" })}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="header item"
            name="CONTACT"
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
const mapDispatchToProps = dispatch => {
  return {
    setPointerType: bindActionCreators(setPointerType, dispatch),
    takePicture: bindActionCreators(takePicture, dispatch)
  };
  // debugger;
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderMenu)
);
