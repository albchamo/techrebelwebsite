import React from 'react';
import FrameworkStep from './FrameworkStep';
import './FrameworkSection.css';

const FrameworkSection = ({ content }) => {
  if (!Array.isArray(content)) {
    console.error('Expected an array for framework, received:', content);
    return null;
  }

  // Sort steps by their number before rendering
  const sortedContent = content.sort((a, b) => a.fields.number - b.fields.number);

  return (
    <section className="framework-section">
      {sortedContent.map((frameworkStep) => (
        <FrameworkStep key={frameworkStep.sys.id} content={frameworkStep.fields} />
      ))}
    </section>
  );
};

export default FrameworkSection;
