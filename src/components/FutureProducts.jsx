import React, { useEffect, useRef } from 'react';
import './FutureProducts.css';
import cardamom from '../assets/cardamon11.jpg';
import turmeric from '../assets/turemeric.jpg';
import pepper from '../assets/pepper.jpg';

const FutureProducts = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const products = [
    {
      image: cardamom,
      name: "Premium Cardamom",
      description: "Organic green cardamom, carefully harvested for maximum flavor",
      features: ["Organic Certified", "Premium Grade", "Hand-Picked"]
    },
    {
      image: turmeric,
      name: "Golden Turmeric",
      description: "High-curcumin turmeric powder from selected farms",
      features: ["High Curcumin", "Lab Tested", "100% Pure"]
    },
    {
      image: pepper,
      name: "Black Pepper Supreme",
      description: "Single-origin black pepper with intense aroma",
      features: ["Single Origin", "Bold Flavor", "Premium Quality"]
    }
  ];

  return (
    <section className="future-products">
      <div className="future-products-container">
        <div className="section-header fade-in">
          <h2>Future of Spice Excellence</h2>
          <p>Innovating the future of global spice trade with premium quality and sustainability</p>
        </div>

        <div className="products-showcase">
          {products.map((product, index) => (
            <div key={index} className="product-card fade-in">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay"></div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-features">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureProducts; 