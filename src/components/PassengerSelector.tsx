import React, { useState } from 'react';
import { Users, ChevronDown } from 'lucide-react';

interface PassengerSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const PassengerSelector: React.FC<PassengerSelectorProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="text-sm text-gray-600 mb-1">Pasajeros</div>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between px-3 py-4 border border-gray-300 rounded-lg bg-white"
      >
        <div className="flex items-center">
          <Users className="w-5 h-5 text-gray-500 mr-2" />
          <span>{value}</span>
        </div>
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span>Pasajeros</span>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => onChange(Math.max(1, value - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300"
                >
                  -
                </button>
                <span>{value}</span>
                <button 
                  onClick={() => onChange(value + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
            >
              Listo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;