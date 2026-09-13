import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />
      <div className="min-h-[70vh] bg-brand-offwhite flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-brand-green mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-charcoal mb-6 text-center">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-md">
          The page you're looking for may have moved or no longer exists.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/"
            className="bg-brand-green hover:bg-brand-green-light text-white px-8 py-3 rounded-sm font-medium transition-colors text-center"
          >
            Back to Home
          </Link>
          <Link 
            to="/products"
            className="bg-white border border-gray-300 text-brand-charcoal hover:bg-gray-50 px-8 py-3 rounded-sm font-medium transition-colors text-center"
          >
            View Products
          </Link>
        </div>
      </div>
    </>
  );
}
