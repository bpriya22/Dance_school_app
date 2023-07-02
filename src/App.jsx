import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SignIn from './components/pages/SignIn';

import Register from './components/pages/Register';
import AdminRegister from './components/pages/AdminRegister';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        < Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<SignIn/> }/>
        <Route path="/Aregister" element={<AdminRegister/> }/>
      </Routes>
    </Router>
  );
};

export default App;
