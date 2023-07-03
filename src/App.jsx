import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SignIn from './components/pages/SignIn';

import Register from './components/pages/Register';
import AdminRegister from './components/pages/AdminRegister';
import { ProtectedRoutes } from './components/ServicesRoutes/ProtectedRoutes';
import PublicRoutes from './components/ServicesRoutes/PublicRoutes';
import { AdminDashboard } from './components/pages/AdminDashboard';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
        <Route path="/about" element={<PublicRoutes><About/></PublicRoutes>} />
        < Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<SignIn/> }/>
        <Route path="/Aregister" element={<AdminRegister/> }/>
        <Route path="/dashboard" element={<AdminDashboard/>}/>
      </Routes>
    </Router>
  );
};

export default App;
