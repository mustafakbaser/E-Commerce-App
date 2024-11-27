import React from 'react';
import { Phone, Mail, MapPin, Truck } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+901234567890" className="flex items-center hover:text-gray-300 transition">
              <Phone size={14} className="mr-1" />
              <span>+90 123 456 7890</span>
            </a>
            <a href="mailto:info@estore.com" className="flex items-center hover:text-gray-300 transition">
              <Mail size={14} className="mr-1" />
              <span>info@estore.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Truck size={14} className="mr-1" />
              <span>500₺ Üzeri Ücretsiz Kargo</span>
            </div>
            <div className="hidden md:flex items-center">
              <MapPin size={14} className="mr-1" />
              <span>Türkiye</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;