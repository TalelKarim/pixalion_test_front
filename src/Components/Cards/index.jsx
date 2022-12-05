import React from 'react';
import './style.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import './style.css';

export default function Cards(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card">
      <img id="instructor_picture" src={props.img} alt="img" />
      <div className="info">
        <p className="name">{props.name}</p>
        <p className="speciality">{props.domain}</p>
        <p className="mail">
          <FontAwesomeIcon className="dropicon" icon={faEnvelope} />
          {props.mail}
        </p>
        <button className="chat">
          <FontAwesomeIcon className="dropicon" icon={faComment} />
          Live Chat
        </button>
      </div>
      <button className="showPreview" variant="primary" onClick={handleShow}>
        Preview
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="previewtitle">
            <Modal.Title> {props.name}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <img className="previewimg" src={props.img} alt="img" />
          <p className="previewspeciality">{props.domain}</p>
          <span className="previewMail">{props.mail}</span>
        </Modal.Body>
        <Modal.Footer>
          <div className="media">
            <FaWhatsapp className="previewIcon" style={{ color: '#075e54' }} />
            <FaTwitter className="previewIcon" style={{ color: '#1DA1F2' }} />
            <FaFacebook className="previewIcon" style={{ color: '#3b5998' }} />
            <FaLinkedin className="previewIcon" style={{ color: '#0e76a8' }} />
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
