import React from "react";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import PlusGrid from "../svg/PlusGrid";

const Footer = () => {
  return (
    <div className="footer-container blur relative">
      <h1>MoonLight Express</h1>
      <PlusGrid top={"20px"} left={"20px"}/>
      {/* Footer Content */}
      <div className="footer-content">
        {/* Social Media Icons */}
        <div className="footer-icons">
          <a href="#" className="icon">icons</a>
          <a href="#" className="icon">icons</a>
          <a href="#" className="icon">icons</a>
          <a href="#" className="icon">icons</a>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Team</a>
          <a href="#">Contact</a>
        </div>

        {/* Copyright Text */}
        <div className="footer-bottom">
        <p className="footer-text">&copy;2025 Moonlight Express | All Rights Reserved</p>
        <p className="footer-text">Created by - <a href="https://dhruvkashyap.onrender.com" target="_blank">Dhruv</a> <i class="ri-github-fill"></i></p>
        </div>
      <PlusGrid bottom={"20px"} right={"20px"}/>
      </div>
    </div>
  );
};

export default Footer;
