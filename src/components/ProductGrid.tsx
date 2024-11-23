import React from 'react';
import ProductCard from './ProductCard';
import { Grid, SortAscending } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductGridProps {
  products: Product[];
  onSort: (value: string) => void;
  onLayoutChange: (layout: 'grid' | 'list') => void;
  layout: 'grid' | 'list';
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onSort, onLayoutChange, layout }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <select
            onChange={(e) => onSort(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500"
          >
            <option value="featured">Öne Çıkanlar</option>
            <option value="price-asc">Fiyat (Düşükten Yükseğe)</option>
            <option value="price-desc">Fiyat (Yüksekten Düşüğe)</option>
            <option value="newest">En Yeniler</option>
          </select>
          <button
            onClick={() => onLayoutChange(layout === 'grid' ? 'list' : 'grid')}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <Grid size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-600">{products.length} ürün</p>
      </div>

      <div className={`grid ${layout === 'grid' ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} layout={layout} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;