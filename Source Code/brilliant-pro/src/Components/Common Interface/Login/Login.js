import React, { useState, useEffect} from "react"
import {useNavigate } from "react-router-dom";
import Navbar from "../Homepage/Navbar/Navbar";
import loginimage from "./images/login.png"
import "./Login.css";

const Login= (props)=>{
    let navigate = useNavigate();
    
    const login = () =>{ 
        let path = '/UserDashboard'; 
        navigate(path);
      }

      const register = () =>{ 
        let path = '/Register'; 
        navigate(path);
      }

      const admin = () =>{ 
        let path = '/AdminLogin'; 
        navigate(path);
      }

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      function tryLogin() {
          // get data from mongodb

          const requestOptions = {
              method: 'POST',
          };

          fetch('http://localhost:3001/getLearner?email=' + email, requestOptions)
              .then(response => response.text())
              .then(result => {
                  result = JSON.parse(result)
                  if (result.password === password) {
                      console.log("Login successful")
                  }
                  else {
                      console.log("Login unsuccessful")
                  }
              })
              .catch(error => console.log('Error: ', error));
      }

  return (
    <>
      <Navbar />
        <div className="login-base" style={{marginTop: 120}}>
            <div className="login-content">
                <div className="login-image">
                    <img src={loginimage} />
                </div>
                <div className="login-form">
                    <div className="login-form-group">
                        <label htmlFor="username">Email Address</label>
                        <input onChange={function(event) {setEmail(event.target.value)}}
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
                        <input onChange={function(event) {setPassword(event.target.value)}}
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            required
                            value={password}    
                        />
                    </div>
                </div>
            </div>

            <button className="login-btn" onClick={login}>
                    <h4>Login</h4>                   
            </button>

            <button className="signup-btn" onClick={register}>
                    <h4>Register Now</h4>                   
            </button>

            <button className="adminlogin-btn" onClick={admin}>
                    <h4>Admin?</h4>                   
            </button>
        </div>
    </>
  );
}

export default Login;
