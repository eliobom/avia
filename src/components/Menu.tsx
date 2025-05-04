import React from 'react';
import { Menu as MenuIcon } from 'lucide-react';

const Menu = () => {
  return (
    <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
      <MenuIcon className="w-6 h-6" />
    </button>
  );
};

export default Menu;