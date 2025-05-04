import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="h-96 md:h-[500px] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg" 
          alt="Pareja viajando" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-sky-900/30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-2">te elijo</h1>
              <p className="text-xl md:text-2xl">donde sea</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8 bg-red-600"></div>
    </section>
  );
};

export default HeroSection;