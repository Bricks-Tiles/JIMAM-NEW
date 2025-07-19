import React, { useState } from 'react';
import { FaHome, FaUserFriends, FaServicestack, FaImages, FaEnvelope } from "react-icons/fa";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full h-[12vh] px-10 py-2 flex items-center justify-between shadow-md bg-transparent text-[#13127E] relative z-10">
            <img src={logo} alt="logo" className=" h-[13vh] md:w-[10%] md:h-[19vh]" />

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-16 list-none">
                <li className="hover:underline hover:-translate-y-0.5 transition"><Link to="/" className="flex items-center gap-1"><FaHome /> Home</Link></li>
                <li className="hover:underline hover:-translate-y-0.5 transition"><Link to="/about" className="flex items-center gap-1"><FaUserFriends /> About Us</Link></li>
                <li className="hover:underline hover:-translate-y-0.5 transition"><Link to="/services" className="flex items-center gap-1"><FaServicestack /> Services</Link></li>
                <li className="hover:underline hover:-translate-y-0.5 transition"><Link to="/marketing" className="flex items-center gap-1"><FaImages /> Marketing</Link></li>
                <li className="hover:underline hover:-translate-y-0.5 transition"><Link to="/contact" className="flex items-center gap-1"><FaEnvelope /> Contact</Link></li>
            </ul>

            {/* Hamburger Menu Button */}
            <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>

            {/* Desktop Mail Link */}
            <Link to="/contact" className="hidden md:inline-block bg-[#32308a]  text-white font-semibold text-base px-5 py-2 rounded-md hover:bg-[#13127E] hover:shadow-lg transition ">
                Get In Touch With Us
            </Link>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col bg-[#eeebe7] p-4 absolute top-20 right-2 w-52 z-50 rounded-md shadow-md md:hidden">
                    <Link to="/contact" className="text-white bg-[#32308a] text-center font-semibold text-base px-5 py-2 rounded-md mb-2 transition hover:bg-[#13127E]">
                        Get In Touch With Us
                    </Link>
                    <Link to="/" className="text-[#411c13] py-1">Home</Link>
                    <Link to="/about" className="text-[#411c13] py-1">About</Link>
                    <Link to="/services" className="text-[#411c13] py-1">Services</Link>
                    <Link to="/marketing" className="text-[#411c13] py-1">Marketing</Link>
                    <Link to="/contact" className="text-[#411c13] py-1">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
