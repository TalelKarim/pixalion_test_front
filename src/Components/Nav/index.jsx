import React, { useContext } from 'react'
import styled from 'styled-components'
import './style.css'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGauge} from '@fortawesome/free-solid-svg-icons';
import { faPersonChalkboard} from '@fortawesome/free-solid-svg-icons';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { faGear} from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Instructors from '../Student/InstructorsList';
import { InstructorContext } from '../../utils/context';

 const StyledLink = styled(Link)`
    padding: 5px;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    transition : 0.7s ease;
  &:hover{
    color: white;

  }
 `



export default function Nav() {
  //  const [instructor, setInstructor] = useState(true)
  const {instructor, setInstructor} = useContext(InstructorContext)
  console.log(instructor)
  return (
        <nav id="sidebar">
            <div className="sidebar-header">
                   <img    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  alt='student picture' className='profile' />
                    <h6> Talel Karim Chebbi</h6>
             </div>

            <ul className="list-unstyled components">
                <li>   
                    <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faGauge}
                       />
                       <StyledLink to={instructor ? '/homeInstructor/dashboard' :'/homestudent/dashboard'}>Dashboard</StyledLink>  
                </li>
                <li> 
                <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faPersonChalkboard}
                       />
                    <StyledLink  to= {instructor ? '/homeInstructor/students' : '/homestudent/instructors'} >{instructor ? 'Students': 'Instructors'} </StyledLink>  
                </li>
                <li>
                <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faBook}
                       />
                    <StyledLink  to= {instructor ? '/homeInstructor/courses' : '/homestudent/courses'} >Courses</StyledLink>   
                </li>
                <li>
                <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faGear}
                       />
                    <StyledLink to='/homestudent/settings' >Settings</StyledLink> 
                </li>
                <li>
                <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faRightFromBracket}
                       />
                    <StyledLink > Sign Out</StyledLink>  
                </li>
            </ul>

        </nav>

     
  )
}
