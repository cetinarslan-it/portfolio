import React from "react";
import "./aboutMe.css";
import Person from "../../images/myPicture.png";

function AboutMe() {
  return (
    <div className="about-container">
      <h1>About me...</h1>
      <div className="about-container__body">
        <div className="about-container__picture">
          <img src={Person} alt="My cat"></img>
        </div>
        <div className="about-container__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            reprehenderit in iusto possimus quisquam eum provident nulla minus
            sequi nisi ad sint iste, unde, explicabo molestiae sapiente quia
            soluta distinctio. Lorem Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quaerat ut labore, excepturi reiciendis ex, soluta
            quas architecto fugiat molestias corporis a porro facere fugit
            deserunt eos, facilis aut expedita asperiores. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptatum, error impedit. Ipsam
            quos sequi praesentium molestiae molestias dicta. Placeat cupiditate
            culpa aspernatur nulla ipsa expedita ullam voluptate est veritatis
            sunt. <br /> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sunt magni similique illum exercitationem totam cum deserunt
            eos cumque omnis, id animi vero, porro provident commodi facilis est
            molestiae? Soluta, sint. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ratione, quos quibusdam nisi maiores eos facilis
            aliquam inventore eaque magni tempore laudantium minima doloremque
            vitae magnam, natus laboriosam repudiandae. Ea, reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
