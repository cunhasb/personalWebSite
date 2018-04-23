import React from "react";
import { withRouter } from "react-router-dom";
import { Header, Image, Segment, Grid, Transition } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { styles } from "../styles/NavSiblings";
import { css } from "aphrodite";

class NavSiblings extends React.Component {
  state = {
    siblings: {
      prev: { visible: true, index: -1 },
      next: { visible: true, index: -1 },
      scrollPosition: 0
    }
  };

  toggleVisibility = (name, type) => {
    this.props.setPointerType(type);
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
      window.scroll(0, window.pageYOffset - 10);
    } else {
      clearInterval(timer);
      this.props.history.push(`/work/${project.route}`);
      this.props.setSelectedProject(project);
    }
  };
  handleClick = (e, project) => {
    let timer = setInterval(() => this.scrollTimer(timer, project), 1);
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
                onMouseEnter={() => this.toggleVisibility("prev", "hover")}
                onMouseLeave={() => this.toggleVisibility("prev", "default")}
                onClick={e => this.handleClick(e, this.props.siblings[0])}
              >
                <div style={{ textAlign: "center" }}>
                  <div>
                    <Image
                      centered
                      className={css(styles.image)}
                      src={require(`../images/${
                        this.props.siblings[0].media.featured
                      }`)}
                    />
                    <Header className={css(styles.header)}>
                      {this.props.siblings[0].name}
                    </Header>
                  </div>

                  <Transition
                    animation="scale"
                    duration={1000}
                    visible={this.state.siblings.prev.visible}
                  >
                    <div className={css(styles.div)}>
                      <Image
                        name="prev"
                        src={require(`../images/${
                          this.props.siblings[0].media.featured
                        }`)}
                      />
                    </div>
                  </Transition>
                  <Transition
                    animation="swing up"
                    duration={700}
                    visible={this.state.siblings.prev.visible}
                  >
                    <Header className={css(styles.header)}>PREV</Header>
                  </Transition>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment
                basic
                onMouseEnter={() => this.toggleVisibility("next", "hover")}
                onMouseLeave={() => this.toggleVisibility("next", "default")}
                onClick={e => this.handleClick(e, this.props.siblings[1])}
              >
                <div style={{ textAlign: "center" }}>
                  <div>
                    <Image
                      centered
                      className={css(styles.image)}
                      src={require(`../images/${
                        this.props.siblings[1].media.featured
                      }`)}
                    />
                    <Header className={css(styles.header)}>
                      {this.props.siblings[1].name}
                    </Header>
                  </div>

                  <Transition
                    animation="scale"
                    duration={1000}
                    visible={this.state.siblings.next.visible}
                  >
                    <div className={css(styles.div)}>
                      <Image
                        name="next"
                        src={require(`../images/${
                          this.props.siblings[1].media.featured
                        }`)}
                      />
                    </div>
                  </Transition>
                  <Transition
                    animation="swing up"
                    duration={700}
                    visible={this.state.siblings.next.visible}
                  >
                    <Header className={css(styles.header)}>NEXT</Header>
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
