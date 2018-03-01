import React, { Component } from "react";
import {
  Menu,
  Icon,
  Label,
  Container,
  Header,
  Transition,
  Visible,
  Image,
  Button
} from "semantic-ui-react";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import ParallaxHover from "react-parallax-hover";
import { Route, Switch, withRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Work from "../components/Work";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class MainContainer extends Component {
  state = { animation: "fly left", duration: 3600, visible: false };

  handleVisibility = () => this.setState({ visible: !this.state.visible });
  componentDidMount() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <Container fluid style={{ width: "80%" }}>
        <HeaderMenu />
        <Switch>
          <Route
            path="/about"
            render={() => (
              <Transition.Group
                animation="browse right"
                transitionOnMount="true"
                duration={2600}
              >
                <About />
              </Transition.Group>
            )}
          />
          <Route path="/contact" component={Contact} />
          <Route path="/work" component={Work} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}

export default withRouter(MainContainer);
