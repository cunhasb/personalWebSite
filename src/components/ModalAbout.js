import React, { Component } from "react";
import {
  Button,
  Icon,
  Modal,
  Image,
  List,
  Transition,
  Divider,
  Loader,
  Label
} from "semantic-ui-react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";
class NestedModal extends Component {
  state = { open: false, timer: "", messages: [], items: [], categories: [] };

  open = () => {
    this.setState({ open: true });
  };
  close = () => {
    clearInterval(this.state.timer);
    this.setState({ open: false });
  };
  handleClick = e => {
    let timer = setInterval(this.tick, 8000);
    this.setState({
      timer: timer,
      items: [this.state.messages.demographics[0]],
      categories: ["general", "celebrity", "demographics"]
    });
  };
  componentWillUnmout = () => {
    clearInterval(this.state.timer);
  };
  tick = () => {
    if (this.state.categories.length > 0) {
      // if categories has items, it will set the currentCategory to the last one
      const currentCategory = this.state.categories[
        this.state.categories.length - 1
      ];
      if (
        this.state.items.length < this.state.messages[currentCategory].length
      ) {
        this.setState({
          items: this.state.messages[currentCategory].slice(
            0,
            this.state.items.length + 1
          )
        });
      } else {
        this.setState(prevState => {
          const endArray = prevState.categories.length - 1;
          const items =
            endArray > 0
              ? [prevState.messages[prevState.categories[endArray - 1]][0]]
              : [`That's it folks, I hope you liked...`];
          // debugger;
          return {
            categories: prevState.categories.slice(0, endArray),
            items: items
          };
        });
      }
    } else {
      this.close();
    }
  };

  componentDidMount = () => {
    const generalItems = this.props.general.map(el => {
      return <Label>{el}</Label>;
    });
    const messages = {
      demographics: [
        `${this.props.parameters.demographics.gender} ${
          this.props.demographics.gender
        }`,
        `${this.props.parameters.demographics.age} ${
          this.props.demographics.age[0]
        } and ${this.props.demographics.age[1]}`,
        `${this.props.parameters.demographics.ethnicity} ${
          this.props.demographics.ethnicity[0]
        }, followed by ${this.props.demographics.ethnicity[1]} and ${
          this.props.demographics.ethnicity[2]
        }`
      ],
      celebrity: [
        `${this.props.parameters.celebrity} ${this.capitalize(
          this.props.celebrity[0]
        )}, or is it ${this.capitalize(
          this.props.celebrity[1]
        )}, well I even see some of ${this.capitalize(
          this.props.celebrity[2]
        )} in you.`
      ],
      general: [this.props.parameters.general, ...generalItems]
    };
    this.setState(prevState => {
      return {
        messages: messages,
        categories: ["general", "celebrity", "demographics"]
      };
    });
  };
  capitalize = s => {
    // lowerCase entire string, then it replaces all (/g) first letter(\b.) with the return statement in the nameless function a.toUpperCase();
    return s.toLowerCase().replace(/\b./g, a => {
      return a.toUpperCase();
    });
  };
  render() {
    console.log("props modal", this.props);
    console.log("state", this.state);
    const { open, items } = this.state;
    // debugger;
    return (
      <Modal
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)"
        }}
        dimmer={false}
        open={open}
        closeOnDocumentClick={true}
        onOpen={this.open}
        onClose={this.close}
        trigger={
          <Button primary icon onClick={this.handleClick}>
            Proceed <Icon name="right chevron" />
          </Button>
        }
        size="small"
      >
        <Modal.Header>My Guesses</Modal.Header>
        <Modal.Content>
          <Transition.Group
            animation="scale"
            as={List}
            duration={700}
            divided
            size="huge"
            verticalAlign="middle"
          >
            {items.map(item => {
              return (
                <List.Item key={item}>
                  <List.Header>
                    <Label.Group size="huge" style={{ textAlign: "center" }}>
                      {item}
                    </Label.Group>
                  </List.Header>
                </List.Item>
              );
            })}
          </Transition.Group>
        </Modal.Content>
        <Loader active inline="centered" />
        <Modal.Actions>
          <Button
            icon="check"
            content={!!this.state.categories.length ? "Close" : "All Done"}
            onClick={this.close}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

const ModalExampleMultiple = props => (
  <Modal
    closeIcon
    style={{
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%)"
    }}
    open={props.open}
    onClose={props.close}
  >
    <Modal.Header>{`Let's Play a Game!`}</Modal.Header>
    <Modal.Content image>
      <div className="image">
        <Icon name="right arrow" />
      </div>
      <Modal.Description>
        <p>
          {`I'm going to try to guess some things about you. Let me know if I'm
          right`}
        </p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <NestedModal {...props} />
    </Modal.Actions>
  </Modal>
);
const mapStateToProps = store => {
  return {
    ...store.clarifai,
    pictures: store.pictures.pictures,
    parameters: store.parameters.clarifai
  };
};
export default connect(mapStateToProps)(ModalExampleMultiple);
