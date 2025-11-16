import React from 'react';
import profileImage from '../assets/ayesha-profile.jpg'; 
import ThemeToggle from './ThemeToggle';

function Header({ isDarkMode, toggleTheme }) {
  return (
    <div className="hero-container">
      
      <div className="orb-container">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="hero-top-right">
        <a 
          href="Lashkarwala_AyeshaFazal_CV.pdf"
          download 
          className="cta-button"
        >
          Download Resume
        </a>
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>

      <div className="hero-content">
        <img 
          src={profileImage} 
          alt="Ayesha Fazal Lashkarwala" 
          className="hero-profile-image" 
        />
        
        <h1>Ayesha Fazal Lashkarwala</h1>

        <div className="rotating-text-container">
          <span className="rotating-text-item item-1">Building Intelligent Applications</span>
          <span className="rotating-text-item item-2">Engineering End-to-End Solutions</span>
          <span className="rotating-text-item item-3">Turning Data into Actionable Insight</span>
          <span className="rotating-text-item item-4">Passionate about Explainable AI</span>
          <span className="rotating-text-item item-5">Building Intelligent Applications</span> 
        </div>

        <nav>
          <a href="#about">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="https://www.linkedin.com/in/ayesha-fazal-lashkarwala/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ayeshalashkarwala" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        
      </div>

    </div>
  );
}

export default Header;
