import React from 'react';
import './SocialLinks.css';
import { Link } from 'react-router-dom';


const SocialLinks = () => {
    const handleSquareClick = (url) => {
        window.open(url, '_blank');
    };

    const handleEmailClick = () => {
        alert('Contact me at alberto@albertochaves.com');
    };

    return (
        <div className="row m-0">
            <div className="col-12 col-md-4 p-0">
                <div className="social-square" onClick={() => handleSquareClick('https://twitter.com/TechRebelWorld')}>
                    <h2 className='smaller-text'>Twitter</h2>
                </div>
            </div>
            <div className="col-12 col-md-4 p-0">
            <Link to="/blog" style={{ textDecoration: 'none' }}>
                <div className="social-square" >
                    <h2 className='smaller-text'>Blog</h2>
                </div>
                </Link >
            </div>
            <div className="col-12 col-md-4 p-0">
                <div className="social-square" onClick={() => handleSquareClick('https://www.linkedin.com/in/alberto-chaves-costarica/')}>
                    <h2 className='smaller-text'>Linkedin</h2>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;
