import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarWrapper">
      <div className="left-side"> ABRAHAN GONZALEZ </div>
      <nav className="right-side">
        <NavLink exact to="/" activeClassName="navLinkActive">Home</NavLink>
        <NavLink to="/contact" activeClassName="navLinkActive">Contact</NavLink>
        <NavLink to="/portfolio" activeClassName="navLinkActive">Portfolio</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
