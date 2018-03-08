import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Container,
  Header,
  Image,
  List,
  Progress,
  Button,
  Segment,
  Grid
} from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { styles } from "../styles/WorkDetail";
import Tilt from "react-tilt";

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
        let x = this.props;
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
    // let timer = setInterval(this.tick, 10000);
    // let innerTimer = setInterval(this.innerTick, 100);
    const route = this.props.match.params.name;
    if (route != this.props.project.route) {
      const project = this.props.projects.filter(
        project => project.route === route
      )[0];
      this.props.setSelectedProject(project);
    }
    this.setState(prevState => {
      return {
        visible: !prevState.visible,
        timer: { timer: "timer", counter: 0 },
        innerTimer: { timer: "innerTimer", counter: 0 }
      };
    });
  }
  componentWillUnmount() {
    let x = this.state;
    // debugger;
    // clearInterval(this.state.timer.timer);
    // clearInterval(this.state.innerTimer.timer);
  }
  handleShow = () => {
    console.log("show", this.state.animations);
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
    return (
      <Grid stackable style={{ backgroundColor: "red" }}>
        <Grid.Row columns={1}>
          <Grid.Column>
            <div style={{ position: "relative" }}>
              <Image
                size="massive"
                floated="right"
                fluid
                src={require(`../images/${this.props.project.media.featured}`)}
              />
              <div style={styles().divFeatured}>
                <span style={styles().divFeaturedHeader}>
                  {this.props.project.name}
                </span>
                <p style={styles().divFeaturedP}>
                  {this.props.project.description}
                </p>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Segment>Project Details</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Description </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Segment>Featured Image</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Segment>Featured Video</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Segment>Images</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Images2</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Segment>Keypoints</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>mobile</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Segment>Prev</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Next</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
    project: state.projects.selectedProject
  };
};

export default withRouter(connect(mapStateToProps, actions)(Work));
