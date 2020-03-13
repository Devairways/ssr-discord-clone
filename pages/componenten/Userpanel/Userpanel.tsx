import React from  "react";


const UserPanel = ({ username, _id, img })=>{

	return(
		<div className="userPanel flex">
			<img src={img}  alt="user"/>
			<div>
				<h4>{username}</h4>
			    <p>#{_id}</p>
			</div>
			
		</div>
	)
}

export default UserPanel;