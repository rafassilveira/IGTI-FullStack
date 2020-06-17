import React, { Component } from 'react';
// Para usar o css, criamos um arquivo no mesmo diretorio desse arquivo e importamos,
// é importante usar o nomeArquivo.module.css para o react entender o modulos

import css from './counter.module.css';

export default class Counter extends Component {
// para usar o Component temos que usar o constructor junto com o super
  constructor() {
    super();
// Aqui estamos criando atributos, que não sao muito comum em react, normalmente se usa o state que será explicado em aula futuras // para criar atributos é obrigátorio o uso de 'this'
    this.currentCounter = 2;
  }

  handleClick = () => {
    console.log('Click');
    this.currentCounter--;
    this.render();
  };

  render() {
    return (
		// no JSX é alguns atributos os nomes foram modificados, por isso usamos className ao inves de class
		// O que está em {} são códigos JS dentro do JSX 
		// Para usar o css, bastat usar o nome de como importamos o css (css) e o nome da classe 
      <div className={css.counterContainer}>
        <button
          onClick={this.handleClick}
          className="waves-effect waves-light btn red darken-4">
          -
        </button>
        <span className={css.counterValue}>{this.currentCounter}</span>
        <button
          className="waves-effect waves-light btn green darken-4"   >
          +
        </button>
      </div>
    );
  }
}
