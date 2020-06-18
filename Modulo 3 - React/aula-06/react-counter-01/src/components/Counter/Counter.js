import React, { Component } from "react";

import css from "./counter.module.css";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import Value from "./Value";
import Steps from "./Steps";

export default class Counter extends Component {
  constructor() {
    super();
    // usando state para criar atributos
    this.state = {
      currentCounter: 2,
      steps: 0,
    };
  }

  handleButtonClick = (clickType) => {
    const { currentCounter, steps } = this.state;

    this.setState({
      currentCounter:
        clickType === "+" ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };
  render() {
    const { currentCounter, steps } = this.state;
    return (
      // no JSX é alguns atributos os nomes foram modificados, por isso usamos className ao inves de class
      // O que está em {} são códigos JS dentro do JSX
      // Para usar o css, bastat usar o nome de como importamos o css (css) e o nome da classe
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} />

        <Value value={currentCounter} />

        {/* onIncrement é uma props, props normalmente começam com on */}
        {/* Assi, que for clicado no botao irá chamar a função handleButtonClick */}
        <IncrementButton onIncrement={this.handleButtonClick} />

        <Steps currentStep={steps} />
      </div>
    );
  }
}
