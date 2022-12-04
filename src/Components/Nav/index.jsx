import React, { useContext } from 'react';
import styled from 'styled-components';
import './style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge } from '@fortawesome/free-solid-svg-icons';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Instructors from '../Student/InstructorsList';
import { InstructorContext } from '../../utils/context';
import { userContext } from '../../utils/context/user';
import { useEffect } from 'react';
const StyledLink = styled(Link)`
  padding: 5px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  transition: 0.7s ease;
  &:hover {
    color: white;
  }
`;

export default function Nav() {
 


  //  const [instructor, setInstructor] = useState(true)
  const { instructor, setInstructor } = useContext(InstructorContext);
  const {user,setUser} = useContext(userContext);

  const initializeUser = () => {
    setUser({})
  }
  console.log(instructor, user);
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <img
          src={user.imageUrl}
          alt="student picture"
          className="profile"
        />
        <h6> {`${user.firstName} ${user.lastName}`}</h6>
      </div>

      <ul className="list-unstyled components">
        <li>
          <FontAwesomeIcon className="dropicon" icon={faGauge} />
          <StyledLink
            to={
              instructor
                ? '/homeInstructor/dashboard'
                : '/homestudent/dashboard'
            }
          >
            Dashboard
          </StyledLink>
        </li>
        <li>
          <FontAwesomeIcon className="dropicon" icon={faPersonChalkboard} />
          <StyledLink
            to={
              instructor
                ? '/homeInstructor/students'
                : '/homestudent/instructors'
            }
          >
            {instructor ? 'Students' : 'Instructors'}{' '}
          </StyledLink>
        </li>
        <li>
          <FontAwesomeIcon className="dropicon" icon={faBook} />
          <StyledLink
            to={instructor ? '/homeInstructor/courses' : '/homestudent/courses'}
          >
            Courses
          </StyledLink>
        </li>
        <li>
          <FontAwesomeIcon className="dropicon" icon={faGear} />
          <StyledLink to="/homestudent/settings">Settings</StyledLink>
        </li>
        <li>
          <FontAwesomeIcon className="dropicon" icon={faRightFromBracket} />
          <StyledLink to='/'  onClick = {initializeUser}> Sign Out</StyledLink>
        </li>
      </ul>
    </nav>
  );
}
