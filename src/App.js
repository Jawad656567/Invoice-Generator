import React, { useState } from 'react';
import Home from "./pages/Home";
import Shop from "./pages/shopdetails";
import Product from "./pages/product";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import "./global.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <nav className="navbar">
        {/* Logo/Brand - Optional */}
        <div className="navbar-brand">
          <Link to="/" onClick={closeMenu}>MyBrand</Link>
        </div>

        {/* Hamburger Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`navbar-menu ${isMenuOpen ? 'navbar-menu-active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/shop" onClick={closeMenu}>Shop Details</Link></li>
          <li><Link to="/product" onClick={closeMenu}>Product Details</Link></li>
        </ul>

        {/* Mobile Overlay */}
        {isMenuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;