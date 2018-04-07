import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setPointerType } from "../actions";
import { takePicture } from "../actions/picturesActions";
import { withRouter, NavLink } from "react-router-dom";
import { css } from "aphrodite";
import { styles } from "../styles/headerMenu";

class HeaderMenu extends Component {
  state = {
    activeItem: "HOME",
    home: ["FABIANO S. CUNHA", "GO BACK HOME"]
  };

  handleItemClick = (e, { name }) => {
    this.props.takePicture(this.props.pictures.refItem);
    return this.setState({ activeItem: name });
  };

  handleMouseEnter = e => {
    if (e.target.name == "HOME") {
      this.setState({ activeItem: "HOME" });
    }
    this.props.setPointerType("hover");
  };
  handleMouseLeave = e => {
    this.setState({ activeItem: "WORK" });
    this.props.setPointerType("default");
  };
  render() {
    const { activeItem } = this.state;

    return (
      <div className="ui text menu">
        <NavLink
          name="HOME"
          to="/home"
          className={css(styles.navLink) + " " + "header item"}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <span className={css(styles.home)}>
            {this.state.activeItem == "HOME"
              ? this.state.home[1]
              : this.state.home[0]}
          </span>
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

export default withRouter(
  connect(mapStateToProps, { setPointerType, takePicture })(HeaderMenu)
);
