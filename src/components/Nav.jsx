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

  let handleLogout=()=>{
    localStorage.clear();
    navigate("/signin")
  }
  return (
    <nav>
      <ul>
        <li>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajgX4vPsMzbpV1LyH77GvLxtm2YLntDac-ewI3JoFlg&usqp=CAU&ec=48600113" alt="" height="35px" width="45px"/>
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
      </ul>
    </nav>
  );
};

export default Navbar;
