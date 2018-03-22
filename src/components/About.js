import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/picturesActions";
import {
  Image,
  Segment,
  Header,
  Item,
  Container,
  Grid
} from "semantic-ui-react";
import PageShell from "../components/PageShell";
import { TransitionGroup } from "react-transition-group"; // ES6
import Webcam from "react-webcam";
import uuidv4 from "uuid/v4";
import Tilt from "react-tilt";
import { css } from "aphrodite";
import { styles } from "../styles/about";

class About extends React.Component {
  render() {
    console.log("pictures", this.state);
    console.log(this.props);
    const items = this.props.pictures.map(picture => {
      return (
        <Item key={uuidv4()}>
          <Item.Image src={picture} />
        </Item>
      );
    });
    return (
      <Tilt options={{ max: 15, scale: 1, reverse: true }}>
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
                style={{
                  left: "13.8%",
                  backgroundColor: "blue",
                  width: "100%",
                  position: "relative",
                  bottom: "2%"
                }}
              >
                <Image
                  src={`${require("../images/fabianoSketch2.png")}`}
                  style={{}}
                />
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
