import React from 'react';
import './CertificateModal.css';

const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="certificate-modal-overlay" onClick={onClose}>
      <div className="certificate-modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        <div className="modal-certificate-content">
          <div className="modal-certificate-image">
            <img src={certificate.image} alt={certificate.name} />
          </div>
          
          <div className="modal-certificate-details">
            <h2>{certificate.name}</h2>
            <p className="certificate-organization">{certificate.description}</p>
            
            <div className="certificate-info">
              <div className="info-section">
                <h3>About the Certification</h3>
                <p>{getCertificateDescription(certificate.name)}</p>
              </div>
              
              <div className="info-section">
                <h3>Key Features</h3>
                <ul>
                  {getCertificateFeatures(certificate.name).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="info-section">
                <h3>Validity</h3>
                <p>{getCertificateValidity(certificate.name)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions to get certificate-specific information
const getCertificateDescription = (name) => {
  const descriptions = {
    "FSSAI Certification": "The Food Safety and Standards Authority of India (FSSAI) is the apex food regulatory body established by the Government of India. This certification ensures that our products meet the highest standards of food safety and quality as mandated by Indian law.",
    "ICEGATE Registration": "Indian Customs EDI Gateway (ICEGATE) registration enables us to handle international trade operations efficiently. This certification validates our compliance with customs regulations and our capability to handle import-export operations.",
    "Department of Commerce": "Recognition from the Department of Commerce, Government of India, validates our role in international trade and our compliance with trade regulations. This certification supports our export operations and global trade activities.",
    "Ministry of Corporate Affairs": "Registration with the Ministry of Corporate Affairs ensures our compliance with corporate laws and regulations. This certification validates our corporate governance and business operations.",
    "Spices Board India": "The Spices Board India certification recognizes our expertise in spice trade and ensures that our spice products meet international quality standards. This certification is crucial for spice export operations.",
    "DGFT Registration": "The Directorate General of Foreign Trade (DGFT) registration authorizes us to engage in import and export activities. This certification is essential for international trade operations."
  };
  return descriptions[name] || "Detailed information about this certification will be available soon.";
};

const getCertificateFeatures = (name) => {
  const features = {
    "FSSAI Certification": [
      "Comprehensive food safety compliance",
      "Regular quality audits",
      "Hygiene standards verification",
      "Product safety assurance",
      "Consumer safety protection"
    ],
    "ICEGATE Registration": [
      "Electronic filing of import/export documents",
      "Real-time cargo tracking",
      "Customs compliance verification",
      "Digital trade documentation",
      "Automated customs clearance"
    ],
    "Department of Commerce": [
      "Trade policy compliance",
      "Export promotion recognition",
      "International trade facilitation",
      "Quality control standards",
      "Trade documentation authority"
    ],
    "Ministry of Corporate Affairs": [
      "Corporate governance compliance",
      "Business operations verification",
      "Legal compliance assurance",
      "Stakeholder protection",
      "Transparent business practices"
    ],
    "Spices Board India": [
      "Quality standards compliance",
      "Export quality certification",
      "Product authenticity verification",
      "International market access",
      "Spice trade expertise"
    ],
    "DGFT Registration": [
      "Import-Export Code (IEC)",
      "International trade authorization",
      "Trade policy compliance",
      "Export benefit eligibility",
      "Global market access"
    ]
  };
  return features[name] || [
    "Quality assurance",
    "Regulatory compliance",
    "International standards",
    "Regular audits",
    "Professional certification"
  ];
};

const getCertificateValidity = (name) => {
  const validities = {
    "FSSAI Certification": "Valid for 5 years from the date of issue, subject to annual compliance verification.",
    "ICEGATE Registration": "Permanent registration with annual compliance updates required.",
    "Department of Commerce": "Ongoing validity with periodic compliance reviews.",
    "Ministry of Corporate Affairs": "Permanent registration with annual compliance requirements.",
    "Spices Board India": "Renewable every 3 years with annual compliance checks.",
    "DGFT Registration": "Lifetime validity with regular compliance updates."
  };
  return validities[name] || "Please contact us for validity information.";
};

export default CertificateModal; 