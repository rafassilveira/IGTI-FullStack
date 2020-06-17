// sem chaves são modulos principais e com chaves são modulos auxiliares
import React, { Component, Fragment } from 'react';
import Counter from './components/Counter/Counter';

// A classe que estamos criando App, estamos expotando para ser utilizada em outros arquivos,
// Ao mesmo tempo que estamos importando modulos do Component para essa classe
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Counter />
        <Counter />
        <Counter />
      </Fragment>
		
		
    );
  }
}
