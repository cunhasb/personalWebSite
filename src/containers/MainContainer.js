import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Work from "../components/Work";
import WorkDetails from "../components/WorkDetail";
import { getProjects } from "../actions";
import { setRefItem, takePicture } from "../actions/picturesActions";
import {
  getParameters,
  setMouseCoordinates
} from "../actions/parametersActions";
import PageShell from "../components/PageShell";
import { fadesUp } from "../components/FadesUp";
import { FirstChild } from "../components/FirstChild";
import { TransitionGroup, CSSTransitionGroup } from "react-transition-group";
import { Motion, spring } from "react-motion";
import Webcam from "react-webcam";
import "../index.css";

class MainContainer extends Component {
  state = { animation: "fly left", duration: 3600, visible: false };

  handleVisibility = () => this.setState({ visible: !this.state.visible });
  componentDidMount() {
    // this.props.getProjects();
    this.setState({ visible: !this.state.visible });
  }
  // some dummy text to save
  render() {
    // console.log("props", this.props);
    return (
      <Container fluid style={{ width: "80%" }}>
        <Webcam
          style={{ visibility: "hidden", position: "absolute" }}
          audio={false}
          height={480}
          ref={e => this.props.setRefItem(e)}
          screenshotFormat="image/jpeg"
          width={640}
        />
        <HeaderMenu />
        <Switch>
          <Route
            path="/about"
            render={() => {
              const x = this.props;
              !this.props.parameters.about ? this.props.getParameters() : null;
              return <About />;
            }}
          />
          <Route
            path="/contact"
            render={() => {
              let x = this.props;
              // debugger;
              !this.props.parameters.contact
                ? this.props.getParameters()
                : null;
              return <Contact />;
            }}
          />
          <Route
            exact
            path="/work/:name"
            render={() => {
              !this.props.projects.length > 0 ? this.props.getProjects() : null;

              return (
                <CSSTransitionGroup
                  transitionAppear={true}
                  transitionEnter={true}
                  transitionLeave={true}
                  transitionAppearTimeout={500}
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                  transitionName="SlideIn"
                >
                  <WorkDetails key={this.props.location.key} />
                </CSSTransitionGroup>
              );
            }}
          />
          <Route
            path="/work"
            render={() => {
              !this.props.projects.length > 0 ? this.props.getProjects() : null;
              return (
                <CSSTransitionGroup
                  transitionAppear={true}
                  transitionEnter={true}
                  transitionLeave={true}
                  transitionAppearTimeout={500}
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                  transitionName="SlideIn"
                >
                  <Work key={this.props.location.key} />
                </CSSTransitionGroup>
              );
            }}
          />
          <Route path="/" component={Home} />
        </Switch>
        <Footer style={{ position: "fixed", bottom: "0px" }} />
      </Container>
    );
  }
}
const mapStateToProps = store => {
  // debugger;
  return {
    projects: store.projects.projects,
    pictures: store.pictures.pictures,
    refItem: store.pictures.refItem,
    parameters: store.parameters
  };
};
export default withRouter(
  connect(mapStateToProps, {
    getProjects,
    setRefItem,
    takePicture,
    getParameters,
    setMouseCoordinates
  })(MainContainer)
);
