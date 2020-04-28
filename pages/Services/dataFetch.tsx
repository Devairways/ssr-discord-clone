
import { updateUser } from "./Users";


// for all GET requests
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

// Channel handlers
export const createChannel = async (id, chanName, servId) => {
 	return fetch("http://localhost:3000/channels",{
	 		method: "POST",
	        headers: {
	             "Accept": "application/json",
	             "Content-Type": "application/json"
	                   },
	        body: JSON.stringify({
			    id,
			    chanName,
			    servId
				})
			})
			.then(res => {if(res.status == 200){ return res.json() }})
			.then (data => updateServer(servId, data.createdChannel._id, data.createdChannel.channel_name, null))
			.catch(err => {return `something went wrong error: ${err}`});
	}

export const updateChannel = async (user, msg, channel) => {
 	return fetch("http://localhost:3000/channels",{
	 		method: "PUT",
	        headers: {
	             "Accept": "application/json",
	             "Content-Type": "application/json"
	                   },
	        body: JSON.stringify({
			    user,
			    msg,
			    channel
				})
			})
			.then(res => {if(res.status == 200){ return res.json() }})
			.then (data => console.log(data))
			.catch(err => {return `something went wrong error: ${err}`});
	}

// Server handlers
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
			.then (data => {updateServer(data.createdServer._id,null,null,user); return data})
			.then (data => updateUser(user, data.createdServer._id, data.createdServer.server_name))
			.catch(err => {return `something went wrong error: ${err}`});
	}

export const updateServer = async (id, chanId, chanName, user) => {
	console.log("working on it")
 	return fetch("http://localhost:3000/servers",{
	 		method: "PUT",
	        headers: {
	             "Accept": "application/json",
	             "Content-Type": "application/json"
	                   },
	        body: JSON.stringify({
			    id,
			    chanId,
				chanName,
				user
				})
			})
			.then(res => {if(res.status == 200){ return res.json() }})
			.then (data => data.message)
			.catch(err => {return `something went wrong error: ${err}`});
	}