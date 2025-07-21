import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import spiceImage1 from '../assets/Spicesimage1hd.jpg';
import spiceImage2 from '../assets/spiceimage2hd.png';
import spiceImage3 from '../assets/spiceimage3hd.jpg';
import spiceImage4 from '../assets/spice15.jpg';
import spiceImage5 from '../assets/spice16.jpg';
import spiceImage6 from '../assets/spice17.jpg';
import spiceImage7 from '../assets/spice18.jpg';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const originalImages = [
    spiceImage1, 
    spiceImage2, 
    spiceImage3,
    spiceImage4,
    spiceImage5,
    spiceImage6,
    spiceImage7
  ];
  
  // Create an array with duplicated images for smooth infinite scrolling
  const images = [...originalImages, ...originalImages];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        // When we reach the duplicate set, reset to the original set
        if (prevSlide >= originalImages.length - 1) {
          return 0;
        }
        return prevSlide + 1;
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [originalImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleExploreClick = () => {
    navigate('/products');
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
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
                transition: index === 0 && currentSlide === originalImages.length - 1 ? 'none' : 'transform 0.5s ease-in-out'
              }}
            >
              <img src={image} alt={`Slide ${(index % originalImages.length) + 1}`} />
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {originalImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide % originalImages.length ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;