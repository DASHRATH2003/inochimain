import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms">
      <div className="container">
        <h1>Terms and Conditions</h1>
        <div className="content">
          <section>
            <h2>Introduction</h2>
            <p>Welcome to Inochi International. By accessing and using our website and services, you agree to be bound by these Terms and Conditions.</p>
          </section>

          <section>
            <h2>Definitions</h2>
            <ul>
              <li>"Company", "we", "our", or "us" refers to Inochi International</li>
              <li>"Services" refers to our export and import services, including but not limited to the sale and distribution of spices, herbs, and seeds</li>
              <li>"Customer", "you", or "your" refers to the person or entity accessing our website or using our services</li>
            </ul>
          </section>

          <section>
            <h2>Order and Payment Terms</h2>
            <ul>
              <li>All prices are subject to change without notice</li>
              <li>Orders are subject to acceptance and availability</li>
              <li>Payment terms will be specified in the commercial invoice</li>
              <li>International shipping terms follow Incoterms® 2020</li>
              <li>Minimum order quantities may apply</li>
            </ul>
          </section>

          <section>
            <h2>Shipping and Delivery</h2>
            <ul>
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Risk of loss transfers according to agreed Incoterms</li>
              <li>Customers are responsible for import duties and taxes</li>
              <li>Proper documentation must be provided for customs clearance</li>
            </ul>
          </section>

          <section>
            <h2>Quality Assurance</h2>
            <p>All products are subject to our quality control processes. We maintain high standards in accordance with international food safety regulations. However, customers are responsible for ensuring compliance with their local import regulations.</p>
          </section>

          <section>
            <h2>Product Returns</h2>
            <ul>
              <li>Claims for damaged or defective products must be made within 48 hours of receipt</li>
              <li>Returns must be authorized in writing by Inochi International</li>
              <li>Return shipping costs are the responsibility of the customer unless otherwise agreed</li>
            </ul>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and images, is the property of Inochi International and protected by intellectual property laws.</p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>Inochi International's liability shall be limited to the value of the products supplied. We shall not be liable for any indirect or consequential losses.</p>
          </section>

          <section>
            <h2>Force Majeure</h2>
            <p>We shall not be liable for any delay or failure to perform due to circumstances beyond our reasonable control, including natural disasters, war, strikes, or government actions.</p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.</p>
          </section>

          <section>
            <h2>Contact Information</h2>
            <p>For any questions regarding these terms, please contact us at:</p>
            <p>Email: vijaykumar@inochiinternational.com</p>
            <p>Phone: +91 9535520948</p>
            <p>Address: 185/1A, 5th Cross Rd, near Raghavendra Swamy Temple Road, Gururaja Layout, Doddanekundi, Vibhutipura, Bengaluru, Karnataka 560037</p>
          </section>

          <section>
            <h2>Updates to Terms</h2>
            <p>We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.</p>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms; 