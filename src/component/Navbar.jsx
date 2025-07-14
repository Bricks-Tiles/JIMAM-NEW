import React, { useState } from 'react';
import './navbar.css';
import { FaHome, FaUserFriends, FaServicestack, FaImages, FaEnvelope} from "react-icons/fa";
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="" className='logo' />
            <ul className='nav-links'>
                <li><a href=""><FaHome /> Home</a></li>
                <li><a href=""><FaUserFriends /> About Us</a></li>
                <li><a href=""><FaServicestack /> Services</a></li>
                <li><a href=""><FaImages /> Gallery</a></li>
                <li><a href=""><FaEnvelope /> Contact us</a></li>
            </ul>
            <a href="mailto:enyankah9@yahoo.com" className='mail-link'>
                <button>Get In Touch With Us</button>
            </a>
        </nav>
    );
};

export default Navbar;
