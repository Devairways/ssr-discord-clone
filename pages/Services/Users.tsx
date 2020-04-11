import React from "react";

//Authenticate login credentials
export const authenticate = (username, password) => {
	return fetch("http://localhost:3000/",{
			method: "POST",
	        headers: {
	            "Accept": "application/json",
	            "Content-Type": "application/json"
	        },
	        body: JSON.stringify({
			    username,
			    password
				})
			})
			.then(res => {if(res.status == 200){ return res.json() }})
			.then (data => data.user[0])
			.catch(err => {return `something went wrong error: ${err}`});
	}

// Register a new user
export const registerUser = async (username, password, email) => {
 	return fetch("http://localhost:3000/register",{
	 		method: "POST",
	        headers: {
	             "Accept": "application/json",
	             "Content-Type": "application/json"
	                   },
	        body: JSON.stringify({
			    username,
			    password,
			    email
				})
			})
			.then(res => { if(res.status == 200){ return res.json() }})
			.then (data => data)
			.catch(err => {return `something went wrong error: ${err}`});
	}

// Update a users serverslist
export const updateUser = (user, servId, servName) => {
 	return fetch("http://localhost:3000/users",{
	 		method: "PUT",
	        headers: {
	             "Accept": "application/json",
	             "Content-Type": "application/json"
	                   },
	        body: JSON.stringify({
			    user,
			    servName,
			    servId
				})
			})
			.then(res => {if(res.status == 200){ return res.json() }})
			.then (data => data.user)
			.catch(err => {return `something went wrong error: ${err}`});
	}