import React from 'react';


export const authenticate = (username, password) => {
	fetch("http://localhost:3001/login",{
			method: 'POST',
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({
			    name: username,
			    password: password
				})
			})
			.then(response => {
				if (response.status == 200)
					return response
		});
	}

export const registerUser = (username, password) => {
 fetch("http://localhost:3001/register",{
 		method: 'POST',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
                   },
        body: JSON.stringify({
		    name: username,
		    password: password
			})
		})
		.then(response => {
				return response
 	});
	}