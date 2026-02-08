import React from "react";
import "../styles/Certification.css";

function Certification() {
  const certifications = [
    {
      title: "AI Engineer (Udemy)",
      link: "https://www.udemy.com/certificate/UC-ce6b30a4-237b-469c-9f60-0039ab82713f/",
      image: "/images/cert-ai-engineer.png", // optional, add your image path
      description: "Completed an advanced AI course covering machine learning and deep learning fundamentals."
    },
    {
      title: "Python Expert",
      link: "https://www.credly.com/earner/earned/badge/8ef3efc3-7e58-4ef2-b349-32f818814c5b",
      image: "/images/cert-python.png",
      description: "Mastered Python programming and advanced scripting concepts."
    },
    {
      title: "Introduction to Modern Artificial Intelligence",
      link: "https://www.credly.com/badges/fc10a9c7-172e-47b7-b817-f1116e8b9846/public_url",
      image: "/images/cert-ai-intro.png",
      description: "Learned core concepts of modern AI including ML and neural networks."
    },
    {
      title: "JavaScript Essentials",
      link: "https://www.credly.com/earner/earned/badge/2d0c3b41-ee3f-4616-af62-2b3a55be3890",
      image: "/images/cert-js.png",
      description: "Fundamentals of JavaScript programming and ES6 features."
    },
    {
      title: "Web Development Fundamentals",
      link: "https://www.credly.com/badges/b610ac88-9103-441c-9874-f79ea071a605/linked_in_profile",
      image: "/images/cert-web.png",
      description: "Learned interface design principles, wireframing, and user experience."
    },
    {
      title: "Introduction to Data Science",
      link: "https://www.credly.com/badges/fde949db-9414-4ed4-85d3-d7fccab61366/public_url",
      image: "/images/cert-ds.png",
      description: "Foundations of data science, analytics, and visualization using Python."
    },
  ];

  return (
    <section className="certification">
      <h2>CERTIFICATIONS</h2>

      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            {cert.image && <img src={cert.image} alt={cert.title} className="cert-image" />}
            <div className="cert-content">
              <h3>{cert.title}</h3>
              {cert.description && <p>{cert.description}</p>}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certification;
