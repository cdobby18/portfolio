import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects">
      <div className="projects-content">
        <h2>PROJECTS</h2>

        {/* 🟡 Project 1: Powerlift */}
        <div className="project-header">
          <h3>Powerlift: Precision Pose Estimation for Powerlifting Performance Metrics</h3>
          <p>
            Powerlift is a computer vision-based project that analyzes
            powerlifting movements using YOLOv8, Kalman Filtering, and Support
            Vector Machine (SVM) algorithms. It aims to help athletes and
            coaches assess form, consistency, and efficiency in real-time.
          </p>
        </div>

        <div className="project-showcase">
          <div className="project-poster-container">
            <img
              src="/images/TechTitans_Poster.png"
              alt="Powerlift Project Poster"
              className="project-poster"
            />
          </div>

          <div className="project-video-container">
            <video controls>
              <source
                src="/videos/Tech Titans_SystemDemo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* 🟡 Project 2: Elevator Simulation */}
        <div className="project-header">
          <h3>Elevator Simulation</h3>
          <p>
            Created a C++ program simulating two elevators moving concurrently
            using multithreading and mutexes. Enabled real-time floor updates,
            random initial elevator positions, and interactive user input to
            demonstrate thread management and synchronization.
          </p>
        </div>

        <div className="project-showcase elevator">
          <div className="project-poster-container elevator">
            <img
              src="/images/Elevator.png"
              alt="Elevator Simulation Project"
              className="project-poster"
            />
          </div>
        </div>

        {/* 🟡 Project 3: Sari-Sari Store */}
        <div className="project-header">
          <h3>Sari-Sari Store</h3>
          <p>
            Built a simple web application using PHP and HTML for managing an
            online store. Implemented user registration, login, and session
            management, allowing secure interaction with the storefront.
          </p>
        </div>

        <div className="project-showcase sari-sari">
          <div className="project-poster-container sari-sari">
            <img
              src="/images/store1.png"
              alt="Sari-Sari Store Project"
              className="project-poster"
            />
            <img
              src="/images/store2.png"
              alt="Sari-Sari Store Project"
              className="project-poster"
            />
          </div>
        </div>

        {/* 🟡 Project 4: One Piece Fan Website */}
        <div className="project-header">
          <h3>One Piece Fan Website</h3>
          <p>
            Created a fan website dedicated to <em>One Piece</em>, one of my
            favorite anime series. The website showcases character profiles,
            story arcs, and trivia about the Straw Hat crew. Designed and built
            using HTML, CSS, and JavaScript to practice front-end development
            while expressing my creativity and passion for the series. It was a
            fun personal project that helped me improve my design sense and
            experiment with interactive elements such as hover effects,
            character highlights, and smooth animations.
          </p>
        </div>

        <div className="project-showcase onepiece">
          <div className="project-poster-container onepiece">
            <img
              src="/images/onep.png"
              alt="One Piece Fan Website"
              className="project-poster"
            />
            <img
              src="/images/onep2.png"
              alt="One Piece Fan Website"
              className="project-poster"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
