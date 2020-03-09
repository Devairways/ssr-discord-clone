import React, { useContext, useEffect } from  "react";
import { store } from "../../Services/store";


const Nav = ()=>{
	const userData = useContext(store);

	useEffect(()=>{},[])

	return(
		<nav className="gridBox1 navPosition">
			<div>
				<div className="serverPanel centerContent">
					<img src="/assets/home_icoon.svg"  alt="home"/>
				</div>
				<div className="border2"/>
				{
					// render subscribed server icons
					userData.state.data.servers.map(server => {
						return(
							<div className="serverPanel centerContent">
						    	<img src="/assets/plus_icoon.svg" height="30px" alt={server}/>
							</div>
							)
						}
					)
				}
				<div className="serverPanel centerContent">
					<img src="/assets/plus_icoon.svg" height="30px" alt='Server'/>
				</div>
				<div className="serverPanel centerContent">
					<img src="/assets/search_icoon.svg" height="30px" alt="Discover"/>
				</div>
				<div className="border2"/>
			</div>
		</nav>
	);
}

export default Nav;