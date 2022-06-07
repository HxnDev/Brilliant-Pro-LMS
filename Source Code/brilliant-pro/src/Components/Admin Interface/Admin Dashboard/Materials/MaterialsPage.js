import React from 'react';
import axios from "axios";
import { Component } from "react";
import Upload from './UploadMaterial.js';
import 'font-awesome/css/font-awesome.min.css';
import './MaterialsPage.css'

// Get Data From Mongo here
function populateAssignments() {
  return 50;
}

// On file select
function onFileChange (event, selectedFile){
  // Update state
  selectedFile = event.target.files[0];
};

// On file upload
function onFileUpload (selectedFile) {
  // formData object created
  const formData = new FormData();

  // Update formData object
  formData.append(
    "myFile",
    selectedFile,
    selectedFile.name
  );

  // Details of the uploaded file
  console.log(selectedFile);

  // Request made to the backend api
  // Send formData object
  axios.post("api/uploadfile", formData);
};

function MaterialsPage() {
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
           <Upload/>
       </div>

  </div>
)
}

export default MaterialsPage;
