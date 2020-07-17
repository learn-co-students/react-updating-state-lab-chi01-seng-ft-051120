import React, { Component } from "react";

class DigitalClicker extends Component {
  state = {
    timesClicked: 0,
  };

  handleClick = () => {
    this.setState((oldState) => {
      return {
        timesClicked: oldState.timesClicked + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;
