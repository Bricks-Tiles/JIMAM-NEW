import React from 'react';
import asset29 from "../assets/mainbrick.jpg"; // Assuming asset29.jpg is in the same directory or adjust path
import image1 from "../assets/resBrick.jpg"; // Path to 1.jpg
import image2 from "../assets/cmbricks.jpg"; // Path to 2.jpg
import image3 from "../assets/infDev.jpg"; // Path to 3.jpg
import image1_1 from "../assets/3.jpg"; // Path to 1 (1).jpg
import image2_1 from "../assets/4.jpg"; // Path to 2 (1).jpg
import image3_1 from "../assets/5.jpg"; // Path to 3 (1).jpg


export const Homepage = () => {
  return (
    <section className='min-h-screen font-inter'>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-screen relative"
        style={{ backgroundImage: `url(${asset29})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            QUALITY BRICK & TILES FOR EVERY BUILD
          </h1>
          <p className="text-lg md:text-2xl text-[#FFF3D1] mb-6">
            Jimam Bricks – Ghana’s trusted name for durable, eco-friendly bricks and construction solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 bg-[#C97F00] text-white hover:bg-[#a66800]">
              Explore Products
            </button>
            <button className="font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 bg-[#C97F00] text-white hover:bg-[#a66800]">
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 py-12 md:py-20 bg-white text-[#312c2b] text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#C97F00]">Welcome to Jimam Bricks</h2>
        <p className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          At Jimam Bricks, we don’t just manufacture bricks—we lay the foundation for enduring structures and trusted relationships. With a legacy rooted in quality, innovation, and reliability, Jimam Bricks has become a leading name in Ghana’s construction materials industry.
        </p>
      </div>

      {/* What We Do Section */}
      <div className="bg-[#FFF3D1] px-6 py-12 md:py-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-[#C97F00]">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2 text-[#C97F00]">High-Quality Brick Manufacturing</h3>
            <p className="text-sm">We produce bricks using the finest materials and modern techniques for long-lasting strength and beauty.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2 text-[#C97F00]">Custom Construction Solutions</h3>
            <p className="text-sm">We tailor our services to suit individual project needs, from small homes to large infrastructure.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2 text-[#C97F00]">Sustainable Practices</h3>
            <p className="text-sm">Our eco-conscious manufacturing minimizes environmental impact and supports green building.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="px-6 py-12 md:py-20 bg-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-[#C97F00]">Why Choose Jimam Bricks?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h4 className="font-semibold text-md mb-1 text-[#C97F00]">Consistency & Quality</h4>
            <p className="text-sm">Tested and proven products that last through all conditions.</p>
          </div>
          <div>
            <h4 className="font-semibold text-md mb-1 text-[#C97F00]">Technical Expertise</h4>
            <p className="text-sm">Industry experts ensuring project success from start to finish.</p>
          </div>
          <div>
            <h4 className="font-semibold text-md mb-1 text-[#C97F00]">Customer-Centric</h4>
            <p className="text-sm">A seamless and satisfying experience tailored to your needs.</p>
          </div>
          <div>
            <h4 className="font-semibold text-md mb-1 text-[#C97F00]">Sustainable Development</h4>
            <p className="text-sm">We empower communities with every build we support.</p>
          </div>
        </div>
      </div>

      {/* Our Products Section - New Section */}
      <div className="bg-[#FFF3D1] px-6 py-12 md:py-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-[#C97F00]">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image1_1} alt="Bricks Stack" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-[#312c2b]">High-Quality Bricks</h3>
              <p className="text-sm text-gray-600">Durable and eco-friendly bricks for all construction needs.</p>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image2_1} alt="Tiles Stack" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-[#312c2b]">Premium Tiles</h3>
              <p className="text-sm text-gray-600">Finely crafted tiles for elegant and lasting finishes.</p>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image3_1} alt="Building Construction" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-[#312c2b]">Construction Solutions</h3>
              <p className="text-sm text-gray-600">Integrated solutions for robust and beautiful builds.</p>
            </div>
          </div>
           {/* Product Card 4 */}
           <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image1} alt="Building Construction" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-[#312c2b]">Residential Projects</h3>
              <p className="text-sm text-gray-600">Bricks and tiles for your dream home.</p>
            </div>
          </div>
           {/* Product Card 5 */}
           <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image2} alt="Building Construction" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-[#312c2b]">Commercial Buildings</h3>
              <p className="text-sm text-gray-600">Reliable materials for large-scale commercial constructions.</p>
            </div>
          </div>
           {/* Product Card 6 */}
           <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image3} alt="Building Construction" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-[#312c2b]">Infrastructure Development</h3>
              <p className="text-sm text-gray-600">Supporting the backbone of modern infrastructure.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      {/* <div className="bg-white px-6 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#C97F00]">Our Vision</h2>
          <p className="text-sm md:text-base mb-8">
            To be the most trusted name in brick manufacturing and construction solutions across West Africa, known for quality, innovation, and social impact.
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#C97F00]">Our Mission</h2>
          <p className="text-sm md:text-base">
            To provide top-grade bricks and construction services that empower communities, support sustainable development, and inspire excellence in every build.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Homepage;
