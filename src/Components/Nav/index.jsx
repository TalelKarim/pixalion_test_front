import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import './style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge } from '@fortawesome/free-solid-svg-icons';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { InstructorContext } from '../../utils/context';
import { userContext } from '../../utils/context/user';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {faDollar} from  '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

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
   const {user,setUser} = useContext(userContext);
  const { instructor, setInstructor } = useContext(InstructorContext);


   const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    ///data to update profile 
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [nickName, setnickName] = useState(user.nickName);
  const [Birthday, setBirthday] = useState(user.Birthday);
  const [gender, setGender] = useState(user.gender);
  const [speciality, setSpeciality] = useState(user.speciality);
  const [mail, setMail] = useState(user.mail);
  const [password, setPassword] = useState("0000");
  const [file, setFile] = useState(null);
  const isInstructor = instructor;

  const initializeUser = () => {
    setUser({})
  }


  const handleSubmit = (e) => {
    e.preventDefault();

  
    const data = new FormData();
    data.append('firstName', firstName);
    data.append('lastName', lastName);
    data.append('nickName', nickName);
    data.append('Birthday', Birthday);
    data.append('gender', gender);
    data.append('mail', mail);
    data.append('speciality', speciality);
    data.append('isInstructor', isInstructor);
    data.append('password', password)
    data.append('imageUrl', user.imageUrl)
   
    axios
      .put( `http://localhost:5000/user/update/${user._id}`, data)
      .then((response) => {
          console.log(response)
          setUser(response.data)
      })
      .catch((err) => {
        console.log(err.stack);
      });
  };


  console.log(user);
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
          <FontAwesomeIcon className="dropicon" icon={faUser} />
          <StyledLink 
            onClick={() => {
               setShow(true)
            }}
          > My Profile </StyledLink>
        </li>
        <li>
          <FontAwesomeIcon className="dropicon" icon={faRightFromBracket} />
          <StyledLink to='/'  onClick = {initializeUser}> Sign Out</StyledLink>
        </li>
        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="previewtitlecourse">
              <Modal.Title>
         <FontAwesomeIcon className='updateIcon' icon={faPen} />

                 Update your profile</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
             <img className='previewimgcourse' src={user.imageUrl} />
        
        <div className="form-group mt-1" id="first_name">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="new firstname"
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                  defaultValue={user.firstName}
                  required
                />
              </div>

             <div className="form-group mt-1">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="new lastname"
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                  required
                  defaultValue={user.lastName}
                />
              </div>
            

            <div className="form-group mt-1">
              <label>Nickname</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="new Nickname"
                required
                onChange={(e) => {
                  setnickName(e.target.value);
                }}
                defaultValue={user.nickName}

              />
            </div>

             <div className="form-group mt-1">
              <label for="birthday">Speciality:</label>
              <input
                type="text"
                id="speciality"
                className="form-control mt-1"
                required
                onChange={(e) => {
                  setSpeciality(e.target.value);
                }}
                defaultValue={user.speciality}
              />
            </div>

            <div className="form-group mt-1">
              <label for="birthday">Birthday:</label>
              <input
                type="date"
                id="birthday"
                className="form-control mt-1"
                required
                onChange={(e) => {
                  setBirthday(e.target.value);
                }}
                defaultValue={user.Birthday}
              />
            </div>

           

                 <div className="form-group mt-1">
                <label>Email account</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="new email"
                  required
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  defaultValue={user.mail}
                />
                 </div>

                  <div className="form-group mt-1">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="new password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  defaultValue={password}
                />
              </div>
              
              

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => {
            handleSubmit(e)
            handleClose()
          }}>
            Apply Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </ul>
    </nav>
  );
}
