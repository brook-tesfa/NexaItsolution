import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import * as LucideIcons from 'lucide-react';

const ServicesHero = () => {
  const getIconComponent = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons];
    return Icon || LucideIcons.HelpCircle;
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-purple-900/10 to-black/10" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            What We Provide
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge solutions to transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.slice(0, 4).map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="relative backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <motion.div
                        className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-8 h-8 text-blue-400" />
                      </motion.div>
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-3"
                    >
                      {service.features?.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesHero;