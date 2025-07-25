import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = ({ activeLink, setActiveLink }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="logo" onClick={() => setActiveLink("home")}> 
        <Link to="/">
          <img src="../../assets/image3.png" alt="Player One Logo" />
        </Link>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav-links${menuOpen ? " open" : ""}`}>
        <Link
          to="/"
          onClick={() => { setActiveLink("home"); setMenuOpen(false); }}
          className={`nav-link ${activeLink === "home" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/pricing"
          onClick={() => { setActiveLink("pricing"); setMenuOpen(false); }}
          className={`nav-link ${activeLink === "pricing" ? "active" : ""}`}
        >
          Pricing
        </Link>
        <Link
          to="/games"
          onClick={() => { setActiveLink("games"); setMenuOpen(false); }}
          className={`nav-link ${activeLink === "games" ? "active" : ""}`}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          onClick={() => { setActiveLink("contact"); setMenuOpen(false); }}
          className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
        >
          Contact Us
        </Link>
      </nav>

      <Link to="/book" className="contact-btn" onClick={() => setMenuOpen(false)}>
        Book Now
      </Link>
    </header>
  );
};

export default Navbar;

