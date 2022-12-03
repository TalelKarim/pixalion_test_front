import React from "react";
import ReactDOM from 'react-dom';
import App from './App'
import InstructorProvider from './utils/context/index'

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <InstructorProvider>
        <App />
  </InstructorProvider>  
  , document.getElementById('root'))