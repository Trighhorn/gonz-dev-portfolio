import React from "react";
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import contactPagePicture from "../../images/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <div className="contact-page page-wrapper">
      <div
        className="contact-image"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="contact-info">
        <div className="contact-bullet-point">
          <div className="bullet-point">
            <div className="font-awesome-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="text">307-677-5546</div>
          </div>
          <div className="bullet-point">
            <div className="font-awesome-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="text">abgonzdev@gmail.com</div>
          </div>
          <div className="bullet-point">
            <div className="font-awesome-icon">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </div>
            <div className="text">Salt Lake City, UT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
