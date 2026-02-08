import React from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    {
      title: "Programming & Frameworks",
      items: ["C++", "Python", "PHP", "Java", "JavaScript"]
    },
    {
      title: "AI & Machine Learning",
      items: ["Scikit-learn", "TensorFlow", "PyTorch", "NLP", "Transformers", "LLMs", "Hugging Face", "LangChain", "Roboflow"]
    },
    {
      title: "Computer Vision",
      items: ["OpenCV", "MediaPipe", "YOLOv8"]
    },
    {
      title: "Web & Mobile Development",
      items: ["React.js", "ReactNative", "Streamlit", "Node.js", "TailwindCSS", "Bootstrap"]
    },
    {
      title: "Database & Tools",
      items: ["MySQL", "RESTFUL APIs", "Jupyter", "Git", "Kaggle", "VSCode", "Cursor"]
    }
  ];

  return (
    <section className="skills">
      <h2 className="skills-title">SKILLS</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.title}</h3>
            <p>{skill.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
