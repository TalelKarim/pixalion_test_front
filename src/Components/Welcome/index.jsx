import React, { useContext } from 'react';
import './style.css';
import Brand from '../Brand';
import styled from 'styled-components';
import { InstructorContext } from '../../utils/context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Welcome() {
  const { instructor, setInstructor } = useContext(InstructorContext);
  const navigate = useNavigate();

  const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 25px rgba(1 1 1 / 15%);
    width: 45%;
    height: 60%;
    position: absolute;
    left: 50%;
    border-radius: 12px;
    top: 42%;
    transform: translate(-50%, -50%);
  `;
  const Title = styled.h3`
    font-weight: 560;
    margin-bottom: 20px;
  `;

  const Middle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    height: 45%;
    margin-bottom: 5px;
  `;

  const OptionStudent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: flex-start;
    padding: 23px 10px 10px 15px;
    // background-color: green;
    width: 40%;
    height: 90%;
    border: ${!instructor ? '2px solid #0d6efd' : '2px solid #f0f0f0'};
    border-radius: 6px;
    cursor: pointer;
    transition: 0.7s ease;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  `;

  const OptionInstructor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: flex-start;
    padding: 23px 10px 10px 15px;
    // background-color: green;
    width: 40%;
    height: 90%;
    border: ${instructor ? '2px solid #0d6efd' : '2px solid #f0f0f0'};
    border-radius: 6px;
    cursor: pointer;
    transition: 0.7s ease;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `;
  return (
    <>
      <Brand />
      <Main>
        <Title> Join as an instructor or Student</Title>
        <Middle>
          <OptionInstructor
            onClick={() => {
              setInstructor(true);
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt="img"
            />
            <b> I am an instructor, giving courses</b>
          </OptionInstructor>

          <OptionStudent
            onClick={() => {
              setInstructor(false);
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              alt="img"
            />
            <b> I am a student, I am here to learn</b>
          </OptionStudent>
        </Middle>
        <div className="d-grid gap-2 mt-3">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Join as {!instructor ? 'a Student' : 'an Instructor'}
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Already have an account ?<Link to="/"> Login</Link>
        </p>
      </Main>
    </>
  );
}
