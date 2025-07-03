import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import bottomLogo from '../assets/bottomlogo.mp4';

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="footer-section">
          <h3>Our Products</h3>
          <ul className="footer-links">
            <li><Link to="/products/spices">Spices</Link></li>
            <li><Link to="/products/herbs">Herbs</Link></li>
            <li><Link to="/products/seeds">Seeds</Link></li>
            <li><Link to="/products">All Products</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="footer-links">
            <li>
              <i className="fas fa-phone"></i>
              <span>+91 9535520948</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+91 7892492739</span>
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
          <p>&copy; {currentYear} Inochi International. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
