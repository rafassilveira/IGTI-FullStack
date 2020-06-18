import React, { Component } from "react";

export default class IncrementButton extends Component {
  // criando uma função passando a props
  handleButtonClick = () => {
    this.props.onIncrement("+");
  };
  render() {
    return (
      <button
        onClick={this.handleButtonClick}
        className="waves-effect waves-light btn green darken-4"
      >
        +
      </button>
    );
  }
}
