import React from "react";
import "./aboutMe.css";
import Person from "../../images/myPicture.png";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-container__picture">
        <img src={Person} alt="My cat" width="200px" height="200px"></img>
      </div>
      <div className="about-container__text">
        <h1>ABOUT ME</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          reprehenderit in iusto possimus quisquam eum provident nulla minus
          sequi nisi ad sint iste, unde, explicabo molestiae sapiente quia
          soluta distinctio.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
