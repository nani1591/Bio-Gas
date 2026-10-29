import React, { useState } from 'react';
import logo from '../src/assets/green-energies-logo.webp';
import './navbar.css';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Products' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact Us' },
];

export default function Navbar({ setCurrentPage, currentPage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="container nav site-nav">
        <button className="brand-lockup" type="button" onClick={() => navigateTo('home')} aria-label="Sri Aishwarya Lakshmi Green Energies home">
          <span className="nav-logo-wrap"><img src={logo} alt="Sri Aishwarya Lakshmi Green Energies logo" className="nav-logo" /></span>
          <span className="brand-copy">
            <span className="brand-name">Sri Aishwarya Lakshmi</span>
            <span className="brand-subtitle">Green Energies <span>LLP</span></span>
          </span>
        </button>

        <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`} aria-label="Main navigation">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => navigateTo(link.id)}
              className={`nav-btn ${currentPage === link.id ? 'nav-btn-active' : ''} ${link.id === 'contact' ? 'nav-contact-btn' : ''}`}
              aria-current={currentPage === link.id ? 'page' : undefined}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
