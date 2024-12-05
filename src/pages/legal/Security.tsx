import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, AlertTriangle } from 'lucide-react';

const Security = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Security</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-semibold text-white">Data Protection</h2>
              </div>
              <p>We employ industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction.</p>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-4">
                <Lock className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-semibold text-white">Encryption</h2>
              </div>
              <p>All data transmitted between your browser and our servers is encrypted using SSL/TLS protocols. We use strong encryption algorithms to protect sensitive information.</p>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-4">
                <Server className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-semibold text-white">Infrastructure Security</h2>
              </div>
              <p>Our infrastructure is hosted in secure data centers with 24/7 monitoring, intrusion detection systems, and regular security audits.</p>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-4">
                <AlertTriangle className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-semibold text-white">Incident Response</h2>
              </div>
              <p>We have a dedicated team and procedures in place to respond to security incidents promptly and effectively to protect your data.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Security;