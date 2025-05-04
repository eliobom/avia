import React, { ReactNode } from 'react';

interface SearchBoxProps {
  icon: ReactNode;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ icon, label, placeholder, value, onChange }) => {
  return (
    <div className="relative border border-gray-300 rounded-lg overflow-hidden">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
        {icon}
      </div>
      <label className="sr-only">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-3 py-4 border-none focus:ring-2 focus:ring-sky-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;