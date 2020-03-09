import React, { useEffect, useContext } from "react";
import Router from "next/router";
import { store } from "./Services/store";

import Nav from "./componenten/Nav/Nav";
import SideBar from  "./componenten/Sidebar/Sidebar";
import Content from  "./componenten/Chat/Content";


const DashBoard = () => {
	const userData = useContext(store);

	useEffect(()=>{
		if(!userData.state){
			Router.push("/");
		}
	},[])

	return(
		<div className="grid">
			<Nav/>
			<SideBar/>
			<Content/>
		</div>
	)
}

export default DashBoard;