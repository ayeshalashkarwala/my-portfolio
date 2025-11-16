import React from 'react';

const experienceData = [
  {
    role: "Working Student - Data Integration and Preparation",
    company: "Technische Universität Berlin",
    date: "Jul 2025 - Present",
    points: [
      "Curated and prepared a domain-specific dataset from Hugging Face for efficient experimentation.",
      "Developed a visual logging tool to streamline monitoring and analysis of Large Language Model outputs.",
      "Researched and evaluated inference servers to identify the most suitable solution for deployment."
    ]
  },
  {
    role: "Student Assistant - Explainable Machine Learning",
    company: "Brandenburgische Technische Universität Cottbus",
    date: "Oct 2025 - Present",
    points: [
      "Developed and delivered a Python programming curriculum to 100+ enrolled students."
    ]
  },
  {
    role: "Associate Software Engineer",
    company: "Spur Solutions Pvt Ltd",
    date: "Dec 2023 - Sep 2024",
    points: [
      "Reduced execution time by 89% by optimizing a complex stored procedure within a legacy .NET system.",
      "Integrated SignalR into a legacy .NET Framework system, optimizing real-time communication.",
      "Performed in-depth data analysis to standardize and harmonize system metrics."
    ]
  },
  {
    role: "Data Science (CS 334) Teaching Assistant",
    company: "Lahore University of Management Sciences (LUMS)",
    date: "Jan 2023 - May 2023",
    points: [
      "Aided the instructor by preparing assignments and leading a semester-long project for 80+ students.",
      "Organized tutorials in Python and conducted weekly office hours."
    ]
  },
];

function Experience() {
  return (
    <section id="experience" className="content-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceData.map((job, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <h3>{job.role}</h3>
              <span className="experience-date">{job.date}</span>
            </div>
            <h4 className="experience-company">{job.company}</h4>
            <ul>
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;