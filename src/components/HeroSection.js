import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './HeroSection.css'

const HeroSection = ({ content }) => {
  return (
    <div className="hero-section">
      {documentToReactComponents(content)}
    </div>
  );
};

export default HeroSection;
