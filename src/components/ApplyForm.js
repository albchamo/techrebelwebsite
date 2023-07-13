import React, { useEffect } from 'react';
import './ApplyForm.css';

const ApplyForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.airtable.com/js/embed/embed_snippet_v1.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const iframeHTML = `
      <iframe
        class="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shr20NmuXLlHfIZqr?backgroundColor=red"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="897.333333"
        style="background: transparent; border: 1px solid #ccc;"
      ></iframe>
  `;

  return (
    <div className="apply-form">
      <div dangerouslySetInnerHTML={{ __html: iframeHTML }} />
    </div>
  );
};

export default ApplyForm;
