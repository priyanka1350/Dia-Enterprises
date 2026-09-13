import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { products } from '../data/products';
import { company } from '../data/company';
import { ArrowLeft, Box } from 'lucide-react';
import { NotFound } from './NotFound';

export function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <SEO 
        title={`${product.name}`} 
        description={product.description}
        type="product"
        image={product.image}
      />
      
      <div className="bg-brand-offwhite py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          
          <a href="/#products" className="inline-flex items-center text-gray-500 hover:text-brand-green mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Products
          </a>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Product Image */}
              <div className="w-full md:w-1/2 relative bg-brand-beige/20">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center aspect-square md:aspect-auto md:absolute inset-0"
                />
              </div>
              
              {/* Product Info */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <div className="mb-2">
                  <span className="inline-block py-1 px-3 rounded text-xs font-semibold bg-gray-100 text-gray-700 uppercase tracking-wide">
                    {product.specs.gsm || product.specs.application || "Raw Material"}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-charcoal mb-4">
                  {product.name}
                </h1>
                
                <p className="text-xl font-medium text-brand-green mb-4">
                  {product.tagline}
                </p>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Suitable For</h3>
                    <ul className="space-y-1">
                      {product.suitableFor.map(app => (
                        <li key={app} className="flex items-start text-gray-700">
                          <Box size={16} className="text-brand-green mr-2 mt-1 shrink-0" /> {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Specifications</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {product.specs.gsm && <li><span className="font-medium text-brand-charcoal">GSM:</span> {product.specs.gsm}</li>}
                      {product.specs.finish && <li><span className="font-medium text-brand-charcoal">Finish:</span> {product.specs.finish}</li>}
                      {product.specs.materials && <li><span className="font-medium text-brand-charcoal">Materials:</span> {product.specs.materials}</li>}
                      {product.specs.colour && <li><span className="font-medium text-brand-charcoal">Colour:</span> {product.specs.colour}</li>}
                      {product.specs.application && <li><span className="font-medium text-brand-charcoal">Application:</span> {product.specs.application}</li>}
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/orders"
                    className="flex-1 bg-brand-green hover:bg-brand-green-light text-white text-center px-6 py-3.5 rounded-sm font-medium text-lg transition-colors shadow-md"
                  >
                    Request Quote
                  </Link>
                  <a 
                    href={company.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green/5 text-center px-6 py-3.5 rounded-sm font-medium text-lg transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
