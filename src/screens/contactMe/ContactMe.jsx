import React from "react";
import "./contactMe.css";
import { navigationLinks } from "../../helpers/navigationLinks";

function createLinks() {
  return navigationLinks.map((e, index) => (
    <p key={index}>
      <a href={e.ref}>{e.name}</a>
    </p>
  ));
}

function ContactMe() {
  return (
    <div className="contactMe__container" id="contact">
      <div className="contactMe__data__links">
        <div className="contactMe__data__info">
          <p>Cetin ARSLAN</p>
          <p>072 777 70 79</p>
          <p>cetinarslan.se@gmail.com</p>
          <p>Huddinge, Stockholm</p>
        </div>
        <div className="contactMe__container--links">
          <div>
            <a
              href="https://www.linkedin.com/in/ctnrsln1923/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png"
                alt="Linkedin"
                width="50"
                height="50"
              />
            </a>
          </div>
          <div className="mail-box">
            <a href="mailto:cetinarslan.se@gmail.com">
              <img
                src="https://www.freeiconspng.com/uploads/white-envelope-icon-png-15.jpg"
                height="40"
                alt="white envelope icon png"
              />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/cetinarslan-it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/3d-fluency/100/000000/github.png"
                alt="GitHub"
                width="50"
                height="50"   
              />
            </a>
          </div>
        </div>
        <div>
          <div className="addPadding">{createLinks()}</div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        Copyright&copy; {new Date().getFullYear()} All rights reserved
      </div>
    </div>
  );
}

export default ContactMe;
