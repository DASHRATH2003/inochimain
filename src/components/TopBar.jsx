import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar-wrapper">
      <div className="top-bar">
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="contact-section">
          <a href="tel:+919535520948" className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+91 9535520948</span>
          </a>
          <a href="tel:+917019062176" className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+91 7019062176</span>
          </a>
          <a href="mailto:Vijayakumar@inochiinternational.in" className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Vijayakumar@inochiinternational.in</span>
          </a>
          <a href="mailto:Rajesh@inochiinternational.in" className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Rajesh@inochiinternational.in</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
