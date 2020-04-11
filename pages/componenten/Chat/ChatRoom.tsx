import React from  "react";
import ChatBox from  "./Chatbox";
import MemberList from  "../Memberlist/Memberlist";

const Chatroom = ({ route, data })=>{
	return(
		<div className="flex">
		{
			route !== "/" ? <ChatBox messages={data.messages} channelId={data._id}/> : <h3 className="flexBox1">Hellooooo</h3>
		}
			<MemberList/>
		</div>
	)
}

export default Chatroom;