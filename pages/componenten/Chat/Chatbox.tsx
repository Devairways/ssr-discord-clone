import React, { useState, useContext } from  "react";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3001");

import { store } from "../../Services/store";
import { updateChannel } from "../../Services/dataFetch";


const ChatBox = ({ messages, channelId })=>{
	const user = useContext(store);
	const [message, setMessage] = useState({ author: "", text: "" });

	const handleChange = (e) => {
        const { value } = e.target;
        setMessage({...message, author: user.state.data.username, text: value });
    }

    const handleSubmit = () => {
    	if(!message.author || !message.text){
    		return;
    	}
    	socket.emit("message", channelId);
    	updateChannel(message.author, message.text, channelId);
    	setMessage({ author: "", text: "" })
    }
    
	socket.on(channelId, data => console.log(data));

	return(
		<div className="flexBox1">
		    <div className="chatContent">
		    	{
		    		messages.map(msg => {
		    		return(
		    			<div className="chatMsg">
		    				<h3>{msg.author}<span style={{fontSize:"small", paddingLeft:"10px"}}>{(msg.created_at)? msg.created_at : new Date().toLocaleString}</span></h3>
		    				<p>{msg.text}</p>
		    			</div>
		    			)
		    		})
		    	}
		    </div>
			<input className="chatInput" type="text" value={message.text} placeholder="type youre message" onChange={handleChange}/>
			<button onClick={handleSubmit}>go</button>
		</div>
	)
}

export default ChatBox;