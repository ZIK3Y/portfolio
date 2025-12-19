import "../style/ProjectDetails.css";
import { useEffect } from "react";

function ProjectDetails({ project, onClose, allSkills }) {
  if (!project) return null;

  // Empêcher le scroll du body quand le modal est ouvert
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Récupérer les détails complets des skills depuis allSkills
  const projectSkills = project.skills
    ?.map((skillTitle) => allSkills.find((s) => s.title === skillTitle))
    .filter(Boolean);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content border border-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <img
            src={project.image}
            alt={project.title}
            className="modal-image"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/default_project.png";
            }}
          />
          <div className="modal-header-text">
            <span className="modal-category">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
        </div>

        <div className="modal-body m-4">
          <p className="modal-description">{project.description}</p>

          {/* Section des compétences */}
          {projectSkills && projectSkills.length > 0 && (
            <div className="modal-skills-section">
              <h3 className="modal-skills-title">Compétences utilisées</h3>
              <div className="modal-skills-grid">
                {projectSkills.map((skill, index) => (
                  <div key={index} className="modal-skill-item">
                    <img
                      src={skill.icon}
                      alt={skill.title}
                      className="modal-skill-icon"
                      loading="lazy"
                      style={{
                        filter: skill.title.toLowerCase().includes("unreal")
                          ? "invert(1)"
                          : "none",
                      }}
                    />
                    <span className="modal-skill-name">{skill.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="modal-actions">
            <a
              href={project.link}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                className="btn-icon"
              />
              Voir sur GitHub
            </a>
          </div>
          <div className="contact m-4 text-center">
            <h5 className="footer-title">Me contacter :</h5>
            <a href="https://github.com/zik3y" className="footer-link">
              <i className="bi bi-github footer-icon"></i>
              <span>Mon GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vincent-roure-3a3ba929b/"
              className="footer-link"
            >
              <i className="bi bi-linkedin footer-icon"></i>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:vincentroure.pro@gmail.com" className="footer-link">
              <i className="bi bi-envelope-fill footer-icon"></i>
              <span>vincentroure.pro@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
