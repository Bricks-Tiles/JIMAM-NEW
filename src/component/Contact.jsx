import React from 'react'
import './contact.css'
export const Contact = () => {
    return (
        <section>
            <div className='Main-contact'>
                <div className='contact'>
                    <p className='contact-txt'><i class="fa-regular fa-user"></i> Contact Us</p>
                    <h1 className='Main-info'>How We Work The Process <br /> of Working With Jimam</h1>
                    
                    <div className='work-m'>
                        <h2 className='work'>Work Hour</h2>
                        <span>
                            <h3> <i class="fa-solid fa-calendar-week"></i> Monday - Friday</h3>
                            <h3><i class="fa-solid fa-clock"></i> 8:00 Am - 5:00 Pm</h3>
                        </span>
                    </div>
                    <hr />
                    <div className='details-icons'>
                        <div className='location-main'>
                            <i class="fa-solid fa-map-location"></i>
                            <div className='location'>
                                <h2>Our Location</h2>
                                <p>Ghana-Accra, Balashie</p>
                            </div>
                        </div>
                        <div className='number-main'>
                            <i class="fa-solid fa-address-book"></i>
                            <div className='number'>
                                <h2>Office Number</h2>
                                <p>+233 557869406</p>
                            </div>
                        </div>
                        <div className='mail-main'>
                            <i class="fas fa-envelope"></i>
                            <div className='mail'>
                                <h2>Our Mail</h2>
                                <p>jimama@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form'>
                    <div className='name'>
                        <div className='name-1'>
                            <h3>First Name*</h3>
                            <input type="text" placeholder="First Name" className='footer-sub-hd' />
                        </div>
                        <div className='name-1'>
                            <h3>Last Name*</h3>
                            <input type="text" placeholder="First Name" className='footer-sub-hd' />
                        </div>
                    </div>
                    <div className='email'>
                        <div className='email-1'>
                            <h3>Email Address*</h3>
                            <input type="text" placeholder="First Name" className='footer-sub-hd' />
                        </div>
                        <div className='email-1'>
                            <h3>Phone Number</h3>
                            <input type="text" placeholder="First Name" className='footer-sub-hd' />
                        </div>
                    </div>
                    <div className='message'>
                        <h3>Message*</h3>
                        <textarea name="message" id="message" placeholder='Type your message here....'></textarea>
                    </div>
                    <a href="">
                        <h2>Send <i class="fa-duotone fa-solid fa-arrow-up-right-from-square"></i></h2>
                    </a>
                </div>
            </div>
        </section>
    )
}
