import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
        {icon}
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
      </div>
      <div className="flex items-center">
        <ArrowRight className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
};

export default ServiceCard;