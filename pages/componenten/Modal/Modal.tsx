import React, { useContext, useEffect, useState, Fragment } from  "react";

import { store } from "../../Services/store";
import { updateUser } from "../../Services/Users";
import { createServer, createChannel } from "../../Services/dataFetch";

const Modal = ({ type, params, close })=>{
	const user = useContext(store);
	const { dispatch } = user;
	const [id, setId] = useState("");
	const [modalView, setModalView] = useState("");
	const [server, setServer] = useState({ name: "", picture: "", submitted: false, err: "" });
	const [channel, setChannel] = useState({ name: "", submitted: false });
	 
    useEffect(()=>{
    	if (user.state.data){
    		setId(user.state.data._id);
    		setModalView(type);
    	}
    },[])

    const handleChange = (e) => {
    	if(e.target.placeholder.includes("Server")){
    		setServer({ ...server, submitted: false })
	        const { name, value } = e.target;
	        setServer({...server, [name]: value });
    	}
    	else{
    		setChannel({ ...channel, submitted: false })
	        const { value } = e.target;
	        setChannel({...channel, name: value });
    	}
    	
    }

    const handleSubmit = (action) =>{
    	switch(action) {
    		case "addServerToUser":
				if(user.state.data.servers.length >= 5){
					setServer({...server, err: "Sorry no more then 5 servers per user"})
					break;
				}
    			updateUser(id, params.id, params.name);
    			close();
    			break;
			case "createServer":
				if(user.state.data.servers.length >= 5){
					setServer({...server, err: "Sorry no more then 5 servers per user"})
					break;
				}
				setServer({ ...server, submitted: true })
				if(!server.name){
					setServer({...server, err: "Please enter a Server name"})
    				break;
    			}
				createServer(id, server.name, server.picture)
				.then(user => dispatch({type: "userUpdate", payload: user }));
				close();
    			break;
			case "createChannel":
				setChannel({ ...channel, submitted: true })
				if(!channel.name){
    				break;
    			}
				createChannel(id, channel.name, params)
				.then(msg => {if(msg === "succes"){console.log("yeah baby")}});
				close();
    			break;
    		default:
    			break;
    	}
    }

	return(
		<div id="modal">
		{ 
			type === "addServer" && (
			// Modal for Discover page
			<div>
				<span onClick={e => close()}>X</span>
				<h3>{`So you want to join ${params.name}?`}</h3>
				<span className="form__error">{server.err}</span>
				<button onClick={e => handleSubmit("addServerToUser")}>Hell Yeah!</button>
			</div>
			)
		}
		{
			type === "createServer" && (
			// Modal for creating new server
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
					<span className="form__error">{server.err}</span>
	                <div className="" >
	                    <a onClick={e => handleSubmit("createServer")}>Go</a>
	                </div>
	            </form>
			</div>
			)
		}
		{
			type === "createChannel" && (
			// Modal for creating new channel
			<div>
				<span onClick={e => close()}>X</span>
				<form name="Modal" className=""> 
	                <div className="">
	                    <input type="text" className="" name="name" value={channel.name} onChange={handleChange} placeholder="Channel name"/>
	                    {
	                    	channel.submitted && !channel.name && 
	                        <div className="help-block">Please fill out form</div>
	                    }
	                </div>
	                <div className="" >
	                    <a onClick={e => handleSubmit("createChannel")}>Go</a>
	                </div>
	            </form>
			</div>
			)
		}
		</div>
	);
}

export default Modal;