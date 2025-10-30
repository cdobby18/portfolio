import React from "react";
import "../styles/Profile.css";

function Profile() {
  return (
    <section className="profile">
      <div className="profile-container">
        {/* Left Side - Profile Image */}
        <div className="profile-image">
          <img src="/images/me.png" alt="Carl Joshua Coloma" />
        </div>

        {/* Right Side - Text Content */}
        <div className="profile-text">
          <h2>About Me</h2>
          <p>
            Hi, I’m <strong>Carl Joshua Coloma</strong> — a passionate learner,
            creative problem solver, and aspiring developer. I love coding,
            leading projects, and building meaningful digital experiences that
            inspire people. My goal is to merge design and technology to create
            intuitive, modern, and human-centered applications.
          </p>

          <p>
            I enjoy learning new technologies, experimenting with front-end
            designs, and optimizing workflows for both users and developers. I
            believe in teamwork, creativity, and continuous growth — both
            personally and professionally.
          </p>

          {/* Interests Section */}
          <div className="interests">
            <h3>What I Love Doing</h3>
            <ul>
              <li>Designing clean, responsive web interfaces</li>
              <li>Turning ideas into real, working projects</li>
              <li>Exploring creative UI/UX concepts</li>
              <li>Learning data-driven development</li>
              <li>Collaborating with teams on tech solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
