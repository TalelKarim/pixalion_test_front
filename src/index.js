import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import InstructorProvider from './utils/context/index';
import UserProvider from './utils/context/user';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <InstructorProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </InstructorProvider>,
  document.getElementById('root')
);
