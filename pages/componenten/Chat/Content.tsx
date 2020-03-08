import React, { useContext } from 'react';
import { store } from '../../Services/store';

import Header from  "./Header";
import ChatRoom from  "./ChatRoom";


const Content = ()=>{
	const userData = useContext(store);
	const { dispatch } = userData;
    console.log("served from content.tsx: ", userData)
  	
	return(
		<div className="gridBox3" onClick={e => dispatch({type: "userLogin", payload: "helloooooooooo from content"})}>
			<Header/>
			<ChatRoom/>
		</div>
	)
}

export default Content;