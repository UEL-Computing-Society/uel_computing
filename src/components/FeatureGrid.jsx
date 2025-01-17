import React from 'react';
import '../styles/FeatureGrid.css';
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'

const features = [
  {
    title: 'Tech Talks',
    description: 'Engage with top industry experts and learn cutting-edge trends.',
    icon: <img src={icon1} alt="Custom Icon" className="feature-icon" />,
  },
  {
    title: 'Projects',
    description: 'Put your coding skills to the test in exciting challenges.',
    icon: <img src={icon2} alt="Custom Icon" className="feature-icon" />,
  },
  {
    title: 'Workshops',
    description: 'Hands-on experience with trending technologies and tools.',
    icon: <img src={icon3} alt="Custom Icon" className="feature-icon" />,
  },
  {
    title: 'Networking Events',
    description: 'Meet fellow tech enthusiasts and grow your connections.',
    icon: <img src={icon4} alt="Custom Icon" className="feature-icon" />,
  },
  {
    title: 'Hackathons',
    description: 'Collaborate and innovate in our hackathons.',
    icon: <img src={icon5} alt="Custom Icon" className="feature-icon" />,
  },
  {
    title: 'Society Resources',
    description: 'Access resources and materials to boost your skills.',
    icon: <img src={icon6} alt="Custom Icon" className="feature-icon" />,
  },
];

const FeatureGrid = () => {
  return (
    <div className="feature-grid-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-tile">
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
