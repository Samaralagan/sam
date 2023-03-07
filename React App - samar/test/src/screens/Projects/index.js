import React from "react";
import "../../App.css";

function Projects(){
        return(
            <div>
            <div id="pro" className="pt-6" />
            <section className="hero  has-background-danger-light block py-6 custom-font">
              <div className="column is-4 mx-auto">
                <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
                  PROJECT
                </h2>
                <div className="title-underline" />
              </div>
              <div className="hero-body">
                <div className="column is-4 mx-auto">
                  <div className="title-underline" />
                </div>
                <div className="columns mx-0">
                  <figure data-aos="fade-down" className="image p-6 m-auto column is-5">
                    <img className="is-rounded" src="projects.png" alt="" />
                  </figure>
                  <div className="column is-5 m-auto p-6 ">
                    <p data-aos="fade-up">
                    </p><h2 className="title is-3 has-text-black">
                      <li>  Hack an iot devices</li>
                      <li>Develop a nutrition app</li>
                      <li>Creating a website</li>
                      <li>Measuring the internet speed</li>
                      <li>Build an online radio station</li> </h2><br />
                    <p />
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
}

export default Projects;