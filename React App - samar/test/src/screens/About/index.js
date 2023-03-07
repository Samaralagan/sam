import React from "react";
import "../../App.css";

function About() {
  return (
    <div>
    <div id="home" className="pt-6" />
    <section className="hero is-danger block py-6 custom-font">
      <div className="hero-body">
        <div className="column is-4 mx-auto">
          <div className="title-underline" />
        </div>
        <div className="columns mx-0">
          <div className="column is-5 m-auto p-6 ">
            <p data-aos="fade-up">
            </p><h2 className="title is-3 has-text-black">HI, </h2><br />
            <h1 className="title is-1 ml-6 has-text-black"> Samaralagan </h1>
            <h2 className="title is-5 has-text-black"> Undergraduate  student</h2>
            <h2 className="title is-5 has-text-black"> University of Colombo School of Computing</h2>
            <p />
          </div>
          <figure data-aos="fade-down" className="image p-6 m-auto column is-5">
            <img className="is-rounded" src="IMG-20221209-WA0139.jpg" alt="" />
          </figure>
        </div>
      </div>
    </section>
  </div>
  );
}

export default About;
