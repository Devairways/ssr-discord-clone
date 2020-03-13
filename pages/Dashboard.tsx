import React, {useState, useEffect, useContext } from "react";
import Router from "next/router";
import { store } from "./Services/store";

import Nav from "./componenten/Nav/Nav";
import SideBar from  "./componenten/Sidebar/Sidebar";
import Content from  "./componenten/Chat/Content";


const DashBoard = () => {
	const userData = useContext(store);
	const [route, setRoute] = useState("/")

	useEffect(()=>{
		if(!userData.state.authed){
			Router.push("/");
		}
	},[])

	useEffect(()=>{
		if(route !== "/" ){
			console.log("route change: ", route);
		}
	},[route])

	const changeRoute = (newRoute) =>{
		const { id } = newRoute.target;
		setRoute(id);
	}

	return(
		<div className="grid">
			<Nav changeRoute={changeRoute}/>
			<SideBar route={route}/>
			<Content route={route}/>
		</div>
	)
}

export default DashBoard;