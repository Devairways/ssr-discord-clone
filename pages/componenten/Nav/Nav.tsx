import React, { useContext, useEffect, useState } from  "react";
import { store } from '../../Services/store';


const Nav = ({ changeRoute })=>{
	const user = useContext(store)
	const [data, setData] = useState({ servers: [] });
	 
    useEffect(()=>{
    	if (user.state){
    		setData({ servers: user.state.data.servers });
    		return;
    	}
    },[])

	return(
		<nav className="gridBox1 navPosition">
			<div>
				<div className="serverPanel centerContent">
					 <img src="/assets/home_icoon.svg"  alt="home"/>
				</div>
				<div className="border2"/>
				{
					// render subscribed server icons
					data.servers.map(server => {
						return(
							<div className="serverPanel centerContent">
						    	<img src="/assets/home_icoon.svg" height="30px" id={server._id} alt={server.name} onClick={e => changeRoute(e)}/>
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