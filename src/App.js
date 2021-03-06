import React, { Component } from "react";
import { connect } from "react-redux";
import { setMousePointer } from "./actions";
import { setMouseCoordinates } from "./actions/parametersActions";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import { mouseShell } from "./components/MouseShell";

class App extends Component {
  render() {
    return <MainContainer pointer={this.props.pointer} />;
  }
}
const mapStateToProps = store => {
  // debugger;
  return {
    mouse: {
      pointer: store.projects.mouse.pointer,
      type: store.projects.mouse.type,
      coordinates: store.parameters.mouse.coordinates
    }
  };
};
export default connect(mapStateToProps, {
  setMousePointer,
  setMouseCoordinates
})(mouseShell(App));
