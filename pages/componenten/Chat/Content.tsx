import React, { useState, useEffect } from "react";

import { dataFetch } from "../../Services/dataFetch";

import Header from  "./Header";
import ChatRoom from  "./ChatRoom";


const Content = ({ channel })=>{
	const [channelData, setChannelData] = useState({channel_name:"default", messages: []});
	
	useEffect(()=>{
    	if(channel){
    		dataFetch(`channels/${channel}`)
    		.then(res => {console.log("response from get channel: ",res);setChannelData(res.channelList[0])})
    	}
    },[channel])
  	
	return(
		<div className="gridBox3">
			<Header channelName={channelData.channel_name}/>
			<ChatRoom data={channelData}/>
		</div>
	)
}

export default Content;