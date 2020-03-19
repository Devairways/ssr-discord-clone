import React from  "react";

const ChannelList = ({ list, name, changeChannel })=>{


	return(

		<div>
			<div className="border">
				<h3>{name}</h3>{console.log("tha list", list.length)}
			</div>
			<ul>
			{ list.length ? 
				list.map(item => {
					return(
						<li id={item.id} onClick={e => changeChannel(e)}><img src="/assets/hash_icoon.svg" alt="hash"/>{item.channel_name}</li>
						)
					})
				: <div><h3>Nothing to see here... Socialize!</h3></div>
			}
			</ul>			
		</div>
	)
}

export default ChannelList;