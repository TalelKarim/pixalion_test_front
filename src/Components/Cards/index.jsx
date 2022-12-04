import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import PersonPreview from '../../pages/personPreview';
import { useState } from 'react';
export default function Cards(props) {
  const [showPreview, setShowPreview] = useState(false)
  const handleShow = () => setShowPreview(true)
  
  return (
    <div className="card" onClick={handleShow}>
      <img id="instructor_picture" src={props.img} />
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
              <PersonPreview showPreview ={showPreview}/>

      </div>
    </div>
  );
}
