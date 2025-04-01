import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>React Projects</h3>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/todo" style={{textDecoration:"none"}}> To -Do List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/digitalclock" style={{textDecoration:"none"}}>Digital Clock</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/stopwatch" style={{textDecoration:"none"}}>StopWatch</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cal" style={{textDecoration:"none"}}>Calculator</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/searchbox" style={{textDecoration:"none"}}>SearchBar</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/password-generator" style={{textDecoration:"none"}}>Password-Generator</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/otp" >OTP</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
