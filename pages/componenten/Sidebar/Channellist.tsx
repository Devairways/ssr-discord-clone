import React from  "react";

const channellist = [
{
	Channelname:"HIYAAHHH",
 	list: 
	[
		{name:"jonesy palace"},
		{name:"jonesy palace"},
		{name:"jonesy palace"},
		{name:"jonesy palace"},
	]
},
{
	Channelname:"HIYAAHHH",
 	list: 
	[
		{name:"jonesy palace"},
		{name:"jonesy palace"},
		{name:"jonesy palace"},
		{name:"jonesy palace"},
	]
},
{
	Channelname:"HIYAAHHH",
 	list: 
	[
		{name:"jonesy palace"},
		{name:"jonesy palace"},
		{name:"jonesy palace"},
		{name:"jonesy palace"},
	]
}
]

const ChannelList = ()=>{

	const createchannels = (list) =>{
       
		return(
			<ul>
				{list.map(item => {
					return(
						<li key={item.name} ><img src="/assets/hash_icoon.svg" alt="hash"/>{item.name}</li>
						)
					})
				}
			</ul>
			)
	}

	return(
		<div>
			<div className="border">
				<h3>Channelname</h3>
			</div>
			{
			channellist.map((item, i) =>{
					return (<div key={i}><h3>{item.Channelname}</h3>{createchannels(item.list)}</div>)
				})
				
			}
			
		</div>
	)
}

export default ChannelList;