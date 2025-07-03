import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CompanyValues.css';
import qualityImage from '../assets/mission.jpeg';
import reachImage from '../assets/reachimage.jpg';
import visionImage from '../assets/ourvision.jpeg';

const CompanyValues = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleLearnMore = () => {
    navigate('/contact');
  };

  const values = [
    {
      title: "Our Vision",
      description: "To be the world's most trusted and innovative spice trading company, delivering exceptional quality and value to our global customers.",
      image: visionImage,
      points: [
        "Global market leadership",
        "Innovation in spice processing",
        "Sustainable farming practices"
      ]
    },
    {
      title: "Our Mission",
      description: "To revolutionize the spice trade through sustainable practices, cutting-edge technology, and unwavering commitment to quality.",
      image: qualityImage,
      points: [
        "Quality excellence",
        "Farmer partnerships",
        "Customer satisfaction"
      ]
    },
    {
      title: "Our Reach",
      description: "Connecting farmers and consumers across continents, creating value through our global network of sustainable spice trade.",
      image: reachImage,
      points: [
        "20+ Targeted Countries ",
        "50+ partner farms",
        "Global distribution network"
      ]
    }
  ];

  return (
    <section className="company-values" ref={sectionRef}>
      <div className={`values-content ${isVisible ? 'animate-in' : ''}`}>
        <div className="values-header">
          <h2 className="values-title">
            Our Core <span className="highlight">Values</span>
          </h2>
          <p className="values-subtitle">
            Building a sustainable future in the global spice trade through
            innovation, quality, and trust
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="value-card"
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className="value-image">
                <img src={value.image} alt={value.title} />
                <div className="image-overlay"></div>
              </div>
              <div className="value-content">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <ul className="value-points">
                  {value.points.map((point, i) => (
                    <li key={point} style={{ '--point-delay': `${i * 0.1}s` }}>
                      <span className="point-bullet">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="values-cta">
          <h3>Join Us in Our Journey</h3>
          <p>
            Partner with Inochi International and be part of our mission to
            revolutionize the global spice trade while maintaining the highest
            standards of quality and sustainability.
          </p>
          <button className="cta-button" onClick={handleLearnMore}>
            Learn More
            <span className="button-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues; 