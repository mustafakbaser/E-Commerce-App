import React from 'react';
import ProductGrid from '../components/ProductList/ProductGrid';
import { useProducts } from '../hooks/useProducts';

const Products = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
        <p className="mt-2 text-gray-600">
          Discover our collection of products from MongoDB database
        </p>
      </div>

      <ProductGrid 
        products={products}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default Products;