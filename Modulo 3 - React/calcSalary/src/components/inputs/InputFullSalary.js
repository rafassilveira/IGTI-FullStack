import React, { Component } from 'react';

export default class InputFullSalary extends Component {
 
	render() {	
    return (
		<div>
				<span>Salário Bruto</span>
				<input type="number " value={this.props.salary}/>
		</div>
		)
  }
}
