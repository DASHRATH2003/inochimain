import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';
import bottomLogo from '../assets/bottomlogo.mp4';

// Custom Link wrapper component
const ScrollToTopLink = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="footer-section">
          <div className="footer-logo">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="footer-logo-video"
            >
              <source src={bottomLogo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="company-description">
            <span style={{ fontSize: "14px" }}>INOCHI INTERNATIONAL PVT LTD</span>
            <br />
            Your trusted partner in global trade, specializing in premium quality Indian products.
            We ensure reliable and efficient delivery worldwide.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><ScrollToTopLink to="/">Home</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/about">About Us</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/products">Products</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/contact">Contact</ScrollToTopLink></li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="footer-section">
          <h3>Our Products</h3>
          <ul className="footer-links">
            <li><ScrollToTopLink to="/products/spices">Spices</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/products/herbs">Herbs</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/products/seeds">Seeds</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/products">All Products</ScrollToTopLink></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="footer-links">
            <li>
              <i className="fas fa-phone"></i>
              <span>+91  9535520948</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+91 7019062176</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>Vijayakumar@inochiinternational.in</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>Rajesh@inochiinternational.in</span>
            </li>
            <li className="address-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="address-content">
                <span style={{ fontSize: "14px" }}>INOCHI INTERNATIONAL PVT LTD</span>
                <span>185/1A, 5th Cross Rd,</span>
                <span>near Raghavendra Swamy Temple Road,</span>
                <span>Gururaja Layout, Doddanekundi,</span>
                <span>Vibhutipura, Bengaluru,</span>
                <span>Karnataka 560037</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            &copy; {currentYear} Inochi International. All rights reserved. <br />
           
          </p>
          <div className="footer-bottom-links">
            <ScrollToTopLink to="/privacy-policy">Privacy Policy</ScrollToTopLink>
            <ScrollToTopLink to="/terms">Terms & Conditions</ScrollToTopLink>
            <ScrollToTopLink to="/sitemap">Sitemap</ScrollToTopLink>
          </div>
        </div>
        <span style={{ fontSize: "14px" }}>
  Powered by{" "}
  <a
    href="https://innomatricstech.com/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#fff", textDecoration: "none" }}
  >
    INNOMATRICS TECH
  </a>
</span>

      </div>
    </footer>
  );
};

export default Footer;
