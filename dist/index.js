import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(React.createElement(Router, null,
    React.createElement(App, null)), document.getElementById("root"));
