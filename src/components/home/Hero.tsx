import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ParticlesBackground from '../three/ParticlesBackground';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      <ParticlesBackground />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/50 z-10" />
      
      <motion.div 
        className="relative z-20 w-full max-w-7xl mx-auto py-20 sm:py-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 px-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Innovate
          </span>{' '}
          Your Digital Future
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
          Transform your business with cutting-edge IT solutions. We bring your digital vision to life
          with innovative technology and expert services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
          <motion.button 
            onClick={() => navigate('/projects')}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Projects
            <ArrowRight size={20} />
          </motion.button>
          <motion.button 
            onClick={() => navigate('/about')}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;