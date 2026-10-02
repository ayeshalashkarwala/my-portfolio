import React from 'react';

const experienceData = [
  {
    role: "Working Student - Data Integration and Preparation",
    company: "Technische Universität Berlin",
    date: "Jul 2025 - Present",
    points: [
      "Built a FastAPI microservice using Polars to automate data ingestion and building middleware for stable integration",
      "Created a visual logging tool to analyze experiment's performance and curated domain-specific dataset from Hugging Face for experiments",
      "Evaluated 5+ inference servers (e.g., vLLM, NVIDIA Triton, TGI) to optimize for throughput and latency, authoring a comparative report that streamlined the final deployment decision",
      "Implemented a data pipeline using FastAPI and Polars to ingest and process large datasets, establishing robust middleware for stable data integration",
      "Designed a multi-agent backtracking pipeline for agentic table reasoning, preventing compounding errors from premature row filtering and column selection",
      "Built an auditor and Critic Agent framework to validate tabular transformations, rolling back execution to the last valid state"
    ]
  },
  {
    role: "Student Assistant - Explainable Machine Learning",
    company: "Brandenburgische Technische Universität Cottbus",
    date: "Oct 2025 - Sep. 2026",
    points: [
      "Developed and delivered a Python programming curriculum to 100+ enrolled students",
      "Taught core ML concepts, focusing on data hygiene and the implementation and interpretation of Linear and Logistic Regression models",
      "Demonstrated the impact of Feature Engineering (Standardization, Normalization) on model performance through hands-on programming tutorials",
      "Prepared final exam tasks assessing core ML concepts"
    ]
  },
  {
    role: "Associate Software Engineer",
    company: "Spur Solutions Pvt Ltd",
    date: "Dec 2023 - Sep 2024",
    points: [
      "Reduced execution time by 89% by optimizing a complex stored procedure within a legacy .NET system",
      "Integrated SignalR into a legacy .NET Framework system, optimizing real-time communication",
      "Performed in-depth data analysis to standardize and harmonize system metrics"
    ]
  },
  {
    role: "Teaching Assistant - Data Science",
    company: "Lahore University of Management Sciences (LUMS)",
    date: "Jan 2023 - May 2023",
    points: [
      "Aided the instructor by preparing assignments and leading a semester-long project for 80+ students",
      "Organized tutorials in Python and conducted weekly office hours"
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
