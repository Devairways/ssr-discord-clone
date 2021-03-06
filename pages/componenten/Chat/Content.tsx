import React, { useState, useEffect } from "react";

import { dataFetch } from "../../Services/dataFetch";

import Header from  "./Header";
import ChatRoom from  "./ChatRoom";


const Content = ({ route, channel })=>{
	const [channelData, setChannelData] = useState({channel_name:"", messages: []});
	
	useEffect(()=>{
    	if(channel){
    		dataFetch(`channels/${channel}`)
    		.then(res => { setChannelData(res.channelList[0]) })
    	}
    },[channel])
  	
	return(
		<div className="gridBox3">
			<Header channelName={channelData.channel_name}/>
			<ChatRoom route={route} data={channelData}/>
		</div>
	)
}

export default Content;