import React from 'react';

interface DestinationCardProps {
  destination: string;
  image: string;
  price: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, image, price }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`Destino ${destination}`} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold">{destination}</h3>
        <p className="text-gray-600 text-sm">Por trayecto desde</p>
        <div className="mt-2 text-right">
          <span className="text-2xl font-bold">COP {price}</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;