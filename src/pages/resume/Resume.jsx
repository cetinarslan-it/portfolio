import React from "react";
import "./resume.css";
import { resumeList } from "../../repositories/resumeList";

function Resume() {
  return (
    <div>
      <div className="resume-container" id="resume">
        <h1>Resume</h1>
      </div>
      <section>
        <div className="container">
          {resumeList.map((e, index) => {
            return (
              <div className="main-timeline" key={index}>
                <div className={e.dir} >
                  <div className="card">
                    <div className="card-body p-3 d-lg-flex">
                      <div>
                        <img
                          src={e.src}
                          className="card-img-top me-4 mb-4"
                          alt=".."                         
                          style={{height: "100px", width: "120px"}}
                        />
                      </div>
                      <div>
                        <h3>{e.date}</h3>
                        <p className="mb-0 exp-title">{e.title}</p>
                        <hr></hr>
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
