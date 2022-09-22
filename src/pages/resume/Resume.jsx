import React from "react";
import "./resume.css";
import { resumeList } from "../../repositories/resumeList";
import foto from "../../images/background.jpg";

function Resume() {
  return (
    <div>
      <div className="resume-container" id="resume">
        <h1>Resume</h1>
        <hr className="w-100" />
      </div>
      <section>
        <div className="container py-5">
          {resumeList.map((e, index) => {
            return (
              <div className="main-timeline">               
                <div className={e.dir === "right" ? "timeline right" : "timeline left"}>
                  <div className="card">
                    <div className="card-body p-4 d-lg-flex">
                      <img
                        src={foto}
                        className="card-img-top me-4 mb-4"
                        alt=".."
                        style={{ height: "120px", width: "120px" }}
                      />
                      <div>
                        <h3>{e.date}</h3>
                        <p className="mb-0">{e.exp}</p>
                      </div>
                    </div>
                  </div>
                </div>      
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Resume;
