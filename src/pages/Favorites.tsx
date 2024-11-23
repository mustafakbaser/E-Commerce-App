import React from 'react';
import { Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Favorites = () => {
  const favoriteProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      category: "Electronics"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Favorites</h1>

      {favoriteProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Heart size={48} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
          <p className="text-gray-600">Start adding some items to your favorites!</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;