import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import FlashDealsHeader from '../components/FlashDealsHeader';
import FeaturedProducts from '../components/FeaturedProducts';
import PromoBanner from '../components/PromoBanner';
import NewsletterSignup from '../components/NewsletterSignup';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Kulaklık",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      category: "Elektronik"
    },
    {
      id: 2,
      name: "Akıllı Saat",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      category: "Elektronik"
    },
    {
      id: 3,
      name: "Deri Cüzdan",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
      category: "Aksesuar"
    }
  ];

  const featuredCategories = [
    {
      name: "Elektronik",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&q=80",
      productCount: 1250
    },
    {
      name: "Moda",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&q=80",
      productCount: 3420
    },
    {
      name: "Ev & Yaşam",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&q=80",
      productCount: 2180
    },
    {
      name: "Kozmetik",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&q=80",
      productCount: 890
    }
  ];

  return (
    <div>
      {/* Flash Deals Header */}
      <FlashDealsHeader />

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Popüler Kategoriler</h2>
          <Link to="/categories" className="text-primary-600 hover:text-primary-700 flex items-center">
            Tümünü Gör <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Promo Banner */}
      <PromoBanner />

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
};

export default Home;