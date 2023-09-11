import React, { useState, useEffect, useRef } from 'react';
import './AboutUs.css';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import { ContactForm } from '../components/ContactForm';
import BackButton from '../components/BackButton';
import AuthorCard from '../components/AuthorCard';

const AboutUs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const authorNames = ['Alberto Chaves', 'Sergio Mora', 'Nazareno (Tuka) Rozas'];



  return (
    <div className="about-page">
      <header>
        <Navbar />
      </header>
    <div className="hero-section">
    <div className="left-column">
      <h3>Who?</h3>
      <p>Rebels. Innovators. Web3 Enthusiasts.</p>

      <h3>Why?</h3>
      <p>Because the future is decentralized. And we're crafting it.</p>

      <h3>For?</h3>
      <p>Visionaries. Pioneers. You.</p>
    </div>

    <div className="separator"></div>

    <div className="right-column">
      <button  className="cta-button" onClick={() => window.location.href='/deck'}>GET OUR DECK</button>
    </div>
  </div>

  <h3>Meet the Craftsmen</h3>
  <div className="authors-section">
    {authorNames.map(name => (
      <AuthorCard key={name} authorName={name} />
    ))}
  </div>


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
