import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaInstagram, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';
import footerVideo from '../assets/video.mp4';

const Footer = () => {
    return (
        <footer className="bg-[#F4F1EE] text-[#2E2E2E]">
            {/* Video Header */}
            <div className="relative w-full h-[40vh] overflow-hidden ">
                <video autoPlay muted loop className="absolute w-full h-full object-cover">
                    <source src={footerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 text-white text-center">
                    <h1 className="text-4xl md:text-5xl font-semibold px-4">Get in Touch with Jimam Bricks & Tiles Company</h1>
                </div>
            </div>

            {/* Footer Content */}
            <div className="flex flex-col md:flex-row justify-around gap-12 m-10">
                {/* Info Section */}
                <div className="flex flex-col gap-4 max-w-sm">
                    <img src={logo} alt="Logo" className="w-[15vh] h-[12vh]" />
                    <p className="text-sm leading-relaxed">
                        Jimam specializes in supplying durable bricks and stylish tiles for all construction and design needs. We combine strength and elegance to help build lasting, beautiful spaces.
                    </p>
                    <div className="flex gap-4 text-[#411c13] text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6e3527]"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6e3527]"><FaInstagram /></a>
                        <a href="/contact" className="hover:text-[#6e3527]"><MdContactPage /></a>
                        <a href="mailto:info@yourcompany.com" className="hover:text-[#6e3527]"><FaEnvelope /></a>
                        <a href="https://yourcompany.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6e3527]"><FaGlobe /></a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h1 className="text-lg font-semibold mb-3 text-[#411c13]">Links</h1>
                    <ul className="text-sm leading-7">
                        <li><a href="">About Us</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Marketing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h1 className="text-lg font-semibold mb-3 text-[#411c13]">Our Services</h1>
                    <ul className="text-sm leading-7">
                        <li>Manufacturing & Supply</li>
                        <li>Custom Orders</li>
                        <li>Delivery & Logistics</li>
                        <li>Installation Services</li>
                        <li>Consultation & Design Support</li>
                        <li>Wholesale & Retail Sales</li>
                        <li>Restoration & Repairs</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-semibold text-[#411c13]">Subscribe to Our Newsletter</h1>
                    <div className="flex flex-row gap-2 items-center border border-black rounded-md p-2">
                        <input type="text" placeholder="Enter your Email" className="bg-[#F4F1EE] flex-1 outline-none" />
                        <a href="#" className="px-4 py-1.5 bg-[#411c13] text-white text-sm rounded-md hover:bg-[#F4F1EE] hover:text-[#6e3527] border border-transparent hover:border-[#411c13] transition">
                            <i className="fas fa-bell"></i> Subscribe
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10 text-[#13127E] border-t pt-4">
                <p className="text-sm">© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
                <div className="flex gap-4 text-sm">
                    <a href="/privacy">Privacy</a>
                    <a href="/terms">Terms</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
