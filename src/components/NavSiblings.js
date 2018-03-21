import React from "react";
import { withRouter } from "react-router-dom";
import { Header, Image, Segment, Grid, Transition } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { styles } from "../styles/NavSiblings";

class NavSiblings extends React.Component {
  state = {
    siblings: {
      prev: { visible: true, index: -1 },
      next: { visible: true, index: -1 },
      scrollPosition: 0
    }
  };

  toggleVisibility = name => {
    this.setState(prevState => {
      let newState = {};
      if (name === "next") {
        newState = {
          prev: prevState.siblings.prev,
          next: { visible: !prevState.siblings.next.visible }
        };
      } else {
        newState = {
          next: prevState.siblings.next,
          prev: { visible: !prevState.siblings.prev.visible }
        };
      }
      return { siblings: newState };
    });
  };
  scrollTimer = (timer, project) => {
    // debugger;
    let y = window.pageYOffset;
    if (y > 0) {
      window.scroll(0, window.pageYOffset - 5);
      console.log(y);
    } else {
      clearInterval(timer);
      console.log(timer);
      this.props.history.push(`/work/${project.route}`);
      this.props.setSelectedProject(project);
    }
  };
  handleClick = (e, project) => {
    let timer = setInterval(() => this.scrollTimer(timer, project), 1);
    console.log("timer", timer);
    // debugger;
  };

  componentDidMount() {
    const route = this.props.match.params.name;
    if (route !== this.props.project.route) {
      const project = this.props.projects.filter(
        project => project.route === route
      )[0];
      this.props.setSelectedProject(project);
    }
  }

  render() {
    return (
      <div>
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment
                basic
                onMouseEnter={() => this.toggleVisibility("prev")}
                onMouseLeave={() => this.toggleVisibility("prev")}
                onClick={e => this.handleClick(e, this.props.siblings[0])}
              >
                <div style={{ textAlign: "center" }}>
                  <div>
                    <Image
                      centered
                      style={styles().image}
                      src={require(`../images/${
                        this.props.project.media.wall[2]
                      }`)}
                    />
                    <Header style={styles().header}>
                      {this.props.siblings[0].name}
                    </Header>
                  </div>

                  <Transition
                    animation="scale"
                    duration={1000}
                    visible={this.state.siblings.prev.visible}
                  >
                    <div style={styles().div}>
                      <Image
                        name="prev"
                        src={require(`../images/${
                          this.props.project.media.wall[2]
                        }`)}
                      />
                    </div>
                  </Transition>
                  <Transition
                    animation="swing up"
                    duration={700}
                    visible={this.state.siblings.prev.visible}
                  >
                    <Header style={styles().header}>PREV</Header>
                  </Transition>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment
                basic
                onMouseEnter={() => this.toggleVisibility("next")}
                onMouseLeave={() => this.toggleVisibility("next")}
                onClick={e => this.handleClick(e, this.props.siblings[1])}
              >
                <div style={{ textAlign: "center" }}>
                  <div>
                    <Image
                      centered
                      style={styles().image}
                      src={require(`../images/${
                        this.props.project.media.wall[1]
                      }`)}
                    />
                    <Header style={styles().header}>
                      {this.props.siblings[1].name}
                    </Header>
                  </div>

                  <Transition
                    animation="scale"
                    duration={1000}
                    visible={this.state.siblings.next.visible}
                  >
                    <div style={styles().div}>
                      <Image
                        name="next"
                        src={require(`../images/${
                          this.props.project.media.wall[1]
                        }`)}
                      />
                    </div>
                  </Transition>
                  <Transition
                    animation="swing up"
                    duration={700}
                    visible={this.state.siblings.next.visible}
                  >
                    <Header style={styles().header}>NEXT</Header>
                  </Transition>
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // debugger;
  return {
    projects: state.projects.projects,
    project: state.projects.selectedProject,
    siblings: state.projects.siblings
  };
};

export default withRouter(connect(mapStateToProps, actions)(NavSiblings));