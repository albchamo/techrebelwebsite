import React from 'react';
import { ContactForm } from '../ContactForm';
import './Modal.css';

const ContactModal = ({ isOpen, onClose }) => {
    const handleCloseModal = (e) => {
        if (e.target.className === "modal") {
            onClose();
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactModal;
