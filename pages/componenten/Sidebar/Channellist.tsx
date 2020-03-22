import React, { useState } from  "react";
import Modal from  "../Modal/Modal";

const ChannelList = ({ list, name, changeChannel, route })=>{
	const [modal, setModal] = useState({ open: false });

	const closeModal = () =>{
		setModal({ open: false })
	}

	return(
		<div>
		{
			modal.open && <Modal type="createChannel" params={route} close={closeModal}/>
		}
			<div className="border">
				<h3>{name}</h3>
			</div>
			<ul>
				<li><h3>channels: <span onClick={e => setModal({open: true})}>+</span></h3></li>
			{   
				list.length ? 
				    list.map(item => {
						return(
							<li id={item.id} style={{padding: "5px"}} onClick={e => changeChannel(e)}><img src="/assets/hash_icoon.svg" height="20px" style={{marginRight:"5px", marginBottom: "-5px"}} alt="hash"/>{item.channel_name}</li>
							)
						})
				: <div><h3>Nothing to see here... Socialize!</h3></div>
			}
			</ul>			
		</div>
	)
}

export default ChannelList;