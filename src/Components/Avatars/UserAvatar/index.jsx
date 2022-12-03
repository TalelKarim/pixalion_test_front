import React from 'react'
import './style.css'

export default function UserAvatar(props) {
  return (
    <div className='Avatar'>
          <img  src={props.photo} alt="photo avatar"/>
          <div className="infoAvatar">
             <span>{props.name}</span>
             <span className='mailAvatar'>{props.mail}</span>
          </div>
    </div>
  )
}
