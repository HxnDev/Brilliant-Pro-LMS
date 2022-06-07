import React from 'react';
import './Admin.css'
import Navbar from './Navbar';
import Piechart from './Piechart';

function Admin(props) {

    return (
        <div>
            <Navbar/>
            <div className='courses-div'>
                <div className='piechart-div'>
                    <Piechart />
                </div>
                <h4>Total Count of Courses:</h4>
                <p>{props.courses}</p>
                <h4>Total Count of Learners:</h4>
                <p>{props.learners}</p>
                <h4>Total Count of Materials:</h4>
                <p>{props.materials}</p>
                <h4>Total Count of Assessments:</h4>
                <p>{props.assessments}</p>
            </div>
        </div>
    )
}

export default Admin