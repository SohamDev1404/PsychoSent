import React from 'react';
import './Navbar.css';
import logoname from '../assets/logo-1.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img 
          src={logoname} 
          alt="Earkick Logo" 
          className="navbar-logo" 
        />
        <span className="navbar-title">PSYCHOSENT</span>
      </div>
      <div className="navbar-links">
        <a href="#" className="navbar-link">TECH</a>
        <a href="#" className="navbar-link">ABOUT</a>
        <a href="#" className="navbar-link">BLOG</a>
        <span className="navbar-help">?</span>
      </div>
    </nav>
  );
}

export default Navbar;