import "../style/app.scss";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import Portfolio from "./portfolio/portfolio";
import Navbar from "./navigation/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
function App() {
    return (React.createElement(Router, null,
        React.createElement("div", null,
            React.createElement(Navbar, null),
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: "/", component: Homepage }),
                React.createElement(Route, { path: "/contact", component: Contact }),
                React.createElement(Route, { path: "/portfolio", component: Portfolio })))));
}
export default App;
