import React from "react";

import Nav from "./componenten/Nav/Nav";
import SideBar from  "./componenten/Sidebar/Sidebar";
import Content from  "./componenten/Chat/Content";

import './styles/imports.scss';


const DashBoard = () => {
	return(
		<div className="grid">
			<Nav/>
			<SideBar/>
			<Content/>
		</div>
	)
}

export default DashBoard;