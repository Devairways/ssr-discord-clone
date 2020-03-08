import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";

import { registerUser } from "../../Services/Users";


const RegisterCard = ({ setRoute }) => {
    const [register, setRegister] = useState({   
                                            username: "",
                                            email: "",
                                            password: "",
                                            password2: "",
                                            submitted: false,
                                            loading: false,
                                            error: ""
                                        }); 
       
    // store inputvalues in state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister({...register, [name]: value, "error": "" });
    }

    // registe a new user
    const handleSubmit = async (e) => {
        e.preventDefault();
        setRegister({...register, submitted: true });
        const { username, password, password2, email } = register;
        // check for required inputs
        if (!(username && password && password2 && email)) {
            return;
        }
        setRegister({...register, loading: true });
        registerUser(username, password, email)
        .then(data => {if(data.message){Router.push("/")}});
    }

        return(
             <div className="" >
                <img src="" alt="logo" className="" />
                <div className="">
                    <form name="form" onSubmit={(e) => handleSubmit(e)} className=""> 
                        <div className="">
                            <input type="text" className="" name="username" value={register.username} onChange={handleChange} placeholder="USERNAME"/>
                            {register.submitted && !register.username &&
                                <div className="help-block">Username is required</div>
                            }
                            <input type="email" className="" name="email" value={register.email} onChange={handleChange} placeholder="EMAIL"/>
                            {register.submitted && !register.email &&
                                <div className="help-block">Email is required</div>
                            }
                            <input type="password" className="" name="password" value={register.password} onChange={handleChange} placeholder="PASSWORD"/>
                            {register.submitted && !register.password &&
                                <div className="help-block">Password is required</div>
                            }
                            <input type="password" className="" name="password2" value={register.password2} onChange={handleChange} placeholder="RETYPE PASSWORD"/>
                            {register.submitted && !register.password2 &&
                                <div className="help-block">Please retype password</div>
                            }
                        </div>
                        <span className="form__error">{register.error}</span>
                        <div className="" >
                            <input type="submit" placeholder="Go" onClick={handleSubmit}/>
                            <Link href="/"  replace>
                                <h1 onClick={e =>{setRoute("/")}}>Back</h1>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            );
}

export default RegisterCard;