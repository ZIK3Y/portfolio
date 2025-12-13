import React from 'react';

function Experience({ data }) {
  return (
    <section id="experience" className="py-5">
      <div className="container text-white">
        <h2>Expérience</h2>
        <div className="row my-3">
          {data.map((exp, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="align-items-start mb-3">
                    <img 
                      src={exp.siteIcon} 
                      alt={exp.company} 
                      className="me-3 rounded" 
                      style={{width: '50px', height: '50px', objectFit: 'cover'}} 
                    />
                    <h5 className="card-title mb-1">{exp.title}</h5>
                    <p className="card-text fst-italic mb-2" style={{fontSize: '0.9rem'}}>{exp.company}</p>
                  </div>
                  <p className="card-text mb-3">{exp.description}</p>
                  <span className="badge" style={{
                    backgroundColor: 'var(--color-bg-tertiary)',
                    color: 'var(--color-accent-primary)',
                    border: '1px solid var(--color-border)',
                    padding: '0.5rem 1rem',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                    {exp.duration}
                  </span>
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