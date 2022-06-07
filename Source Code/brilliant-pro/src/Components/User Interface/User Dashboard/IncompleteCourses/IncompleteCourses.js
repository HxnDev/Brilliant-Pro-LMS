import React from 'react';
import UserNavbar from '../User Navbar/UserNavbar';
import Courses from '../../../Common Interface/Courses/Courses';
import './IncompleteCourses.css';


function IncompleteCourses() {
    let data = [{courseid:"1", courselink:"/CourseDesc", imgpath: "./userDashboard-extras/bg1.jpg", coursetitle: "Adobe Illustrator", coursedesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut."},
    {courseid:"2",courselink:"/CourseDesc", imgpath: "./userDashboard-extras/bg2.jpg", coursetitle: "Adobe Illustrator", coursedesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut."}];

  return (
    <>
      <UserNavbar/>
        <div className='in-course-section'>
            <h1 className='in-course-heading'>Your Incomplete Courses</h1>
                <div className='in-course-wrapper'>
                    <div className='in-course-container'>
                        
                        {data.map((data1, id)=> {
                            return <div key={id} className='in-course-container-card'>
                            <Courses 
                            courseid = {data1.courseid}
                            courselink = {data1.courselink}
                            img = {data1.imgpath}
                            coursetitle = {data1.coursetitle}
                            coursedesc = {data1.coursedesc}
                            />
                            </div>
                        })}
                    </div>
                </div>
        </div>
    </>
  );
}

export default IncompleteCourses;