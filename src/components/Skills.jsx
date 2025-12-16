import React from "react";

function Skills({ data }) {
  // Grouper les compétences par catégorie
  const groupedSkills = data.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-5 text-center text-white">
      <div className="container">
        <h2>Compétences</h2>
        {Object.keys(groupedSkills).map((category) => (
          <div key={category} className="mb-4">
            <h3>{category}</h3>
            <div className="row row-cols-auto justify-content-center">
              {groupedSkills[category].map((skill, index) => (
                <div key={index} className="col mb-3">
                  <div
                    className="skill-item d-flex align-items-center justify-content-center border px-3 py-2"
                    style={{ borderRadius: "5px" }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.title}
                      className="me-3"
                      style={{
                        width: "30px",
                        height: "30px",
                        filter: skill.title.toLowerCase().includes("unreal")
                          ? "invert(1)"
                          : "none",
                      }}
                    />
                    <span>{skill.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
