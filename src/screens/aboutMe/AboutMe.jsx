import React from "react";
import "./aboutMe.css";
import Person from "../../images/myPicture.png";

function AboutMe() {
  return (
    <div className="about-container" id="about">
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
            adipisicing elit. <br /> Quaerat ut labore, excepturi reiciendis ex,
            soluta quas architecto fugiat molestias corporis a porro facere
            fugit deserunt eos, facilis aut expedita asperiores. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatum, error
            impedit. Ipsam quos sequi praesentium molestiae molestias dicta.
            Placeat cupiditate culpa aspernatur nulla ipsa expedita ullam
            voluptate est veritatis sunt. <br /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt magni similique illum
            exercitationem totam cum deserunt eos cumque omnis, id animi vero,
            porro provident commodi facilis est molestiae? Soluta, sint. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ratione, quos
            quibusdam nisi maiores eos facilis aliquam inventore eaque magni
            tempore laudantium minima doloremque vitae magnam, natus laboriosam
            repudiandae. Ea, reiciendis.
            <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis quas quasi, blanditiis, quia itaque eaque eum numquam
            asperiores perferendis reprehenderit suscipit nam tenetur molestias
            fugiat provident aliquam doloremque porro! At. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Hic, rerum laudantium ut
            doloremque id tenetur ad voluptates officia, modi perferendis sunt
            assumenda ipsa provident vero accusantium. Quae nemo ipsam modi.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            sapiente iste maxime, cum nesciunt totam? Dolor, error doloribus
            laboriosam eos tenetur, dolore excepturi ipsa nulla, vero eaque
            explicabo sed saepe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
