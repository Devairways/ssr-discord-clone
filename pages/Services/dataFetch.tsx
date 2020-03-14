import React from "react";

export const dataFetch = (url) =>{
	return fetch(`http://localhost:3000/${url}`)
			.then(res => res.json())
			.then(data => {
				if(data.message == "server gevonden" || data.message == "kanaal gevonden"){
					return data;
				}
				else{
					throw new Error();
				}
			})
			.catch(err => console.log("something went wrong: ", err))
}