
import React, { useState, useRef } from "react";
import "./Contact.css";
import "../styles/animations.css";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    from_name: "",
    company_name: "",
    from_email: "",
    phone_number: "",
    country: "",
    subject: "",
    inquiry_type: "general",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://inochibackend-9d1h.onrender.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! We will get back to you soon.",
        });

        // Clear form
        setFormData({
          from_name: "",
          company_name: "",
          from_email: "",
          phone_number: "",
          country: "",
          subject: "",
          inquiry_type: "general",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      setSubmitStatus({
        type: "error",
        message: `Sorry, something went wrong. Error: ${
          error.message || "Unknown error"
        }`,
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  <a
                    href="mailto:vijaykumar@inochiinternational.com"
                    className="contact-link"
                  >
                    <i className="fas fa-envelope"></i>{" "}
                    Vijayakumar@inochiinternational.in
                  </a>
                  <a
                    href="mailto:Rajesh@inochiinternational.com"
                    className="contact-link"
                  >
                    <i className="fas fa-envelope"></i>{" "}
                    Rajesh@inochiinternational.in
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

                {submitStatus.message && (
                  <div className={`submit-status ${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}

                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="from_name">Full Name *</label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company_name">Company Name *</label>
                      <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        placeholder="Your company name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="from_email">Email Address *</label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone_number">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
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
                      <label htmlFor="inquiry_type">Inquiry Type *</label>
                      <select
                        id="inquiry_type"
                        name="inquiry_type"
                        value={formData.inquiry_type}
                        onChange={handleChange}
                        required
                      >
                        <option value="general">General Inquiry</option>
                        <option value="product">Product Inquiry</option>
                        <option value="quote">Request Quote</option>
                        <option value="support">Support</option>
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
                      placeholder="Email subject"
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
                      placeholder="Your message"
                      required
                      rows="5"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
              

              <div className="contact-sidebar slide-in-right">
                <div className="sidebar-card">
                  <h3>Inochi International Pvt Ltd</h3>
                  <p>
                    Your trusted partner in global trade, specializing in
                    premium quality Indian spices, herbs, and seeds.
                  </p>
                </div>

                <div className="sidebar-card office-card">
                  <h3>Head Office</h3>
                  <div className="office-details">
                    <div className="office-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="office-text">
                      <strong>INOCHI INTERNATIONAL PVT LTD</strong>
                      <br />
                      185/1A, 5th Cross Rd,
                      <br />
                      near Raghavendra Swamy Temple Road,
                      <br />
                      Gururaja Layout, Doddanekundi,
                      <br />
                      Vibhutipura, Bengaluru,
                      <br />
                      Karnataka 560037, India
                    </div>
                  </div>
                </div>

                <div className="sidebar-card">
                  <h3>Connect With Us</h3>
                  <div className="social-links">
                    <a href="#" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" aria-label="Facebook">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="sidebar-card cert-card">
                  <h3>Our Certifications</h3>
                  <ul className="certification-list">
                    <li>
                      <div className="cert-icon">
                        <i className="fas fa-certificate"></i>
                      </div>
                      <div className="cert-text">
                        <strong>ISO 9001:2015</strong>
                        <span>Quality Management System</span>
                      </div>
                    </li>
                    <li>
                      <div className="cert-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="cert-text">
                        <strong>FSSAI Certified</strong>
                        <span>Food Safety Standards</span>
                      </div>
                    </li>
                    <li>
                      <div className="cert-icon">
                        <i className="fas fa-leaf"></i>
                      </div>
                      <div className="cert-text">
                        <strong>Spice Board India</strong>
                        <span>Ministry of Commerce & Industry</span>
                      </div>
                    </li>
                    <li>
                      <div className="cert-icon">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="cert-text">
                        <strong>APEDA Registered</strong>
                        <span>Export Development Authority</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}

             
            </div>
          </div>
        </section>
      </div>
      <div className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8876510053493!2d77.70431227379011!3d12.979609987301082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1329c87a3f73%3A0x9f7c4f21e99c6b4b!2s185%2F1A%2C%205th%20Cross%20Rd%2C%20Gururaja%20Layout%2C%20Doddanekundi%2C%20Vibhutipura%2C%20Bengaluru%2C%20Karnataka%20560037!5e0!3m2!1sen!2sin!4v1708506844736!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Inochi International Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
