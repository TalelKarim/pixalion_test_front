import React from 'react'
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

export default function Cards(props) {
  return (
    <div className="card">
                <img id='instructor_picture' src={props.img}/>
                <div className="info">
                    <p className="name">{props.name}</p>
                    <p className="speciality">{props.domain}</p>
                    <p className="mail"> 
                    <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faEnvelope}
                       />
                     {props.mail}</p>
                    <button className= "chat">
                    <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faComment}
                       />
                           Live Chat
                    </button>
                </div>
            </div>
  )
}
