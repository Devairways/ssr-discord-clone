import React from  "react";


const Header = ({ channelName })=>{
	return(
		<div className="border flex alignRight">
			<h3 className="marg">{channelName}</h3>
			<p className="marg">settings</p>
			<input type="text" placeholder="search" className="marg"/>
		</div>
	)
}

export default Header;