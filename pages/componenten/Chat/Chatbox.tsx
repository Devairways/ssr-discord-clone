import React, { useState, useContext, useEffect } from  "react";
import { socket } from "./Socket";

import { store } from "../../Services/store";
import { updateChannel } from "../../Services/dataFetch";


const ChatBox = ({ messages, channelId })=>{
	const user = useContext(store);
	const [list, setList] = useState([]);
	const [message, setMessage] = useState({ author: "", text: "" });
	const [typing, setTyping] = useState({ typing: false, name: "" });


	useEffect(()=>{
    	if(user.state.data){
			setMessage({ ...message, author:  user.state.data.username });
		}
	},[])
	
	useEffect(()=>{
    	if(user.state.data){
			setList(messages);
		}
    },[messages])

	const handleChange = (e) => {
		const { value } = e.target;
		socket.emit("isTyping", { name: message.author, channel: channelId });
        setMessage({...message, text: value });
    }

    const handleSubmit = () => {
    	if(!message.author || !message.text){
    		return console.log("plz fill in allllll");
    	}
		socket.emit("message", { channel: channelId, author: message.author, text: message.text});
    	updateChannel(message.author, message.text, channelId);
		setMessage({ ...message, text: "" })
	}
	
	const resetTyping = () =>{
		setTimeout(()=>{setTyping({ typing: false, name: "" })},2000);
	}

    // Listen to connections(Need to find better way)
	socket.off(channelId).on(channelId, data => setList([...list, data]));
	socket.off(`typingOn:${channelId}`).on(`typingOn:${channelId}`, data => { setTyping({ typing: true, name: data }); resetTyping() });

	return(
		<div className="flexBox1">
		    <div className="chatContent">
				<div>
					{
		    		list.map(msg => {
		    		return(
		    			<div className="chatMsg">
		    				<h3>{msg.author}<span style={{fontSize:"small", paddingLeft:"10px"}}>{msg.created_at? new Date(msg.created_at).toLocaleString():new Date().toLocaleString()}</span></h3>
		    				<p>{msg.text}</p>
		    			</div>
		    			)
		    		})
		    	}
				</div>
		    </div>
			<input className="chatInput" type="text" value={message.text} placeholder="type youre message" onChange={handleChange}/>
			<button onClick={e => handleSubmit()}>go</button>
			{typing.typing && <span>{`${typing.name} is typing...`}</span>}
		</div>
	)
}

export default ChatBox;