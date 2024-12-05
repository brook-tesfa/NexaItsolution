import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import FooterSection from './FooterSection';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const quickLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
  ];

  return (
    <footer className="relative bg-transparent backdrop-blur-md border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              NEXA
            </Link>
            <p className="text-gray-400 mt-4">
              Transform your business with cutting-edge IT solutions. We bring your digital vision to life.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Legal */}
          <FooterSection title="Legal">
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Contact */}
          <FooterSection title="Contact">
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@nexaitsolution.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  nexaitsolution@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  +251 993 95 4037
                </a>
              </li>
              <li>
                <div className="flex items-start text-gray-400">
                  <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Megenagna Avenue , Adis Abeba , </span>
                </div>
              </li>
            </ul>
          </FooterSection>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} NEXA IT Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;