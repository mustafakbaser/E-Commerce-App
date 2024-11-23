import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-800">E-Store</h1>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ürün ara..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/favorites" className="text-gray-600 hover:text-gray-900">
              <Heart size={24} />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-gray-900">
              <ShoppingCart size={24} />
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-gray-900">
              <User size={24} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ürün ara..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
            <Link
              to="/favorites"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-2"
            >
              <Heart size={20} />
              <span>Favoriler</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-2"
            >
              <ShoppingCart size={20} />
              <span>Sepet</span>
            </Link>
            <Link
              to="/profile"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-2"
            >
              <User size={20} />
              <span>Profil</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;