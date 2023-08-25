// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useLocale } from './LocaleContext';

const Navbar = ({ children }) => {
    const { locale, setLocale } = useLocale();

    return (
        <div className="navbar">
            <Link to="/" className="navbar-title">Tech Rebel</Link>
            <button className="locale-toggle" onClick={() => setLocale(locale === 'en-US' ? 'es-ES' : 'en-US')}>
                {locale === 'en-US' ? 'ES' : 'EN'}
            </button>
            {children}
        </div>
    );
};

export default Navbar;
