import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import FutureProducts from '../components/FutureProducts';
import SpiceIntro from '../components/SpiceIntro';
import GlobalNetwork from '../components/GlobalNetwork';
import QualityStandards from '../components/QualityStandards';
import CompanyValues from '../components/CompanyValues';
import './Home.css';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <div className="home">
      <ImageCarousel />
      <FutureProducts />
      <SpiceIntro />
      <GlobalNetwork />
      <QualityStandards />
      <CompanyValues />
    </div>
  );
};

export default Home;