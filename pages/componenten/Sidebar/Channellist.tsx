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

const ChannelList = ({ list, name, changeChannel })=>{

	const createchannels = (list) =>{
		return(
			<ul>
				{list.map(item => {
					return(
						<li id={item._id} onClick={e => changeChannel(e)}><img src="/assets/hash_icoon.svg" alt="hash"/>{item.name}</li>
						)
					})
				}
			</ul>
			)
	}

	return(
		<div>
			<div className="border">
				<h3>{name}</h3>
			</div>
			{
			channellist.map((item, i) =>{
					return (<div key={i}>
								<h3>{item.Channelname}</h3>
								{createchannels(item.list)}
							</div>
						)
				})
				
			}
			
		</div>
	)
}

export default ChannelList;