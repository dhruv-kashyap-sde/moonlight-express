import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Plus from '../svg/Plus';

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
    <nav className={`navbar ${scrolled ? "blur short-navbar" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">Site Logo</div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-item">Home</a>
          <a href="#about" className="navbar-item">About</a>
          <a href="#contact" className="navbar-item">Contact</a>
          <a href="#products" className="navbar-item">Products</a>
        </div>
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggle-icon"><Plus/></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;