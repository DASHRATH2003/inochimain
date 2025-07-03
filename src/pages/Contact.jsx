// src/pages/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";
import "../styles/animations.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    inquiryType: "general",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero fade-in">
        <div className="contact-hero-content">
          <h1>Join Us Our Journey</h1>
          <p>Connect with us for global trade opportunities</p>
        </div>
      </section>

      <div className="contact-wrapper">
        {/* Quick Contact Cards */}
        <section className="quick-contact">
          <div className="container">
            <div className="quick-contact-grid">
              <div className="quick-contact-card slide-in-left">
                <div className="icon-circle">
                  <i className="fas fa-headset"></i>
                </div>
                <h3>Customer Support</h3>
                <p>24/7 dedicated support for our global clients</p>
                <div className="contact-links">
                  <a href="tel:+919535520948" className="contact-link">
                    <i className="fas fa-phone"></i> +91 9535520948
                  </a>
                  <a href="tel:+91 7892492739" className="contact-link">
                    <i className="fas fa-phone"></i> +91 7892492739
                  </a>
                </div>
              </div>
              <div className="quick-contact-card slide-in-left delay-1">
                <div className="icon-circle">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email Us</h3>
                <p>Quick response for your inquiries</p>
                <div className="contact-links">
                  <a href="mailto:vijaykumar@inochiinternational.com" className="contact-link">
                    <i className="fas fa-envelope"></i> Vijayakumar@inochiinternational.in
                  </a>
                  <a href="mailto:Rajesh@inochiinternational.com" className="contact-link">
                    <i className="fas fa-envelope"></i> Rajesh@inochiinternational.in
                  </a>
                </div>
              </div>
              <div className="quick-contact-card slide-in-left delay-2">
                <div className="icon-circle">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Business Hours</h3>
                <p>Mon - Fri: 9:00 AM - 6:00 PM (IST)</p>
                <p>Sat: 9:00 AM - 2:00 PM (IST)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="contact-main">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Form */}
              <div className="form-container scale-up">
                <h2>Send Us a Message</h2>
                <p className="form-subtitle">
                  Fill out the form below and our team will get back to you
                  within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company Name *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="country">Country *</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inquiryType">Inquiry Type *</label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                      >
                        <option value="general">General Inquiry</option>
                        <option value="import">Import Query</option>
                        <option value="export">Export Query</option>
                        <option value="products">Product Information</option>
                        <option value="quotation">Request Quotation</option>
                        <option value="partnership">
                          Business Partnership
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief subject of your message"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry..."
                      required
                      rows="6"
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn hover-scale">
                    Send Message <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="contact-info-sidebar">
                <div className="info-section company-info slide-in-right">
                  <h3>Inochi International Pvt Ltd</h3>
                  <p>
                    Your trusted partner in global trade, specializing in
                    premium quality Indian spices, herbs, and seeds.
                  </p>
                </div>

                <div className="info-section address-info slide-in-right delay-1">
                  <h3>Head Office</h3>
                  <address>
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                    <span style={{ fontSize: "14px" }}>INOCHI INTERNATIONAL PVT LTD</span>
                      <p>185/1A, 5th Cross Rd,</p>
                      <p>near Raghavendra Swamy Temple Road,</p>
                      <p>Gururaja Layout, Doddanekundi,</p>
                      <p>Vibhutipura, Bengaluru,</p>
                      <p>Karnataka 560037, India</p>
                    </div>
                  </address>
                </div>

                <div className="info-section social-info slide-in-right delay-2">
                  <h3>Connect With Us</h3>
                  <div className="social-links">
                    
                     
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="info-section certifications-info slide-in-right delay-3">
                  <h3>Our Certifications</h3>
                  <div className="certifications-grid">
                    <div className="certification-item">
                      <div className="certification-icon">
                        <i className="fas fa-certificate"></i>
                      </div>
                      <div className="certification-details">
                        <h4>ISO 9001:2015</h4>
                        <p>Quality Management System</p>
                      </div>
                    </div>
                    <div className="certification-item">
                      <div className="certification-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="certification-details">
                        <h4>FSSAI Certified</h4>
                        <p>Food Safety Standards</p>
                      </div>
                    </div>
                    <div className="certification-item">
                      <div className="certification-icon">
                        <i className="fas fa-leaf"></i>
                      </div>
                      <div className="certification-details">
                        <h4>Spice Board India</h4>
                        <p>Ministry of Commerce & Industry</p>
                      </div>
                    </div>
                    <div className="certification-item">
                      <div className="certification-icon">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="certification-details">
                        <h4>APEDA Registered</h4>
                        <p>Export Development Authority</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section fade-in">
          <div className="container">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8661100540635!2d77.70331427496693!3d12.981669187334669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1145ec24f7f7%3A0x7c3f93a20a4180c8!2s185%2F1A%2C%205th%20Cross%20Rd%2C%20Gururaja%20Layout%2C%20Doddanekundi%2C%20Bengaluru%2C%20Karnataka%20560037!5e0!3m2!1sen!2sin!4v1709799151443!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
