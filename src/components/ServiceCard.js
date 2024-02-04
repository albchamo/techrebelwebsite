import React from 'react';
import './ServiceCard.css'
const ServiceCard = ({ content }) => {
  return (
    <div className="service-card">
      <h3>{content.title}</h3>
      <p>{content.text} </p>
    </div>
  );
};

export default ServiceCard;
