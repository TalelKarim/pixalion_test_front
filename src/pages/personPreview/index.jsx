import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useState } from 'react';

export default function PersonPreview({showPreview}) {
    const [show, setShow] = useState(showPreview)
    const handleClose = () => setShow(false);

  return  <>
    

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Name </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>;
}
