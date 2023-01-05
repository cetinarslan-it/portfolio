import React from "react";
import "./aboutMe.css";
import Person from "../../images/myPicture.jpg";

function AboutMe() {
  return (
    <div className="about__main__container" id="about">
      <h1>About me...</h1>
      <hr className="w-75" />
      <div className="about__main__container-body">
        <div className="about__main__container-picture">
          <img src={Person} alt="..."></img>
        </div>
        <div className="about__main__container-text">
          <p>
            I am a full stack C# .NET developer with experience in both
            front-end and back-end development, as well as software testing.
          </p>
          <p>
            I am passionate about creating intuitive and user-friendly
            applications. In my previous roles, I have gained experience in
            testing and debugging software to ensure high quality.
          </p>
          <p>
            In addition to my technical skills, I am a strong team player with
            excellent communication skills.
          </p>
          <p>
            I am always looking to learn and grow as a developer and excited to
            take on new challenges.
          </p>
          <p>I love harmony and a friendly working environment...</p>
        </div>
      </div>
      <section id="scroll__aboutme" className="demo__aboutme">
        <a href="#resume">
          <span></span>Further
        </a>
      </section>
    </div>
  );
}

export default AboutMe;
