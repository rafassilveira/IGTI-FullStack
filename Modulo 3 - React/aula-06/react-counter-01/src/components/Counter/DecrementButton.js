import React, { Component } from "react";

export default class DecrementButton extends Component {
  // criando uma função passando a props
  handleButtonClick = () => {
    this.props.onDecrement("-");
  };
  render() {
    return (
      
        <button
          onClick={this.handleButtonClick}
          className="waves-effect waves-light btn red darken-4"
        >
          -
        </button>
      
    );
  }
}
