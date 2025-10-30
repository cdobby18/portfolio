import React from "react";
import "../styles/Home.css";


function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1 className="hero-title">Hi, I'm Carl Joshua Coloma</h1>
        <p className="hero-subtitle">
          A passionate developer exploring technology, design, and innovation.
        </p>
        <p className="hero-desc">
          I create digital experiences that blend aesthetics with functionality — 
          transforming code into creativity. Welcome to my minimalist world of 
          tech and design.
        </p>

        <div className="anime-theme">
          <div className="anime-overlay">
            <p>“One piece of code at a time — that’s how I chase my dreams.”</p>
          </div>
        </div>

        <div className="contact-section">
          <h2 className="contact-title">CONTACT ME</h2>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/carl-joshua-coloma/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn contact-btn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:carljoshuamcoloma@gmail.com"
              className="btn contact-btn"
            >
              Gmail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
