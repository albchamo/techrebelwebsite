import client from '../services/contenful';
import React, { useEffect, useState } from 'react';

function Deck() {
    const [pdfUrl, setPdfUrl] = useState(null);
  
    useEffect(() => {
      client.getEntries({
        content_type: 'pdf'
      })
      .then((response) => {
        if (response.items.length > 0 && response.items[0].fields?.pdf?.fields?.file?.url) {
          const pdfAsset = response.items[0].fields.pdf;
          setPdfUrl(pdfAsset.fields.file.url);
        } else {
          console.error("Could not find the PDF URL in the response.");
        }
      })
      .catch(console.error);
    }, []);
  
    return (
      <div className="pdf-container">
        {pdfUrl ? (
          <iframe src={pdfUrl} width="100%" height="600px" title="Embedded PDF"></iframe>
          // Alternatively, you can use the object tag:
          // <object data={pdfUrl} type="application/pdf" width="100%" height="600px">
          //   <p>This browser does not support inline PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a></p>
          // </object>
        ) : (
          <p>Loading PDF...</p>
        )}
      </div>
    );
  }
  
  export default Deck;