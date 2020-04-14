import React, { useState, useEffect } from  "react";

import { dataFetch } from "../../Services/dataFetch";

const MemberList = ({ route })=>{
	const [participants, setParticipants] =  useState([]);

	useEffect(()=>{
    	if(route && route !== "/"){
    		dataFetch(`servers/${route}`)
    		.then(res => setParticipants(res.server[0].participants));
    	}else{
    		setParticipants([]);
    	}
	},[route])
	
	return(
		<div className="flexBox2">
			<h3>MemberList</h3>
			<ul>
			{   
				participants.length ? 
				    participants.map(user => {
						return(
							<li id={user._id} style={{padding: "5px"}}><img src={user.profile_picture} style={{marginBottom: "-10px", paddingRight: "5px"}} height="30px"  alt="hash"/>{user.username}</li>
							)
						})
				: <div><h3>Nothing to see here... Socialize!</h3></div>
			}
			</ul>
		</div>
	)
}

export default MemberList;