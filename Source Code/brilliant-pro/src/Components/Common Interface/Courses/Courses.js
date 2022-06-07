import React from 'react';
import './Courses.css';
import {Link} from "react-router-dom";


function Courses(props) {
  return (
    <>
    <Link to={props.courselink} state={{coursetitle:props.coursetitle , img: props.img, coursedesc:props.coursedesc, status: props.status, progress: props.progress}} className='course-container-card' >
        <div className='course-container-cardInfo'>
            <div>
                <img src={props.img} className='course-img' />
            </div>
            <h4>{props.courseid}</h4>
            <h4>{props.coursetitle}</h4>
            <p>{props.coursedesc}</p>
        </div>
    </Link>
                        
</>
  );
}

export default Courses;