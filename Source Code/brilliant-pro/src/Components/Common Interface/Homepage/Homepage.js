import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <>
    
      <div className='home-section'>
        <div className='home-img-wrapper'>
            <img src='./homepage-extras/bg.jpg' alt='Image not loaded' />
            <div className='container'>
                <div className='row home-row' style={{display: 'flex'}}>
                <div className='col'>
                    <div className='home-text-wrapper' >
                    <h1 className='home-heading dark'>
                        Creating <span>Smart Solutions</span>
                    </h1>
                    <p className= 'home-subtitle dark'>
                        At Think Vision, we provide real-time monitoring and threat alerts using deep learning and video analytics.
                    </p>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
      </div>

      

    </>
  );
}

export default Homepage;