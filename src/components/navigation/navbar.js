import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarWrapper">
      <div className="left-side"> AG </div>
      <nav className="right-side">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
