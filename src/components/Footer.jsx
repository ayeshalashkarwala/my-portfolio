import React from 'react';

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">
        <h2>Get in Touch</h2>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your vision. Feel free to send me an email.
        </p>
        <a href="mailto:ayeshafazal23@gmail.com" className="cta-button-solid">
          Say Hello
        </a>
        
        <div className="footer-social-links">
          <a href="https://www.linkedin.com/in/ayesha-fazal-lashkarwala/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/ayeshalashkarwala" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Ayesha Fazal Lashkarwala.
        </div>
      </div>
    </footer>
  );
}

export default Footer;