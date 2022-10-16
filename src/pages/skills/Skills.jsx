import React from "react";
import "./skills.css";
import { skillListFE } from "../../repositories/skillListFE";
import { skillListBE } from "../../repositories/skillListBE";
import { skillListIDE } from "../../repositories/skillListIDE";

function Skills() {
  return (
    <div className="skills__container" id="skills">
      <h1>Some of the skills that I have...</h1>
      <h2>- Front End -</h2>
      <div className="skill__cards__container">
        {skillListFE.map((e, index) => {
          return (
            <a 
              key={index} 
              className="skill__links"
              href={e.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="skill__card">
                <img src={e.src} width="50" alt="c# icon" style={{ marginTop: "1rem"}}/>
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {e.name}
                </span>
              </div>
            </a>
          );
        })}
      </div>
      <h2>- Back End -</h2>
      <div className="skill__cards__container">
        {skillListBE.map((e, index) => {
          return (
            <a 
              key={index} 
              className="skill__links"
              href={e.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="skill__card">
                <img src={e.src} width="50" alt="c# icon" style={{ marginTop: "1rem"}}/>
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {e.name}
                </span>
              </div>
            </a>
          );
        })}
      </div>
      <h2>- IDEs and Tools -</h2>
      <div className="skill__cards__container">
        {skillListIDE.map((e, index) => {
          return (
            <a 
              key={index} 
              className="skill__links"
              href={e.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="skill__card">
                <img src={e.src} width="50" alt="c# icon" style={{ marginTop: "1rem"}}/>
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {e.name}
                </span>
              </div>
            </a>
          );
        })}
      </div>
      <section id="section06" className="demo">
        <a href="#portfolio">
          <span></span>Scroll
        </a>
      </section>
    </div>
  );
}

export default Skills;
