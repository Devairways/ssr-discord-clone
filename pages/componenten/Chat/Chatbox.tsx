import React from  "react";

const list = [
{name:"someone",text:"this is the text mate",date: "2020-10-12"},
{name:"someone",text:"this is the text mate",date: "2021-10-12"},
{name:"someone",text:"this is the text mate",date: "2020-10-12"},
{name:"someone",text:"this is the text mate",date: "2020-10-12"},
{name:"someone",text:"this is the text mate",date: "2020-10-12"},
{name:"someone",text:"this is the text mate"},
{name:"someone",text:"this is the text mate"},
{name:"someone",text:"this is the text mate"},
{name:"someone",text:"this is the text mate"},
{name:"someone",text:"this is the text mate"},
{name:"someone",text:"this is the text mate"},
]
const ChatBox = ()=>{
	return(
		<div className="flexBox1">
		    <div className="chatContent">
		    	{list.map(msg => {
		    		return(
		    			<div className="chatMsg">
		    				<h3>{msg.name}<span style={{fontSize:"small", paddingLeft:"10px"}}>{(msg.date)? msg.date : new Date().toLocaleString}</span></h3>
		    				<p>{msg.text}</p>
		    			</div>
		    			)
		    	})}
		    </div>
			<input className="chatInput" type="text" placeholder="type youre message"/>
		</div>
	)
}

export default ChatBox;