import React from 'react';
import { Calendar } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface DatePickerProps {
  label: string;
  selected?: Date;
  onSelect: (date: Date | undefined) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, selected, onSelect }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <div className="text-sm text-gray-600 mb-1">{label}</div>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white"
        >
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            <Calendar className="w-5 h-5" />
          </div>
          <input
            readOnly
            value={selected ? format(selected, 'dd/MM/yyyy') : ''}
            placeholder="Seleccionar fecha"
            className="w-full pl-10 pr-3 py-4 border-none bg-transparent cursor-pointer"
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-1">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => {
                onSelect(date);
                setIsOpen(false);
              }}
              locale={es}
              className="bg-white rounded-lg shadow-lg border border-gray-200"
              fromDate={new Date()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;