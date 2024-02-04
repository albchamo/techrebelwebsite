import React from 'react';
import ValueProp from './ValueProp'; // Make sure you have this component
import './ValuePropsSection.css';

const ValuePropsSection = ({ content }) => {
  if (!Array.isArray(content)) {
    console.error('Expected an array for valueProps, received:', content);
    return null;
  }

  return (
    <section className="value-props-section">
      {content.map((valueProp) => (
        <ValueProp key={valueProp.sys.id} content={valueProp.fields} />
      ))}
    </section>
  );
};

export default ValuePropsSection;
