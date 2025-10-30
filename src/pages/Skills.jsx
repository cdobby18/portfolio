import React from "react";
import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Programming & Frameworks</h3>
          <p>
            C++, Python, PHP, Java, JavaScript<br />
            React.js, Node.js, Tailwind CSS, Bootstrap
          </p>
        </div>

        <div className="skill-card">
          <h3>Database & Development Tools</h3>
          <p>
            MySQL, Git / GitHub, npm, Postman, VS Code
          </p>
        </div>

        <div className="skill-card full">
          <h3>Design & Productivity Tools</h3>
          <p>
            Figma, Canva, Microsoft Office, Notion
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
