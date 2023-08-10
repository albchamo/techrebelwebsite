import React, { useState } from 'react';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ContactModal from './components/ContactModal';

const Homepage = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSquareClick = (url) => {
        try {
            window.open(url, '_blank');
        } catch (error) {
            console.error('Error opening link:', error);
        }
    };

    const handleEmailClick = () => {
        alert('Contact me at alberto@albertochaves.com');
    };
    return (
        <div className="container-fluid p-0">
            <div className="row m-0">
                <div className="col-12 col-md-4 p-0">
                    <div className="square">
                        <h1 className="title">TechRebel</h1> 
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <div className="square">
                            <h2 className='smaller-text'>+ Info</h2>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <Link to="/Projects" style={{ textDecoration: 'none' }}>
                        <div className="square">
                            <h2 className='smaller-text'>Proyectos</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="row m-0">
                {/* Other squares */}
            </div>
            <div className="row m-0">
                <div className="col-12 col-md-4 p-0">
                    <div className="square"></div>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square">
                        <button className="get-in-touch-btn" onClick={() => setModalOpen(true)}>Get in Touch</button>
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square"></div> 
                </div>
            </div>
            <div className="row m-0">
                <div className="col-12 col-md-4 p-0">
                    <div className="square" onClick={() => handleSquareClick('https://twitter.com/TechRebelWorld')}>
                        <h2 className='smaller-text'>Twitter</h2>
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square" onClick={handleEmailClick}> 
                        <h2 className='smaller-text'>Email</h2>  
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0">
                    <div className="square" onClick={() => handleSquareClick('https://www.linkedin.com/in/alberto-chaves-costarica/')}>
                        <h2 className='smaller-text'>Linkedin</h2> 
                    </div>
                </div>
            </div>

            {/* Modal logic */}
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Homepage;
