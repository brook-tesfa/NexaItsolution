import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './ContactForm';
import { Toaster } from 'react-hot-toast';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8">
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <MapPin className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Our Location</h3>
                  <p className="text-gray-400">123 Innovation Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Email Us</h3>
                  <p className="text-gray-400">contact@nexaitsolution.com</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Phone className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;