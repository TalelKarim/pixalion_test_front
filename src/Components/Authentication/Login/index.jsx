import React, { useContext, useState } from 'react';
import './style.css';
import Brand from '../../Brand';
import { userContext } from '../../../utils/context/user';
import { useNavigate } from 'react-router-dom';
import { InstructorContext } from '../../../utils/context';

import axios from 'axios';

export default function Login() {
  const {user,setUser} = useContext(userContext);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const { instructor, setInstructor } = useContext(InstructorContext);


  const navigate = useNavigate()

  const handleSubmit = (e) => {
       e.preventDefault();
      
    const data = new FormData();
    data.append("mail", mail);
    data.append("password", password);

    axios.post('http://localhost:5000/user/login', data)
    .then((response) => {
      setUser(response.data);
      setInstructor(response.data.isInstructor)
      response.data.isInstructor ? navigate('/homeinstructor') : navigate('/homestudent')
    }) 
    .catch((err) => {
      console.log(err.stack);
      alert('invalid credentials')
    })
    console.log(mail,
       password)
  }



  console.log(user, user.token , instructor)
  return (
    <div>
      <Brand />
      <div className="Auth-form-container-login">
        <form className="Auth-form-login">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
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
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                required
                onChange={ (e) => {
                    setPassword(e.target.value)
                } 
                }
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Do not have an account ?<a href="#"> Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    
    </div>
  );
}
