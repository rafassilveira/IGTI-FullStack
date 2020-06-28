import React, { Component } from 'react';
import InputFullSalary from './components/inputs/InputFullSalary';
import InputReadOnly from './components/inputs/InputReadOnly';
import {calculateSalaryFrom} from './salary-3/salary'
console.log(calculateSalaryFrom(1000))
export default class App extends Component {

	constructor(){
		super()
		this.state ={
			fullSalary:0,
			cleanSalary:0
		}						
		this.setState({
			fullSalary
		})			
	}
	render() {
		const {fullSalary} = this.state
    return(
			<div className="container">
				<h1> React Salário </h1>
				<InputFullSalary salary={fullSalary} />
				 <InputReadOnly />
			</div>
			
		)
			
  }
}
