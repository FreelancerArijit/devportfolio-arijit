// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', name: 'Home', icon: '🏠' },
    { path: '/about', name: 'About', icon: '👨‍💻' },
    { path: '/projects', name: 'Projects', icon: '🚀' },
    { path: '/github', name: 'GitHub', icon: '🐙' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">Developer Arijit</span>
          {/* <span className="logo-dot">.</span> */}
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={() => setIsOpen(false)}
            >
              <span className="nav-icon">{link.icon}</span>
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;