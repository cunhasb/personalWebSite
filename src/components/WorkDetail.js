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
  Sticky
} from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { styles } from "../styles/WorkDetail";
import NavSiblings from "./NavSiblings";
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
    this.props.setPointerType("scroll");
  }

  render() {
    return (
      <div className={css(styles.outerWrapper)}>
        <Grid stackable className={css(styles.grid)}>
          <Visibility onUpdate={this.handleUpdate}>
            <Grid.Row className={css(styles.firstRow)} textAlign="center">
              <div>
                <Container className={css(styles.container)}>
                  <Image
                    fluid
                    src={require(`../images/${
                      this.props.project.media.featured
                    }`)}
                  />
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
              <div className={css(styles.chevronDiv)}>
                <div className={css(styles.chevronContainer2)}>
                  <div className={css(styles.chevron)} />
                </div>
              </div>
            </Grid.Row>
          </Visibility>

          <Grid.Row columns={2} stretched>
            <Grid.Column width={3}>
              <Header>Technologies</Header>
              <List items={this.props.project.fullDescription.techonologies} />
              <Header>Year</Header>
              <Header>{this.props.project.fullDescription.year}</Header>
            </Grid.Column>
            <Grid.Column width={13}>
              <Header style={{ whiteSpace: "pre-line" }}>
                {this.props.project.fullDescription.description}
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Segment compact style={{ margin: 0, padding: 0 }}>
                <div>
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
              <Segment
                style={{
                  padding: "5%",
                  borderRadius: "5%",
                  borderColor: "white",
                  borderWidth: "5px",
                  // backgroundColor: "rgb(242, 240, 241)"
                  backgroundColor: "rgba(0,0,0,.5)"
                }}
              >
                <div>
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
            <Grid.Column only="computer tablet">
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
                <p style={{ whiteSpace: "pre-line" }}>
                  {this.props.project.keyPoints}
                </p>
                <Header>Links</Header>
                {this.props.project.links.map(el => {
                  return (
                    <a
                      key={el.url}
                      style={{ cursor: "none", padding: "10px" }}
                      onMouseEnter={() => this.props.setPointerType("hover")}
                      onMouseLeave={() => this.props.setPointerType("default")}
                      href={el.url}
                      target="_blank"
                    >
                      {el.name}
                    </a>
                  );
                })}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment
                basic
                style={{
                  // backgroundImage: `url('/images/pexels-photo-534273.png')`

                  marginBottom: "25%"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    // backgroundImage: `url(${require(`../images/${
                    //   this.props.project.media.mobile[0]
                    // }`)})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                  }}
                >
                  <Image
                    src={require(`../images/${
                      this.props.project.media.mobile[0]
                    }`)}
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      position: "absolute",
                      height: "80%"
                    }}
                  />
                  <Image
                    style={{ position: "relative" }}
                    size="medium"
                    centered
                    src={require(`../images/${"mobile-frame.png"}`)}
                  />
                </div>
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
