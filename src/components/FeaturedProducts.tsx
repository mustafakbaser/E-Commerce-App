import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCard from './ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  discount?: number;
  isNew?: boolean;
}

const FeaturedProducts: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Wireless Kulaklık",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      category: "Elektronik",
      description: "Yüksek kaliteli ses deneyimi",
      isNew: true
    },
    {
      id: 2,
      name: "Akıllı Saat Pro",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      category: "Elektronik",
      description: "Fitness takibi ve bildirimler",
      discount: 15
    },
    {
      id: 3,
      name: "Deri Laptop Çantası",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
      category: "Aksesuar",
      description: "Premium el yapımı deri",
      isNew: true
    },
    {
      id: 4,
      name: "Mekanik Klavye",
      price: 1599.99,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
      category: "Elektronik",
      description: "RGB aydınlatmalı gaming klavye",
      discount: 20
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            En çok tercih edilen ürünlerimizi keşfedin
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="featured-products-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="p-2">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default FeaturedProducts;