import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>React Projects</h3>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink>To -Do List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink>Digital Clock</NavLink>
        </li>
        <li className="nav-item">
          <NavLink>StopWatch</NavLink>
        </li>
        <li className="nav-item">
          <NavLink>Calculator</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
