import React from 'react'
import './navbar.css';

import {Link, NavLink,  Outlet } from "react-router-dom";
import logo from '../../Images/logo.png';

const Navbar = () => {
  return (
    <>
    
    <nav className="sticky-top navbar navbar-expand-lg navbar-light">
              <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Soft Cygnus" width={200} height={73}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"  } to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  className={(navData) => navData.isActive ? "nav-link active " : "nav-link" } to="/About">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Service">Service</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  className="nav-link" to="/Contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
    </nav>
            <Outlet />
            
    </>
   
  )
}

export default Navbar