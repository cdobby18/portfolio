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
            Hi, I’m <strong>Carl Joshua Coloma</strong> — an aspiring{" "}
            <strong>AI Engineer</strong> with a strong passion for building
            intelligent, data-driven systems. I enjoy working with machine
            learning models, computer vision, and automation, and I’m driven by
            the challenge of turning raw data into meaningful insights and
            real-world solutions.
          </p>

          <p>
            I love experimenting with new AI techniques and exploring ways to
            make models smarter and more efficient. I also enjoy designing
            simple, clean interfaces to make AI tools more accessible and user-friendly.
          </p>

          <p>
            Outside of AI and coding, I love <strong>dancing</strong> and{" "}
            <strong>DJing</strong>, which allow me to express creativity in
            different ways and stay energized and inspired.
          </p>

          {/* Interests Section */}
          <div className="interests">
            <h3>What I Love Doing</h3>
            <ul>
              <li>Building and training machine learning models</li>
              <li>Working on computer vision and AI-driven applications</li>
              <li>Designing simple front-end interfaces for AI tools</li>
              <li>Turning research ideas into practical, scalable solutions</li>
              <li>Continuously learning about AI and data</li>
              <li>Dancing and DJing to explore creative expression</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
