import React from  "react";
import ChatBox from  "./Chatbox";
import MemberList from  "../Memberlist/Memberlist";

const Content = ({ data })=>{
	return(
		<div className="flex">
			<ChatBox messages={data.messages} channelId={data._id}/>
			<MemberList/>
		</div>
	)
}

export default Content;