import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <Link to={`/product/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-sm">
            {product.category}
          </span>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition">
            {product.name}
          </h3>
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">₺{product.price.toLocaleString()}</span>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <Heart size={20} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <ShoppingCart size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;