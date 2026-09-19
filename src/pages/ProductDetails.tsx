import { useParams } from 'react-router-dom';
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
        title={`${product.name} | Paper Plate Raw Material`}
        description={`Buy ${product.name} from Dia Enterprise. ${product.description} Available for bulk purchase across India.`}
        type="product"
        image={product.image}
        productName={product.name}
        productDescription={product.description}
        canonical={`/products/${product.slug}`}
      />
      
      <div className="bg-brand-offwhite min-h-screen flex flex-col justify-center pt-24 pb-6">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          
          <a href="/#products" className="inline-flex items-center text-gray-500 hover:text-brand-green mb-4 transition-colors text-sm">
            <ArrowLeft size={20} className="mr-2" /> Back to Products
          </a>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-h-[85vh]">
            <div className="flex flex-col md:flex-row h-full max-h-[85vh]">
              {/* Product Image */}
              <div className="w-full md:w-1/2 relative bg-brand-beige/20 min-h-[30vh] md:min-h-0">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
              </div>
              
              {/* Product Info */}
              <div className="w-full md:w-1/2 p-5 md:p-6 overflow-y-auto">
                <div className="mb-1.5">
                  <span className="inline-block py-0.5 px-2.5 rounded text-xs font-semibold bg-gray-100 text-gray-700 uppercase tracking-wide">
                    {product.specs.gsm || product.specs.application || "Raw Material"}
                  </span>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-heading font-medium text-brand-charcoal mb-2">
                  {product.name}
                </h1>
                
                <p className="text-base font-medium text-brand-green mb-2">
                  {product.tagline}
                </p>

                {/* <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p> */}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Suitable For</h3>
                    <ul className="space-y-1">
                      {product.suitableFor.map(app => (
                        <li key={app} className="flex items-start text-gray-700 text-sm">
                          <Box size={14} className="text-brand-green mr-2 mt-0.5 shrink-0" /> {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Specifications</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {product.specs.gsm && <li><span className="font-medium text-brand-charcoal">GSM:</span> {product.specs.gsm}</li>}
                      {product.specs.finish && <li><span className="font-medium text-brand-charcoal">Finish:</span> {product.specs.finish}</li>}
                      {product.specs.materials && <li><span className="font-medium text-brand-charcoal">Materials:</span> {product.specs.materials}</li>}
                      {product.specs.colour && <li><span className="font-medium text-brand-charcoal">Colour:</span> {product.specs.colour}</li>}
                      {product.specs.application && <li><span className="font-medium text-brand-charcoal">Application:</span> {product.specs.application}</li>}
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={company.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-brand-green hover:bg-brand-green-light text-white text-center px-5 py-2.5 rounded-sm font-medium text-base transition-colors shadow-md"
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
