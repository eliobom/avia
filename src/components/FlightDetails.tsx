import React from 'react';
import { Plane, Clock, Luggage, CreditCard } from 'lucide-react';

interface FlightDetailsProps {
  flight: {
    id: string;
    origin: string;
    destination: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    price: number;
    airline: string;
    stops: number;
  };
  onSelectSeat: () => void;
  onAddLuggage: () => void;
}

const FlightDetails: React.FC<FlightDetailsProps> = ({
  flight,
  onSelectSeat,
  onAddLuggage,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Plane className="w-6 h-6 text-red-600" />
          <div>
            <h3 className="text-lg font-bold">{flight.airline}</h3>
            <p className="text-gray-600">Vuelo directo</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">COP {flight.price.toLocaleString()}</p>
          <p className="text-sm text-gray-600">por persona</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-2xl font-bold">{flight.departureTime}</p>
          <p className="text-gray-600">{flight.origin}</p>
        </div>
        <div className="flex flex-col items-center">
          <Clock className="w-5 h-5 text-gray-400 mb-1" />
          <p className="text-sm text-gray-600">{flight.duration}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">{flight.arrivalTime}</p>
          <p className="text-gray-600">{flight.destination}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={onSelectSeat}
          className="flex items-center justify-center space-x-2 bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors"
        >
          <Plane className="w-5 h-5" />
          <span>Seleccionar asiento</span>
        </button>
        <button
          onClick={onAddLuggage}
          className="flex items-center justify-center space-x-2 bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors"
        >
          <Luggage className="w-5 h-5" />
          <span>Agregar equipaje</span>
        </button>
      </div>
    </div>
  );
};

export default FlightDetails;