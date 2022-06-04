import React, { useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom";
import registerimage from "./images/register.svg"
import "./Register.css";

const Register= (props)=>{
    let navigate = useNavigate();
    
    const register = () =>{ 
        let path = '/Login'; 
        navigate(path);
      }

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

  return (
        <div className="register-base" style={{marginTop: 120}}>
            <div className="register-content">
                <div className="register-image">
                    <img src={registerimage} />
                </div>
                <div className="register-form">
                <div className="register-form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text" 
                            name="name" 
                            placeholder="Name"
                            required
                            value={name}    
                        />
                    </div>
                    
                    <div className="register-form-group">
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
                    <div className="register-form-group">
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

            <button className="register-btn" onClick={register}>
                    <h4>Register</h4>                   
            </button>
        </div>
  );
}

export default Register;
