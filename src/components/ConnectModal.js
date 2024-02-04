import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './ConnectModal.css'

const ConnectModal = ({ isOpen, onClose, onSuccessCallback }) => {
  const [state, handleSubmit] = useForm("mqkvpqye");

  if (state.succeeded) {
    onSuccessCallback && onSuccessCallback();
    return <p>Thank you!</p>;
  }



  // Function to close modal if the overlay is clicked
  const handleOverlayClick = (e) => {
    if (e.target.className === 'connect-modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="connect-modal-overlay" onClick={handleOverlayClick}>
    <div className="connect-modal">
    <button className="close-modal" onClick={onClose}>&times;</button>
      <div className="form-side">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email Address
            <input id="email" type="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </label>
          <label>
            Notes & Comments
            <textarea id="message" name="message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </label>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
      <div className="social-side">
        <a href="https://twitter.com/TechRebelWorld" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.linkedin.com/company/tech-rebel" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>
      
    </div>
    </div>
  );
};

export default ConnectModal;
