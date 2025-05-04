import React from 'react';

interface RadioOption {
  id: string;
  label: string;
}

interface RadioSelectorProps {
  options: RadioOption[];
  selected: string;
  onChange: (value: string) => void;
}

const RadioSelector: React.FC<RadioSelectorProps> = ({ options, selected, onChange }) => {
  return (
    <div className="flex">
      {options.map((option) => (
        <label 
          key={option.id}
          className={`
            relative px-6 py-2 cursor-pointer rounded-full flex items-center
            ${selected === option.id ? 'text-white' : 'text-gray-700'}
          `}
        >
          <input
            type="radio"
            name="tripType"
            value={option.id}
            checked={selected === option.id}
            onChange={() => onChange(option.id)}
            className="sr-only"
          />
          {selected === option.id && (
            <span className="absolute inset-0 bg-green-500 rounded-full" />
          )}
          <span className="relative flex items-center">
            {selected === option.id && (
              <span className="w-3 h-3 bg-white rounded-full mr-2" />
            )}
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioSelector;