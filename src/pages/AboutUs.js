import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { ContactForm } from '../components/ContactForm';
import BackButton from '../components/BackButton';
import AuthorCard from '../components/AuthorCard';
import client from '../services/contenful';
import { useLocale } from '../components/LocaleContext';


const AboutUs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const authorNames = ['Alberto Chaves', 'Sergio Mora', 'Nazareno (Tuka) Rozas'];
  const [pageContent, setPageContent] = useState(null);
  const { locale } = useLocale();

  useEffect(() => {
    client.getEntry('2aOTEwDrHnOqmb513Pq3iq', { locale })
      .then((entry) => {
        setPageContent(entry.fields);
      })
      .catch(error => {
        console.error("Error fetching data from Contentful:", error);
      });
  }, [locale]);

  const options = {
    // Define custom rendering for specific Rich Text nodes if needed
    // For example, for embedded images or other types of content
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        // Custom rendering logic here
      },
      // Add more node types if needed
    },
  };

  if (!pageContent) return <div>Loading...</div>;

  return (
    <div >
      <header>
        <Navbar />
      </header>
      <div className="about-page">
        <h3>{pageContent.title}</h3>
        {/* Render Rich Text content */}
        {documentToReactComponents(pageContent.content, options)}

        <h3>Meet the Craftsmen</h3>
        <div className="authors-section">
        {authorNames.map(name => (
          <AuthorCard key={name} authorName={name} />
        ))}
          </div>
          
      </div>

      <button className="cta-button" onClick={() => window.location.href='/deck'}>GET OUR DECK</button>
      {/* Button to trigger the modal */}
      <button className="get-in-touch-btn" onClick={() => setModalOpen(true)}>Contact Us</button>

{/* Modal logic */}
{modalOpen && (
    <div className="modal">
        <div className="modal-content">
            <span className="close-button" onClick={() => setModalOpen(false)}>&times;</span>
            <ContactForm />
        </div>
    </div>
)}



      <SocialLinks />
      <BackButton text="Back" onClick={() => window.history.back()} />

    </div>
  );
};

export default AboutUs;
