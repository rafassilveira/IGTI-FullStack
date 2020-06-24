import React, { Component } from "react";
import Countries from "./components/countries/Countries";
import Header from "./components/header/Header";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allCountries: [],
      // boa pratica criar outra varipavel com os paises filtrados
      filteredCountries: [],
      filterPopulation: 0,
      // os estados do react do tipo input não podem ser null ou undefined
      filter: "",
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
        filterName: name.toLowerCase(),
        flag,
        population,
      };
    });

    const filterPopulation = this.calculateTotalPopulationFrom(allCountries);

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
      filterPopulation
    });
  }
  calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((acc, current) => {
      return acc + current.population;
    }, 0);
    return totalPopulation;
  };
  // var newText é o evento que o usuario digitou
  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });
    const filterLowerCase = newText.toLowerCase();

    const filteredCountries = this.state.allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase);
    });

    const filterPopulation = this.calculateTotalPopulationFrom(
      filteredCountries
    );

    this.setState({
      filteredCountries,
      filterPopulation,
    });
  };
  render() {
    const { filteredCountries, filter, filterPopulation } = this.state;
    return (
      <div className="container">
        <h1>React Countries</h1>
        <Header
          filter={filter}
          countryCount={filteredCountries.length}
          totalPopulation={filterPopulation}
          onChangeFilter={this.handleChangeFilter}
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}
