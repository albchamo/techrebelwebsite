import React from 'react';
import ServiceCard from './ServiceCard';
import './WhoWeServeSection.css'

const WhoWeServeSection = ({ content }) => {
  // Add a guard clause to make sure content is an array
  if (!Array.isArray(content)) {
    console.error('Expected an array for whoWeServes, received:', content);
    return null; // or a placeholder element
  }

  return (
    <section className="who-we-serve-section">
      <div className="cards-container">
        {content.map((serviceCardEntry) => (
          <ServiceCard key={serviceCardEntry.sys.id} content={serviceCardEntry.fields} />
        ))}
      </div>
    </section>
  );
};


export default WhoWeServeSection;
