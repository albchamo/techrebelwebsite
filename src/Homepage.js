import React, { useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import ContactModal from './components/ContactModal';
import SocialLinks from './components/SocialLinks';

const Homepage = () => {
    const [modalOpen, setModalOpen] = useState(false);


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
                <div className="d-none d-md-block col-md-4 p-0">
                    <div className="square"></div> 
                </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square">
                        <button className="get-in-touch-btn" onClick={() => setModalOpen(true)}>Get in Touch</button>
                    </div>
                </div>
                <div className=" d-md-block col-md-4 p-0">
                    <div className="square"></div> 
                </div>
            </div>
            <SocialLinks />

            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Homepage;
