import React, { useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom";
import loginimage from "./images/login.png"
import "./Login.css";

const Login= (props)=>{
    let navigate = useNavigate();
    
    const routeChange = () =>{ 
        let path = '/Surveillance'; 
        navigate(path);
      }

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

  return (
        <div className="login-base" style={{marginTop: 120}}>
            <div className="login-content">
                <div className="login-image">
                    <img src={loginimage} />
                </div>
                <div className="login-form">
                    <div className="login-form-group">
                        <label htmlFor="username">Email Address</label>
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Email" 
                            autoFocus 
                            required 
                            value={email} 
                        />

                    </div>
                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            required
                            value={password}    
                        />
                    </div>
                </div>
            </div>

            <button className="login-btn" onClick={routeChange}>
                    <h4>Login</h4>                   
            </button>

            <button className="signup-btn" onClick={routeChange}>
                    <h4>Register Now</h4>                   
            </button>

            <button className="adminlogin-btn" onClick={routeChange}>
                    <h4>Admin?</h4>                   
            </button>
        </div>
  );
}

export default Login;