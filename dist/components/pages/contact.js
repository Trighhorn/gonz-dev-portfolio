import React from "react";
import { faEnvelope, faPhone, faMapMarkedAlt, } from "@fortawesome/free-solid-svg-icons";
import contactPagePicture from "../../images/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contact() {
    return (React.createElement("div", { className: "contact-page page-wrapper" },
        React.createElement("div", { className: "contact-image", style: {
                background: "url(" + contactPagePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            } }),
        React.createElement("div", { className: "contact-info" },
            React.createElement("div", { className: "contact-bullet-point" },
                React.createElement("div", { className: "bullet-point" },
                    React.createElement("div", { className: "font-awesome-icon" },
                        React.createElement(FontAwesomeIcon, { icon: faPhone })),
                    React.createElement("div", { className: "text" }, "307-677-5546")),
                React.createElement("div", { className: "bullet-point" },
                    React.createElement("div", { className: "font-awesome-icon" },
                        React.createElement(FontAwesomeIcon, { icon: faEnvelope })),
                    React.createElement("div", { className: "text" }, "abgonzdev@gmail.com")),
                React.createElement("div", { className: "bullet-point" },
                    React.createElement("div", { className: "font-awesome-icon" },
                        React.createElement(FontAwesomeIcon, { icon: faMapMarkedAlt })),
                    React.createElement("div", { className: "text" }, "Salt Lake City, UT"))))));
}
export default Contact;
