import React from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';
import ServicesHero from '../components/services/ServicesHero';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-transparent backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-purple-900/10 to-black/10" />
      
      {/* Hero Section */}
      <ServicesHero />

      {/* All Services Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} showFeatures={true} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;