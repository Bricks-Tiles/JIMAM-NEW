import React from 'react'

const accent = '#C97F00';  // Darker shade for accents

export const Contact = () => {
    return (
        <section className="py-10 px-5 md:px-20 shadow-lg" style={{ backgroundColor: 'white', color: '#2E2E2E' }}>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <p className="text-white text-center py-2 w-1/2 rounded" style={{ backgroundColor: accent }}> <i className="fa-regular fa-user"></i> Contact Us</p>
                    <h1 className="text-3xl md:text-4xl font-bold" style={{ color: accent }}>How We Work with Jimam</h1>
                    <p className="text-sm">Discover the step-by-step process of collaborating with Jimam,<br />from understanding your needs to delivering exceptional results</p>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold" style={{ color: accent }}>Work Hour</h2>
                        <div className="flex gap-20 text-xs mt-2">
                            <h3><i className="fa-solid fa-calendar-week" style={{ color: accent }}></i> Monday - Friday</h3>
                            <h3><i className="fa-solid fa-clock" style={{ color: accent }}></i> 8:00 Am - 5:00 Pm</h3>
                        </div>
                    </div>

                    <hr className="my-4" />

                    {/* Updated Contact Info */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <i className="fa-solid fa-globe text-2xl" style={{ color: accent }}></i>
                            <div>
                                <h2 className="text-lg font-semibold" style={{ color: accent }}>Website</h2>
                                <a href="http://www.jimambricks.com" target="_blank" rel="noopener noreferrer" className="text-sm underline" style={{ color: '#312c2b' }}>www.jimambricks.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="fas fa-envelope text-2xl" style={{ color: accent }}></i>
                            <div>
                                <h2 className="text-lg font-semibold" style={{ color: accent }}>E-mail</h2>
                                <a href="mailto:ceo@jimambricks.com" className="text-sm" style={{ color: '#312c2b' }}>ceo@jimambricks.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="fas fa-user-tag text-2xl" style={{ color: accent }}></i>
                            <div>
                                <h2 className="text-lg font-semibold" style={{ color: accent }}>Alias</h2>
                                <a href="mailto:info@jimambricks.com" className="text-sm" style={{ color: '#312c2b' }}>info@jimambricks.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="fa-solid fa-phone text-2xl" style={{ color: accent }}></i>
                            <div>
                                <h2 className="text-lg font-semibold" style={{ color: accent }}>Contact</h2>
                                <a href="tel:+233505277493" className="text-sm" style={{ color: '#312c2b' }}>+233 50 527 7493</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="fab fa-whatsapp text-2xl" style={{ color: accent }}></i>
                            <div>
                                <h2 className="text-lg font-semibold" style={{ color: accent }}>Whatsapp</h2>
                                <a href="https://wa.me/233505277493" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: '#312c2b' }}>+233 50 527 7493</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full md:w-1/2 p-6 shadow-lg flex flex-col gap-4 bg-white" style={{ border: `2px solid ${accent}` }}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <h3 className="text-sm" style={{ color: accent }}>First Name*</h3>
                            <input type="text" placeholder="First Name" className="p-2 border rounded-md" style={{ borderColor: accent }} />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <h3 className="text-sm" style={{ color: accent }}>Last Name*</h3>
                            <input type="text" placeholder="Last Name" className="p-2 border rounded-md" style={{ borderColor: accent }} />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <h3 className="text-sm" style={{ color: accent }}>Email Address*</h3>
                            <input type="text" placeholder="Email Address" className="p-2 border rounded-md" style={{ borderColor: accent }} />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <h3 className="text-sm" style={{ color: accent }}>Phone Number</h3>
                            <input type="text" placeholder="Phone Number" className="p-2 border rounded-md" style={{ borderColor: accent }} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h3 className="text-sm" style={{ color: accent }}>Message*</h3>
                        <textarea placeholder="Type your message here...." className="p-3 border rounded-md resize-y h-36" style={{ borderColor: accent }}></textarea>
                    </div>

                    <a href="#" className="text-white text-sm p-2 w-full md:w-1/3 text-center rounded" style={{ backgroundColor: accent }}>
                        <h2>Send <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i></h2>
                    </a>
                </div>
            </div>
        </section>
    )
} 
