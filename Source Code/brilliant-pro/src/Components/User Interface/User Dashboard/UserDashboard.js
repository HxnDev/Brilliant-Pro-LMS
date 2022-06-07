import React from 'react';
import UserNavbar from './User Navbar/UserNavbar';
import './UserDashboard.css';
import Courses from '../../Common Interface/Courses/Courses';

function UserDashboard() {

    let data = [{courseid:"1", courselink:"/Adobe-Illustrator", imgpath: "./userDashboard-extras/bg1.jpg", coursetitle: "Adobe Illustrator", coursedesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut."},
    {courseid:"2",courselink:"/C++", imgpath: "./userDashboard-extras/bg2.jpg", coursetitle: "Adobe Illustrator", coursedesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut."},
    {courseid:"3",courselink:"/Python", imgpath: "./userDashboard-extras/bg3.jpg", coursetitle: "Adobe Illustrator", coursedesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut."}];


  return (
    <>
      <UserNavbar/>
      <div className='user-section'>
            <img src='./userDashboard-extras/bg.png' className='user-image' />
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
                        
                        {data.map((data1, id)=> {
                            return <div key={id} className='course-container-card'>
                            <Courses 
                            courseid = {data1.courseid}
                            courselink = "/CourseDesc"
                            img = {data1.imgpath}
                            coursetitle = {data1.coursetitle}
                            coursedesc = {data1.coursedesc}
                            status = "true"
                            />
                            </div>
                        })}
                    </div>
                </div>
        </div>
    </>
  );
}

export default UserDashboard;