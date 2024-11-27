import { apiClient } from './config';
import { Product } from '../../types/product';

export const ProductAPI = {
  getAll: async (signal?: AbortSignal): Promise<Product[]> => {
    const response = await apiClient.get('/products', { signal });
    return response.data;
  },

  getById: async (id: string, signal?: AbortSignal): Promise<Product> => {
    const response = await apiClient.get(`/products/${id}`, { signal });
    return response.data;
  }
};