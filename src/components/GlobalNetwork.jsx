import React, { useEffect, useRef } from 'react';
import './GlobalNetwork.css';
import innochiVideo from '../assets/innochiviewo.mp4';

const GlobalNetwork = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });

      // Ensure seamless looping
      video.addEventListener('timeupdate', () => {
        if (video.currentTime >= video.duration - 0.1) {
          video.currentTime = 0;
        }
      });
    }
  }, []);

  return (
    <section className="global-network">
      <div className="global-network__content">
        <div className="globe-container" style={{ aspectRatio: '1/1' }}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="innochi-video"
          >
            <source src={innochiVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork; 