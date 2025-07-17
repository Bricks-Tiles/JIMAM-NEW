import React from 'react'

export const Contact = () => {
    return (
        <section className=" py-10 px-5 md:px-20 bg-[#F4F1EE] shadow-lg text-[#2E2E2E]">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <p className="bg-[#411c13] text-white text-center py-2 w-1/2"> <i className="fa-regular fa-user"></i> Contact Us</p>
                    <h1 className="text-3xl md:text-4xl font-bold">How We Work with Jimam</h1>
                    <p className="text-sm">Discover the step-by-step process of collaborating with Jimam,<br />from understanding your needs to delivering exceptional results</p>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Work Hour</h2>
                        <div className="flex gap-20 text-xs text-[#312c2b] mt-2">
                            <h3><i className="fa-solid fa-calendar-week text-[#743a2b]"></i> Monday - Friday</h3>
                            <h3><i className="fa-solid fa-clock text-[#743a2b]"></i> 8:00 Am - 5:00 Pm</h3>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <i className="fa-solid fa-map-location text-2xl text-[#743a2b]"></i>
                            <div>
                                <h2 className="text-lg font-semibold">Our Location</h2>
                                <p className="text-sm text-[#312c2b]">Ghana-Accra, Balashie</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <i className="fa-solid fa-address-book text-2xl text-[#743a2b]"></i>
                            <div>
                                <h2 className="text-lg font-semibold">Office Number</h2>
                                <p className="text-sm text-[#312c2b]">+233 557869406</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <i className="fas fa-envelope text-2xl text-[#743a2b]"></i>
                            <div>
                                <h2 className="text-lg font-semibold">Our Mail</h2>
                                <p className="text-sm text-[#312c2b]">jimama@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full md:w-1/2 bg-[#fafafa] p-6 shadow-lg flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <h3 className="text-sm">First Name*</h3>
                            <input type="text" placeholder="First Name" className="p-2 border border-[#743a2b] rounded-md" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <h3 className="text-sm">Last Name*</h3>
                            <input type="text" placeholder="Last Name" className="p-2 border border-[#743a2b] rounded-md" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <h3 className="text-sm">Email Address*</h3>
                            <input type="text" placeholder="Email Address" className="p-2 border border-[#743a2b] rounded-md" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <h3 className="text-sm">Phone Number</h3>
                            <input type="text" placeholder="Phone Number" className="p-2 border border-[#743a2b] rounded-md" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h3 className="text-sm">Message*</h3>
                        <textarea placeholder="Type your message here...." className="p-3 border border-[#743a2b] rounded-md resize-y h-36"></textarea>
                    </div>

                    <a href="#" className="bg-[#411c13] text-white text-sm p-2 w-full md:w-1/3 text-center">
                        <h2>Send <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i></h2>
                    </a>
                </div>
            </div>
        </section>
    )
} 
