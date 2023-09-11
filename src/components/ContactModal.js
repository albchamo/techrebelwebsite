import React from 'react';
import { ContactForm } from './ContactForm';
import './Modal.css';

const ContactModal = ({ isOpen, onClose, onSuccessCallback  }) => {
    const handleCloseModal = (e) => {
        if (e.target.className === "modal") {
            onClose();
        }
    }

    if (!isOpen) {
        console.log("ContactModal is closed");
        return null;
    }
    console.log("ContactModal is open");

    return (
        <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <ContactForm onSuccessCallback={onSuccessCallback} />
            </div>
        </div>
    );
};

export default ContactModal;