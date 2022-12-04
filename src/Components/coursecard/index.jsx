import React from 'react';
import './style.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDollar} from  '@fortawesome/free-solid-svg-icons';

export default function CourseCard(props) {
      const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);   


  return (
    <div className="coursecard">
      <img id="course_picture" src={props.photo} />
      <div className="info">
        <h5 className="coursename">{props.name}</h5>
        <p className="category">{props.category}</p>
        <p className="Description">{props.description}</p>
        <button className="Enroll">
          <FontAwesomeIcon className="dropicon" icon={faCartShopping} />
          Enroll
        </button>
      </div>

        <button className="coursePreview"  variant="primary" onClick={handleShow}>
           Preview
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="previewtitlecourse">
              <Modal.Title> {props.name}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
             <img className='previewimgcourse' src={props.photo} />
             <p className="previewspeciality">{props.category}</p>
            <p className="previewdescription">{props.description}</p>

        </Modal.Body>
        <Modal.Footer>
          <div className="price">
              <span>{Math.floor((Math.random() * 30) + 60)}</span>   <FontAwesomeIcon className="dropicon" icon={faDollar} />
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            I understand
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}
