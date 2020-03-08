import React, { useContext } from "react";
import { store } from "../../Services/store";

import Header from  "./Header";
import ChatRoom from  "./ChatRoom";


const Content = ()=>{
	const userData = useContext(store);
  	
	return(
		<div className="gridBox3">
			<Header/>
			<ChatRoom/>
		</div>
	)
}

export default Content;