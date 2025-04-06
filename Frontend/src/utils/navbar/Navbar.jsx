import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Plus from '../svg/Plus';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.jpg';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.querySelector(".navbar").offsetHeight;
      setScrolled(window.scrollY > heroHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`navbar ${scrolled && !isOpen? "blur short-navbar relative" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo"><img src={logo} alt="" /></div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/about" className="navbar-item">About</Link>
          <Link to="/contact" className="navbar-item">Contact</Link>
          <Link to="/products" className="navbar-item">Products</Link>
        </div>
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggle-icon"><i className="ri-menu-line"></i></span>
        </div>
      </div>

      {/* Mobile sidebar menu */}
      <div className={`sidebar-menu blur ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-menu-close" onClick={() => setIsOpen(false)}>
          <i className="ri-close-line"></i>
        </div>
        <div className="sidebar-menu-items">
          <Link onClick={() => setIsOpen(false)} to="/" className="navbar-item">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className="navbar-item">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact" className="navbar-item">Contact</Link>
          <Link onClick={() => setIsOpen(false)} to="/products" className="navbar-item">Products</Link>
        </div>
      </div>
      
      {/* Overlay for when sidebar is open */}
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={() => setIsOpen(false)}></div>
    </nav>
  );
}

export default Navbar;