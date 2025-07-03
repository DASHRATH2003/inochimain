import React, { useState } from 'react';
import './Certifications.css';
import CertificateModal from '../components/CertificateModal';

// Import certification images
import mcaLogo from '../assets/ministryofcorporetion.webp';
import commerceLogo from '../assets/depertmentofcommerce.webp';
import taxLogo from '../assets/incometexdepartment.webp';
import dgftLogo from '../assets/Directorgeneraforeation.webp';
import icegateLogo from '../assets/icegate.webp';
import spiceboardLogo from '../assets/spiceboard.webp';
import fssaiLogo from '../assets/fssai.webp';

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      name: 'Ministry of Corporate Affairs',
      image: mcaLogo,
      description: 'Government of India'
    },
    {
      id: 2,
      name: 'Department of Commerce',
      image: commerceLogo,
      description: 'Government of India'
    },
    {
      id: 3,
      name: 'Income Tax Department',
      image: taxLogo,
      description: 'Government of India'
    },
    {
      id: 4,
      name: 'DGFT Registration',
      image: dgftLogo,
      description: 'Directorate General of Foreign Trade'
    },
    {
      id: 5,
      name: 'ICEGATE',
      image: icegateLogo,
      description: 'Indian Customs EDI Gateway'
    },
    {
      id: 6,
      name: 'Spices Board India',
      image: spiceboardLogo,
      description: 'Ministry of Commerce & Industry'
    },
    {
      id: 7,
      name: 'FSSAI',
      image: fssaiLogo,
      description: 'Food Safety and Standards Authority of India'
    }
  ];

  return (
    <div className="certifications-page">
      <div className="certifications-hero">
        <h1>Our Certifications</h1>
      </div>

      <div className="certifications-grid">
        {certificates.map(cert => (
          <div key={cert.id} className="certification-card">
            <div className="certification-image">
              <img src={cert.image} alt={cert.name} />
            </div>
            <div className="certification-content">
              <h3>{cert.name}</h3>
              <p className="certification-description">{cert.description}</p>
              <button 
                className="view-certificate-btn"
                onClick={() => setSelectedCertificate(cert)}
              >
                View Certificate <span className="arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
};

export default Certifications; 