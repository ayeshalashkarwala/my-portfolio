import React from 'react';

const projectData = [
  {
    title: "MathMate: Adaptive Learning Engine (End-to-End ML)",
    description: "Designed and built a full-stack web application to classify student mathematical errors from images, providing personalized feedback in low-resource schools.",
    impact: "Achieved 87% accuracy with classical models and improved Deep Learning model accuracy from 37% to 60% via data augmentation.",
    tech: "Python, Google Vision API, Scikit-Learn, Figma",
    link: "https://drive.google.com/file/d/1v46rQzscdZqZplBTNP4YXxFQsO8hiYEu/view?usp=drive_link"
  },
  {
    title: "Authorship Attribution Model (NLP & ML)",
    description: "Built a model to identify authorship of tweets. Scraped and cleaned text from 600+ users, implemented Laplace Smoothing, and benchmarked KNN, Gradient Boosting, and MLP models.",
    impact: "Successfully compared multiple ML models for a text classification task.",
    tech: "Python, NLP (Regex, nltk), Scikit-Learn, Neural Networks",
    link: "https://github.com/ayeshalashkarwala/AuthorshipAttributionModel"
  },
  {
    title: "kNN Classifier from Scratch",
    description: "Developed the k-Nearest Neighbors (kNN) algorithm from the ground up, implementing the core logic for distance metrics and majority-class voting to demonstrate a foundational understanding of ML principles.",
    tech: "Python, NumPy, Scikit-Learn",
    link: "https://github.com/ayeshalashkarwala/kNN-Implementation"
  },
  {
    title: "Information Retrieval System",
    description: "Built a search engine core focused on information retrieval. This project involved implementing document indexing, TF-IDF vectorization, and query processing to rank documents by relevance.",
    tech: "Python, NLTK, Scikit-Learn",
    link: "https://github.com/ayeshalashkarwala/Information-Retrieval-"
  },
  {
    title: "Real-time Mask Detection System (Computer Vision)",
    description: "Implemented a real-time object detection system capable of processing both live video feeds and recorded footage to identify face masks.",
    impact: "Created a practical, real-time CV application using established models.",
    tech: "YOLOv3, Darknet, Python, Computer Vision, OpenCV"
  }
];

function Projects() {
  return (
    <section id="projects" className="content-section"> 
      <h2>Projects</h2>
      <div className="project-list">
      {projectData.map((project, index) => {
          if (project.link) {
            return (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card" 
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Tech Stack:</strong> {project.tech}</p>
              </a>
            );
          }
          
          return (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.tech}</p>
            </div>
          );

        })}
      </div>
    </section>
  );
}

export default Projects;
