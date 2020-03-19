import React from  "react";
import ChatBox from  "./Chatbox";
import MemberList from  "../Memberlist/Memberlist";

const Content = ({ messages })=>{
	return(
		<div className="flex">
			<ChatBox/>
			<MemberList/>
		</div>
	)
}

export default Content;