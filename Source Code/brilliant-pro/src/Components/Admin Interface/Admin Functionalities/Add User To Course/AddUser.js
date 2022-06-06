import React, { useState, useEffect} from 'react';
import './AddUser.css';


function AddUser(props) {
    const [userid, setUserid] = useState('');
    const [courseid, setCourseid] = useState('');
  
    return (
    <>
    <div className="login-base" style={{marginTop: 120}}>
        <h4 className='heading'>Add User</h4>
        <div className="login-content">
            <div className="adduser-form">
                <div className="adduser-form-group">
                    <label htmlFor="userid">User ID</label>
                    <input
                        type="text" 
                        name="id" 
                        placeholder="User Id" 
                        autoFocus 
                        required 
                        value={userid} 
                    />

                </div>
                <div className="adduser-form-group">
                    <label htmlFor="courseid">Course ID</label>
                    <input
                        type="text" 
                        name="id" 
                        placeholder="Course Id"
                        required
                        value={courseid}    
                    />
                </div>
            </div>   
        </div>

        <button className="adduser-btn">
            <h4>Add User</h4>                   
        </button>        
    </div>
    </>
  );
}

export default AddUser;