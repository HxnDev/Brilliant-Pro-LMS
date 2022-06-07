import React, { useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPayPal from '../../User Interface/PayPal/PayPal';
import './CourseDesc.css';
import CourseNavbar from './CourseNavbar/CourseNavbar';
<script src="https://www.paypalobjects.com/api/checkout.js" data-version-4></script>

// Will check if the course has been completed before or not
function IsNew(status){
    if (status){
        return true;
    }
    else {

        return false;
    }
}

function CourseDesc() {

    let navigate = useNavigate();
    const [checkout, setCheckout] = React.useState(false);
    
    const PaymentGateway = () =>{ 
        checkout = true;
      }

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
    <CourseNavbar/>
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
        {(checkout === true) 
          ? <div>
            <ReactPayPal />
          </div> 
          :
        
        <button className="buy-btn" onClick={() => {setCheckout(true)}}>
            <h4>Buy Course</h4>                   
        </button>
}
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