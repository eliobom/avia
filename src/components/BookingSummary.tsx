import React from 'react';
import { Check, Download } from 'lucide-react';

interface BookingSummaryProps {
  booking: {
    flightNumber: string;
    origin: string;
    destination: string;
    departureDate: string;
    returnDate?: string;
    passengers: number;
    totalPrice: number;
    paymentMethod: string;
  };
  onDownload: () => void;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ booking, onDownload }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-green-100 rounded-full p-3">
          <Check className="w-6 h-6 text-green-600" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">
        ¡Tu reserva está confirmada!
      </h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">Número de vuelo</span>
          <span className="font-medium">{booking.flightNumber}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">Origen</span>
          <span className="font-medium">{booking.origin}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">Destino</span>
          <span className="font-medium">{booking.destination}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">Fecha de salida</span>
          <span className="font-medium">{booking.departureDate}</span>
        </div>
        {booking.returnDate && (
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Fecha de regreso</span>
            <span className="font-medium">{booking.returnDate}</span>
          </div>
        )}
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">Pasajeros</span>
          <span className="font-medium">{booking.passengers}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">Método de pago</span>
          <span className="font-medium">{booking.paymentMethod}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">Total pagado</span>
          <span className="font-bold text-xl">
            COP {booking.totalPrice.toLocaleString()}
          </span>
        </div>
      </div>

      <button
        onClick={onDownload}
        className="w-full flex items-center justify-center space-x-2 bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
      >
        <Download className="w-5 h-5" />
        <span>Descargar itinerario</span>
      </button>

      <p className="text-sm text-gray-600 text-center mt-4">
        Se ha enviado una copia de la confirmación a tu correo electrónico
      </p>
    </div>
  );
};

export default BookingSummary;