import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  image: string;
  productCount: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, productCount }) => {
  return (
    <Link to={`/category/${name.toLowerCase()}`} className="group">
      <div className="relative overflow-hidden rounded-lg aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/80">{productCount} Ürün</span>
            <ArrowRight className="w-5 h-5 text-white transform transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;