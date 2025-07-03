// src/pages/About.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import "../styles/quality.css";

import heroImage from "../assets/spiceinternational.png";
import spicesImage from "../assets/spiceexport.webp";
import aboutImage from "../assets/indianspiceall.jpg";
import qualityImage from "../assets/Basmatirice.jpg";
import reachImage from "../assets/reachimage.jpg";
import ministryLogo from "../assets/ministryofcorporetion.webp";

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-about">
          <h1 className="about-title">About Us</h1>
         
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h2>Welcome To Inochi International Pvt Ltd</h2>
              <div className="title-underline">
                <div className="line-yellow"></div>
                <div className="line-red"></div>
              </div>
              <p className="welcome-description">
                Welcome to Inochi International Pvt. Ltd, a Bangalore-based
                exporter of the finest Indian spices and premium basmati rice.
                Established in 2023 and headquartered in Doddanekundi
                (Bangalore), we bring the vibrant flavors of India directly to
                discerning customers in Japan and beyond.
              </p>
              <p className="welcome-description">
                At Inochi International, we specialize in the global export and
                import of premium-quality goods, with a primary focus on Indian
                spices, agri-commodities, and food-grade products. Headquartered
                in India, we operate with a commitment to transparency,
                sustainability, and excellence in every shipment we handle. Our
                global trade network spans across Asia, Europe, the Middle East,
                Africa, and North America.
              </p>
            </div>
            <div className="welcome-img-container">
              <img
                src={heroImage}
                alt="Welcome to Inochi"
                className="welcome-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={aboutImage} alt="Inochi Spices" loading="lazy" />
          </div>
          <div className="about-text">
            <h2>About Our Products</h2>
            <div className="title-underline">
              <div className="line-yellow"></div>
              <div className="line-red"></div>
            </div>
            <p>
              Inochi International stands at the intersection of heritage and
              innovation. With direct partnerships in India, Vietnam, and
              Turkey, we maintain complete control over sourcing, ensuring every
              spice we deliver reflects purity, potency, and purpose. Whether
              it's turmeric from Tamil Nadu or pepper from Kerala, our products
              uphold the legacy of spice-rich trade, with a modern commitment to
              transparency and global excellence.
            </p>
            <p>
              At Inochi International, we are committed to redefining the global
              spice trade with integrity, innovation, and a relentless focus on
              quality. As a trusted name in premium spice exports and imports,
              we serve global markets with a diverse range of handpicked,
              ethically sourced spices that tell a story of tradition and taste.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="about-main-content">
        {/* Expertise Section */}
        <section className="expertise-section">
          <div className="container">
            <h2 className="section-title">Our Expertise</h2>

            <div className="line-red"></div>

            <div className="section-header">
              <p className="section-description">
                At Inochi International, we specialize in:
              </p>
            </div>

            <div className="expertise-grid">
              <div className="expertise-card">
                <div className="expertise-img-container">
                  <img
                    src={spicesImage}
                    alt="Spice Exports"
                    className="expertise-img"
                  />
                </div>
                <div className="expertise-content">
                  <h3 className="expertise-title">Spice Exports</h3>
                  <p className="expertise-text">
                    From pungent peppercorns to aromatic cardamom, our
                    hand-picked and rigorously sorted spices are packed in
                    moisture-free, high-grade packaging to ensure maximum
                    freshness and shelf life. Each batch is numbered by size and
                    grade, guaranteeing consistency from pallet to plate.
                  </p>
                </div>
              </div>

              <div className="expertise-card reverse">
                <div className="expertise-img-container">
                  <img
                    src={qualityImage}
                    alt="Basmati Rice"
                    className="expertise-img"
                  />
                </div>
                <div className="expertise-content">
                  <h3 className="expertise-title">Basmati Rice</h3>
                  <p className="expertise-text">
                    Our branded long-grain basmati rice is cultivated in the
                    fertile plains of India, processed under strict hygiene
                    protocols, and exported to meet the exacting standards of
                    top restaurants, five-star hotels, and major supermarkets
                    across Japan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Safety Section */}
        <section className="quality-safety-section">
          <div className="container">
            <h2 className="section-title">Quality & Health</h2>

            <div className="line-red"></div>

            <div className="section-header">
              <p className="section-intro">
                At Inochi International, quality isn't just a process - it's our
                promise. From farm to packaging, we implement rigorous standards
                to ensure every product meets international safety requirements
                and exceeds customer expectations.
              </p>
            </div>

            <div className="quality-grid">
              {/* Premium Selection */}
              <div className="quality-card">
                <div className="quality-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#e74c3c"
                  >
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
                  </svg>
                </div>
                <h3 className="quality-title">Premium Selection</h3>
                <p className="quality-description">
                  Only the finest, hand-picked spices free from dust and
                  pesticide residues. Our selection process includes:
                </p>
                <ul className="quality-features">
                  <li>Hand-sorting by experienced workers</li>
                  <li>Triple cleaning process</li>
                  <li>Laboratory testing for contaminants</li>
                  <li>Color and size grading</li>
                </ul>
              </div>

              {/* Hygienic Processing */}
              <div className="quality-card">
                <div className="quality-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#e74c3c"
                  >
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9v-2h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2v2z" />
                  </svg>
                </div>
                <h3 className="quality-title">Hygienic Processing</h3>
                <p className="quality-description">
                  State-of-the-art sorting and packing facilities meeting
                  international standards:
                </p>
                <ul className="quality-features">
                  <li>ISO 9001:2015</li>
                  <li>Regular microbial testing</li>
                  <li>Positive air pressure rooms</li>
                  <li>Employee hygiene protocols</li>
                </ul>
              </div>

              {/* Organic & Conventional */}
              <div className="quality-card">
                <div className="quality-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#e74c3c"
                  >
                    <path d="M12 3c-4.8 0-9 3.86-9 9 0 2.12.74 4.07 1.97 5.61L3 19.59 4.41 21l1.97-1.97C7.93 20.26 9.88 21 12 21c4.8 0 9-3.86 9-9 0-4.8-3.86-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V8z" />
                  </svg>
                </div>
                <h3 className="quality-title">Organic & Conventional</h3>
                <p className="quality-description">
                  We cater to both organic-certified and non-organic markets
                  with:
                </p>
                <ul className="quality-features">
                  <li>Organic certification compliance</li>
                  <li>Separate processing lines</li>
                  <li>Traceability systems</li>
                  <li>Regular audits and inspections</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reach Section */}
        <section className="reach-section">
          <div className="container">
            <div className="reach-content">
              <div className="reach-text">
                <h2 className="section-title">Our Reach & Reputation</h2>

                <div className="line-red"></div>

                <p className="reach-description">
                  Thanks to our unwavering commitment to excellence, our
                  products are trusted by leading star hotels, top restaurants,
                  major supermarkets, and hypermarkets throughout Japan. We
                  pride ourselves on a growing base of satisfied, repeat
                  customers who value our quality and reliability.
                </p>
              </div>
              <div className="reach-img-container">
                <img
                  src={reachImage}
                  alt="Our Global Reach"
                  className="reach-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="certifications-section">
          <div className="certifications-content">
            <div className="certifications-text">
              <h2 className="section-title">Certifications & Approvals</h2>

              <div className="line-red"></div>

              <p className="certifications-description">
                We adhere to the highest industry standards:
              </p>
            </div>
            <div className="certifications-main-content">
              <div className="certification-logo-container">
                <img
                  src={ministryLogo}
                  alt="Ministry of Corporate Affairs"
                  className="certification-logo"
                  loading="lazy"
                />
              </div>
              <div className="certifications-list">
                <div className="certification-item">
                  Spice Board of India (Member)
                </div>
                <div className="certification-item">
                  Bureau of Indian Standards (BIS)
                </div>
                <div className="certification-item">
                  Food Safety and Standards Authority of India (FSSAI)
                </div>
                <div className="certification-item">
                  Directorate General of Foreign Trade (DGFT) –
                  Importer-Exporter Code (IEC) approved
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <div className="vision-container">
            <h2 className="vision-title">Our Vision</h2>

            <div className="vision-divider"></div>

            <p className="vision-text">
              Building on our success in Japan, Inochi International is poised
              to expand its footprint into the Middle East and North America. We
              remain dedicated to delivering authentic Indian flavors with
              uncompromising quality, forging long-term partnerships across the
              globe.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Join Us on Our Journey</h2>
              <p className="cta-text">
                Join us on our journey to bring the taste of India to tables
                everywhere. At Inochi International, your satisfaction is our
                promise.
              </p>
              <button className="cta-button" onClick={handleContactClick}>
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
