import React from "react";
import "../style/About.css";

function About({ data }) {
  return (
    <section id="about" className="py-5 text-white">
      <div className="container">
        <h2>À Propos</h2>
        <div className="row align-items-center">
          <div className="col-md-8 order-md-1 order-2">
            <h3 className="about-name">{data.name}</h3>
            <h4 className="about-subtitle">{data.subtitle}</h4>
            <p className="about-description">{data.description}</p>
          </div>
          <div className="col-md-4 order-md-2 order-1 mb-4 mb-md-0">
            <div className="about-photo-frame">
              <img
                src="/photo_real.png"
                alt="Photo"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
