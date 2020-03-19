import React, { useContext, useEffect, useState } from  "react";
import Modal from  "../Modal/Modal";

import { store } from '../../Services/store';


const Nav = ({ changeRoute, discover })=>{
	const user = useContext(store)
	const [servers, setServers] = useState([]);
	const [modal, setModal] = useState({ open: false });
	 
    useEffect(()=>{
    	if (user.state.data){
    		setServers(user.state.data.servers);
    		return;
    	}
    },[]);

	const closeModal = () =>{
		setModal({ open: false })
	}

	return(
		<nav className="gridBox1 navPosition">
		{
			modal.open && <Modal type="createServer" params="" close={closeModal}/>
		}
			<div>
				<div className="serverPanel centerContent">
					 <img src="/assets/home_icoon.svg"  alt="home" id="/" onClick={e => changeRoute(e)}/>
				</div>
				<div className="border2"/>
				{
					// render subscribed server icons
					servers.map(server => {
						return(
							<div className="serverPanel centerContent">
						    	<img src="/assets/home_icoon.svg" height="30px" style={{ padding: "10px" }} alt={server.name} id={server.id} onClick={e => changeRoute(e)}/>
							</div>
							)
						}
					)
				}
				<div className="serverPanel centerContent">
					<img src="/assets/plus_icoon.svg" height="30px" alt='Server' style={{ padding: "10px" }} onClick={e => setModal({open: true})}/>
				</div>
				<div className="serverPanel centerContent">
					<img src="/assets/search_icoon.svg" height="30px" alt="Discover" style={{ padding: "10px" }} onClick={e => discover()}/>
				</div>
				<div className="border2"/>
			</div>
		</nav>
	);
}

export default Nav;