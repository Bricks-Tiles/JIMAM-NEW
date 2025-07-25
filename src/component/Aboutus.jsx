import React from 'react';
import newLogo from '../assets/image.png';
import heroBg from '../assets/tiles-ground.jpg';
import { FaLeaf, FaCogs, FaUsers, FaCheckCircle, FaLightbulb, FaHandsHelping, FaBullseye, FaRocket } from 'react-icons/fa';

const primary = 'white'; // Main yellow-orange
const accent = '#C97F00';  // Darker shade for accents

const Aboutus = () => (
  <section className="min-h-screen w-full flex flex-col items-center justify-start pt-0" style={{ backgroundColor: primary }}>
    {/* Hero Section */}
    <div className="relative w-full h-[45vh] flex items-center justify-center mb-12">
      <img src={heroBg} alt="Bricks background" className="absolute w-full h-full object-cover opacity-60" />
      <div className="absolute w-full h-full" style={{ opacity: 0.85, zIndex: 1}}></div>
      <div className="absolute w-full h-full flex flex-col items-center justify-center text-center px-4" style={{zIndex: 2}}>
        <img src={newLogo} alt="Jimam Bricks Logo" className="w-28 h-28 mb-4 rounded-full shadow-lg border-4 border-white bg-white/80 object-contain" />
        <h1 className="text-5xl font-extrabold mb-3 drop-shadow-lg tracking-tight" style={{color: accent}}>About Us</h1>
        <p className="max-w-2xl mx-auto text-xl font-medium drop-shadow">Welcome to Jimam Bricks – The Epitome of Brick Manufacturing and Construction Excellence</p>
      </div>
    </div>

    {/* Main Content */}
    <div className="w-full max-w-6xl px-4 md:px-8 py-10 flex flex-col gap-16">
      {/* Who We Are */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-white/95 rounded-xl shadow-lg p-8" style={{border: `2px solid ${accent}`}}>
        <div className="flex-1 flex justify-center mb-4 md:mb-0">
          <FaUsers className="text-6xl" style={{color: accent}} />
        </div>
        <div className="flex-[3] text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2" style={{color: accent}}>Who We Are</h2>
          <p className="text-[#2E2E2E] text-lg">
            Jimam Bricks is a premier brick manufacturing and construction company committed to producing durable, eco-friendly, and aesthetically superior bricks for residential, commercial, and industrial use. Whether you're building a home, a school, or a complex infrastructure project, we are your trusted partner for quality materials and expert advice.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center" style={{color: accent}}>What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white/95 rounded-lg shadow-md" style={{border: `2px solid ${accent}`}}>
            <FaCogs className="text-4xl mb-2" style={{color: accent}} />
            <h3 className="font-semibold text-xl mb-1">High-Quality Brick Manufacturing</h3>
            <p className="text-base">Our bricks are made using the finest raw materials and modern techniques to ensure consistency, strength, and long-lasting performance.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white/95 rounded-lg shadow-md" style={{border: `2px solid ${accent}`}}>
            <FaHandsHelping className="text-4xl mb-2" style={{color: accent}} />
            <h3 className="font-semibold text-xl mb-1">Custom Construction Solutions</h3>
            <p className="text-base">We work with developers, contractors, and homeowners to deliver tailored construction solutions that match project goals and budgets.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white/95 rounded-lg shadow-md" style={{border: `2px solid ${accent}`}}>
            <FaLeaf className="text-4xl mb-2" style={{color: accent}} />
            <h3 className="font-semibold text-xl mb-1">Sustainable Practices</h3>
            <p className="text-base">Sustainability is at the heart of our operations. We use environmentally responsible processes to reduce waste and minimize our impact on the environment.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center" style={{color: accent}}>Why Choose Jimam Bricks?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white/95 rounded-lg shadow-md" style={{border: `2px solid ${accent}`}}>
            <FaCheckCircle className="text-4xl mb-2" style={{color: accent}} />
            <h3 className="font-semibold text-xl mb-1">Consistency & Quality</h3>
            <p className="text-base">Our products meet rigorous standards and are tested to ensure durability in all weather conditions.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white/95 rounded-lg shadow-md" style={{border: `2px solid ${accent}`}}>
            <FaLightbulb className="text-4xl mb-2" style={{color: accent}} />
            <h3 className="font-semibold text-xl mb-1">Technical Expertise</h3>
            <p className="text-base">Our team of engineers, technicians, and project managers bring years of industry experience to every project.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white/95 rounded-lg shadow-md" style={{border: `2px solid ${accent}`}}>
            <FaHandsHelping className="text-4xl mb-2" style={{color: accent}} />
            <h3 className="font-semibold text-xl mb-1">Customer-Centric Approach</h3>
            <p className="text-base">We believe in building more than structures—we build trust. From your first inquiry to final delivery, we ensure a seamless and satisfying experience.</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center text-center p-8 bg-white/95 rounded-lg shadow-md" style={{border: `2px solid ${accent}`}}>
          <FaBullseye className="text-4xl mb-2" style={{color: accent}} />
          <h3 className="font-semibold text-2xl mb-2">Our Vision</h3>
          <p className="text-lg">To be the most trusted name in brick manufacturing and construction solutions across West Africa, known for quality, innovation, and social impact.</p>
        </div>
        <div className="flex flex-col items-center text-center p-8 bg-white/95 rounded-lg shadow-md" style={{border: `2px solid ${accent}`}}>
          <FaRocket className="text-4xl mb-2" style={{color: accent}} />
          <h3 className="font-semibold text-2xl mb-2">Our Mission</h3>
          <p className="text-lg">To provide top-grade bricks and construction services that empower communities, support sustainable development, and inspire excellence in every build.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-2xl font-bold mb-2" style={{color: accent}}>Ready to Build with Us?</h2>
        <p className="text-lg mb-4 text-center text-white">Contact Jimam Bricks today for quality materials, expert advice, and a partnership you can trust.</p>
        <a href="/contact" className="px-8 py-3 rounded-lg font-semibold shadow transition" style={{backgroundColor: accent, color: 'white'}}>Contact Us</a>
      </section>
    </div>
  </section>
);

export default Aboutus;
