import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "./custom-animation.css";
import PitchingCardBack from "../PitchingCardBack";
import PlayingCardBack from "../PlayingCardBack";

class MyModal extends Component {
  state = {
    open: false
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div>
        <button
          className="btn btn-primary at-bat-btn"
          onClick={this.onOpenModal}
        >
          The At Bat
        </button>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          little
          classNames={{
            transitionEnter: "transition-enter",
            transitionEnterActive: "transition-enter-active",
            transitionExit: "transition-exit-active",
            transitionExitActive: "transition-exit-active"
          }}
          animationDuration={1000}
        >
          <div className="matchup-container">
            <div className="pitcher-stats">
              <PitchingCardBack players={this.props.pitchers[0]} />
            </div>
            <div className="player-stats">
              <PlayingCardBack players={this.props.players[0]} />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default MyModal;
