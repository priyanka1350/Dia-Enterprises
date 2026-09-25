import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';

export function Products() {
  return (
    <section id="products" className="bg-white py-12 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-brand-charcoal mb-4">
            Our Paper Plate Raw Materials
          </h2>
          <p className="text-lg text-gray-600">
            Explore our range of paper plate raw materials available in different GSM levels, finishes, colours, and material types.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/paper-plate-raw-materials" className="bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white px-4 py-2 rounded-full font-medium transition-colors text-sm">All Raw Materials</Link>
            <Link to="/silver-paper" className="bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white px-4 py-2 rounded-full font-medium transition-colors text-sm">Silver Paper</Link>
            <Link to="/kraft-paper" className="bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white px-4 py-2 rounded-full font-medium transition-colors text-sm">Kraft Paper</Link>
            <Link to="/chipboard" className="bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white px-4 py-2 rounded-full font-medium transition-colors text-sm">Chipboard</Link>
            <Link to="/paper-plates" className="bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white px-4 py-2 rounded-full font-medium transition-colors text-sm">Paper Plates</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
