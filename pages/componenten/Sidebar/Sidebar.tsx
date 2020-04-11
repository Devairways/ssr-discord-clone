import React, { useContext, useEffect, useState } from  "react";
import { store } from '../../Services/store';
import { dataFetch } from "../../Services/dataFetch";

import ChannelList from  "./Channellist";
import UserPanel from  "../Userpanel/Userpanel";

const SideBar = ({ route, changeChannel })=>{
	const user = useContext(store);
	const [server, setServer] = useState({
										server_name: "",
										channels:[]
									});
	const [userData, setData] = useState({
									  username: "",
	                                  _id: "",
	                                  profile_picture: "",
	                                  friends: []
	                                });
    useEffect(()=>{
    	if (user.state.data){
    		setData({
    			username: user.state.data.username,
				_id: user.state.data._id.slice(1,5),
				friends: user.state.data.friends,
				profile_picture: user.state.data.profile_picture
    			});
    	}
    },[])

    useEffect(()=>{
    	if(route && route !== "/"){
    		dataFetch(`servers/${route}`)
    		.then(res => setServer({ server_name: res.server[0].server_name, channels: res.server[0].channels }))
    	}else{
    		setServer({...server, server_name: "Home"})
    	}
    },[route])

	return(
		<div className="gridBox2 SideBar">
			<ChannelList list={route == "/" ? userData.friends : server.channels} name={server.server_name} changeChannel={changeChannel} route={route}/>
			<UserPanel username={userData.username} _id={userData._id} img={userData.profile_picture}/>
		</div>
	)
}

export default SideBar;