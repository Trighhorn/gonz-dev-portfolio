import React, { useState, useEffect } from "react";
import axios from "axios";
import PortfolioItem from "./portfolioitem";
function Portfolio() {
    var _a = useState(null), data = _a[0], setData = _a[1];
    var _b = useState(true), isLoading = _b[0], setIsLoading = _b[1];
    useEffect(function () {
        axios
            .get("https://gonz-dev-portfolio-backend.uw.r.appspot.com/portfolio/")
            .then(function (res) {
            var portfolioData = res.data;
            setData(portfolioData);
            setIsLoading(false);
        });
    }, [data]);
    return (React.createElement("div", { className: "portfolio-page page-wrapper" },
        React.createElement("div", { className: "back-splash" }, "Welcome to my portfolio"),
        isLoading ? (React.createElement("div", null, "Loading...")) : (React.createElement("div", { className: "portfolio-contaner" }, data.map(function (item) {
            return React.createElement(PortfolioItem, { key: item.id, item: item });
        })))));
}
export default Portfolio;
