import React from 'react'
import './footer.css'
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaEnvelope, FaGlobe } from 'react-icons/fa'
import { MdContactPage } from 'react-icons/md' // Add this import
import footerVideo from '../assets/video.mp4'

const Footer = () => {
    return (
        <footer>

            <div className="video-wrapper">
                <video autoPlay muted loop className="footer-video">
                    <source src={footerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='video-text'>
                    <h1>Get in Touch with Jimam Bricks & Tiles Company</h1>

                </div>
            </div>

            <div className="footer">
                <div className="footer-container">
                    <div className="footer-info">
                        <img src={logo} alt="Logo" className="footer-logo" />
                        <p className='footer-description'>
                            Jimam specializes in supplying durable bricks and stylish tiles for <br /> all construction and design needs. We combine strength and elegance <br />to help build lasting, beautiful spaces.
                        </p>
                        <div className="footer-social">
                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaFacebook /></a>
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaInstagram /></a>
                            <a href="/contact" className="footer-icon"><MdContactPage /></a>
                            <a href="mailto:info@yourcompany.com" className="footer-icon"><FaEnvelope /></a>
                            <a href="https://yourcompany.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaGlobe /></a>
                        </div>
                    </div>
                    <div className='footer-about'>
                        <h1 className='footer-About-h1'>Links</h1>
                        <ul className='footer-about-links'>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Makerting</a></li>
                            <li><a href="">Testimonials</a></li>
                            <li><a href="">Contact us</a></li>
                        </ul>
                    </div>
                    <div className='footer-services'>
                        <h1 className='footer-h1'>Our Services</h1>
                        <ul className='footer-services-list'>
                            <li>Manufacturing & Supply</li>
                            <li>Custom Orders</li>
                            <li>Delivery & Logistics</li>
                            <li>Installation Services</li>
                            <li>Consultation & Design Support</li>
                            <li>Wholesale & Retail Sales</li>
                            <li>Restoration & Repairs</li>
                        </ul>
                    </div>
                    <div className='footer-sub'>
                        <h1 className='footer-sub-h1'>Subscribe to Our Newsletter</h1>
                        <span className='footer-sub-bt-hd'>
                            <input type="text" placeholder="Enter your Email" className='footer-sub-hd' />
                            <a href="" className='footer-sub-a'>
                                <h3><i class="fas fa-bell"></i> Subscribe</h3>
                            </a>
                            {/* <button className='footer-sub-bt'><i class="fas fa-bell"></i> Subscribe</button> */}
                        </span>
                        <a href="">
                            <h3 className='bf-footer-h3-1'>Schedule Now</h3>
                        </a>

                    </div>
                </div>


                <div className='footer-last'>
                    <p className="footer-text">
                        © {new Date().getFullYear()} YourCompany. All rights reserved.
                    </p>
                    <div className="footer-links">
                        <a href="/privacy" className="footer-link">Privacy</a>
                        <a href="/terms" className="footer-link">Terms</a>
                        <a href="/contact" className="footer-link">Contact</a>
                    </div>
                </div>
            </div>

        </footer >
    )
}

export default Footer
