import React from 'react';
import Welcome from './Components/Welcome';
import Login from './Components/Authentication/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Signup from './Components/Authentication/Signup';
import HomeStudent from './pages/HomeStudent';
import Dashboard from './Components/Student/Dashboard';
import Instructors from './Components/Student/InstructorsList';
import Courses from './Components/courses';
import DashboardInstructor from './Components/Instructor/Dashboard';
import Students from './Components/Instructor/studentsList';
import Error from './Components/Error';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}`;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homestudent" element={<HomeStudent />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="courses" element={<Courses />} />
        </Route>

        <Route path="/homeInstructor" element={<HomeStudent />}>
          <Route path="dashboard" element={<DashboardInstructor />} />
          <Route path="students" element={<Students />} />
          <Route path="courses" element={<Courses />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
