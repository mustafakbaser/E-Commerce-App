import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const PromoBanner: React.FC = () => {
  // Örnek geri sayım tarihi
  const endDate = new Date('2024-04-01T00:00:00');
  const now = new Date();
  const difference = endDate.getTime() - now.getTime();
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bahar İndirimleri Başladı! 🌸
            </h2>
            <p className="text-lg text-purple-100 mb-6">
              Tüm ürünlerde %50'ye varan indirimler sizi bekliyor.
              Üstelik 500₺ üzeri alışverişlerde kargo bedava!
            </p>

            <div className="flex space-x-6 mb-8">
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <span className="text-2xl font-bold">{days}</span>
                  <p className="text-sm text-purple-200">Gün</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <span className="text-2xl font-bold">{hours}</span>
                  <p className="text-sm text-purple-200">Saat</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <span className="text-2xl font-bold">{minutes}</span>
                  <p className="text-sm text-purple-200">Dakika</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold inline-flex items-center group"
            >
              Hemen Keşfet
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-purple-500/30 absolute inset-0 animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80"
              alt="Promo"
              className="rounded-lg shadow-2xl relative z-10"
            />
            <div className="absolute top-4 right-4 bg-white/90 text-purple-600 px-4 py-2 rounded-full backdrop-blur-sm flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span className="font-semibold">Sınırlı Süre!</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;