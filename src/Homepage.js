import React, { useState } from 'react';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { ContactForm } from './ContactForm'; // Make sure you import the Formspree form component
import './components/Modal.css';
import SocialLinks from "./components/SocialLinks"


const Homepage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleSquareClick = (url) => {
        window.open(url, '_blank');
    };

    const handleEmailClick = () => {
        alert('Contact me at alberto@albertochaves.com');
    };

    return (
        <div className="container-fluid p-0">
            <div className="row m-0">
                <div className="col-6 col-md-4 p-0">
                    <div className="square">
                        <h1 className="title">TechRebel</h1> 
                    </div>
                </div>
                <div className="col-6 d-md-none p-0"> {/* This will only appear on mobile */}
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <div className="square rectangle">
                            <h2 className='smaller-text'>About Us</h2>
                        </div>
                    </Link>
                    <Link to="/Projects" style={{ textDecoration: 'none' }}>
                        <div className="square rectangle">
                            <h2 className='smaller-text'>Projects</h2>
                        </div>
                    </Link>
                    <div className="square rectangle"></div>
                </div>
                {/* Desktop layout for About Us and Projects */}
                <div className="d-none d-md-block col-md-4 p-0">
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <div className="square">
                            <h2 className='smaller-text'>About Us</h2>
                        </div>
                    </Link>
                </div>
                <div className="d-none d-md-block col-md-4 p-0">
                    <Link to="/Projects" style={{ textDecoration: 'none' }}>
                        <div className="square">
                            <h2 className='smaller-text'>Projects</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="row m-0">
                <div className="col-12 col-md-4 p-0">
                    <div className="square"></div>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square">
                        {/* Add the button to trigger the modal form here */}
                        <button className="homepage-btn" onClick={() => setModalOpen(true)}>Get in Touch</button>
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square"></div> 
                </div>
            </div>
            <SocialLinks />

            {/* Modal logic */}
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={() => setModalOpen(false)}>&times;</span>
                        <ContactForm />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Homepage;