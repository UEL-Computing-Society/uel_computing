import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to the Computing Society</h1>
        <p className="hero-subtitle">
          Join us in exploring the world of technology, coding, and innovation!
        </p>
        <a href="#join-us" className="cta-btn">Join Us</a>
      </div>
    </section>
  );
};

export default Hero;
