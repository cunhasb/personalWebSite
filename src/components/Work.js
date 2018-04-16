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
import { css } from "aphrodite";

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
    this.setState(prevState => {
      return {
        visible: !prevState.visible,
        timer: { timer: timer, counter: 0 },
        innerTimer: { timer: innerTimer, counter: 0 }
      };
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.timer.timer);
    clearInterval(this.state.innerTimer.timer);
  }
  handleShow = () => {
    this.props.setPointerType("hover");
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
    this.props.setPointerType("default");
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
      return (
        <List.Item
          onMouseOver={() => this.handleMouseOver(project)}
          onMouseEnter={() => this.props.setPointerType("hover")}
          onMouseLeave={() => this.props.setPointerType("default")}
          key={project.id}
          className={css(
            this.props.selectedProject.id === project.id ? styles.active : ""
          )}
        >
          <List.Content>
            <Link
              className={`${css(styles.navLink)} ui header`}
              to={`/work/${this.props.selectedProject.route}`}
            >
              <List.Header>{project.name}</List.Header>
            </Link>
          </List.Content>
        </List.Item>
      );
    });
    return (
      <div className={css(styles.mainContainer)}>
        <List animated verticalAlign="middle" className={css(styles.list)}>
          {projectsList}
        </List>
        <Container className={css(styles.tiltContainer)}>
          <Tilt className={css(styles.tilt)} options={{ max: 25, scale: 1.05 }}>
            <div className={css(styles.tiltWrapper)}>
              <div className={css(styles.tiltOuterDivMain)} />

              <div className={css(styles.tiltInnerDivMain)}>
                <Transition
                  animation="swing up"
                  duration={750}
                  visible={this.state.animations.details}
                >
                  <Link
                    className="ui header"
                    onMouseEnter={this.handleShow}
                    onMouseLeave={this.handleHide}
                    to={`/work/${this.props.selectedProject.route}`}
                  >
                    <span className={css(styles.seeIt)}>See it...</span>
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
                  className={css(styles.image)}
                  src={require(`../images/${
                    this.props.selectedProject.media.featured[0]
                  }`)}
                />
              </Link>
            </div>
          </Tilt>
          <div className={css(styles.progress)}>
            {`${this.state.timer.counter + 1}/${this.props.projects.length}`}
            <Progress
              size="tiny"
              attached="bottom"
              percent={this.state.innerTimer.counter}
            />
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
    selectedProject: state.projects.selectedProject
  };
};

export default withRouter(connect(mapStateToProps, actions)(PageShell(Work)));
