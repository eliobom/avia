import React from 'react';

const CreditCardPromo = () => {
  return (
    <div className="bg-gray-100 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">tu tarjeta de crédito</h3>
          <p className="mb-6">con hasta 20,000 millas de bienvenida</p>
          <button className="bg-black text-white py-3 px-6 rounded-full w-max font-medium hover:bg-gray-800 transition-colors">
            Aplica ya
          </button>
        </div>
        <div className="bg-red-600 p-8 flex items-center justify-center">
          <div className="w-full max-w-xs rotate-6 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.pexels.com/photos/164474/pexels-photo-164474.jpeg" 
              alt="Tarjeta de crédito Avianca" 
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPromo;