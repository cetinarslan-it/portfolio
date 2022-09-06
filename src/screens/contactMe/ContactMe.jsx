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
        <div>
          <p>Cetin ARSLAN</p>
          <p>072 777 70 79</p>
          <p>cetinarslan.se@gmail.com</p>
          <p>Huddinge, Stockholm</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ctnrsln1923/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/128px-Linkedin.svg.png"
              alt="Linkedin"
              width="50"
              height="50"
            />
          </a>
        </div>

        <div>
          <a href="https://github.com/cetinarslan-it">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/128px-Github-desktop-logo-symbol.svg.png"
              alt="GitHub"
              width="60"
              height="60"
            />
          </a>
        </div>
        <div>{createLinks()}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        Copyright&copy; {new Date().getFullYear()} All rights reserved
      </div>
    </div>
  );
}

export default ContactMe;
