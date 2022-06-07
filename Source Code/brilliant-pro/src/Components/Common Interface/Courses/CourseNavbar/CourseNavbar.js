import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from  'react-icons/fa'
import './CourseNavbar.css'
import { IconContext } from 'react-icons/lib';

function CourseNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960 ) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect (() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className='course-navbar'>
        <Link to='/' className='course-navbar-heading' onClick={closeMobileMenu}>
            <h3>Brilliant Pro <span>.</span></h3>
        </Link>
            <div className='course-navbar-container uncontainer'>
                <div className='course-menu-icon' onClick={handleClick}>
                  {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'course-nav-menu active' : 'course-nav-menu'}>
          
                  <li className='course-nav-item'>
                    <Link to='/MaterialView' className='course-nav-links' onClick={closeMobileMenu}>
                      Materials
                    </Link>
                  </li>

                  <li className='course-nav-item'>
                    <Link to='/Assessment' className='course-nav-links' onClick={closeMobileMenu}>
                      Assessments
                    </Link>
                  </li>

                  
                </ul>
            </div>
        </div>
    </IconContext.Provider>
    </>
  );
}

export default CourseNavbar;
