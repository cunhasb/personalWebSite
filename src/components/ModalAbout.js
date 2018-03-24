import React, { Component } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { connect } from "react-redux";

class NestedModal extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    console.log("props modal", this.props);
    const { open } = this.state;
    debugger;
    return (
      <Modal
        style={{ position: "relative", top: "50%", left: "50%" }}
        dimmer={false}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        trigger={
          <Button primary icon>
            Proceed <Icon name="right chevron" />
          </Button>
        }
        size="small"
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>{`That's everything!`}</p>
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
    <Modal.Header>Modal #1</Modal.Header>
    <Modal.Content image>
      <div className="image">
        <Icon name="right arrow" />
      </div>
      <Modal.Description>
        <p>We have more to share with you. Follow us along to modal 2</p>
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
