import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="container">
        <h1>Privacy Policy</h1>
        <div className="content">
          <section>
            <h2>Introduction</h2>
            <p>Welcome to Inochi International's Privacy Policy. This policy outlines how we collect, use, and protect your personal information when you use our website and services.</p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <ul>
              <li>Business contact information (name, email, phone number, company name)</li>
              <li>Shipping and billing addresses</li>
              <li>Order history and preferences</li>
              <li>Communication records between you and Inochi International</li>
              <li>Website usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate about order status and shipping updates</li>
              <li>Send relevant product information and business updates</li>
              <li>Improve our products and services</li>
              <li>Comply with international trade regulations and requirements</li>
              <li>Maintain accurate business records</li>
            </ul>
          </section>

          <section>
            <h2>International Data Transfer</h2>
            <p>As an international export & import company, we may transfer your data across borders in compliance with applicable data protection laws. We implement appropriate safeguards to protect your information during such transfers.</p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request information about how your data is used</li>
            </ul>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>If you have any questions about our Privacy Policy, please contact us at:</p>
            <p>Email: vijaykumar@inochiinternational.com</p>
            <p>Phone: +91 9535520948</p>
            <p>Address: 185/1A, 5th Cross Rd, near Raghavendra Swamy Temple Road, Gururaja Layout, Doddanekundi, Vibhutipura, Bengaluru, Karnataka 560037</p>
          </section>

          <section>
            <h2>Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The latest version will always be available on our website.</p>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 