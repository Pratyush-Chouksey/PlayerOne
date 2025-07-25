import React from 'react';
import './Games.css';
import cafeImg from '../../assets/image3.png';
import consoleImg from '../../assets/image1.png';
import rigsImg from '../../assets/image2.png';
import heroImg from '../../assets/HeroImg.png';
import tournmentImg from '../../assets/image.png';

const About = () => {
  return (
    <div className="about-section">
      <h2 className="about-title">About Us</h2>
      <div className="about-intro">
        <div className="about-text">
          <p>
            <b>PlayerOne</b> is Sonipat’s ultimate gaming lounge, built by passionate gamers for the community. We offer a premium experience with high-end PCs, the latest consoles, cozy cafe vibes, and a welcoming space for everyone—from casual players to esports enthusiasts.
          </p>
          <p>
            Whether you want to compete in tournaments, chill with friends, or discover new games, PlayerOne is your go-to destination. Enjoy snacks, drinks, and a vibrant atmosphere designed for fun and connection.
          </p>
        </div>
        <img src={heroImg} alt="PlayerOne Lounge" className="about-hero-img" />
      </div>
      <h3 className="about-gallery-title">Our Space</h3>
      <div className="about-gallery">
        <div className="about-gallery-item">
          <img src={cafeImg} alt="Cafe Area" />
        </div>
        <div className="about-gallery-item">
          <img src={consoleImg} alt="Console Room" />
        </div>
        <div className="about-gallery-item">
          <img src={rigsImg} alt="Elite Gaming Rigs" />
        </div>
        <div className="about-gallery-item">
          <img src={tournmentImg} alt="Tournament Arena" />
        </div>
      </div>
    </div>
  );
};

export default About;