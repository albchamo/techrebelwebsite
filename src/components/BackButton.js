import React from 'react';
import './BackButton.css';

const BackButton = ({ text, onClick, type = "button" }) => {
    return (
        <button className="brutalist-back-button" onClick={onClick} type={type}>
            {text}
        </button>
    );
};

export default BackButton;
