import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as actions from "../actions/picturesActions";
import { startClient, analyzePicture } from "../actions/clarifaiActions";
import {
  Image,
  Segment,
  Header,
  Item,
  Container,
  Grid,
  Ref,
  Modal,
  List,
  Card,
  Responsive
} from "semantic-ui-react";
import PageShell from "../components/PageShell";
import { TransitionGroup } from "react-transition-group"; // ES6
import Webcam from "react-webcam";
import uuidv4 from "uuid/v4";
import Tilt from "react-tilt";
import { css } from "aphrodite";
import { styles } from "../styles/about";
import ModalAbout from "../components/ModalAbout";

class About extends React.Component {
  state = {
    node: "",
    picture: "front.png",
    modalOpen: false
  };
  handleMouseMove = e => {
    let element = ReactDOM.findDOMNode(this.state.node);
    let coordinates = element.getBoundingClientRect();
    let picture = this.getPicture(coordinates);
    this.setState(prevState => {
      return {
        node: prevState.node,
        picture: picture,
        modalOpen: prevState.modalOpen
      };
    });
  };
  handleUpdateState = e => {};
  handleClick = e => {
    this.props.startClient();
    this.props.analyzePicture();
    this.setState(prevState => {
      return {
        node: prevState.node,
        picture: prevState.picture,
        modalOpen: true
      };
    });
  };

  handleClose = e => {
    this.setState(prevState => {
      return {
        node: prevState.node,
        picture: prevState.picture,
        modalOpen: false
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
          y > coordinates.bottom * 0.7: {
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

  render() {
    // console.log("state", this.state);
    console.log("about props", this.props);
    console.log("celebrity", this.props.clarifai.celebrity);
    const celebrities = this.props.clarifai.celebrity.map(el => {
      return <List.Item key={uuidv4()}>{el}</List.Item>;
    });
    const items = this.props.pictures.map(picture => {
      return <Card raised key={uuidv4()} image={picture} />;
    });
    // console.log("celebrities", celebrities, "items", items);
    return (
      <div className={css(styles.wrapper)}>
        <Tilt
          style={{
            position: "relative",
            width: "100%",
            height: "100%"
          }}
          options={{ max: 15, scale: 1, reverse: true }}
          onMouseMove={this.handleMouseMove}
        >
          <div className={css(styles.gridWrapper)}>
            <Grid centered stackable verticalAlign="middle">
              <Grid.Row columns={2}>
                <Grid.Column width={6}>
                  <Responsive minWidth={480}>
                    <Tilt
                      style={{
                        bottom: "0px",
                        width: "100%",
                        height: "50%",
                        position: "absolute",
                        backgroundColor: "rgba(250,250,250,0.6)"
                      }}
                      options={{ max: 1, scale: 1, reverse: true }}
                    />
                  </Responsive>
                  <Tilt options={{ max: 10, scale: 1, reverse: true }}>
                    <Ref innerRef={node => this.setState({ node })}>
                      <Image
                        className={css(styles.image)}
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
                >
                  <Header style={{ fontSize: "1.5vw" }}>
                    {this.props.parameters.about}
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Responsive maxWidth={480}>
                <Header textAlign="justified" style={{ fontSize: "4vw" }}>
                  {this.props.parameters.about}
                </Header>
              </Responsive>
            </Grid>

            <ModalAbout open={this.state.modalOpen} close={this.handleClose} />
          </div>
        </Tilt>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    pictures: store.pictures.pictures,
    refItem: store.pictures.refItem,
    parameters: store.parameters,
    clarifai: store.clarifai
  };
};
export default connect(mapStateToProps, {
  actions,
  startClient,
  analyzePicture
})(About);
