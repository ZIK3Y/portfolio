import React from 'react';

function Experience({ data }) {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2>Expérience</h2>
        <div className="row">
          {data.map((exp, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body d-flex">
                  <img src={exp.siteIcon} alt={exp.company} className="me-3" style={{width: '50px', height: '50px'}} />
                  <div>
                    <h5 className="card-title"><b>{exp.title}</b></h5>
                    <p className="card-text fst-italic">{exp.company}</p>
                    <p className="card-desc">{exp.description}</p>
                    <p className="card-text"><span className='badge bg-dark'>{exp.duration}</span></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;