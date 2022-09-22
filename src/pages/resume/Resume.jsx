import React from "react";
import "./resume.css";
import foto from "../../images/myPicture.png";

function Resume() {
  return (
    <>
      <div className="resume-container" id="resume">
        <h1>Resume</h1>
      </div>

      <section>
        <div class="container py-5">
          <div class="main-timeline">
          <div class="timeline left">
              <div class="card">
                <div class="card-body p-4 d-lg-flex">
                  <img
                    src={foto}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "120px", width: "120px" }}
                    className="me-4 mb-4"
                  />
                  <div>
                    <h3>2018-2020</h3>
                    <p class="mb-0">
                      Under construction!...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="timeline right">
              <div class="card">
                <div class="card-body p-4 d-lg-flex">
                  <img
                    src={foto}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "120px", width: "120px" }}
                    className="me-4 mb-4"
                  />
                  <div>
                    <h3>2018-2020</h3>
                    <p class="mb-0">
                      Under construction!...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="timeline left">
              <div class="card">
                <div class="card-body p-4 d-lg-flex">
                  <img
                    src={foto}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "120px", width: "120px" }}
                    className="me-4 mb-4"
                  />
                  <div>
                    <h3>2018-2020</h3>
                    <p class="mb-0">
                      Under construction!...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="timeline right">
              <div class="card">
                <div class="card-body p-4 d-lg-flex">
                  <img
                    src={foto}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "120px", width: "120px" }}
                    className="me-4 mb-4"
                  />
                  <div>
                    <h3>2018-2020</h3>
                    <p class="mb-0">
                      Under construction!...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="timeline left">
              <div class="card">
                <div class="card-body p-4 d-lg-flex">
                  <img
                    src={foto}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "120px", width: "120px" }}
                    className="me-4 mb-4"
                  />
                  <div>
                    <h3>2018-2020</h3>
                    <p class="mb-0">
                      Under construction!...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="timeline left"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
