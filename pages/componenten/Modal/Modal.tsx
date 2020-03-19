import React, { useContext, useEffect, useState, Fragment } from  "react";

import { store } from "../../Services/store";
import { updateUser } from "../../Services/Users";
import { createServer } from "../../Services/dataFetch";

const Modal = ({ type, params, close })=>{
	const user = useContext(store);
	const { dispatch } = user;
	const [id, setId] = useState("");
	const [modalView, setModalView] = useState("");
	const [server, setServer] = useState({ name: "", picture: "", submitted: false });
	 
    useEffect(()=>{
    	if (user.state.data){
    		setId(user.state.data._id);
    		setModalView(type);
    	}
    },[])

    const handleChange = (e) => {
    	setServer({ ...server, submitted: false })
        const { name, value } = e.target;
        setServer({...server, [name]: value });
    }

    const handleSubmit = (action) =>{
    	setServer({ ...server, submitted: true })
    	if(!server.name || !server.picture){
    		return;
    	}
    	switch(action) {
    		case "addServerToUser":
    			updateUser(id, params.id, params.name);
    			close();
    			break;
			case "createServer":
				createServer(id, server.name, server.picture);
				close();
    			break;
    		default:
    			break;
    	}
    }

	return(
		<div id="modal">
		{ 
			type === "addServer" ?
			// Modal for Discover page
			<div>
				<span onClick={e => close()}>X</span>
				<h3>{`So you want to join ${params.name}?`}</h3>
				<button onClick={e => handleSubmit("addServerToUser")}>Hell Yeah!</button>
			</div>
			:
			// modal for creating server
			<div>
				<span onClick={e => close()}>X</span>
				<form name="Modal" className=""> 
	                <div className="">
	                    <input type="text" className="" name="name" value={server.name} onChange={handleChange} placeholder="Server name"/>
	                    <input type="text" className="" name="picture" value={server.picture} onChange={handleChange} placeholder="Server picture"/>
	                    {
	                    	server.submitted && !server.name && !server.picture &&
	                        <div className="help-block">Please fill out form</div>
	                    }
	                </div>
	                <div className="" >
	                    <a onClick={e => handleSubmit("createServer")}>Go</a>
	                </div>
	            </form>
			</div>
		}
		</div>
	);
}

export default Modal;