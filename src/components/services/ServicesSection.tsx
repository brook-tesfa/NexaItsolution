import React from 'react';
import { services } from '../../data/services';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 bg-transparent backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-purple-900/10 to-black/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard key={service.id} service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;