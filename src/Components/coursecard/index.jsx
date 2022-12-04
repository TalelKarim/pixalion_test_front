import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CourseCard(props) {
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
    </div>
  );
}
