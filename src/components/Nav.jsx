import React from 'react';
// import Home from '../pages/Home'
// import About from '../pages/About'
// import Register from '../pages/Register';
// import SignIn from '../pages/SignIn';
import { Link, useNavigate } from 'react-router-dom';
import STYLE from "./nav.module.css"

const Navbar = () => {
let navigate = useNavigate();
  let token =localStorage.getItem("token")
  let role=localStorage.getItem("role")

  let handleLogout=()=>{
    localStorage.clear();
    navigate("/signin")
  }
  return (
    <nav>
      <ul>
        <li>
      
        </li>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li> */}
        <li>
          {/* <Link to="/register">Sign Up</Link> */}
        </li>

        {token ? <Link onClick={handleLogout}>LOGOUT</Link> : 
            <>
            <li><Link to="/">Home</Link></li>
            <li>
                      <Link to="/signin">SignIn</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
            </>
}
     {role==="ROLE_ADMIN" ?(
      <Link to={"/dashboard"} >Admin Dashboard</Link>
     ):null}
      </ul>
    </nav>
  );
};

export default Navbar;
