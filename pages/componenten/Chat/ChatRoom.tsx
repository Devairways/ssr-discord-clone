import React from  "react";
import ChatBox from  "./Chatbox";
import MemberList from  "../Memberlist/Memberlist";

const Content = ()=>{
	return(
		<div className="flex">
			<ChatBox/>
			<MemberList/>
		</div>
	)
}

export default Content;