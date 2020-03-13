import React, { useContext, useEffect, useState } from  "react";
import { store } from '../../Services/store';
import { dataFetch } from "../../Services/dataFetch";

import ChannelList from  "./Channellist";
import UserPanel from  "../Userpanel/Userpanel";

const SideBar = ({ route })=>{
	const user = useContext(store);
	const [server, setServer] = useState({  server_name: "",
											channels:[]
										})
	const [userData, setData] = useState({
									  username: "",
	                                  _id: "",
	                                  profile_picture: "",
	                                  friends: []
	                                }) 
    useEffect(()=>{
    	if (user.state){
    		setData({username: user.state.data.username,
    				 _id: user.state.data._id.slice(1,5),
    				 friends: user.state.data.friends,
    				 profile_picture: user.state.data.profile_picture
    			});
    	}
    },[])

     useEffect(()=>{
    	if(route !== "/"){
    		dataFetch(`server/${route}`)
    	}
    },[route])

    const changeChannel = (e) =>{
    	console.log(e.target)
    }

	return(
		<div className="gridBox2 SideBar">
			<ChannelList list={route == "/" ? userData.friends : server.channels} name={server.server_name} changeChannel={changeChannel}/>
			<UserPanel username={userData.username} _id={userData._id} img={userData.profile_picture ? userData.profile_picture : "/assets/home_icoon.svg"}/>
		</div>
	)
}

export default SideBar;