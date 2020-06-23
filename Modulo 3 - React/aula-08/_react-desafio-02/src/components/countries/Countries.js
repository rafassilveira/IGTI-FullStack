import React,{ Component } from 'react'
import Country from './Country';

export default class Countries extends Component {
	render() {
		const { countries } = this.props
		return (
			<div>
				<ul>
					{ countries.map((country) => {
						// sempre que tiver um loop é obrigatorio o uso de uma key, para cada item ter um identificador unico
						return <li key={country.id}> <Country country={country} /> </li>
					})}
				</ul>
			</div>		
		);
	}
}