import React from "react";
import "../style/Education.css";

function Education({ data }) {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Parcours</h2>
        <div className="education-timeline">
          <div className="timeline-line"></div>
          {data.map((edu, index) => (
            <div
              key={index}
              className="education-item"
              style={{ "--item-index": index }}
            >
              <div className="education-marker">
                <div className="marker-dot"></div>
                <div className="marker-year">{edu.duration}</div>
              </div>
              <div className="education-card">
                <div className="card-header">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="school-logo ms-3 mt-3"
                    loading="lazy"
                  />
                </div>
                <div className="card-body p-3">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <h5 className="education-school">{edu.school}</h5>
                  {edu.description && (
                    <p className="education-description">{edu.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
