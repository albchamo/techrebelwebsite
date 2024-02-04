import React, { useState } from 'react';
import './Homepage2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ConnectModal from '../components/ConnectModal'; // Import the ConnectModal component


const Homepage = () => {
    // State to control the visibility of the ConnectModal
    const [isConnectModalOpen, setConnectModalOpen] = useState(false);

    // Function to handle the opening of the ConnectModal
    const openConnectModal = () => {
        console.log('Opening modal');
        setConnectModalOpen(true);
    };

    // Function to handle the closing of the ConnectModal
    const closeConnectModal = () => {
        console.log('Closng modal');
        setConnectModalOpen(false);
    };

    return (
        <div className="homepage-container">
    <div className="main-square">
        <h1 className="tech-rebel">TECH REBEL</h1> 
    </div>
    <div className="secondary-square-container">
        <Link to="/about" className="secondary-square">
            <h2 className='home-h2'>About Us</h2>
        </Link>
        <Link to="/projects" className="secondary-square">
            <h2 className='home-h2'>Projects</h2>
        </Link>
        <div className="secondary-square" onClick={openConnectModal}>
            <h2 className='home-h2'>Connect</h2>
        </div>
        <Link to="/blog" className="secondary-square">
            <h2 className='home-h2'>Blog</h2>
        </Link>

         
    </div>
    {/* ConnectModal component is called here and controlled by isConnectModalOpen */}
    {isConnectModalOpen && (
                <ConnectModal 
                    isOpen={isConnectModalOpen} 
                    onClose={closeConnectModal} 
                    onSuccessCallback={closeConnectModal}
                />)}
</div>
    );
};

export default Homepage;