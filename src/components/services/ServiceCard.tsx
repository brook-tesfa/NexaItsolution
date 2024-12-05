import React from 'react';
import * as icons from 'lucide-react';
import { Service } from '../../types';
import ServiceFeatures from './ServiceFeatures';

interface ServiceCardProps {
  service: Service;
  showFeatures?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, showFeatures = false }) => {
  // Safely get the icon component using type assertion
  const IconComponent = (icons[service.icon as keyof typeof icons] as unknown) as React.FC<{ className?: string }>;

  if (!IconComponent) {
    console.warn(`Icon ${service.icon} not found in lucide-react`);
    return null;
  }

  return (
    <div className="group relative backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
          <IconComponent className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-gray-400">{service.description}</p>
        {showFeatures && service.features && (
          <ServiceFeatures features={service.features} />
        )}
      </div>
    </div>
  );
};

export default ServiceCard;