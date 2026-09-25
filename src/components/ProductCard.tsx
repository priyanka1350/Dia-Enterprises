import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { ArrowRight, Box } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] bg-brand-beige/30 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.altText || product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded text-brand-charcoal">
          {product.specs.gsm || product.specs.application || "Raw Material"}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-brand-charcoal mb-2">
          <Link to={`/products/${product.slug}`} className="hover:text-brand-green transition-colors">
            {product.name}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-6 font-medium">
          <Box size={16} className="mr-2 text-brand-green" />
          <span>{product.tagline}</span>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <Link
            to={`/products/${product.slug}`}
            className="text-brand-green font-medium text-sm flex items-center hover:text-brand-green-light transition-colors"
          >
            View Details <ArrowRight size={16} className="ml-1" />
          </Link>
          <Link
            to="/orders"
            className="text-gray-500 text-sm hover:text-brand-charcoal transition-colors border-b border-transparent hover:border-brand-charcoal"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
