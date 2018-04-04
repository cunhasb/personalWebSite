import React from "react";
import { Button, Header, Image, Modal, Card } from "semantic-ui-react";

const VisitorPictures = () => (
  <Modal
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      textAlign: "center"
    }}
    trigger={<Button>Show Modal</Button>}
  >
    <Modal.Header>You Are Really Photogenic!</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
    <Card.Group itemsPerRow={6}>
      <Card raised image="{src}" />
      <Card raised image="{src}" />
      <Card raised image="{src}" />
      <Card raised image="{src}" />
      <Card raised image="{src}" />
      <Card raised image="{src}" />
      <Card raised image="{src}" />
      <Card raised image="{src}" />
      <Card raised image="{src}" />
      <Card raised image="{src}" />
      <Card raised image="{src}" />
      <Card raised image="{src}" />
    </Card.Group>
  </Modal>
);

export default VisitorPictures;
