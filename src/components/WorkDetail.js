import React from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Header,
  Image,
  List,
  Segment,
  Grid,
  Visibility,
  Sticky,
  Icon
} from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { styles } from "../styles/WorkDetail";
import NavSiblings from "./NavSiblings";
import PageShell from "../components/PageShell";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
import { css } from "aphrodite";

class WorkDetails extends React.Component {
  state = {
    animations: { featureImage: true, details: true },
    siblings: {
      prev: { visible: true, index: -1 },
      next: { visible: true, index: -1 }
    },
    pageOffset: 0,
    calculations: {
      direction: "none",
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false
    },
    contextRef: {}
  };
  handleOnScreen = (e, { calculations }) => this.setState({ calculations });

  handleOffScreen = (e, { calculations }) => this.setState({ calculations });
  handleOnFire = (e, { calculations }) => {
    for (let i = 0; calculations.fits; i++) {
      this.setState({ pageOffset: this.state.pageOffset + i });
    }
  };
  handleUpdate = (e, { calculations }) => {
    if (calculations.fits) {
      this.setState({ pageOffset: this.state.pageOffset + 1 });
    }
    this.setState({ calculations });
  };
  handleMouseOver = project => {
    this.props.setSelectedProject(project);
  };
  handleContextRef = contextRef => this.setState({ contextRef });
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
      <div className={css(styles.outerWrapper)}>
        <Grid stackable className={css(styles.grid)}>
          <Visibility onUpdate={this.handleUpdate}>
            <Grid.Row className={css(styles.firstRow)}>
              <div>
                <Container
                  style={{
                    float: "right",
                    width: "78%",
                    marginBottom: "8%"
                  }}
                >
                  <Image
                    fluid
                    src={require(`../images/${
                      this.props.project.media.featured
                    }`)}
                  />
                  <div className={css(styles.chevronContainer)}>
                    <div className={css(styles.chevron)} />
                  </div>
                </Container>
                <div className={css(styles.divFeatured)}>
                  <span className={css(styles.divFeaturedHeader)}>
                    {this.props.project.name}
                  </span>
                  <p className={css(styles.divFeaturedP)}>
                    {this.props.project.description}
                  </p>
                </div>
              </div>
            </Grid.Row>
          </Visibility>

          <Grid.Row columns={2} stretched>
            <Grid.Column>
              <Header>Technologies</Header>
              <List items={this.props.project.fullDescription.techonologies} />
              <Header>Year</Header>
              <Header>{this.props.project.fullDescription.year}</Header>
            </Grid.Column>
            <Grid.Column>
              <Header>{this.props.project.fullDescription.description}</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Segment>
                <div style={{ padding: "5%" }}>
                  <Image
                    fluid
                    centered
                    src={require(`../images/${
                      this.props.project.media.webSite
                    }`)}
                  />
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Segment>
                <div style={{ padding: "5%" }}>
                  {
                    //   <Embed
                    //   loop
                    //   defaultActive
                    //   autoplay={true}
                    //   id="bDJMm85v9so"
                    //   placeholder={require(`../images/${
                    //     this.props.project.media.webSite
                    //   }`)}
                    //   source="youtube"
                    // />
                  }
                  <Image
                    fluid
                    centered
                    src={require(`../images/${this.props.project.media.video}`)}
                  />
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} divided>
            <Grid.Column>
              <div ref={this.handleContextRef}>
                <Image
                  size="big"
                  spaced
                  centered
                  src={require(`../images/${this.props.project.media.wall[0]}`)}
                />
                <Image
                  style={{ paddingTop: "15%" }}
                  size="big"
                  spaced
                  centered
                  src={require(`../images/${this.props.project.media.wall[1]}`)}
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <Sticky
                bottomOffset={10}
                context={this.state.contextRef}
                offset={10}
                pushing
              >
                <Image
                  style={{ marginTop: "15%", marginBottom: "15%" }}
                  size="big"
                  centered
                  src={require(`../images/${this.props.project.media.wall[2]}`)}
                />
              </Sticky>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} verticalAlign="middle" divided stretched>
            <Grid.Column>
              <Segment basic>
                <Header>Keypoints</Header>
                <p>{this.props.project.keyPoints}</p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment
                basic
                style={{
                  backgroundImage: `url('/images/pexels-photo-534273.png')`,
                  // backgroundColor: "red",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  marginBottom: "25%"
                }}
              >
                <Image
                  size="medium"
                  centered
                  src={require(`../images/${"pexels-photo-534273.png"}`)}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <NavSiblings />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
    project: state.projects.selectedProject,
    siblings: state.projects.siblings
  };
};

export default withRouter(connect(mapStateToProps, actions)(WorkDetails));
