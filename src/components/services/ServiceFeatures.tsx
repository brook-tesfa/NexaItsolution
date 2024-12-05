import React from 'react';
import { Check } from 'lucide-react';

interface ServiceFeaturesProps {
  features: string[];
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features }) => {
  return (
    <ul className="mt-4 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <Check className="w-4 h-4 mr-2 text-blue-400" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default ServiceFeatures;