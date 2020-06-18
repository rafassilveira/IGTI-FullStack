import React, { Component } from "react";
import css from "./counter.module.css";

export default class Steps extends Component {
  render() {
    return (
      <span className={css.counterContainer}>({this.props.currentStep})</span>
    );
  }
}
