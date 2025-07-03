import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import spiceImage1 from '../assets/Spicesimage1hd.jpg';
import spiceImage2 from '../assets/spiceimage2hd.png';
import spiceImage3 from '../assets/spiceimage3hd.jpg';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const images = [spiceImage1, spiceImage2, spiceImage3];
  
  useEffect(() => {
    // Main carousel rotation
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleExploreClick = () => {
    navigate('/products');
  };

  return (
    <div className="hero-section">
      <div className="hero-content ">
        <h1 className="company-name">Inochi International</h1>
        <p className="company-tagline">
          Excellence in Global Spice Trade. Delivering the finest quality spices <br />
          sourced directly from trusted farms. Our mission is to bring authentic <br />
          Indian flavors to the world.
        </p>
        <button className="explore-button" onClick={handleExploreClick}>
          Explore Our Products
        </button>
      </div>
      
      <div className="carousel-container">
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                transform: `translateX(${100 * (index - currentSlide)}%)`,
              }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel; 