import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import DateObject from 'react-date-object';
import { userContext } from '../../../utils/context/user';
import { useContext } from 'react';
import { InstructorContext } from '../../../utils/context';

import './style.css';
export default function AddCourse() {
  //fields in the database
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const { instructor, setInstructor } = useContext(InstructorContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user, setUser } = useContext(userContext);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  var date = new DateObject();

  const Reinitialize = () => {
    setName('');
    setDescription('');
    setCategory('');
    setCategory('');
    setFile(null);
  };

  const onClose = () => {
    if (Name == '' || Description == '' || Category == '' || file == null) {
      alert('please fill all the fields');
    } else {
      handleClose();
    }
  };

  const handleSubmit = (e) => {
    var date = new DateObject();
    const data = new FormData();
    data.append('Name', Name);
    data.append('Description', Description);
    data.append('Category', Category);
    data.append('Date', date.format().toString());
    data.append('photo', file);

    axios
      .post(`${process.env.REACT_APP_API_URL}/course/register`, data, config)
      .then((response) => {
        console.log(response);
        Reinitialize();
      })
      .catch((err) => {
        console.log(err.stack);
      });
  };

  return (
    <>
      <Button disabled={!instructor} variant="primary" onClick={handleShow}>
        Add Course
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add your Own Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please fill all the fields carefully <br />
          <div className="form-group mt-1" id="first-input">
            <label>Course Title</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Course Title"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-1">
            <label>Category</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Course Category"
              required
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-1">
            <label>Description</label>
            <textarea
              type="text"
              className="form-control mt-1"
              placeholder="Write a brief Description..."
              required
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-1">
            <label>Upload a Thumbnail for the course</label>
            <input
              type="file"
              className="form-control mt-1"
              required
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
              onClose();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
