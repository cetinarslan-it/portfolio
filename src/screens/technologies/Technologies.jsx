import React from "react";
import "./technologies.css";
import DevIcon from "devicon-react-svg";
import { techList } from "../../helpers/techList";

function Technologies() {
  return (
    <div className="technologies__container" id="technologies">
      <div>
        <h1 style={{ textAlign: "center", fontWeight: "bold"}}>
          Some of the techonologies that I use...
        </h1>
      </div>
      <div className="tech__cards__container">
        {techList.map((e, index) => {
          return (
            <div key={index} className="tech__card">
              <DevIcon className="tech__icons" icon={e.iconName} />
              <span style={{ margin: "5px", fontSize: "2rem", fontWeight:"Bold" }}>
                {e.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
