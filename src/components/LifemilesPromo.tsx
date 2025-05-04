import React from 'react';

const LifemilesPromo = () => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-3">suscríbete a lifemiles+</h3>
          <p className="mb-2">y recibe un descuento exclusivo</p>
          <p className="text-xl font-bold mb-6">al redimir tiquetes con avianca</p>
          <button className="bg-white text-black py-3 px-6 rounded-full w-max font-medium hover:bg-gray-100 transition-colors">
            Suscríbete ya
          </button>
        </div>
        <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-8 flex items-center justify-center">
          <img 
            src="https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg"
            alt="Lifemiles+" 
            className="w-full max-w-xs mix-blend-overlay"
          />
          <div className="absolute text-white text-3xl font-bold">
            lifemiles+
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifemilesPromo;