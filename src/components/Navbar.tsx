import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, Menu, X, User, ChevronDown } from 'lucide-react';

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
  {
    name: 'Spor',
    subcategories: ['Fitness', 'Outdoor', 'Bisiklet', 'Yoga', 'Spor Ekipmanları'],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center">🚚 Ücretsiz kargo - 500₺ ve üzeri siparişlerde</p>
        </div>
      </div>

      {/* Main Navigation */}
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
                placeholder="Ürün, kategori veya marka ara..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/favorites" className="text-gray-600 hover:text-primary-600 relative group">
              <Heart size={24} />
              <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-primary-600 relative group">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </Link>
            <Link to="/account" className="text-gray-600 hover:text-primary-600">
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

        {/* Categories Menu */}
        <div className="hidden md:block border-t">
          <div className="flex space-x-8 py-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="flex items-center space-x-1 text-gray-600 hover:text-primary-600">
                  <span>{category.name}</span>
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                {activeCategory === category.name && (
                  <div className="absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {category.subcategories.map((subcat) => (
                        <Link
                          key={subcat}
                          to={`/category/${category.name.toLowerCase()}/${subcat.toLowerCase()}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ürün, kategori veya marka ara..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>

            {/* Mobile Categories */}
            {categories.map((category) => (
              <div key={category.name} className="space-y-2">
                <button className="flex items-center justify-between w-full px-3 py-2 text-gray-600">
                  <span>{category.name}</span>
                  <ChevronDown size={16} />
                </button>
                <div className="pl-4 space-y-1">
                  {category.subcategories.map((subcat) => (
                    <Link
                      key={subcat}
                      to={`/category/${category.name.toLowerCase()}/${subcat.toLowerCase()}`}
                      className="block px-3 py-2 text-sm text-gray-600"
                    >
                      {subcat}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              to="/favorites"
              className="flex items-center space-x-2 text-gray-600 px-3 py-2"
            >
              <Heart size={20} />
              <span>Favoriler</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-2 text-gray-600 px-3 py-2"
            >
              <ShoppingCart size={20} />
              <span>Sepet</span>
            </Link>
            <Link
              to="/account"
              className="flex items-center space-x-2 text-gray-600 px-3 py-2"
            >
              <User size={20} />
              <span>Hesabım</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;