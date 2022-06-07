import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from  'react-icons/fa'
import './Navbar.css'
import { IconContext } from 'react-icons/lib';

function Navbar() {
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
        <div className='user-navbar'>
        <Link to='/' className='user-navbar-heading' onClick={closeMobileMenu}>
            <h3>Brilliant Pro <span>.</span></h3>
        </Link>
            <div className='user-navbar-container uncontainer'>
                <div className='user-menu-icon' onClick={handleClick}>
                  {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'user-nav-menu active' : 'user-nav-menu'}>
                  <li className='user-nav-item'>
                    <Link to='/' className='user-nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>

                  <li className='user-nav-item'>
                    <Link to='/ListAll' className='user-nav-links' onClick={closeMobileMenu}>
                      Courses
                    </Link>
                  </li>

                  <li className='user-nav-item'>
                    <Link to='/Materials' className='user-nav-links' onClick={closeMobileMenu}>
                      Materials
                    </Link>
                  </li>

                  <li className='user-nav-item'>
                    <Link to='/AddQuiz' className='user-nav-links' onClick={closeMobileMenu}>
                      Assessments
                    </Link>
                  </li>

                  <li className='user-nav-item'>
                    <Link to='/Learners' className='user-nav-links' onClick={closeMobileMenu}>
                      Learners
                    </Link>
                  </li>
                </ul>
            </div>
        </div>
    </IconContext.Provider>
    </>
  );
}

export default Navbar;
