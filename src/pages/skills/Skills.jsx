import React from "react";
import "./skills.css";

import { skillList } from "../../repositories/skillList";

function Skills() {
  return (
    <div className="skills__container" id="skills">
      <h1>Some of the skills that I have...</h1>
      <div className="skill__cards__container">
        {skillList.map((e, index) => {
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
    </div>
  );
}

export default Skills;
