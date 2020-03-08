import React from "react";

//authenticate login credentials
export const authenticate = (username, password) => {
	return fetch("http://localhost:3000/",{
			method: "POST",
	        headers: {
	            "Accept": "application/json",
	            "Content-Type": "application/json"
	        },
	        body: JSON.stringify({
			    username: username,
			    password: password
				})
			})
			.then(res => res.json())
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
			.then(res => res.json())
			.then (data => data.user[0])
			.catch(err => {return `something went wrong error: ${err}`});
	}