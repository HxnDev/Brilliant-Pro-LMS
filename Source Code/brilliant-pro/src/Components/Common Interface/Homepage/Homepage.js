import React from 'react';
import './Homepage.css';
import Navbar from './Navbar/Navbar';

function Homepage() {
  return (
    <>
      <Navbar/>
      <div className='home-section'>
        <div className='home-text-wrapper' >
          <h1 className='home-heading dark'>
              Creating <span>Smart Solutions</span>
          </h1>
          <p className= 'home-subtitle dark'>
              At Think Vision, we provide real-time monitoring and threat alerts using deep learning and video analytics.
          </p>
        </div>
      </div>
    </>
  );
}

export default Homepage;