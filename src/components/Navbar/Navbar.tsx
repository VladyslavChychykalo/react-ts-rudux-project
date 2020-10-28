import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple darken-1 px1">
      <a href="/">React + Typescript</a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
