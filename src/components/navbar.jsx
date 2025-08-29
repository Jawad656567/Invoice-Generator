import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo/Brand */}
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu}>MyBrand</Link>
      </div>

      {/* Hamburger Button */}
      <button
        className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Menu */}
      <ul className={`navbar-menu ${isMenuOpen ? "navbar-menu-active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/shop" onClick={closeMenu}>Shop Details</Link></li>
        <li><Link to="/product" onClick={closeMenu}>Product Details</Link></li>
      </ul>

      {/* Mobile Overlay */}
      {isMenuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;
