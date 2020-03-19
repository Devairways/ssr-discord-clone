import React from "react";
import { updateUser } from "./Users";

export const dataFetch = (url) =>{
	return fetch(`http://localhost:3000/${url}`)
			.then(res => {if(res.status == 200){ return res.json() }})
			.then(data => {
				if(data.message.includes("gevonden")){
					return data;
				}
				else{
					throw new Error();
				}
			})
			.catch(err => console.log("something went wrong: ", err))
}

export const createServer = async (user, servName, servPicture) => {
 	return fetch("http://localhost:3000/servers",{
	 		method: "POST",
	        headers: {
	             "Accept": "application/json",
	             "Content-Type": "application/json"
	                   },
	        body: JSON.stringify({
			    user,
			    servName,
			    servPicture
				})
			})
			.then(res => {if(res.status == 200){ return res.json() }})
			.then (data => updateUser(user, data.createdServer._id, data.createdServer.server_name))
			.catch(err => {return `something went wrong error: ${err}`});
	}