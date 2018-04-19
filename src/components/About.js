import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { takePicture } from "../actions/picturesActions";
import {
  startClient,
  analyzePicture,
  savePictureData
} from "../actions/clarifaiActions";
import { setPointerType } from "../actions";
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
import VisitorPictures from "../components/VisitorPictures";
import { parseInfo } from "../services/Clarifai";

class About extends React.Component {
  state = {
    node: "",
    picture: "front.png",
    modalOpen: false,
    visitorPictures: false
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
        visitorPictures: prevState.visitorPictures
      };
    });
  };
  handleUpdateState = e => {};
  handleClick = e => {
    this.setState({ loading: true });
    let y = this.props.pictures;
    let x = !this.props.pictures[0];
    let picturePromise = new Promise((resolve, reject) => {
      // debugger;
      if (!!this.props.pictures[0]) {
        resolve(this.props.pictures);
      } else {
        let newPicture = this.props.takePicture(this.props.refItem);
        !!newPicture.picture
          ? resolve(newPicture)
          : reject("Failed to take picture");
      }
    })
      .then(res => {
        this.props.startClient();
        return this.props.analyzePicture();
      })
      .then(res => {
        return parseInfo(res);
      })
      .then(res => {
        return this.props.savePictureData(res);
      })
      .then(res => {
        this.setState(prevState => {
          return {
            node: prevState.node,
            picture: prevState.picture
          };
        });
      })
      .then(res => {
        this.setState(prevState => {
          return {
            modalOpen: true
          };
        });
      })
      .catch(err => console.log(err));
  };

  handleClose = e => {
    this.setState(prevState => {
      return {
        node: prevState.node,
        picture: prevState.picture,
        modalOpen: !prevState.modalOpen,
        visitorPictures: true
      };
    });
  };
  handleCloseVisitorPictures = (e, data) => {
    if (
      e.target.getAttribute("class").includes("transition visible active") ||
      !e.target.getAttribute("data-suir-click-target")
    ) {
      this.setState(prevState => {
        return {
          node: prevState.node,
          picture: prevState.picture,
          modalOpen: prevState.modalOpen,
          visitorPictures: false
        };
      });
    }
  };
  getPicture = coordinates => {
    let props = this.props;
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
    const celebrities = this.props.clarifai.celebrity.map(el => {
      return <List.Item key={uuidv4()}>{el}</List.Item>;
    });
    const items = this.props.pictures.map(picture => {
      return <Card raised key={uuidv4()} image={picture} />;
    });
    return (
      <div className={css(styles.outerWrapper)}>
        <Tilt
          className={css(styles.outerTilt)}
          options={{ max: 15, scale: 1, reverse: true }}
          onMouseMove={this.handleMouseMove}
        >
          <div className={css(styles.outerContainer)}>
            <div className={css(styles.imageContainer)}>
              <Responsive minWidth={600}>
                <Tilt
                  className={css(styles.imageTilt)}
                  options={{ max: 1, scale: 1, reverse: true }}
                />
              </Responsive>
              <Tilt options={{ max: 10, scale: 1, reverse: true }}>
                <Ref innerRef={node => this.setState({ node })}>
                  <Image
                    className={css(styles.image)}
                    onMouseOver={this.handleMouseOver}
                    onClick={this.handleClick}
                    onMouseEnter={() => this.props.setPointerType("hover")}
                    onMouseLeave={() => this.props.setPointerType("default")}
                    src={`${require(`../images/parameters/${
                      this.state.picture
                    }`)}`}
                  />
                </Ref>
              </Tilt>
            </div>
          </div>
        </Tilt>
        <div className={css(styles.headerContainer)}>
          <Header style={{ fontSize: "1.5vw", whiteSpace: "pre-wrap" }}>
            {this.props.parameters.about}
          </Header>
          <VisitorPictures
            open={this.state.visitorPictures}
            close={this.handleCloseVisitorPictures}
            pictures={this.props.pictures}
          />
        </div>
        <ModalAbout open={this.state.modalOpen} close={this.handleClose} />
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
  takePicture,
  startClient,
  analyzePicture,
  savePictureData,
  setPointerType
})(About);
