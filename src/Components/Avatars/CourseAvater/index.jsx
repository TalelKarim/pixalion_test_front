import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons';

export default function CourseAvatar(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="courseAvatar" onClick={handleShow}>
      <img src={props.photo} alt="photo avatar" id="photoavatar" />
      <div className="infocourse">
        <span>{props.name}</span>
        <span className="categorycourse">{props.category}</span>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="previewtitlecourse">
            <Modal.Title> {props.name}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <img className="previewimgcourse" src={props.photo} />
          <p className="previewspeciality">{props.category}</p>
          <p className="previewdescription">{props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <div className="price">
            <span>{Math.floor(Math.random() * 30 + 60)}</span>{' '}
            <FontAwesomeIcon className="dropicon" icon={faDollar} />
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
