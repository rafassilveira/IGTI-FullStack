import React, { Component } from "react";
import css from "./counter.module.css";

export default class Value extends Component {
  render() {
    // this.props.value é o currentCounter enviado via props no arquivo Counter
    return <span className={css.counterValue}>{this.props.value}</span>;
  }
}
