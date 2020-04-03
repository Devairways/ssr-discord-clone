import React, { useContext, useState } from "react";
import Link from "next/link";
import Router from "next/router";

import { store } from "../../Services/store";
import { authenticate } from "../../Services/Users";


const LoginCard = ({ setRoute }) => {
    const userData = useContext(store);
    const { dispatch } = userData;
    const [login, setlogin] = useState({ username: "",
                                         password: "",
                                         submitted: false,
                                         loading: false,
                                         error: ""
                                        }); 
       
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setlogin({...login, [name]: value, error: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setlogin({...login, submitted: true });
        const { username, password, error} = login;
        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }
        setlogin({...login, loading: true });
        authenticate(username, password)
        .then(data => {
            if(data._id){
                dispatch({type: "userLogin", payload: data })
                Router.push("/dashboard");
            }
            else{setlogin({...login, loading: false, error: "user/password combo unknown"})}
        })
    }


    return(login.loading ? <h1>Loading...</h1> :
         <div className="" >
            <img src="" alt="logo" className="" />
            <div className="">
                <form name="form" onSubmit={(e) => handleSubmit(e)} className=""> 
                    <div className="">
                        <input type="text" className="" name="username" value={login.username} onChange={handleChange} placeholder="USERNAME"/>
                        {login.submitted && !login.username &&
                            <div className="help-block">Username is required</div>
                        }
                        <input type="password" className="" name="password" value={login.password} onChange={handleChange} placeholder="PASSWORD"/>
                        {login.submitted && !login.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <span className="form__error">{login.error}</span>
                    <div className="" >
                            <a onClick={handleSubmit}>Go</a>
                        <Link href="/register">
                            <h1>register</h1>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        );
}

export default LoginCard;