import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="text-white ml-12">
            <h1 className="text-5xl font-bold mb-4">Yeni Sezon</h1>
            <p className="text-xl mb-8">En yeni ürünleri keşfedin</p>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Alışverişe Başla
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Kategoriler</h2>
          <a href="/categories" className="text-blue-600 hover:text-blue-700 flex items-center">
            Tümünü Gör <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Elektronik', 'Giyim', 'Ev & Yaşam', 'Spor'].map((category) => (
            <div key={category} className="relative h-40 rounded-lg overflow-hidden group">
              <img
                src={`https://source.unsplash.com/random/400x300?${category}`}
                alt={category}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Öne Çıkan Ürünler</h2>
          <a href="/products" className="text-blue-600 hover:text-blue-700 flex items-center">
            Tümünü Gör <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;