import React from 'react';
import Courses from '../../../Common Interface/Courses/Courses';
import UserNavbar from '../User Navbar/UserNavbar';
import './CompletedCourses.css';


function CompletedCourses() {
    let data = [{courseid:"1", imgpath: "./userDashboard-extras/bg1.jpg",status: "false", progress: 90, coursetitle: "Adobe Illustrator", coursedesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut."},
    {courseid:"2", imgpath: "./userDashboard-extras/bg2.jpg", progress:80, status:"false",  coursetitle: "Adobe Hi", coursedesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut."}];

  return (
    <>
      <UserNavbar/>
        <div className='c-course-section'>
            <h1 className='c-course-heading'>Your Completed Courses</h1>
                <div className='c-course-wrapper'>
                    <div className='c-course-container'>
                        
                        {data.map((data1, id)=> {
                            return <div key={id} className='c-course-container-card'>
                            <Courses 
                            courseid = {data1.courseid}
                            courselink = "/CourseDesc"
                            img = {data1.imgpath}
                            coursetitle = {data1.coursetitle}
                            coursedesc = {data1.coursedesc}
                            progress = {data1.progress}
                            status = {data1.status}
                            />
                            </div>
                        })}
                    </div>
                </div>
        </div>
    </>
  );
}

export default CompletedCourses;