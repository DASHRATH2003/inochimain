import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  // WhatsApp number - replace with your business number
  const phoneNumber = "919535520948"; // Add your WhatsApp number here without + or spaces
  const message = "Hello, I would like to know more about your products."; // Default message

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <div className="whatsapp-icon">
        <i className="fab fa-whatsapp"></i>
      </div>
      <div className="pulse"></div>
    </div>
  );
};

export default WhatsAppButton; 