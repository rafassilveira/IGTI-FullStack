import React, { Component } from 'react';


import css from './counter.module.css';

export default class Counter extends Component {

  constructor() {
    super();
// usando state para criar atributos
   this.state ={
	   currentCounter:2,
	   steps:0,
   };
  }

 
 
 handleButtonDownClick =()=>{
	 const {currentCounter,steps} = this.state
	 
	 this.setState({
		 currentCounter:currentCounter -1,
		 steps:steps + 1,
	 });
 }
 handleButtonUpClick =()=>{
	 const {currentCounter,steps} = this.state
	 
	 this.setState({
		 currentCounter:currentCounter +1,
		 steps:steps + 1,
	 });
 }
  render() {
	  const {currentCounter,steps} = this.state;
    return (
		// no JSX é alguns atributos os nomes foram modificados, por isso usamos className ao inves de class
		// O que está em {} são códigos JS dentro do JSX 
		// Para usar o css, bastat usar o nome de como importamos o css (css) e o nome da classe 
      <div className={css.counterContainer}>
        <button
          onClick={this.handleButtonDownClick}
          className="waves-effect waves-light btn red darken-4">
          -
        </button>
        <span className={css.counterValue}>{currentCounter}</span>
        <button 
			onClick={this.handleButtonUpClick}
			className="waves-effect waves-light btn green darken-4" >
          +
        </button>
		<span className={css.counterContainer}>({steps}) </span>
      </div>
    );
  }
}
