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
              Brilliant Pro
          </h1>
          <p className= 'home-subtitle dark'>
              Here we provide unlimited not-free courses. You can get certifications and learn alongwith making your life miserable because this project took our night's sleep and was indeed TORTURE.
          </p>
        </div>
      </div>
    </>
  );
}

export default Homepage;