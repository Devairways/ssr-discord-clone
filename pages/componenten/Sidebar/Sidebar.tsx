import React from  "react";
import { store } from '../../Services/store';

import ChannelList from  "./Channellist";
import UserPanel from  "../Userpanel/Userpanel";

const SideBar = ()=>{

	return(
		<div className="gridBox2 SideBar">
			<ChannelList/>
			<UserPanel/>
		</div>
	)
}

export default SideBar;