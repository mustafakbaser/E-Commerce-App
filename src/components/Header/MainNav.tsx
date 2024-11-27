import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import SearchBar from './SearchBar';

const categories = [
  {
    name: 'Elektronik',
    subcategories: ['Telefonlar', 'Bilgisayarlar', 'Tabletler', 'Kulaklıklar', 'Akıllı Saatler'],
  },
  {
    name: 'Moda',
    subcategories: ['Kadın', 'Erkek', 'Çocuk', 'Spor Giyim', 'Aksesuar'],
  },
  {
    name: 'Ev & Yaşam',
    subcategories: ['Mobilya', 'Dekorasyon', 'Aydınlatma', 'Ev Tekstili', 'Mutfak'],
  },
  {
    name: 'Kozmetik',
    subcategories: ['Parfüm', 'Makyaj', 'Cilt Bakımı', 'Saç Bakımı', 'Kişisel Bakım'],
  },
];

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search logic
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              E-Store
            </h1>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block mx-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Navigation Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/favorites"
              className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <Heart size={24} />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              to="/account"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <User size={24} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Categories Menu */}
        <div className="hidden md:block border-t dark:border-gray-700">
          <div className="flex space-x-8 py-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <span>{category.name}</span>
                  <ChevronDown size={16} />
                </button>

                {activeCategory === category.name && (
                  <div className="absolute z-50 left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                    <div className="py-2">
                      {category.subcategories.map((subcat) => (
                        <Link
                          key={subcat}
                          to={`/category/${category.name.toLowerCase()}/${subcat.toLowerCase()}`}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                          {subcat}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t dark:border-gray-700">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <SearchBar onSearch={handleSearch} />

            {/* Mobile Categories */}
            {categories.map((category) => (
              <div key={category.name} className="space-y-2">
                <button className="flex items-center justify-between w-full text-gray-600 dark:text-gray-300">
                  <span>{category.name}</span>
                  <ChevronDown size={16} />
                </button>
                <div className="pl-4 space-y-2">
                  {category.subcategories.map((subcat) => (
                    <Link
                      key={subcat}
                      to={`/category/${category.name.toLowerCase()}/${subcat.toLowerCase()}`}
                      className="block text-sm text-gray-600 dark:text-gray-400"
                    >
                      {subcat}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile Navigation Icons */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t dark:border-gray-700">
              <Link
                to="/favorites"
                className="flex flex-col items-center text-gray-600 dark:text-gray-300"
              >
                <Heart size={24} />
                <span className="text-sm mt-1">Favoriler</span>
              </Link>
              <Link
                to="/cart"
                className="flex flex-col items-center text-gray-600 dark:text-gray-300"
              >
                <ShoppingCart size={24} />
                <span className="text-sm mt-1">Sepet</span>
              </Link>
              <Link
                to="/account"
                className="flex flex-col items-center text-gray-600 dark:text-gray-300"
              >
                <User size={24} />
                <span className="text-sm mt-1">Hesabım</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNav;