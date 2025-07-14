import React, { useState } from 'react';
import './navbar.css';
import { FaHome, FaUserFriends, FaServicestack, FaImages, FaEnvelope } from "react-icons/fa";
import logo from '../assets/logo.png';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false); // toggle state

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <img src={logo} alt="" className='logo' />
            <ul className='nav-links'>
                <li><a href=""><FaHome /> Home</a></li>
                <li><a href=""><FaUserFriends /> About Us</a></li>
                <li><a href=""><FaServicestack /> Services</a></li>
                <li><a href=""><FaImages /> Makerting</a></li>
                <li><a href=""><FaEnvelope /> Contact</a></li>
            </ul>
            <div className='hamburger' onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className={`mobile-menu ${isOpen ? 'show' : ''}`} id='mobile-menu'>
                <a href="mailto:enyankah9@yahoo.com" className='mail-link-mobile'>
                    Get In Touch With Us
                </a>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Makerting</a>
                <a href="#">Contact</a>
            </div>
            <a href="mailto:enyankah9@yahoo.com" className='mail-link'>
                Get In Touch With Us
            </a>
        </nav>
    );
};

export default Navbar;
