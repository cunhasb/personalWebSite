import React from "react";
import { Button, Header, Image, Modal, Card, Divider } from "semantic-ui-react";

const VisitorPictures = props => (
  <Modal
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%)",
      // transform: "translate(-50%,-50%)",
      textAlign: "center"
    }}
    trigger={<Button>Show Modal</Button>}
  >
    <Modal.Header>You Are Really Photogenic!</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>There is no Magic</Header>
        <p>
          All the information we showed you came from an AI API Called Clarifai
        </p>
        <p>
          We took the first image taken and analyzed it against three models
        </p>
        <p>Demographcs * Celebrity * General</p>
        <p>
          We only displayed the results. And please rest assured I'm not saving
          anything...
        </p>
      </Modal.Description>
    </Modal.Content>
    <Card.Group fluid centered>
      {props.pictures.map(picture => {
        return <Card raised image={picture} />;
      })}
    </Card.Group>
    <Divider hidden />
  </Modal>
);

export default VisitorPictures;
