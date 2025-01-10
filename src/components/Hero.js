import React, { useEffect, useState } from "react";
import "../styles/Hero.css";

// Import your icons
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/img1.svg";
import icon8 from "../assets/img2.svg";
import icon9 from "../assets/img3.svg";
import icon10 from "../assets/img4.svg";
import icon11 from "../assets/img5.svg";
import icon12 from "../assets/img6.svg";
import icon13 from "../assets/img7.svg";
import icon14 from "../assets/img8.svg";
import work from '../assets/Work.png';

// Add all icons to an array
const icons = [
  icon1, icon2, icon3, icon4, icon5, icon6,
  icon7, icon8, icon9, icon10, icon11,
  icon12, icon13, icon14,
];

const HeroSection = () => {
  const [fallingIcons, setFallingIcons] = useState([]);

  useEffect(() => {
    const addIcon = () => {
      const newIcon = {
        id: Date.now(),
        src: icons[Math.floor(Math.random() * icons.length)], // Random icon
        left: Math.random() * 100, // Random horizontal position
      };

      // Add new icon to the array
      setFallingIcons((prev) => [...prev, newIcon]);

      // Remove icons that are off the screen
      setTimeout(() => {
        setFallingIcons((prev) => prev.filter((icon) => icon.id !== newIcon.id));
      }, 5000); // Matches the animation duration
    };

    const interval = setInterval(addIcon, 500); // Add a new icon every 500ms
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="hero-section">
      <div className="overlay">
      <h1 className="hero-title">Welcome to the UEL Student Chapters</h1>
      <p className="hero-subtitle">Join us in exploring the world of technology, coding, and innovation!</p>
      <div className="hero-btn">Join Now</div>  {/*add link*/}
      <div className="image-container">
        <img src={work} alt="worker" className="hero-image" />
      </div>
      </div>
      <div className="icons-container">
        {fallingIcons.map((icon) => (
          <img
            key={icon.id}
            src={icon.src}
            alt="falling icon"
            className="falling-icon"
            style={{ left: `${icon.left}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
