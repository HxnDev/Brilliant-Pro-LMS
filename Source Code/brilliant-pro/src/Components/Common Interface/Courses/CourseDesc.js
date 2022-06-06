import React, { useState, useEffect} from 'react';
import './CourseDesc.css';


function CourseDesc(props) {
  
    return (
    <>
    
    <div className='course-title'>
        <h1 className='title-heading'>{props.coursetitle}</h1>
        
        <img src={props.img} className="display-img" />
        <div className='course-desc'>
            <p>{props.coursedesc}</p>
        </div>
    </div>
    <div className='bottom'>
        <p className='price'><span>Price = </span>$5 <span>only</span></p>
        <button className="buy-btn">
            <h4>Buy Course</h4>                   
        </button>
    </div>
            
    </>
  );
}

export default CourseDesc;