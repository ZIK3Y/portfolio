import React from 'react';
import '../style/Experience.css';

function Experience({ data }) {
  return (
    <section id="experience" className="py-5 text-white">
      <div className="container">
        <h2>Expérience</h2>
        <div className="timeline">
          {data.map((exp, index) => (
            <div key={index} className="timeline-item" style={{'--item-index': index}}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="d-flex align-items-start gap-3">
                    <img 
                      src={exp.siteIcon} 
                      alt={exp.company}
                      className="company-icon"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid var(--color-cyan)',
                        boxShadow: 'var(--shadow-neon-cyan)'
                      }}
                    />
                    <div className="flex-grow-1">
                      <div className="experience-badge">{exp.duration}</div>
                      <h4 className="experience-title">{exp.title}</h4>
                      <h5 className="experience-company">{exp.company}</h5>
                      <p className="experience-description">{exp.description}</p>
                    </div>
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