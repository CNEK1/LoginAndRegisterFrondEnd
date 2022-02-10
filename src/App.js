import React from 'react';
import RegistrationForm from './RegistrationForm';
import {Route,Routes} from "react-router-dom";
import LoginIn from './LoginForm';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<RegistrationForm/>}/>
      <Route path = "/log" element = {<LoginIn/>}/>
    </Routes>
  );
}

export default App;