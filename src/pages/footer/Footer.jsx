import React from "react";
import { navigationLinks } from "../../repositories/navigationLinks";
import linkedin from "../../images/icons/linkedin-app-icon.png";
import github from "../../images/icons/github-icon.png";
import "./footer.css";

function createLinks() {
  return navigationLinks.map((e, index) => (
    <p key={index}>
      <a href={e.ref}>{e.name}</a>
    </p>
  ));
}

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__data__links">
        <div className="footer__data__info">
          <p>Cetin ARSLAN</p>
          <p>072 777 70 79</p>
          <p>cetinarslan.se@gmail.com</p>
          <p>Huddinge, Stockholm</p>
        </div>
        <div className="footer__container--links">
          <div>
            <a
              href="https://www.linkedin.com/in/ctnrsln1923/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="Linkedin"
                width="45"
                height="45"
              />
            </a>
          </div>
          <div className="mail-box">
            <a href="mailto:cetinarslan.it@gmail.com">
              <img
                src="https://www.freeiconspng.com/uploads/white-envelope-icon-png-15.jpg"
                height="45"
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
                src={github}
                alt="GitHub"
                width="45"
                height="45"   
              />
            </a>
          </div>
        </div>
        <div>
          <div className="addPadding">{createLinks()}</div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginLeft:"3%"}}>
        Copyright&copy; {new Date().getFullYear()} Cetin's Portfolio - All rights reserved
      </div>
    </div>
  );
}

export default Footer;
