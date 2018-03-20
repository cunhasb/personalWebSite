import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/picturesActions";
import PageShell from "../components/PageShell";
import Webcam from "react-webcam";

class About extends React.Component {
  render() {
    return (
      <div>
        {`Este e o meu state ${this.state}`}
        <Webcam
          style={{ visibility: "hidden", position: "absolute" }}
          audio={false}
          height={480}
          ref={e => this.props.setRefItem(e)}
          screenshotFormat="image/jpeg"
          width={640}
        />
        <button onClick={() => this.props.takePicture(this.props.refItem)}>
          Capture photo
        </button>
        <Item.Group>
          <Item>
            <Item.Content>I go here</Item.Content>
          </Item>
          {items}
        </Item.Group>
      </div>
    );
  }
}
const style = {
  preview: {
    position: "relative"
  },
  captureContainer: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    zIndex: 1,
    bottom: 0,
    width: "100%",
    backgroundColor: "red"
  },
  captureButton: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    height: 56,
    width: 56,
    color: "#000",
    margin: 20
  },
  captureImage: {
    width: "30%"
  }
};
const mapStateToProps = store => {
  return { pictures: store.pictures.pictures, refItem: store.pictures.refItem };
};
export default connect(mapStateToProps, actions)(About);
