import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tagline">Gaming Lounge · Sonipat</span>
        <h1 className="hero-heading">
          Level up your <br /> gaming experience <br /> at PlayerOne
        </h1>
        <p className="hero-text">
          Dive into the ultimate gaming zone in Sonipat — high-end PCs, latest
          consoles,
          <br />
          competitive arenas, and a space built for gamers, by gamers.
        </p>
        <Link to="/pricing" className="hero-btn">
          Explore Packages
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
