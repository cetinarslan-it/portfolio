import React from "react";
import "./aboutMe.css";
import Person from "../../images/myPicture.png";

function AboutMe() {
  return (
    <div className="about-container">
      <h1>About me...</h1>
      <div className="about-container__body">
        <div className="about-container__picture">
          <img src={Person} alt="My cat"></img>
        </div>
        <div className="about-container__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            reprehenderit in iusto possimus quisquam eum provident nulla minus
            sequi nisi ad sint iste, unde, explicabo molestiae sapiente quia
            soluta distinctio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
