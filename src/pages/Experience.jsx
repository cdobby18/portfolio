import React from "react";
import "../styles/Experience.css";

function Experience() {
  return (
    <section className="experience">
      <h2 className="title">Experience</h2>

      <div className="experience-list">
        {/* AI & Machine Learning Focus */}
        <div className="exp-card">
          <h3>AI & Machine Learning Intern (Learning-Based)</h3>
          <p className="years">2024 – Present</p>
          <p>
            Gaining hands-on experience with machine learning and computer
            vision through guided projects and experimentation. Working with
            Python, OpenCV, and YOLO to understand model training, inference,
            and evaluation in real-world scenarios.
          </p>
        </div>

        {/* Research / CV */}
        <div className="exp-card">
          <h3>Computer Vision Research Assistant (Project-Based)</h3>
          <p className="years">2024 – Present</p>
          <p>
            Contributing to beginner-friendly research projects involving pose
            estimation and object detection. Assisted in developing{" "}
            <em>PowerLift</em>, a project focused on analyzing powerlifting form
            using computer vision techniques.
          </p>
        </div>

         {/* Cloud & Deployment */}
        <div className="exp-card">
          <h3>AI Deployment & Cloud Exploration</h3>
          <p className="years">2025 – Present</p>
          <p>
            Exploring how AI models are deployed and scaled using cloud
            platforms. Practicing basic deployment workflows using REST APIs
            and cloud hosting tools such as Vercel.
          </p>
        </div>

        {/* Data & Analytics */}
        <div className="exp-card">
          <h3>Data Analysis & AI Foundations</h3>
          <p className="years">2024 – Present</p>
          <p>
            Learning how to clean, analyze, and visualize data using tools such
            as Pandas, NumPy, Excel, and Power BI. Building foundational skills
            in extracting insights to support AI and machine learning models.
          </p>
        </div>

        {/* Supporting Web Skills */}
        <div className="exp-card">
          <h3>Front-End Development (Supporting Skill)</h3>
          <p className="years">2023 – Present</p>
          <p>
            Building simple and responsive front-end interfaces using React.js,
            HTML, and CSS to visualize AI outputs and make technical systems
            easier to use and understand.
          </p>
        </div>

        {/* Continuous Learning */}
        <div className="exp-card">
          <h3>Continuous Learning & Open Source</h3>
          <p className="years">2024 – Present</p>
          <p>
            Actively learning AI, data, and cloud fundamentals through online
            courses, documentation, and open-source projects. Improving
            problem-solving skills and collaborative development practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
