// src/pages/Contact.jsx
import React, { useState, useRef } from "react";
import "./Contact.css";
import "../styles/animations.css";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
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
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
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
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact Form Error:', error);
      setSubmitStatus({
        type: 'error',
        message: `Sorry, something went wrong. Error: ${error.message || 'Unknown error'}`
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

                {submitStatus.message && (
                  <div className={`submit-status ${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}

                <form ref={form} onSubmit={handleSubmit} className="contact-form">
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
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="contact-info slide-in-right">
                <div className="info-card">
                  <h3>Our Office</h3>
                  <p>
                    <i className="fas fa-map-marker-alt"></i> Bangalore, Karnataka, India
                  </p>
                  <p>
                    <i className="fas fa-envelope"></i>{" "}
                    info@inochiinternational.com
                  </p>
                  <p>
                    <i className="fas fa-phone"></i> +91 9535520948
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
