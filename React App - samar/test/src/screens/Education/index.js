import React from "react";
import "../../App.css";

function Education() {
  return (
    <div>
        <div id="home" className="pt-6" />
        <section className="hero is-danger block py-6 custom-font">
          <div className="hero-body">
            <div id="about" className="pt-6" />
            <section className="hero  has-background-danger-light block py-6 custom-font">
              <div className="column is-4 mx-auto">
                <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
                  About
                </h2>
                <div className="title-underline" />
              </div>
              <div className="hero-body">
                <div className="column is-4 mx-auto">
                  <div className="title-underline" />
                </div>
                <div className="columns mx-0">
                  <figure data-aos="fade-down" className="image p-6 m-auto column is-5">
                    <img className="is-rounded" src="about.png" alt="" />
                  </figure>
                  <div className="column is-5 m-auto p-6 ">
                    <p data-aos="fade-up">
                    </p><h2 className="title is-3 has-text-black">I am an adaptable, self-motivated
                      undergraduate who has a responsible
                      approach to any task undertaken by me. I
                      am a good timekeeper, always willing to
                      learn new skills. I can work well in a team
                      environment or as an individual. I'm
                      passionate about exploring new domains,
                      where I can learn and overcome
                      challenges. </h2><br />
                    <p />
                  </div>
                </div>
              </div>
            </section>
            <div id="Edu" className="pt-6" />
            <section className="hero  has-background-danger-light block py-6 custom-font">
              <div className="column is-4 mx-auto">
                <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
                  Education
                </h2>
                <div className="title-underline" />
              </div>
              <div className="hero-body">
                <div className="column is-4 mx-auto">
                  <div className="title-underline" />
                </div>
                <div className="columns mx-0">
                  <figure data-aos="fade-down" className="image p-6 m-auto column is-5">
                    <img className="is-rounded" src="education.png" alt="" />
                  </figure>
                  <div className="column is-5 m-auto p-6 ">
                    <p data-aos="fade-up">
                    </p><h2 className="title is-3 has-text-black">
                      <div className="container">
                        <div className="columns">
                          <div className="column">
                            <div className="box">
                              <div className="content">
                                <h4 className="title is-5">2022</h4>
                                Information Systems  (undergradute)
                                University of Colombo School of Computing
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="box">
                              <div className="content">
                                <h4 className="title is-5">2020</h4>
                                GCE Advanced Level Exam.
                                Jaffna Hindu College
                                Combined mathematics – A
                                Chemistry – B
                                Physics – C
                                English - C
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column">
                            <div className="box">
                              <div className="content">
                                <h4 className="title is-5">2017</h4>
                                GCE Ordinary Level Exam.
                                Jaffna Hindu College
                                (8A, B)
                                Mathematics – A
                                English - A
                              </div>
                            </div>
                          </div>
                        </div> 
                        <p />
                      </div>
                    </h2></div>
                </div>
              </div></section>
          </div></section></div>
  );
}

export default Education;
