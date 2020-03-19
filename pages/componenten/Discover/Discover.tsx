import React, { useState, useEffect, useContext } from "react";
import Modal from  "../Modal/Modal";

import { dataFetch } from "../../Services/dataFetch";


const Discover = ()=>{
	const [servers, setServers] = useState([]);
	const [modal, setModal] = useState({ open: false, server_id: "", server_name: "" });
	
	useEffect(()=>{
    	if(true){
    		dataFetch(`servers/all`)
    		.then(res => setServers(res.server))
    	}
    },[])
    
    const openModal = (id, name) =>{
    	setModal({
    		open: true,
    		server_id: id,
    		server_name: name
    	});
    }
    
    const closeModal = () =>{
        setModal({ ...modal, open: false })
    }
  	
	return(
		<div style={{ background: "#40444b", gridColumn: "2/4" }} >
		{
			modal.open && <Modal type="addServer" params={{ id: modal.server_id, name: modal.server_name }} close={ closeModal }/>
		}
		
		{servers.map(server => {
			return <div id={server._id} style={{width:"265px",height:"304px",border:"2px solid black"}} onClick={ e => openModal(server._id, server.server_name) }>{server.server_name}</div>
		})}
		</div>
	)
}

export default Discover;