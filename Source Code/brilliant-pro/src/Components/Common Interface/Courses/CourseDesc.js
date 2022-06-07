import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './CourseDesc.css';

// Will check if the course has been completed before or not
function IsNew(status){
    if (status == "true"){
        return true;
    }
    else {

        return false;
    }
}

function CourseDesc() {

    const state = useLocation()

    useEffect(() => {
        console.log(state)
        console.log(state.state.status)
    }, []);

    const title = state.state.coursetitle
    const img = state.state.img
    const coursedesc = state.state.coursedesc
    const status = state.state.status
    const progress = state.state.progress
    return (
    <>
    <div className='course-title'>
        <h1 className='title-heading'>{title}</h1>
        
        <img src={img} className="display-img" />
        <div className='course-desc'>
            <p>{coursedesc}</p>
        </div>
    </div>

    {IsNew(status) ? 
    <div className='bottom'>
        <p className='price'><span>Price = </span>$5 <span>only</span></p>
        <button className="buy-btn">
            <h4>Buy Course</h4>                   
        </button>
    </div>
    :
    <div className='bar-parent'>
        <div className='bar-child'>
            <span className='bar-text'>{`${progress}%`}</span>
        </div>
    </div>
    }
            
    </>
  );
}

export default CourseDesc;