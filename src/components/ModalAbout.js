import React, { Component } from "react";
import {
  Button,
  Icon,
  Modal,
  Image,
  List,
  Transition,
  Divider
} from "semantic-ui-react";
import { connect } from "react-redux";
class NestedModal extends Component {
  state = { open: false, timer: "", messages: [], items: [] };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  handleClick = e => {
    let timer = setInterval(this.tick, 8000);
    this.setState({
      timer: timer,
      items: [
        `Let's begin by your gender appearance, I would say that I'm pretty confident your appear to be  ${
          this.props.demographics.gender
        }`
      ]
    });
    console.log("clicked");
  };
  componentWillUnmout = () => {
    clearInterval(this.state.timer);
  };
  tick = () => {
    if (this.state.items.length < this.state.messages.length) {
      this.setState({
        items: this.state.messages.slice(0, this.state.items.length + 1)
      });
    } else {
      clearInterval(this.state.timer);
    }
  };

  componentDidMount = () => {
    const messages = [
      `Let's begin by your gender appearance, I would say that I'm pretty confident your appear to be  ${
        this.props.demographics.gender
      }`,
      `Now, let me try to guess your age,don't worry I won't tell anyone, it's only between you and me. I would say that you are between ${
        this.props.demographics.age[0]
      } and ${this.props.demographics.age[1]}`,
      `How Am I doing? Let's take it up a notch, I'm now going to try to guess your ethnicity. Be kind though, sometimes I get it wrong, you're most likely to be ${
        this.props.demographics.ethnicity[0]
      }, followed by ${this.props.demographics.ethnicity[1]} and ${
        this.props.demographics.ethnicity[0]
      }`,
      `Your face is very familiar, you remind me of someone, not quite sure who, but your face is very familiar, are you a celebrity? Oh, yeah, you remind me of ${
        this.props.celebrity[0]
      }, or is it ${this.props.celebrity[1]}, well I even see some of ${
        this.props.celebrity[2]
      } in you.`
    ];
    this.setState(prevState => {
      return { messages: messages };
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
            duration={400}
            divided
            size="huge"
            verticalAlign="middle"
          >
            {items.map(item => (
              <List.Item key={item}>
                <List.Content header={item} />
                <Divider hidden />
              </List.Item>
            ))}
          </Transition.Group>
        </Modal.Content>
        <Modal.Actions>
          <Button icon="check" content="All Done" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    );
  }
}

const ModalExampleMultiple = props => (
  <Modal
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
  // debugger;
  return { ...store.clarifai, pictures: store.pictures.pictures };
};
export default connect(mapStateToProps)(ModalExampleMultiple);
