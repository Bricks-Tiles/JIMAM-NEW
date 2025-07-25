import React from 'react';
import logo from '../assets/image.png';
import { FaFacebook, FaInstagram, FaEnvelope, FaGlobe, FaWhatsapp } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';
import footerVideo from '../assets/video.mp4';

const Footer = () => {
    return (
        <footer className="text-[#312c2b] bg-white">
            {/* Video Header */}
            <div className="relative w-full h-[40vh] overflow-hidden">
                <video autoPlay muted loop className="absolute w-full h-full object-cover">
                    <source src={footerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 text-[#FFF3D1] text-center p-4">
                    <h1 className="text-3xl md:text-5xl font-semibold">Get in Touch with Jimam Bricks</h1>
                </div>
            </div>

            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 px-6 py-10">
                {/* Logo & Company */}
                <div className="flex flex-col gap-4 items-start">
                    <img src={logo} alt="Logo" className="w-[10vh] h-[10vh] object-contain" />
                    <p className="text-sm leading-relaxed">
                        Jimam Bricks is Ghana’s trusted name for durable, eco-friendly bricks and construction solutions. We empower communities and build lasting relationships through quality, innovation, and reliability.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg font-semibold mb-2 text-[#C97F00]">Contact</h1>
                    <div className="flex items-center gap-2 text-sm"><FaGlobe className="text-[#C97F00]" /> <a href="http://www.jimambricks.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#C97F00]">www.jimambricks.com</a></div>
                    <div className="flex items-center gap-2 text-sm"><FaEnvelope className="text-[#C97F00]" /> <a href="mailto:ceo@jimambricks.com" className="hover:text-[#C97F00]">ceo@jimambricks.com</a></div>
                    <div className="flex items-center gap-2 text-sm"><FaEnvelope className="text-[#C97F00]" /> <a href="mailto:info@jimambricks.com" className="hover:text-[#C97F00]">info@jimambricks.com</a></div>
                    <div className="flex items-center gap-2 text-sm"><FaWhatsapp className="text-[#C97F00]" /> <a href="https://wa.me/233505277493" target="_blank" rel="noopener noreferrer" className="hover:text-[#C97F00]">+233 50 527 7493</a></div>
                    <div className="flex items-center gap-2 text-sm"><MdContactPage className="text-[#C97F00]" /> <a href="tel:+233505277493" className="hover:text-[#C97F00]">+233 50 527 7493</a></div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg font-semibold mb-2 text-[#C97F00]">Quick Links</h1>
                    <ul className="text-sm leading-7">
                        <li><a href="/about" className="hover:text-[#C97F00]">About Us</a></li>
                        <li><a href="/services" className="hover:text-[#C97F00]">Services</a></li>
                        <li><a href="/marketing" className="hover:text-[#C97F00]">Marketing</a></li>
                        <li><a href="/contact" className="hover:text-[#C97F00]">Contact us</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg font-semibold mb-2 text-[#C97F00]">Our Services</h1>
                    <ul className="text-sm leading-7">
                        <li>High-Quality Brick Manufacturing</li>
                        <li>Custom Construction Solutions</li>
                        <li>Sustainable Practices</li>
                        <li>Consultation & Design Support</li>
                        <li>Wholesale & Retail Sales</li>
                        <li>Restoration & Repairs</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-start md:items-center gap-2">
                    <h1 className="text-lg font-semibold mb-2 text-[#C97F00]">Follow Us</h1>
                    <div className="flex md:flex-col flex-row justify-start md:justify-center gap-4 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C97F00] flex flex-col items-center" aria-label="Facebook"><FaFacebook /><span className="text-xs mt-1">Facebook</span></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C97F00] flex flex-col items-center" aria-label="Instagram"><FaInstagram /><span className="text-xs mt-1">Instagram</span></a>
                        <a href="mailto:info@jimambricks.com" className="hover:text-[#C97F00] flex flex-col items-center" aria-label="Email"><FaEnvelope /><span className="text-xs mt-1">Email</span></a>
                        <a href="https://wa.me/233505277493" target="_blank" rel="noopener noreferrer" className="hover:text-[#C97F00] flex flex-col items-center" aria-label="WhatsApp"><FaWhatsapp /><span className="text-xs mt-1">WhatsApp</span></a>
                        <a href="http://www.jimambricks.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C97F00] flex flex-col items-center" aria-label="Website"><FaGlobe /><span className="text-xs mt-1">Website</span></a>
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-lg font-semibold text-[#C97F00]">Subscribe to Our Newsletter</h1>
                <div className="flex flex-col sm:flex-row gap-2 items-center border border-[#C97F00] rounded-md p-2 mt-2">
                    <input
                        type="text"
                        placeholder="Enter your Email"
                        className="bg-white flex-1 outline-none text-[#312c2b] w-full px-2 py-1"
                    />
                    <a
                        href="#"
                        className="px-4 py-2 bg-[#C97F00] text-white text-sm rounded-md hover:bg-[#FFF3D1] hover:text-[#312c2b] border border-transparent hover:border-[#C97F00] transition"
                    >
                        Subscribe
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10 text-[#C97F00] border-t border-[#C97F00] pt-4 px-6 pb-6">
                <p className="text-sm">© {new Date().getFullYear()} Jimam Bricks. All rights reserved.</p>
                <div className="flex gap-4 text-sm flex-wrap justify-center">
                    <a href="/privacy" className="hover:underline">Privacy</a>
                    <a href="/terms" className="hover:underline">Terms</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
