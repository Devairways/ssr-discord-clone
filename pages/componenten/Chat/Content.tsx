import React, { useState, useEffect } from "react";
import { store } from "../../Services/store";
import { dataFetch } from "../../Services/dataFetch";

import Header from  "./Header";
import ChatRoom from  "./ChatRoom";


const Content = ({ channel })=>{
	const [channelData, setChannelData] = useState({channel_name:"default", messages: []});
	
	useEffect(()=>{
    	if(channel){
    		dataFetch(`channels/${channel}`)
    		.then(res => setChannelData(res.channelList[0]))
    	}
    },[channel])
  	
	return(
		<div className="gridBox3">
		{console.log(channelData)}
			<Header channelName={channelData.channel_name}/>
			<ChatRoom messages={channelData.messages}/>
		</div>
	)
}

export default Content;