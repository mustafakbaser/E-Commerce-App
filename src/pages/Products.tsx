import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Sliders } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const products = [
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
    // Add more products as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Ürünler</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center space-x-2 text-gray-600"
        >
          <Sliders size={20} />
          <span>Filtreler</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className={`w-full md:w-64 space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Kategoriler</h3>
            <div className="space-y-2">
              {['Tümü', 'Elektronik', 'Giyim', 'Aksesuar', 'Ev & Yaşam'].map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category.toLowerCase()}
                    checked={selectedCategory === category.toLowerCase()}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Fiyat Aralığı</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="5000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>₺{priceRange[0]}</span>
                <span>₺{priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Sort */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Sıralama</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="featured">Öne Çıkanlar</option>
              <option value="price-low">Fiyat: Düşükten Yükseğe</option>
              <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
              <option value="newest">En Yeniler</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;