import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function UserAvatar(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Avatar" onClick={handleShow}>
      <img src={props.photo} alt="photo avatar" />
      <div className="infoAvatar">
        <span>{props.name}</span>
        <span className="mailAvatar">{props.mail}</span>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="previewtitle">
            <Modal.Title> {props.name}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <img className="previewimg" src={props.photo} />
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
