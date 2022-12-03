import React from 'react'
import Welcome from './Components/Welcome'
import Login from './Components/Authentication/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Nav from './Components/Nav';
import Signup from './Components/Authentication/Signup'
import HomeStudent from './pages/HomeStudent';
import Dashboard from './Components/Student/Dashboard';
import Instructors from './Components/Student/InstructorsList';
import Courses from './Components/courses';
import Settings from './Components/SettingsComponent';
import DashboardInstructor from './Components/Instructor/Dashboard'
import Students from './Components/Instructor/studentsList'
import AddCourse from './Components/Instructor/addcourse';
import InstructorProvider from './utils/context/index'

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}`

export default function App() {

  return (
<BrowserRouter>
    <GlobalStyle /> 
    <Routes>
        <Route  path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/homestudent' element={<HomeStudent />}>
             <Route path="dashboard" element={<Dashboard/>} />
             <Route path="instructors" element={<Instructors/>} />
             <Route path="courses" element={<Courses/>} />
             <Route path="settings" element={<Settings/>} />
        </Route>

        <Route path='/homeInstructor' element={<HomeStudent />}>
             <Route path="dashboard" element={<DashboardInstructor/>} />
             <Route path="students" element={<Students/>} />
             <Route path="courses" element={<Courses/>} />
             <Route path="settings" element={<Settings/>} />

        </Route>


    </Routes>
    
</BrowserRouter>
  )
}
