import React from "react";
import "../styles/Education.css";

function Education() {
  return (
    <section className="education">
      <h2 className="edu-title">EDUCATION</h2>
      <div className="edu-timeline">
        <div className="edu-item">
          <div className="edu-year">2016 - 2022</div>
          <div className="edu-details">
            <h3>Meycauayan College</h3>
            <p>Junior & Senior High School</p>
            <p>Specialized in STEM – Science, Technology, Engineering & Math</p>
          </div>
        </div>

        <div className="edu-item">
          <div className="edu-year">2022 - Present</div>
          <div className="edu-details">
            <h3>FEU Institute of Technology</h3>
            <p>Bachelor of Science in Computer Science with Specialization in Software Engineering</p>
            <p>Focused on Software Development, UI/UX, and Machine Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
