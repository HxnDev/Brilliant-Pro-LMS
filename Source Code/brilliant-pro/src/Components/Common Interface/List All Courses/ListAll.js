import React from 'react';
import './ListAll.css';
import Navbar from '../../Admin Interface/Admin Dashboard/Navbar';
import Courses from '../../Common Interface/Courses/Courses';
import AddCourse from '../../Admin Interface/Admin Functionalities/Add Course/AddCourse';

function ListAll() {

    let data = [{courseid:"1", courselink:"/Adobe-Illustrator", imgpath: "./userDashboard-extras/bg1.jpg", coursetitle: "Adobe Illustrator", coursedesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut."},
    {courseid:"2",courselink:"/C++", imgpath: "./userDashboard-extras/bg2.jpg", coursetitle: "Adobe Illustrator", coursedesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut."},
    {courseid:"3",courselink:"/Python", imgpath: "./userDashboard-extras/bg3.jpg", coursetitle: "Adobe Illustrator", coursedesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut."}];


  return (
    <>
      <Navbar/>
        <div className='course-section'>
            <h1 className='course-heading'>All Courses</h1>
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

        <div className='user-section'>
            <AddCourse />
        </div>
    </>
  );
}

export default ListAll;