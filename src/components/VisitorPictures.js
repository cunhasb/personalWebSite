import React from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Card,
  Divider,
  Segment,
  Label,
  Grid
} from "semantic-ui-react";
import uuidv4 from "uuid/v4";

// trigger={<Button>Show Modal</Button>}
const VisitorPictures = props => (
  <Modal
    closeIcon
    closeOnDimmerClick={true}
    closeOnDocumentClick={true}
    onClose={props.close}
    open={props.open}
    style={{
      position: "absolute",
      // top: "50%",
      left: "50%",
      transform: "translate(-50%)",
      textAlign: "center"
    }}
  >
    {console.log("visitor", props)}
    <Modal.Header>You Are Really Photogenic!</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>There is no Magic</Header>
        <p>
          All the information I showed you is possible by applying Image
          Recognition software to your picture, and it's provided by an "AI" API
          Called Clarifai
        </p>
        <p>I took the first image taken and analyzed it against three models</p>
        <p>Demographics * Celebrity * General</p>
        <p>
          I only displayed the results returned. And please rest assured I'm not
          saving anything. All data dissapears once you close the page
        </p>
        <Header>Here is the Summary</Header>
      </Modal.Description>
    </Modal.Content>
    <Segment>
      <Grid centered>
        <Grid.Row columns="equal">
          <Grid.Column textAlign="center">
            <Header>Gender Appearance</Header>
            <Label.Group>
              <Label style={{ textTransform: "capitalize" }}>
                {props.demographics.gender}
              </Label>
            </Label.Group>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Header>Age Appearance Range</Header>
            <Label.Group>
              {props.demographics.age.map(el => {
                return <Label>{`${el}`}</Label>;
              })}
            </Label.Group>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Header>Ethnicity Apperance</Header>
            <Label.Group>
              {props.demographics.ethnicity
                ? props.demographics.ethnicity.map(el => {
                    return (
                      <Label style={{ textTransform: "capitalize" }}>
                        {el}
                      </Label>
                    );
                  })
                : ""}
            </Label.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6} textAlign="center">
            <Header>Celebrity Look A Like</Header>
            {props.celebrities
              ? props.celebrities.map(el => {
                  return (
                    <Label style={{ textTransform: "capitalize" }}>{el}</Label>
                  );
                })
              : ""}
          </Grid.Column>
          <Grid.Column width={10} textAlign="center">
            <Header>Things Spotted</Header>
            {props.general
              ? props.general.map(el => {
                  return (
                    <Label style={{ textTransform: "capitalize" }}>{el}</Label>
                  );
                })
              : ""}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Header>Pictures Taken</Header>
    <Card.Group centered>
      {props.pictures.map(picture => {
        return <Card key={uuidv4()} raised image={picture} />;
      })}
    </Card.Group>
    <Divider hidden />
  </Modal>
);

export default VisitorPictures;
