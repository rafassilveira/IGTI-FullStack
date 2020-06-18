import React,{Component} from 'react'

export default class Band extends Component {
	constructor(){
		super()
		this.state ={
			bandName:'Angra',
			bandMembers:[
				{
					id:1,
					name:'Kiko Loureiro',
					instrument:'Guitar',
				},
				{
					id:2,
					name:'Rafael Bittencourt',
					instrument:'Guitar',
				},
				{
					id:1,
					name:'Andre Matos',
					instrument:'Vocals',
				},
			]
		}
	}
	render(){
		const {bandMembers,bandName} = this.state;
		return(			
		<div>
			<h4>{bandName}</h4>
			<ul>
				{bandMembers.map(({id,name,instrument})=>{
					return(
						<li key={id}>
							{name} - {instrument}
						</li>
					)
				})}
			</ul>	
		</div>
		)
		
	}
}
