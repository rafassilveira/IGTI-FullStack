import React, { Component } from "react";
import Countries from './components/countries/Countries'
import Header from './components/header/Header'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allCountries: [],
    };
  }

  // componentDidMount é um bom lugar para inserir requisições já que onde inicia
  // o componente
  async componentDidMount() {
    const res = await fetch(" https://restcountries.eu/rest/v2/all");
    const json = await res.json();
    // Fazendo um map dentro do resultado da requisição a api para trazer alguns
    // dados da API, dentro do map estamos fazendo a desestruturação direto
    const allCountries = json.map(({ numericCode, name, flag, population }) => {
      return {
        id: numericCode,
        name,
        flag,
        population,
      };
    });
    this.setState({
      allCountries: json,
    });
  }
  render() {
	  const {allCountries} = this.state
    return (
      <div className="container">
		<Header />	
        <h1>React Countries</h1>
			<Countries countries={allCountries}/>
      </div>
    );
  }
}
