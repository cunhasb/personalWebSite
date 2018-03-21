import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Transition,
  Container,
  Image,
  List,
  Progress
} from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { styles } from "../styles/work";
import Tilt from "react-tilt";
import PageShell from "../components/PageShell";

class Work extends React.Component {
  state = {
    animations: { featureImage: true, details: true },
    timer: { timer: null, counter: 0 },
    innerTimer: { timer: null, counter: 0 }
  };

  handleVisibility = () => this.setState({ visible: !this.state.visible });
  handleMouseOver = project => {
    this.props.setSelectedProject(project);
  };
  applyStyle = e => {
    const { selectedStyle, listStyle } = styles();
    return e === this.props.selectedProject.id ? selectedStyle : listStyle;
  };
  tick = () => {
    this.setState(prevState => {
      let projectsSize = this.props.projects.length - 1;
      if (prevState.timer.counter + 1 > projectsSize) {
        this.props.setSelectedProject(this.props.projects[0]);
        return {
          timer: {
            timer: prevState.timer.timer,
            counter: 0
          },
          innerTimer: {
            timer: prevState.innerTimer.timer,
            counter: 0
          },
          animations: {
            featureImage: false,
            details: prevState.animations.details
          }
        };
      } else {
        this.props.setSelectedProject(
          this.props.projects[prevState.timer.counter + 1]
        );
        return {
          timer: {
            timer: prevState.timer.timer,
            counter: prevState.timer.counter + 1
          },
          innerTimer: {
            timer: prevState.innerTimer.timer,
            counter: 100
          },
          animations: {
            featureImage: true,
            details: prevState.animations.details
          }
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
    // debugger;
    this.setState(prevState => {
      return {
        visible: !prevState.visible,
        timer: { timer: timer, counter: 0 },
        innerTimer: { timer: innerTimer, counter: 0 }
      };
    });
  }
  componentWillUnmount() {
    // debugger;
    clearInterval(this.state.timer.timer);
    clearInterval(this.state.innerTimer.timer);
  }
  handleShow = () => {
    this.setState(prevState => {
      return {
        animations: {
          featureImage: prevState.animations.featureImage,
          details: true
        }
      };
    });
  };
  handleHide = () => {
    this.setState(prevState => {
      return {
        animations: {
          featureImage: prevState.animations.featuredImage,
          details: false
        }
      };
    });
  };

  render() {
    const projectsList = this.props.projects.map(project => {
      // debugger;
      return (
        <List.Item
          onMouseOver={() => this.handleMouseOver(project)}
          key={project.id}
          style={this.applyStyle(project.id)}
        >
          <List.Content>
            <List.Header>{project.name}</List.Header>
          </List.Content>
        </List.Item>
      );
    });
    return (
      <Container
        style={{ position: "relative", width: "85vw", height: "75vh" }}
      >
        <List
          animated
          verticalAlign="middle"
          style={{
            marginLeft: "3vw",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "60vw"
          }}
        >
          {projectsList}
        </List>
        <Container
          style={{
            position: "relative",
            top: "50%",
            width: "40vw",
            height: "30vw",
            transform: "translateY(-50%)"
          }}
        >
          <Tilt
            className="Tilt"
            options={{ max: 25, scale: 1.05 }}
            style={{
              position: "relative",
              marginTop: "5%",
              width: "40vw",
              height: "30vw",
              marginLeft: "40%",
              backgroundColor: "blue"
            }}
          >
            <div className="Tilt-inner">
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  height: "25vw",
                  width: "38vw",
                  backgroundColor: "rgba(250,250,250,0.5)",
                  border: "5px black"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "80%",
                  top: "60%",
                  width: "80%",
                  zIndex: 1,
                  fontSize: "1.5vw"
                }}
              >
                <Transition
                  duration="6000"
                  animation="swing up"
                  visible={this.state.animations.details}
                >
                  <Link
                    className="ui header"
                    onMouseEnter={this.handleShow}
                    to={`/work/${this.props.selectedProject.route}`}
                  >
                    <span style={{ color: "white" }}>See it...</span>
                  </Link>
                </Transition>
              </div>
              <Link
                onMouseEnter={this.handleShow}
                to={`/work/${this.props.selectedProject.route}`}
              >
                <Image
                  onMouseEnter={this.handleShow}
                  onMouseLeave={this.handleHide}
                  style={{
                    position: "absolute",
                    marginLeft: "3%",
                    top: "5%",
                    width: "37.5vw",
                    zIndex: 0
                  }}
                  src={require(`../images/${
                    this.props.selectedProject.media.featured[0]
                  }`)}
                  alt="Parallax Layer"
                />
              </Link>
            </div>
          </Tilt>
          <div
            style={{
              marginTop: "2%",
              marginLeft: "50%",
              width: "50%",
              zIndex: 1
            }}
          >
            {`${this.state.timer.counter + 1}/${this.props.projects.length}`}
            <Progress
              size="tiny"
              attached="bottom"
              percent={this.state.innerTimer.counter}
            />
          </div>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  // debugger;
  return {
    projects: state.projects.projects,
    selectedProject: state.projects.selectedProject
  };
};

export default withRouter(connect(mapStateToProps, actions)(PageShell(Work)));
