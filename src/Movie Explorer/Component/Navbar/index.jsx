import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/search?query=${trimmed}`);
      setMenuOpen(false); // optional: close menu after search on mobile
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="robot-navbar">
      <div className="navbar-inner">
        <h1 className="robot-logo">
          <Link to="/" onClick={closeMenu}>MOVIE EXPLORER</Link>
        </h1>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>

        <ul className={`robot-nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <form className="robot-search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="robot-search-input"
          />
          <button type="submit" className="robot-search-button">🔍</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
