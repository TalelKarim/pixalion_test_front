import React from 'react'
import './style.css'
export default function CourseAvatar(props) {
  return (
    <div className='courseAvatar'>
        <img  src={props.photo} alt="photo avatar" id='photoavatar'/>
          <div className="infocourse">
             <span>{props.name}</span>
             <span className='categorycourse'>{props.category}</span>
    </div>
    </div>
  )
}
