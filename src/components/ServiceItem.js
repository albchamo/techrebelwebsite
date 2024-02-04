import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ServiceItem = ({ content }) => {
  return (
    <div className="service-item">
      <h3>{content.title}</h3>
      {documentToReactComponents(content.text)}
    </div>
  );
};

export default ServiceItem;
