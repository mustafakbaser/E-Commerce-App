import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { getMockProducts } from '../utils/mockData';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Use mock data for now
        const mockProducts = getMockProducts();
        setProducts(mockProducts);
        setError(null);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};