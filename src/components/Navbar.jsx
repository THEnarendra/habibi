// src/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom styles for the Navbar
import { Container } from 'react-bootstrap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className='nav-container'>
            <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Happy Birthday</Link>
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
                <Link to="/timeline" onClick={toggleMenu}>Timeline</Link>
                <Link to="/messages" onClick={toggleMenu}>Messages</Link>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <span className="burger-icon">&#9776;</span>
            </div>
        </nav>
        </div>
        </>
        
        
    );
};

export default Navbar;
