import React from "react";
import "../styles/Home.css";

function Home() {
  const contacts = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/carl-joshua-coloma/",
      external: true,
      ariaLabel: "Visit Carl Joshua Coloma's LinkedIn",
    },
    {
      name: "Gmail",
      url: "mailto:carljoshuamcoloma@gmail.com",
      external: false,
      ariaLabel: "Send email to Carl Joshua Coloma",
    },
  ];

  return (
    <section className="home">
      <div className="hero">
        <header>
          <h1 className="hero-title">Hi, I'm Carl Joshua Coloma</h1>
          <p className="hero-subtitle">
            A passionate developer exploring technology, design, and innovation.
          </p>
        </header>

        <p className="hero-desc">
          I create digital experiences that blend aesthetics with functionality — 
          transforming code into creativity. Welcome to my minimalist world of 
          tech and design.
        </p>

        <blockquote className="anime-theme">
          <p>“One piece of code at a time — that’s how I chase my dreams.”</p>
        </blockquote>

        <div className="contact-section">
          <h2 className="contact-title">CONTACT ME</h2>
          <div className="contact-links">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.url}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="btn contact-btn"
                aria-label={contact.ariaLabel}
              >
                {contact.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
