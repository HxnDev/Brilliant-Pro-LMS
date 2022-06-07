import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './MaterialView.css'

// Get Data From Mongo here
function populateAssignments() {
  return 50;
}

function MaterialView() {
const selectedFile =  null;  

return (
  <div class="education">
    <div>
        <h1>Materials</h1>
    </div>
        <div class="projects">
            <div>
                <h1>Assignments<sub id="count"> 4 </sub></h1>
            </div>
            <div class="box" id="lil_project">
                <div class="card">
                    <i className="fa fa-file"></i>
                    <h5>Assignment 1</h5>
                    <div class="card-info">
                        {/* <p></p> */}
                    </div>
                </div>

                <div class="card">
                    <i className="fa fa-file"></i>
                    <h5>Assignment 2</h5>
                    <div class="card-info">
                        {/* <p></p> */}
                    </div>
                </div>

                <div class="card">
                <i className="fa fa-file"></i>
                <h5>Assignment 3</h5>
                    <div class="card-info">
                        {/* <p></p> */}
                    </div>
                </div>

                <div class="card">
                    <i className="fa fa-file"></i>
                    <h5>Assignment 4</h5>
                    <div class="card-info">
                        {/* <p>
                        </p> */}
                    </div>
                </div>
           </div>
       </div>

  </div>
)
}

export default MaterialView;
