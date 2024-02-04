import React from 'react';

const ValueProp = ({ content }) => {
  return (
    <div className="value-prop">
      <h3>{content.title}</h3>
      <p>{content.text}</p>  
    </div>
  );
};

export default ValueProp;
