import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ServiceItem from './ServiceItem';
import './OurServicesSection.css'

const OurServicesSection = ({ content }) => {
  if (!Array.isArray(content)) {
    console.error('Expected an array for ourServices, received:', content);
    return null;
  }

  return (
    <section className="our-services-section">
      {content.map((serviceItem) => (
        <ServiceItem key={serviceItem.sys.id} content={serviceItem.fields} />
      ))}
    </section>
  );
};

export default OurServicesSection;
