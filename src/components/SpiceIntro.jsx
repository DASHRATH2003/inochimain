import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SpiceIntro.css";
import clove from "../assets/Clove.webp";
import starAnise from "../assets/Star Anise.jpeg";
import bayLeaf from "../assets/Bay Leaf.jpg";
import garlic from "../assets/Garlic.webp";
import cardamom from "../assets/cardamom.jpg";
import blackPepper from "../assets/fragmentpaper.webp";
import chili from "../assets/Chili.jpg";
import fennel from "../assets/Fennel.jpeg";
import nutmeg from "../assets/Nutmeg.webp";
import cinnamon from "../assets/Cinnamon.webp";
import paprika from "../assets/paprika.webp";
import mixedPeppercorns from "../assets/pepper.jpg";
import ginger from "../assets/Ganger.jpg";
import coriander from "../assets/corienderseed.jpeg";
import saffron from "../assets/Saffron.jpg";

const SpiceIntro = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const spices = [
    { name: "Cloves", image: clove },
    { name: "Star anise", image: starAnise },
    { name: "Bay leaf", image: bayLeaf },
    { name: "Garlic", image: garlic },
    { name: "Cardamom pods", image: cardamom },
    { name: "Fragrant Pepper", image: blackPepper },
    { name: "Chili", image: chili },
    { name: "Fennel", image: fennel },
    { name: "Nut meg", image: nutmeg },
    { name: "Cinnamon", image: cinnamon },
    { name: "Paprika", image: paprika },
    { name: "Mix Peppercorns", image: mixedPeppercorns },
    { name: "Ginger", image: ginger },
    { name: "Coriander seeds", image: coriander },
    { name: "Saffron", image: saffron },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const handleReadMore = () => {
    navigate("/about");
  };

  return (
    <section className="spice-intro" ref={sectionRef}>
      <div className="floating-spices">
        <div className="spice-particle" style={{ "--delay": "0s" }}></div>
        <div className="spice-particle" style={{ "--delay": "2s" }}></div>
        <div className="spice-particle" style={{ "--delay": "4s" }}></div>
        <div className="spice-particle" style={{ "--delay": "6s" }}></div>
      </div>
      <div className="spice-intro-content">
        <div className="spice-intro-text" ref={textRef}>
          <div className="text-content">
            <h2 className="spice-intro-title">
              <span className="highlight">Excellence</span> in Spice and more...
            </h2>
            <h3 className="spice-intro-subtitle animate-text">
              "The business of Spice makes us global."
            </h3>
            <p className="spice-intro-description">
              At Inochi International, we believe that farm-to-fork quality is
              the future of the food industry. As global exporters and importers
              of premium Indian spices, we ensure every batch meets the highest
              standards of food safety, sustainability, and traceability. Our
              backward integration programs connect us directly to trusted
              plantations across India, Vietnam, and Turkey, allowing us to
              maintain full control over the sourcing, processing, and packaging
              stages. From fiery chilies to aromatic cardamom, each spice is
              processed with care, preserving its authentic flavor and
              nutritional integrity.
            </p>
            <button onClick={handleReadMore} className="read-more-btn">
              <span className="btn-text">Read more</span>
              <span className="arrow">→</span>
              <span className="btn-shine"></span>
            </button>
          </div>
        </div>
        <div className="spice-grid" ref={imageRef}>
          {spices.map((spice, index) => (
            <div
              key={spice.name}
              className="spice-item"
              style={{ "--delay": `${index * 0.1}s` }}
            >
              <div className="spice-circle">
                <img src={spice.image} alt={spice.name} />
              </div>
              <p className="spice-name">{spice.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpiceIntro;
