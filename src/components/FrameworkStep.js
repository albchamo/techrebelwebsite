import React from 'react';

const FrameworkStep = ({ content }) => {
  return (
    <div className="framework-step">
      <span className="step-number">{content.number}.</span> {/* Display step number */}
      <h3>{content.title}</h3>
      <p>{content.text}</p> {/* Assuming 'text' is the correct field based on JSON */}
    </div>
  );
};

export default FrameworkStep;
