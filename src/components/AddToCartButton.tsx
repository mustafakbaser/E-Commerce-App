import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types/product';

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  product, 
  quantity = 1,
  className = "bg-blue-600 hover:bg-blue-700 text-white"
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`${className} px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200`}
    >
      <ShoppingCart size={20} />
      <span>Sepete Ekle</span>
    </button>
  );
};

export default AddToCartButton;