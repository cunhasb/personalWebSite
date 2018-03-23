import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as actions from "../actions/picturesActions";
import {
  Image,
  Segment,
  Header,
  Item,
  Container,
  Grid,
  Ref,
  Modal,
  List
} from "semantic-ui-react";
import PageShell from "../components/PageShell";
import { TransitionGroup } from "react-transition-group"; // ES6
import Webcam from "react-webcam";
import uuidv4 from "uuid/v4";
import Tilt from "react-tilt";
import { css } from "aphrodite";
import { styles } from "../styles/about";
import Clarifai from "clarifai";
import { C_SECRET } from "../.secrets.js";

class About extends React.Component {
  state = {
    node: "",
    picture: "front.png",
    modalOpen: false,
    clarifai: "",
    visitor: {
      demographics: { age: [], gender: [], ethinicity: [] },
      celebrity: [],
      general: []
    }
  };
  handleMouseMove = e => {
    let element = ReactDOM.findDOMNode(this.state.node);
    let coordinates = element.getBoundingClientRect();
    let picture = this.getPicture(coordinates);
    this.setState(prevState => {
      return {
        node: prevState.node,
        picture: picture,
        modalOpen: prevState.modalOpen,
        clarifai: prevState.clarifai,
        visitor: prevState.visitor
      };
    });
  };
  handleUpdateState = e => {};
  handleClick = e => {
    this.setState(prevState => {
      return {
        node: prevState.node,
        picture: prevState.picture,
        modalOpen: true,
        clarifai: prevState.clarifai,
        visitor: prevState.visitor
      };
    });
    let state = this.state;
    let x = C_SECRET;
    let picture = this.props.pictures[0];
    const self = this;
    // debugger;
    this.state.clarifai.workflow
      .predict("personalWebSite", {
        base64: this.props.pictures[0].split(",")[1]
      })
      .then(
        function(response) {
          // debugger;
          // do something with response
          // demographics data
          let demographics =
            response.results[0].outputs[0].data.regions[0].data.face;
          // celebrity data
          let celebrity =
            response.results[0].outputs[1].data.regions[0].data.face.identity
              .concepts;
          // general data
          let general = response.results[0].outputs[2].data.concepts;
          let celebrityList = celebrity.slice(0, 3).map(el => el.name);
          let generalList = general.map(el => el.name);
          // debugger;
          console.log("im here");
          self.setState(prevState => {
            console.log("now here");
            console.log("prevState", prevState, "state", this.state);
            return {
              node: prevState.node,
              picture: prevState.picture,
              modalOpen: prevState.modalOpen,
              clarifai: prevState.clarifai,
              visitor: {
                demographics: prevState.demographics,
                celebrity: celebrityList,
                general: generalList
              }
            };
          });
        },
        function(err) {
          // there was an error
          console.log("err", err);
        }
      );
  };

  handleClose = e => {
    this.setState(prevState => {
      return {
        node: prevState.node,
        picture: prevState.picture,
        modalOpen: false,
        clarifai: prevState.clarifai,
        visitor: prevState.visitor
      };
    });
  };

  getPicture = coordinates => {
    let props = this.props;
    // debugger;
    const pictures = this.props.parameters.followingPictures;
    if (!!this.state.node) {
      let x = this.props.parameters.mouse.coordinates.x;
      let y = this.props.parameters.mouse.coordinates.y;
      // // followingPictures: {
      // //   center: [
      // //     "front.png",
      // //     "centerTop.png",
      // //     "centerRight.png",
      // //     "centerBottom.png",
      // //     "centerLeft.png"
      // //   ],
      // //   corners: [
      // //     "rightTop.png",
      // //     "rightBottom.png",
      // //     "leftBottom.png",
      // //     "leftTop.png"
      // //   ]
      // // }
      //
      switch (true) {
        // upCenter
        case x > coordinates.left * 1.3 &&
          x < coordinates.right * 0.7 &&
          y < coordinates.top * 1.4: {
          return pictures.center[1];
        }
        // downCenter
        case x > coordinates.left * 1.3 &&
          x < coordinates.right * 0.7 &&
          y > coordinates.bottom * 0.6: {
          return pictures.center[3];
        }
        // leftCenter
        case y > coordinates.top * 1.3 &&
          y < coordinates.bottom * 0.7 &&
          x < coordinates.left * 1.3: {
          return pictures.center[4];
        }
        // RightCenter
        case y > coordinates.top * 1.3 &&
          y < coordinates.bottom * 0.7 &&
          x > coordinates.right * 0.7: {
          return pictures.center[2];
        }
        // topCornerLeft
        case x < coordinates.left * 1.3 && y < coordinates.top * 1.3: {
          return pictures.corners[3];
        }
        // bottomCornerLeft
        case x < coordinates.left * 1.3 && y > coordinates.bottom * 0.7: {
          return pictures.corners[2];
        }
        // topCornerRight
        case x > coordinates.right * 0.7 && y < coordinates.top * 1.3: {
          return pictures.corners[0];
        }
        // bottomCornerRight
        case x > coordinates.right * 0.7 && y > coordinates.bottom * 0.7: {
          return pictures.corners[1];
        }
        default:
          return pictures.center[0];
      }
    } else {
      return pictures.center[0];
    }
  };
  componentDidMount = () => {
    let x = C_SECRET;
    // debugger;
    const app = new Clarifai.App({ apiKey: C_SECRET.id });
    // console.log("mounted app =", app);
    this.setState(prevState => {
      return {
        node: prevState.node,
        picture: prevState.picture,
        modalOpen: false,
        clarifai: app,
        visitor: prevState.visitor
      };
    });
  };
  render() {
    console.log("state", this.state);
    // console.log(this.props);
    const celebrities = this.state.visitor.celebrity.map(el => {
      <List.item>el</List.item>;
    });
    const items = this.props.pictures.map(picture => {
      return (
        <Item key={uuidv4()}>
          <Item.Image src={picture} />
        </Item>
      );
    });
    return (
      <Tilt
        options={{ max: 15, scale: 1, reverse: true }}
        onMouseMove={this.handleMouseMove}
      >
        <Grid stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            <Grid.Column width={6}>
              <Tilt
                className="Tilt"
                options={{ max: 1, scale: 1, reverse: true }}
                style={{
                  bottom: "0px",
                  width: "700px",
                  height: "350px",
                  position: "absolute",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundColor: "rgba(250,250,250,0.4)"
                }}
              />
              <Tilt
                className={css(styles.tilt)}
                options={{ max: 1, scale: 1, reverse: true }}
              >
                <Ref innerRef={node => this.setState({ node })}>
                  <Image
                    onMouseOver={this.handleMouseOver}
                    onClick={this.handleClick}
                    src={`${require(`../images/parameters/${
                      this.state.picture
                    }`)}`}
                  />
                </Ref>
              </Tilt>
            </Grid.Column>
            <Grid.Column
              centered
              verticalAlign="middle"
              width={8}
              textAlign="justified"
              floated="right"
            >
              <Header>{this.props.parameters.about}</Header>
              <span>{}</span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src={this.props.pictures[0]} />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
              <List>{celebrities}</List>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Tilt>
    );
  }
}

const mapStateToProps = store => {
  return {
    pictures: store.pictures.pictures,
    refItem: store.pictures.refItem,
    parameters: store.parameters
  };
};
export default connect(mapStateToProps, actions)(About);
