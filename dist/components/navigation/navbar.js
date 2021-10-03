import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (React.createElement("div", { className: "navbarWrapper" },
        React.createElement("div", { className: "left-side" }, " ABRAHAN GONZALEZ "),
        React.createElement("nav", { className: "right-side" },
            React.createElement(NavLink, { exact: true, to: "/", activeClassName: "navLinkActive" }, "Home"),
            React.createElement(NavLink, { to: "/contact", activeClassName: "navLinkActive" }, "Contact"),
            React.createElement(NavLink, { to: "/portfolio", activeClassName: "navLinkActive" }, "Portfolio"))));
}
export default Navbar;
