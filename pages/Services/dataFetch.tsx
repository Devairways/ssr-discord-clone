import React from "react";

export const dataFetch = (url) =>{
	return fetch(`http://localhost:3000/${url}`)
			.then(res => res.json())
			.then(data => {console.log(data); return data})
}