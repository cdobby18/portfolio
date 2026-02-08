import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Powerlift: Precision Pose Estimation",
      description:
        "Computer vision system that analyzes powerlifting movements using YOLOv8, Kalman Filtering, and SVM to evaluate powerlifting form in real time.",
      tech: ["YOLOv8", "Kalman Filter", "SVM", "Computer Vision"],
      image: "/images/TechTitans_Poster.png",
      codeLink: "https://github.com/cdobby18/powerlift-frontend",
    },
    {
      title: "AI Resume Analyzer",
      description:
        "Streamlit application that analyzes 100+ resumes in minutes using NLP, entity extraction, and skill ranking to improve job matching accuracy.",
      tech: ["Python", "Streamlit", "NLP", "Entity Extraction"],
      image: "/images/resume-analyzer.png",
      codeLink: "https://github.com/cdobby18/resume_analyzer",
    },
    {
      title: "Spotify Stream Analysis Dashboard",
      description:
        "Interactive Power BI dashboard that analyzes Spotify streaming trends, artist popularity, and track performance using dynamic charts and KPIs.",
      tech: ["Power BI", "Data Visualization", "Dashboard"],
      image: "/images/spotify.png",
      codeLink: "#", // no repo provided yet
    },
    {
      title: "Elevator Simulation",
      description:
        "Multithreaded C++ elevator simulation using mutexes to demonstrate concurrency, synchronization, and real-time state updates.",
      tech: ["C++", "Multithreading", "Concurrency"],
      image: "/images/Elevator.png",
      codeLink: "https://github.com/cdobby18/ElevatorSimul",
    },
    {
      title: "Sari-Sari Store (Convenience Store System)",
      description:
        "Web-based convenience store system built with PHP and HTML featuring user authentication, session management, and basic inventory flow.",
      tech: ["PHP", "HTML", "Web App"],
      image: "/images/store1.png",
      codeLink: "https://github.com/cdobby18/convenience-store",
    },
    {
      title: "One Piece Fan Website",
      description:
        "Anime fan website showcasing character profiles, story arcs, and trivia built with interactive animations and front-end effects.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/onep.png",
      codeLink: "https://github.com/cdobby18/onepiece-web",
    },
  ];

  return (
    <section className="projects">
      <h2 className="projects-title">PROJECTS</h2>
      <p className="projects-subtitle">
        A selection of impactful AI / software projects.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span className="tech-pill" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.codeLink}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
