import React from "react";
import "./skills.css";
import DevIcon from "devicon-react-svg";
import { skillList } from "../../repositories/skillList";

function Skills() {
  return (
    <div className="skills__container" id="skills">
      <div>
        <h1>Some of the skills that I have...</h1>
      </div>
      <div className="skill__cards__container">
        {skillList.map((e, index) => {
          return (
            <a className="skill__links" href={e.link} target="_blank" rel="noreferrer">
              <div key={index} className="skill__card">
                <DevIcon className="skill__icons" icon={e.iconName} />
                <span style={{color: "black", fontWeight: "bold", fontSize:"1.2rem", textDecoration: "none"}}>{e.name}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
