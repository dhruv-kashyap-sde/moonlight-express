import React from "react";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import PlusGrid from "../svg/PlusGrid";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container blur relative">
      <h1>MoonLight Express</h1>
      <PlusGrid top={"20px"} left={"20px"}/>
      {/* Footer Content */}
      <div className="footer-content">
        {/* Social Media Icons */}
        <div className="footer-icons">
          <Link to="/" className="icon">icons</Link>
          <Link to="/" className="icon">icons</Link>
          <Link to="/" className="icon">icons</Link>
          <Link to="/" className="icon">icons</Link>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/">Contact</Link>
        </div>

        {/* Copyright Text */}
        <div className="footer-bottom">
        <p className="footer-text">&copy;2025 Moonlight Express | All Rights Reserved</p>
        <p className="footer-text">Created by - <a href="https://dhruvkashyap.onrender.com" target="_blank">Dhruv</a> <a href="https://github.com.dhruv-kashyap-sde/" target="_blank"><i class="ri-github-fill"></i></a></p>
        </div>
      <PlusGrid bottom={"20px"} right={"20px"}/>
      </div>
    </div>
  );
};

export default Footer;
