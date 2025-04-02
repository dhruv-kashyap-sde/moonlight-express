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
    <nav className={`navbar ${scrolled ? "blur short-navbar relative" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo"><img src={logo} alt="" /></div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/about" className="navbar-item">About</Link>
          <Link to="/contact" className="navbar-item">Contact</Link>
          <Link to="/products" className="navbar-item">Products</Link>
        </div>
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggle-icon"><i class="ri-menu-line"></i></span>
        </div>
      </div>
        <div className={`hidden ${isOpen && 'hamburger-menu '} ${!scrolled && "blur"}`}>
          <Link onClick={() => setIsOpen(false)} to="/" className="navbar-item">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className="navbar-item">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact" className="navbar-item">Contact</Link>
          <Link onClick={() => setIsOpen(false)} to="/products" className="navbar-item">Products</Link>
        </div>
    </nav>
  );
}

export default Navbar;