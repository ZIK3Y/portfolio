import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

function Projects({ data, allSkills }) {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ["All", ...new Set(data.map((p) => p.category))];

  const filteredProjects =
    filter === "All" ? data : data.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-5 text-white">
      <div className="container">
        <h2>Projets</h2>
        <div className="my-3 d-flex justify-content-center flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`category-filter ${filter === cat ? "active" : ""}`}
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
                    height:
                      index % 3 === 0
                        ? "250px"
                        : index % 3 === 1
                        ? "180px"
                        : "220px",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/default_project.png";
                  }}
                />
                <div className="card-body gap">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.subtitle}</p>
                  <div className="d-flex justify-content-center gap-2">
                    <a
                      href={project.link}
                      className="btn btn-secondary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        alt="GitHub"
                        style={{
                          width: "18px",
                          height: "18px",
                          filter: "invert(1)",
                        }}
                      />
                    </a>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedProject(project)}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Détails
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal pour afficher les détails du projet */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          allSkills={allSkills}
        />
      )}
    </section>
  );
}

export default Projects;
