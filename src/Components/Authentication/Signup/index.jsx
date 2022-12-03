import React, { useState } from 'react'
import './style.css'
import Brand from '../../Brand'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {InstructorContext} from '../../../utils/context/index'
import { useContext } from 'react';

export default function Signup() {
  
  const [ManSelected, setManSelected] = useState(false);
  const [WomanSelected, setWomanSelected] = useState(false);
  const {instructor} = useContext(InstructorContext)
  console.log(instructor)
  const toggleMan = () => {
    setManSelected(prevOption => !prevOption)
  }

  const toggleWoman = () => {
    setWomanSelected(prevOption => !prevOption)
  }
 
  const navigate = useNavigate()
  const [firstName ,setfirstName ] = useState("");
  const [lastName,setlastName] = useState("");
  const [nickName, setnickName] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [speciality, setSpeciality] = useState('')
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const isInstructor = instructor
  const Reinitialize = () => {
    setfirstName('');
    setlastName('');
    setnickName('');
    setBirthday('');
    setGender('');
    setMail("");
    setPassword('');
    setSpeciality('')
    setFile(null);
}


  const handleRegister = (e) => {
    e.preventDefault()

    const config = {
      headers: {
         'content-type': 'multipart/form-data',
      }
    }
    const data = new FormData()
    setGender(ManSelected ? "Man" : "Woman")
    data.append('firstName', firstName);
    data.append('lastName', lastName);
    data.append('nickName', nickName);
    data.append('Birthday', Birthday);
    data.append('gender', gender);
    data.append("mail", mail);
    data.append("password", password);
    data.append("speciality", speciality)
    data.append("isInstructor", isInstructor)
    data.append('photo', file);
    console.log(firstName, lastName, nickName, gender, Birthday, speciality,mail,password, isInstructor)
    axios.post('http://localhost:5000/user/register', data)
    .then((response) => {
      console.log(response)
      navigate('/login')
      Reinitialize()
    })
    .catch((err) => {console.log(err.stack)})

  }
 
  


  return (
 <div>
      <Brand />
 <div  className='main' >
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title"> Create account :</h3>
     <div className="name">
        <div className="form-group mt-1" id='first_name'>
          <label>First Name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter first name" 
            onChange={(e) => {
              setfirstName(e.target.value)
            }}
            required
          />
        </div>

        <div className="form-group mt-1">
          <label>Last name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter last name"
            onChange={(e) => {
              setlastName(e.target.value)
              }} 
            required
          />
        </div>
     </div>
        

        <div className="form-group mt-1">
          <label>Nickname</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter Nickname"
            required
            onChange = {(e) => {
              setnickName(e.target.value)
            }}
          />
        </div>

        <div className="form-group mt-1">
          <label for="birthday">Birthday:</label>
          <input type="date" id="birthday" className="form-control mt-1"  required
           onChange={(e) => {
             setBirthday(e.target.value)
           }}
          />
        </div>
       
        <div className="form-group mt-1">
          <label for="birthday">Speciality:</label>
          <input type="text" id="speciality" className="form-control mt-1"  required
           onChange={(e) => {
             setSpeciality(e.target.value)
           }}
          />
        </div>
        <div className="form-group mt-1">
           <div className="gender_option">
           <label className="type_gender">Select gender:</label>
             <div className="checks">
               <div class="form-check" id='male'>        
                 <input   
                       class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  disabled={WomanSelected}   onClick={toggleMan} required                
                 />
                 <span class="form-check-label" for="flexCheckDefault">
                  Male   </span>
                </div>

               <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled={ManSelected} onClick={toggleWoman}  required />
                 <span class="form-check-label" for="flexCheckChecked">
                   Female
                 </span>
              </div>
           </div>
         



             </div>

        <div className="form-group mt-1">
          <label>Email account</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            required
            onChange={(e) => {
              setMail(e.target.value)
            }}
          />
        </div>
        <div className="form-group mt-1">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            required
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>

        <div className="form-group mt-1">
          <label>Upload your photo</label>
          <input
            type="file"
            className="form-control mt-1"
            required
            onChange={(e) => {
              setFile(e.target.files[0])
            }}
/> 
        </div>

        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary"
             onClick={(e) => {
               handleRegister(e)
             }}
          >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
            Already have an account ? 
            <Link to="/login"> Login</Link>
        </p>
      </div>
     </div> 
    </form>
  </div>
 </div>
   
  )
}
