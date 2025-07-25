import React, { useState } from 'react';
import { FaHome, FaUserFriends, FaServicestack, FaImages, FaEnvelope } from "react-icons/fa";
import logo from '../assets/image.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full h-[12vh] px-10 py-2 flex items-center justify-between shadow-md relative z-10" style={{ color: '#312c2b'}}>
            <img src={logo} alt="Jimam Bricks Logo" className="w-12 h-14 md:w-14 md:h-20 object-contain" />

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-16 list-none">
                <li className="hover:underline hover:-translate-y-0.5 transition"><Link to="/" className="flex items-center gap-1" style={{color: '#312c2b'}}><FaHome /> Home</Link></li>
                <li className="hover:underline hover:-translate-y-0.5 transition"><Link to="/about" className="flex items-center gap-1" style={{color: '#312c2b'}}><FaUserFriends /> About Us</Link></li>
                <li className="hover:underline hover:-translate-y-0.5 transition"><Link to="/services" className="flex items-center gap-1" style={{color: '#312c2b'}}><FaServicestack /> Services</Link></li>
                <li className="hover:underline hover:-translate-y-0.5 transition"><Link to="/marketing" className="flex items-center gap-1" style={{color: '#312c2b'}}><FaImages /> Marketing</Link></li>
                <li className="hover:underline hover:-translate-y-0.5 transition"><Link to="/contact" className="flex items-center gap-1" style={{color: '#312c2b'}}><FaEnvelope /> Contact</Link></li>
            </ul>

            {/* Hamburger Menu Button */}
            <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu} style={{color: '#C97F00'}}>
                <i className="fa-solid fa-bars"></i>
            </div>

            {/* Desktop Mail Link */}
            <Link to="/contact" className="hidden md:inline-block font-semibold text-base px-5 py-2 rounded-md transition " style={{backgroundColor: '#C97F00', color: 'white'}}>
                Get In Touch With Us
            </Link>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col p-4 absolute top-20 right-2 w-52 z-50 rounded-md shadow-md md:hidden" style={{backgroundColor: '#FFF3D1'}}>
                    <Link to="/contact" className="text-white text-center font-semibold text-base px-5 py-2 rounded-md mb-2 transition" style={{backgroundColor: '#C97F00'}}>
                        Get In Touch With Us
                    </Link>
                    <Link to="/" className="py-1" style={{color: '#312c2b'}}>Home</Link>
                    <Link to="/about" className="py-1" style={{color: '#312c2b'}}>About</Link>
                    <Link to="/services" className="py-1" style={{color: '#312c2b'}}>Services</Link>
                    <Link to="/marketing" className="py-1" style={{color: '#312c2b'}}>Marketing</Link>
                    <Link to="/contact" className="py-1" style={{color: '#312c2b'}}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
