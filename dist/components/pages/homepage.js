import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
function Homepage() {
    return (React.createElement("div", { className: "homepage page-wrapper" },
        React.createElement("img", { className: "avatar", alt: "Abrahan Gonzalez", src: "https://soe.ukzn.ac.za/wp-content/uploads/2018/04/profile-placeholder.png" }),
        React.createElement("div", { className: "bio" },
            "Hello! I'm Abrahan and I'm a Full Stack Software Developer.",
            React.createElement("br", null),
            "I'm looking for opportunities in the MERN web development stack Have a look around"),
        React.createElement("div", { className: "links-wrapper" },
            React.createElement("a", { href: "https://github.com/Trighhorn", className: "link github" },
                React.createElement(FontAwesomeIcon, { icon: faGithub })),
            React.createElement("a", { href: "https://www.linkedin.com/in/agonzalez-19/", className: "link linkedin" },
                React.createElement(FontAwesomeIcon, { icon: faLinkedin })),
            React.createElement("a", { href: "https://drive.google.com/file/d/1FwxHPkf8tlrvWDtTEeHvIVMbcj_ZgkpF/view?usp=sharing", className: "link resume" },
                React.createElement(FontAwesomeIcon, { icon: faFile })))));
}
export default Homepage;
