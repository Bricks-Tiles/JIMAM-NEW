import React, { useState } from 'react';
import { FaHome, FaUserFriends, FaServicestack, FaImages, FaEnvelope } from "react-icons/fa";
import logo from '../assets/logo.png';

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
                <li className="hover:underline hover:-translate-y-0.5 transition"><a href="#" className="flex items-center gap-1"><FaHome /> Home</a></li>
                <li className="hover:underline hover:-translate-y-0.5 transition"><a href="#" className="flex items-center gap-1"><FaUserFriends /> About Us</a></li>
                <li className="hover:underline hover:-translate-y-0.5 transition"><a href="#" className="flex items-center gap-1"><FaServicestack /> Services</a></li>
                <li className="hover:underline hover:-translate-y-0.5 transition"><a href="#" className="flex items-center gap-1"><FaImages /> Marketing</a></li>
                <li className="hover:underline hover:-translate-y-0.5 transition"><a href="#" className="flex items-center gap-1"><FaEnvelope /> Contact</a></li>
            </ul>

            {/* Hamburger Menu Button */}
            <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>

            {/* Desktop Mail Link */}
            <a href="mailto:enyankah9@yahoo.com" className="hidden md:inline-block bg-[#32308a]  text-white font-semibold text-base px-5 py-2 rounded-md hover:bg-[#13127E] hover:shadow-lg transition ">
                Get In Touch With Us
            </a>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col bg-[#eeebe7] p-4 absolute top-20 right-2 w-52 z-50 rounded-md shadow-md md:hidden">
                    <a href="mailto:enyankah9@yahoo.com" className="text-white bg-[#32308a] text-center font-semibold text-base px-5 py-2 rounded-md mb-2 transition hover:bg-[#13127E]">
                        Get In Touch With Us
                    </a>
                    <a href="#" className="text-[#411c13] py-1">Home</a>
                    <a href="#" className="text-[#411c13] py-1">About</a>
                    <a href="#" className="text-[#411c13] py-1">Services</a>
                    <a href="#" className="text-[#411c13] py-1">Marketing</a>
                    <a href="#" className="text-[#411c13] py-1">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
