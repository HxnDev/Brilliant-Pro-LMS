import React from 'react';
import UserNavbar from './User Navbar/UserNavbar';
import './UserDashboard.css';
import { Link} from "react-router-dom";


function UserDashboard() {
  return (
    <>
      <UserNavbar/>
      <div className='user-section'>
            <img src='./userDashboard-extras/bg.jpg' className='user-image' />
        </div>
        <div className='user-text-wrapper' >
          <h1 className='user-heading user-dark'>
          </h1>
          <p className= 'user-subtitle user-dark'>
            Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.
          </p>
        </div>

        <div className='course-section'>
            <h1 className='course-heading'>Courses For You</h1>
                <div className='course-wrapper'>
                    <div className='course-container'>
                        <Link to="/" className='course-container-card' >
                            <div className='course-container-cardInfo'>
                                <div>
                                    <img src="./userDashboard-extras/bg1.jpg" className='course-img' />
                                </div>
                                <h4>Adobe Illustrator</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut.</p>
                            </div>
                        </Link>

                        <Link to="/" className='course-container-card' >
                            <div className='course-container-cardInfo'>
                                <div>
                                    <img src="./userDashboard-extras/bg2.jpg" className='course-img' />
                                </div>
                                <h4>Adobe Photoshop</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut.</p>
                            </div>
                        </Link>

                        <Link to="/" className='course-container-card' >
                            <div className='course-container-cardInfo'>
                                <div>
                                    <img src="./userDashboard-extras/bg3.jpg" className='course-img' />
                                </div>
                                <h4>Adobe Premiere Pro</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut.</p>
                            </div>
                        </Link>

                        <Link to="/" className='course-container-card' >
                            <div className='course-container-cardInfo'>
                                <div>
                                    <img src="./userDashboard-extras/bg4.png" className='course-img' />
                                </div>
                                <h4>Learn C++</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut.</p>
                            </div>
                        </Link>

                        <Link to="/" className='course-container-card' >
                            <div className='course-container-cardInfo'>
                                <div>
                                    <img src="./userDashboard-extras/bg5.png" className='course-img' />
                                </div>
                                <h4>Learn Python</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut.</p>
                            </div>
                        </Link>

                        <Link to="/" className='course-container-card' >
                            <div className='course-container-cardInfo'>
                                <div>
                                    <img src="./userDashboard-extras/bg6.jpg" className='course-img' />
                                </div>
                                <h4>Learn Golang</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut.</p>
                            </div>
                        </Link>

                    </div>
                </div>
        </div>
      
      
    </>
  );
}

export default UserDashboard;