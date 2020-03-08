import React, { useEffect, useState } from "react";
import Link from "next/link";

import LoginCard from "./componenten/Login/LoginCard";
import RegisterCard from "./componenten/Register/RegisterCard";

import "./styles/imports.scss";


const IndexPage = () => {
    const [route, setRoute] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setRoute(window.location.pathname);
        setLoading(false);
    },[])
    
        return(route && !loading ? 
            <div>
            {
                route == "/" ? <LoginCard setRoute={setRoute}/> : <RegisterCard setRoute={setRoute}/>
            }
            </div> :
            <h1>Loading.....</h1>
            );
}

export default IndexPage;