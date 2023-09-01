import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useUserContext from "../UserContext";


const Navbar = ({}) => {
  
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const { loggedIn, logout } = useUserContext();

  const showLoginOptions = () => {
    if (currentUser !== null || loggedIn ) {
      return (
        <>
          <li className="nav-item">
            <button className="btn btn-danger" onClick={logout} >Logout</button>
          </li>
          
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Login">
              Login
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (

<nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
  
       
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <a className="navbar-brand" href="#">
      FITNESS buddy
    </a>
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manage">
                Manage Diet
              </NavLink>
            </li>
          
            {showLoginOptions()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;