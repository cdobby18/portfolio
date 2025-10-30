import React from "react";
import "../styles/Experience.css";

function Experience() {
  return (
    <section className="experience">
      <h2 className="title">Experience</h2>

      <div className="experience-list">
        <div className="exp-card">
          <h3>Front-End Development</h3>
          <p className="years">2023 – Present</p>
          <p>
            Building responsive and elegant user interfaces using React.js, HTML, and CSS. Focused on creating smooth, intuitive, and minimalist web experiences.
          </p>
        </div>

        <div className="exp-card">
          <h3>Software Research & Innovation</h3>
          <p className="years">2024 – Present</p>
          <p>
            Exploring computer vision and AI-powered tracking systems. Contributed to <em>PowerLift</em> — a precision pose estimation project for analyzing powerlifting form and performance.
          </p>
        </div>

        <div className="exp-card">
          <h3>Full-Stack Exploration</h3>
          <p className="years">2023 – Present</p>
          <p>
            Experimenting with backend technologies like Node.js, PHP, and MySQL to create complete systems that blend functionality with clean design.
          </p>
        </div>

        <div className="exp-card">
          <h3>Open Source & Continuous Learning</h3>
          <p className="years">2024 – Present</p>
          <p>
            Contributing to open-source repositories and exploring frameworks such as Next.js, Flask, and Django to enhance problem-solving and collaboration skills.
          </p>
        </div>

        <div className="exp-card">
          <h3>UI/UX Design Practice</h3>
          <p className="years">2023 – Present</p>
          <p>
            Studying minimalist and human-centered design to create digital experiences that feel natural, aesthetic, and purposeful.
          </p>
        </div>

        {/* 🆕 Beginner-friendly new card */}
        <div className="exp-card">
          <h3>Data Analysis & Learning</h3>
          <p className="years">2024 – Present</p>
          <p>
            Learning the basics of working with data using simple tools like Excel and Google Sheets. Practicing how to organize information and find insights from real-world data.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
