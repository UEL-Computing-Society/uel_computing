import React from 'react';
import '../styles/Footer.css';
import whatsappIcon from '../assets/whatsapp.png'; // Replace with the correct path
import githubIcon from '../assets/github.png'; // Replace with the correct path
import instaIcon from '../assets/instagram.png'; // Replace with the correct path

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="Whatsapp" className="social-icon" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instaIcon} alt="Instagram" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
