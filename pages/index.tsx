import React, { useEffect } from "react";
import Link from "next/link";

import LoginCard from "./componenten/Login/LoginCard";
import RegisterCard from "./componenten/Register/RegisterCard";

import "./styles/imports.scss";


const IndexPage = () => {

    useEffect(()=>{},[])
    
        return(
             <div>
                <LoginCard/>
            </div>
            );
}

export default IndexPage;