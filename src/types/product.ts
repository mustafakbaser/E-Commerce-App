export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  comparePrice?: number;
  images: string[];
  category: {
    _id: string;
    name: string;
    slug: string;
  };
  stock: number;
  specifications: Array<{
    name: string;
    value: string;
  }>;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isFeatured: boolean;
}