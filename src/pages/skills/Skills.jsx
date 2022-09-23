import React from "react";
import "./skills.css";

import { skillList1 } from "../../repositories/skillList1";

function Skills() {
  return (
    <div className="skills__container" id="skills">
      <h1>Some of the skills that I have...</h1>

      <div className="skill__cards__container">
        {skillList1.map((e, index) => {
          return (
            <a
              className="skill__links"
              href={e.link}
              target="_blank"
              rel="noreferrer"
            >
              <div key={index} className="skill__card">
                <img src={e.src} width="75" alt="c# icon" style={{ marginTop: "1rem"}}/>
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
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
