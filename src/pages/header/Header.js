import React from "react";
import Typed from "react-typed";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-main-salute">Hello!</h1>
      <br/>
      <h1 className="header-main-text">My name is Cetin.</h1>
      <Typed
        className="typed-script"
        strings={[
          "",
          "I am",
          "System Engineer",
          "Automation Tester",
          "and",
          "Full Stack .Net Developer",
          "Welcome to my website!...",
        ]}
        typeSpeed={140}
        backSpeed={270}
        loop
      />
      <div className="Scroll__container">
        <section id="scroll__header" className="demo__header">
          <a href="#about">
            <span></span>Further
          </a>
        </section>
      </div>
    </div>
  );
}

export default Header;
