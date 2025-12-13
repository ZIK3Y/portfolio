import React, { useState } from 'react';

function Projects({ data }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(data.map(p => p.category))];

  const filteredProjects = filter === 'All' ? data : data.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2>Projets</h2>
        <div className="mb-4">
          {categories.map(cat => (
            <button key={cat} className={`btn me-2 ${filter === cat ? 'btn-secondary' : 'btn-primary'}`} onClick={() => setFilter(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-secondary">Plus de détails</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;