import React, { useState } from "react";
import { Link } from "react-router-dom";
var PortfolioItem = function (props) {
    var _a = useState(""), portfolioItemClass = _a[0], setPortfolioItemClass = _a[1];
    var _b = props.item, id = _b.id, description = _b.description;
    // add url support
    // const { id, name, description, thumb_image_url, logo_url } = this.props.item
    function handleMouseEnter() {
        setPortfolioItemClass("image-blur");
    }
    function handleMouseLeave() {
        setPortfolioItemClass("");
    }
    return (React.createElement(Link, { to: "/portfolio/" + id },
        React.createElement("div", { className: "portfolio-item-wrapper", onMouseEnter: function () { return handleMouseEnter(); }, onMouseLeave: function () { return handleMouseLeave(); } },
            React.createElement("div", { className: "portfolio-img-background " + portfolioItemClass, style: {
                // backgroundImage: `url(${thumb_image_url})`,
                } }),
            React.createElement("div", { className: "img-text-wrapper" },
                React.createElement("div", { className: "logo-wrapper" }),
                React.createElement("div", { className: "subtitle" }, description)))));
};
export default PortfolioItem;
