import React from "react";
import "./aboutMe.css";
import Person from "../../images/myPicture.png";

function AboutMe() {
  return (
    <div className="about-container" id="about">
      <h1>About me...</h1>
      <hr className="w-100"/>
      <div className="about-container__body">
        <div className="about-container__picture">
          <img src={Person} alt="..."></img>
        </div>
        <div className="about-container__text">
          <div>
            <p>
              Coding has always been an area that I have been interested in.
              Moving to Sweden gave me a big chance to start a new career.
              <br /><br />I have experience both as a manual and automation tester in
              software and my passion to go deeper into coding led me to join
              Salt Bootcamp.
              <br /><br />
              Thanks to my earlier experience in agile scrum methodology, I am
              aware of the power of collaboration and teamwork.
              <br /><br />I love harmony and a friendly working environment...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
