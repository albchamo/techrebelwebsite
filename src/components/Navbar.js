import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ children }) => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-title">Tech Rebel</Link>
      {children}
    </div>
  );
};

export default Navbar;