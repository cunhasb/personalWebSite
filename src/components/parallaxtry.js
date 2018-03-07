import React, { Component } from "react";
import { Container, Header, Image, List, Progress } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";
import ParallaxMousemove from "react-parallax-mousemove";
import ParallaxHover from "react-parallax-hover";
import { styles } from "../styles/work";
import { parallaxStyles } from "../styles/parallax";

class Work extends React.Component {
  state = {
    animation: "scale",
    duration: 3600,
    visible: false,
    projects: [],
    selectedProject: {
      id: "",
      name: "",
      description: "",
      keyPoints: "",
      webSiteUrl: "",
      media: {
        featured: ["featuredDefault.jpeg"],
        webSite: [],
        mobile: []
      },
      fullDescription: {
        description: "",
        client: "",
        year: ""
      }
    },
    timer: { timer: null, counter: 0 },
    innerTimer: { timer: null, counter: 0 },
    parallax: { x: 0, y: 0, z: 0 }
  };

  handleVisibility = () => this.setState({ visible: !this.state.visible });
  handleMouseOver = project => {
    // debugger;
    this.setState({ selectedProject: project });
  };
  applyStyle = e => {
    // debugger;
    const { selectedStyle, listStyle } = styles();
    return e === this.state.selectedProject.id ? selectedStyle : listStyle;
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
          innerTimer: {
            timer: prevState.innerTimer.timer,
            counter: 0
          },
          selectedProject: prevState.projects[0]
        };
      } else {
        return {
          timer: {
            timer: prevState.timer.timer,
            counter: prevState.timer.counter + 1
          },
          innerTimer: {
            timer: prevState.innerTimer.timer,
            counter: 100
          },
          selectedProject: prevState.projects[prevState.timer.counter + 1]
        };
      }
    });
  };
  innerTick = () => {
    this.setState(prevState => {
      if (prevState.innerTimer.counter + 1 > 100) {
        return {
          innerTimer: {
            timer: prevState.innerTimer.timer,
            counter: 0
          }
        };
      } else {
        return {
          innerTimer: {
            timer: prevState.innerTimer.timer,
            counter: prevState.innerTimer.counter + 1
          }
        };
      }
    });
  };
  componentDidMount() {
    let timer = setInterval(this.tick, 10000);
    let innerTimer = setInterval(this.innerTick, 100);
    this.setState(prevState => {
      return {
        visible: !prevState.visible,
        projects: this.props.projects,
        selectedProject: this.props.projects[prevState.timer.counter],
        timer: { timer: timer, counter: 0 },
        innerTimer: { timer: innerTimer, counter: 0 }
      };
    });
  }
  componentWillUnmount() {
    this.clearInterval(this.state.timer.timer);
    this.clearInterval(this.state.innerTimer.timer);
  }

  handleParallaxMouseOver = e => {
    // debugger;
    this.setState({ parallax: { x: e.clientX, y: e.clientY } });
  };

  render() {
    const { outter, inner, infoLayerStyle } = styles();
    const { infoLayerStylePerspective, perspectiveLayer } = parallaxStyles(
      this.state.parallax.x,
      this.state.parallax.y,
      this.state.parallax.z
    );
    const projectsList = this.state.projects.map(project => {
      console.log("state", this.state.parallax);
      return (
        <List.Item
          onMouseOver={() => this.handleMouseOver(project)}
          key={project.id}
          style={
            this.state.selectedProject.id === project.id
              ? this.applyStyle(project.id)
              : this.applyStyle(project.id)
          }
        >
          <List.Content>
            <List.Header>{project.name}</List.Header>
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
        <Container>
          <div
            style={{ infoLayerStylePerspective }}
            onMouseOver={e => this.handleParallaxMouseOver(e)}
          >
            <div style={{ padding: "10%" }}>
              <div style={{ perspectiveLayer }}>
                <Image
                  src={require(`../images/${
                    this.state.selectedProject.media.featured[0]
                  }`)}
                  alt="Parallax Layer"
                />
                {`${this.state.timer.counter + 1}/${
                  this.state.projects.length
                }`}
                <Progress
                  size="tiny"
                  attached="bottom"
                  percent={this.state.innerTimer.counter}
                />
              </div>
            </div>
          </div>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { projects: state.projects };
};

export default connect(mapStateToProps, actions)(Work);
