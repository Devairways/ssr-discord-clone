import React, { useContext } from  "react";
import { store } from "../../Services/store";


const UserPanel = ()=>{
	const userData = useContext(store);

	return(
		<div className="userPanel flex">
			<img src="/assets/home_icoon.svg"  alt="user"/>
			<div>
				<h4>{userData.state.data.username}</h4>
			    <p>#{userData.state.data._id.slice(1,5)}</p>
			</div>
			
		</div>
	)
}

export default UserPanel;