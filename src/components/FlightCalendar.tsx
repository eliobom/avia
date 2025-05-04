import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FlightCalendarProps {
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  availableDates: {
    date: Date;
    price: number;
    availability: 'high' | 'medium' | 'low';
  }[];
}

const FlightCalendar: React.FC<FlightCalendarProps> = ({
  selectedDate,
  onSelect,
  availableDates,
}) => {
  const modifiers = {
    available: availableDates.map(d => d.date),
    highAvailability: availableDates
      .filter(d => d.availability === 'high')
      .map(d => d.date),
    mediumAvailability: availableDates
      .filter(d => d.availability === 'medium')
      .map(d => d.date),
    lowAvailability: availableDates
      .filter(d => d.availability === 'low')
      .map(d => d.date),
  };

  const modifiersStyles = {
    highAvailability: {
      backgroundColor: '#dcfce7',
      color: '#166534',
    },
    mediumAvailability: {
      backgroundColor: '#fef9c3',
      color: '#854d0e',
    },
    lowAvailability: {
      backgroundColor: '#fee2e2',
      color: '#991b1b',
    },
  };

  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={onSelect}
      locale={es}
      modifiers={modifiers}
      modifiersStyles={modifiersStyles}
      components={{
        IconLeft: () => <ChevronLeft className="w-4 h-4" />,
        IconRight: () => <ChevronRight className="w-4 h-4" />,
      }}
      formatters={{
        formatCaption: (date, options) => {
          return format(date, 'MMMM yyyy', { locale: options?.locale });
        },
      }}
      className="p-4 bg-white rounded-lg shadow-lg"
      styles={{
        caption: { color: '#111827' },
        head: { color: '#6b7280' },
        day: {
          margin: '2px',
          borderRadius: '8px',
          transition: 'background-color 0.2s, color 0.2s',
        },
      }}
    />
  );
};

export default FlightCalendar;