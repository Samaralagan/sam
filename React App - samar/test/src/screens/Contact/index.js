import React from "react";
import "../../App.css";

function Contact() {
  return (
    <div>
        <div id="con" className="pt-6" />
        <section className="hero  has-background-danger-light block py-6 custom-font">
          <div className="column is-4 mx-auto">
            <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
              CONTACT
            </h2>
            <div className="title-underline" />
          </div>
          <div className="hero-body">
            <div className="column is-4 mx-auto">
              <div className="title-underline" />
            </div>
            <div className="columns mx-0">
              <figure data-aos="fade-down" className="image p-6 m-auto column is-5">
                <img className="is-rounded" src="contact.png" alt="" />
              </figure>
              <div className="column is-5 m-auto p-6 ">
                <p data-aos="fade-up">
                </p><h2 className="title is-3 has-text-black">
                  <figure className="image is-48x48" data-aos="fade-down">
                    <img className="is-rounded" src="phone.png" alt="" /></figure>0766454948 
                  <figure className="image is-48x48" data-aos="fade-down">
                    <img className="is-rounded" src="mail.png" alt="" />
                  </figure>samarsami@gmail.com
                  <figure className="image is-48x48" data-aos="fade-down">
                    <img className="is-rounded" src="location.png" alt="" /></figure>12/10,kunaradna lane,
                  kandy
                  <figure className="image is-48x48" data-aos="fade-down">
                    <img className="is-rounded" src="linkedin.png" alt="" /></figure>www.linkedin.com/in/samaralagan
                </h2><br />
                <p />
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Contact;
