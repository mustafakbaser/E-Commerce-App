import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">E-Store</h3>
            <p className="text-gray-400">
              Modern ve güvenilir alışveriş deneyimi için doğru adres.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition">Hakkımızda</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">İletişim</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition">Kariyer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Yardım</h4>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-gray-400 hover:text-white transition">SSS</a></li>
              <li><a href="/shipping" className="text-gray-400 hover:text-white transition">Kargo Bilgileri</a></li>
              <li><a href="/returns" className="text-gray-400 hover:text-white transition">İade Koşulları</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Gizlilik Politikası</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-pink-400 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} E-Store. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;