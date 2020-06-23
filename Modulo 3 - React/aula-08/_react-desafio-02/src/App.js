import React, { Component } from "react";
import ProjetoBase from "./components/ProjetoBase/ProjetoBase";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allContries: [],
    };
  }

  // componentDidMount é um bom lugar para inserir requisições já que onde inicia
  // o componente
  async componentDidMount() {
    const res = await fetch(" https://restcountries.eu/rest/v2/all");
    const json = await res.json();
    // Fazendo um map dentro do resultado da requisição a api para trazer alguns
    // dados da API, dentro do map estamos fazendo a desestruturação direto
    const allContries = json.map(({ numericCode, name, flag, population }) => {
      return {
        id: numericCode,
        name,
        flag,
        population,
      };
    });
    this.setState({
      allContries: json,
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Reac Countries</h1>
      </div>
    );
  }
}
