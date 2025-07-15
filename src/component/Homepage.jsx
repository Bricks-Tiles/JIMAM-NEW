


import asset29 from '../assets/asset29.jpg';

export const Homepage = () => {
  return (
    <section className='min-h-screen'>
      <div
        className=" bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${asset29})` }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0  bg-opacity-50" />

        {/* Content over the background */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold  text-white  ">
            QUALITY BRICK & TILES FOR EVERY BUILD
          </h1>
          <p className="text-lg md:text-2xl text-white">
            Discover thousands of products from OUR CATALOG
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-700 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
              Explore Products
            </button>
            <button className="bg-orange-600 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
