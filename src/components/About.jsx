import React from 'react';

function About({ data }) {
  return (
    <section id="about" className="py-5 text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>{data.name}</h2>
            <h3>{data.subtitle}</h3>
            <p>{data.description}</p>
          </div>
          <div className="col-md-4">
            <img src={data.photo} alt="Photo" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;