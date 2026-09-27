import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { ArrowRight, Box } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="block bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] max-h-[40vh] bg-brand-beige/30 overflow-hidden relative">
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
        <h3 className="text-xl font-heading font-medium text-brand-charcoal mb-2 group-hover:text-brand-green transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-6 font-medium">
          <Box size={16} className="mr-2 text-brand-green" />
          <span>{product.tagline}</span>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <span className="text-brand-green font-medium text-sm flex items-center group-hover:text-brand-green-light transition-colors">
            View Details <ArrowRight size={16} className="ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
