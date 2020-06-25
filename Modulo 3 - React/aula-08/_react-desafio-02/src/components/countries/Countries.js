import React, { Component } from "react";
import Country from "./Country";
import css from "./countries.module.css";
export default class Countries extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div className={`${css.border} ${css.flexRow}`}>
        {countries.map((country) => {
          // sempre que tiver um loop é obrigatorio o uso de uma key, para cada item ter um identificador unico
          return <Country key={country.id} country={country} />;
        })}
      </div>
    );
  }
}
