import React, {useState, useEffect, useContext, Fragment } from "react";
import Router from "next/router";
import { store } from "./Services/store";

import Nav from "./componenten/Nav/Nav";
import SideBar from  "./componenten/Sidebar/Sidebar";
import Content from  "./componenten/Chat/Content";
import Discover from  "./componenten/Discover/Discover";


const DashBoard = () => {
	const userData = useContext(store);
	const [route, setRoute] = useState("/");
	const [channel, setChannel] = useState("");
	const [discover, setDiscover] = useState(false);

	useEffect(()=>{
		if(!userData.state.authed){
			Router.push("/");
		}
	},[route]);

	const changeRoute = (newRoute) =>{
		const { id } = newRoute.target;
		setDiscover(false)
		console.log("new Route : ", id);
		setRoute(id);
	}

	const changeChannel = (newChannel) =>{
		const { id } = newChannel.target;
		console.log("new channel: ",id);
    	setChannel(id);
    }

    const checkDiscover = () =>{
    	setDiscover(true);
    }

	return(
		<div className="grid">
			<Nav changeRoute={changeRoute} discover={checkDiscover}/>
			{
				discover ? <Discover/> :
				<Fragment>
					<SideBar route={route} changeChannel={changeChannel}/>
					<Content channel={channel}/>
				</Fragment>
			}
			
		</div>
	)
}

export default DashBoard;