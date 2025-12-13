import React, { useState } from 'react';

function Projects({ data }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(data.map(p => p.category))];

  const filteredProjects = filter === 'All' ? data : data.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-5 text-white">
      <div className="container">
        <h2>Projets</h2>
        <div className="my-3 d-flex justify-content-center flex-wrap gap-2">
          {categories.map(cat => (
            <span 
              key={cat} 
              className={`category-filter rounded-5 ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="masonry-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="masonry-item">
              <div className="card">
                <img 
                  src={project.image} 
                  className="card-img-top" 
                  alt={project.title}
                  style={{
                    height: index % 3 === 0 ? '250px' : index % 3 === 1 ? '180px' : '220px',
                    objectFit: 'cover'
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    Plus de détails
                  </a>
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