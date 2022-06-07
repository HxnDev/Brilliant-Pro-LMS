import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import "./AddCourse.css";

export default function AddCourse() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        AddCourse
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Enter Course Details</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Course Name: </Form.Label>
                <Form.Control type="text" placeholder="Enter course name" />
              </Form.Group>

              <br></br>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description: </Form.Label>
                <Form.Control type="text" placeholder="Enter Description" />
              </Form.Group>

              <br></br>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image URL: </Form.Label>
                <Form.Control type="URL" placeholder="Enter Image URL" />
              </Form.Group>

              <br></br>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>StartDate: </Form.Label>
                <Form.Control type="date" placeholder="Enter Start Date" />
              </Form.Group>

              <br></br>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>EndDate: </Form.Label>
                <Form.Control type="date" placeholder="Enter End Date" />
              </Form.Group>

              <br></br>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <button className="close-modal" onClick={toggleModal}>
              CANCEL
            </button>
          </div>
        </div>
      )}
    </>
  );
}
