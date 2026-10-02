import React from 'react';

const skillsData = {
  "AI & Machine Learning": [
    "Python", "TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "NumPy",
    "Pandas", "SciPy", "Matplotlib", "Explainable ML", "LLM Analysis", "Computer Vision (YOLOv3)", "Hugging Face", "XAI (LIME)", "Generative AI", "Agentic AI", "Multi-Agent Systems"
  ],
  "Data & Software Engineering": [
    "SQL", "C#", ".NET Framework", "C++", "JavaScript", "React", "Node.js",
    "HTML", "CSS", "Git/GitHub", "Docker (basic)"
  ],
  "Tools & Platforms": [
    "Mixpanel", "Figma", "Firebase", "MongoDB", "MS Excel", "MATLAB", "LATEX", "Android Studio"
  ],
  "Language Skills": [
    "English (C2 - Fluent)",
    "Urdu (C2 - Native)",
    "German (A2 - Conversational)"
  ],
  "Soft Skills": [
    "Communication", "Teaching", "Leadership", "Teamwork", "Design Thinking",
    "Analysis", "Research", "Academic Writing"
  ]
};

function Skills() {
  return (
    <section id="skills" className="content-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="skill-category" key={category}>
            <h3>{category}</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <span className="skill-pill" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;