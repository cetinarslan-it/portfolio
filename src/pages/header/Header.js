import React from "react";
import Typed from "react-typed";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <p>Welcome to my portfolio...</p>
      <h1 className="header-question">Who am I ?</h1>
      <Typed
        strings={[
          "",
          "Hi! My name is Cetin.",
          "I am a...",
          "System Engineer",
          "Automation Tester",
          "and...",
          "Fullstack .Net Developer",
          "Welcome to my website!...",
        ]}
        typeSpeed={140}
        backSpeed={270}
        loop
      />
      <div className="Scroll__container"> 
      <section id="scroll__header" className="demo__header">
        <a href="#about">
          <span></span>Scroll
        </a>
      </section>
      </div>
    </div>
  );
}

export default Header;
