import React, { Component } from "react";
import { Container, Header, Image, List } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";

import ParallaxHover from "react-parallax-hover";

const styles = {
  selectedStyle: {
    fontSize: "2em"
  },
  listStyle: {
    fontSize: "1em"
  }
};

class Work extends Component {
  state = {
    animation: "scale",
    duration: 3600,
    visible: false,
    projects: [],
    selectedProject: "",
    timer: { timer: null, counter: 0 }
  };

  handleVisibility = () => this.setState({ visible: !this.state.visible });
  handleMouseOver = e => {
    this.setState({ selectedProject: e.target.id });
  };
  applyStyle = e => {
    // debugger;
    return e === this.state.selectedProject
      ? styles.selectedStyle
      : styles.listStyle;
  };
  tick = () => {
    this.setState(prevState => {
      let projectsSize = prevState.projects.length - 1;
      if (prevState.timer.counter + 1 > projectsSize) {
        return {
          timer: {
            timer: prevState.timer.timer,
            counter: 0
          },
          selectedProject: prevState.projects[0].id
        };
      } else {
        return {
          timer: {
            timer: prevState.timer.timer,
            counter: prevState.timer.counter + 1
          },
          selectedProject: prevState.projects[prevState.timer.counter + 1].id
        };
      }
    });
  };
  componentDidMount() {
    // let timer = setInterval(this.tick, 10000);
    this.setState({
      visible: !this.state.visible,
      projects: this.props.projects,
      selectedProject: this.props.projects[this.state.timer.counter].id,
      timer: { timer: "timer", counter: 0 }
    });
  }
  componentWillUnmount() {
    this.clearInterval(this.state.timer.timer);
  }
  render() {
    const projectsList = this.state.projects.map(project => {
      return (
        <List.Item
          ordered="true"
          style={
            this.state.selectedStyle == project.id
              ? this.applyStyle(project.id)
              : this.applyStyle(project.id)
          }
        >
          <List.Content>
            <List.Header
              key={project.id}
              id={project.id}
              onMouseOver={this.handleMouseOver}
            >
              {project.name}
            </List.Header>
          </List.Content>
        </List.Item>
      );
    });

    return (
      <Container fluid>
        <List
          animated
          verticalAlign="middle"
          size="massive"
          style={{
            marginLeft: "10%",
            position: "absolute",
            top: "250px",
            width: "50%"
          }}
        >
          {projectsList}
        </List>
        <Container style={{ width: "20%" }}>
          <ParallaxHover width="1000" height="600">
            <div
              style={{
                backgroundColor: "red",
                width: "60%",
                height: "60%"
              }}
            />
          </ParallaxHover>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { projects: state.projects };
};

export default connect(mapStateToProps, actions)(Work);
