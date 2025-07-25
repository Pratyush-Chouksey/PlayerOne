import React from 'react';
import './WhyPlayerOne.css';
import EliteGamingRigs from '../../assets/EliteGamingRigs.png';
import ConsoleZones from '../../assets/ConsoleZones.png';
import Tournment from '../../assets/Tournment.png';
import SnackAndChill from '../../assets/SnackAndChill.png';

const features = [
  {
    title: "Elite Gaming Rigs",
    desc: "Top-tier PCs and consoles with ultra-low latency, RTX GPUs, and 240Hz displays.",
    icon: EliteGamingRigs
  },
  {
    title: "Console Zones",
    desc: "Play on PS5 and Xbox Series X with friends on comfy couches & wide screens.",
    icon: ConsoleZones
  },
  {
    title: "Tournaments & Leaderboards",
    desc: "Compete in weekly tournaments and climb the local rankings.",
    icon: Tournment
  },
  {
    title: "Snack & Chill Lounge",
    desc: "Fuel your sessions with snacks, energy drinks, and good vibes.",
    icon: SnackAndChill
  }
];

const WhyPlayerOne = () => {
  return (
    <section className="why-playerone">
      <div className="section-header">
        <h2>Why Choose <span>PlayerOne</span>?</h2>
        <p>Unleash your gaming potential in Sonipat's ultimate gaming destination.</p>
      </div>
      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className='imgdiv'>
                <img src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPlayerOne;
