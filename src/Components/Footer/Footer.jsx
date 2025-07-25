import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content expanded">
      <div className="footer-col about">
        <span className="footer-logo">PlayerOne</span>
        <p className="footer-about-text">
          The ultimate gaming lounge in Sonipat. Experience high-end PCs, tournaments, snacks, and a vibrant gamer community. Level up your play with us!
        </p>
      </div>
      <div className="footer-col links">
        <h4>Quick Links</h4>
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/games">Games</Link>
          <Link to="/book">Booking</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="footer-col contact">
        <h4>Contact</h4>
        <p>123 Main Street, Sonipat, Haryana</p>
        <p>+91 98765 43210</p>
        <p>info@playerone.com</p>
      </div>
      <div className="footer-col newsletter">
        <h4>Newsletter</h4>
        <form className="footer-newsletter-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Your email" className="footer-newsletter-input" />
          <button type="submit" className="footer-newsletter-btn">Subscribe</button>
        </form>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram" className="footer-social-icon">📸</a>
          <a href="#" aria-label="Twitter" className="footer-social-icon">🐦</a>
          <a href="#" aria-label="Facebook" className="footer-social-icon">📘</a>
          <a href="#" aria-label="Discord" className="footer-social-icon">💬</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; 2025 PlayerOne. All rights reserved.
    </div>
  </footer>
);

export default Footer; 