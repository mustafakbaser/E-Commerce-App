import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Timer, ArrowRight, Zap } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';

const FlashDealsHeader: React.FC = () => {
  const flashDeals = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      discount: "3.000₺",
      price: "64.999₺",
      originalPrice: "67.999₺",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80",
      remainingStock: 7
    },
    {
      id: 2,
      title: "Samsung 65\" OLED TV",
      discount: "5.500₺",
      price: "39.499₺",
      originalPrice: "44.999₺",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
      remainingStock: 3
    },
    {
      id: 3,
      title: "MacBook Pro M3",
      discount: "4.000₺",
      price: "55.999₺",
      originalPrice: "59.999₺",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
      remainingStock: 5
    }
  ];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Zap className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl font-bold text-yellow-400">Flaş Fırsatlar</h2>
        </div>

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full"
        >
          {flashDeals.map((deal) => (
            <SwiperSlide key={deal.id}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center md:text-left"
                >
                  <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full mb-6">
                    <Timer className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Sınırlı Stok: {deal.remainingStock} adet</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {deal.title}
                  </h1>
                  
                  <div className="mb-6">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                      {deal.discount} İndirim
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-3">
                      <span className="text-3xl md:text-4xl font-bold">{deal.price}</span>
                      <span className="text-xl text-gray-400 line-through">{deal.originalPrice}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold inline-flex items-center group"
                  >
                    Hemen Satın Al
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white w-20 h-20 rounded-full flex items-center justify-center transform rotate-12">
                    <div className="text-center">
                      <div className="text-sm">KAÇIRMA</div>
                      <div className="font-bold text-lg">%25</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>
    </div>
  );
};

export default FlashDealsHeader;