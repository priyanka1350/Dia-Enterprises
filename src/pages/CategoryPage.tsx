import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface CategoryPageProps {
  title: string;
  h1: string;
  description: string;
  whatItIs: string;
  whatItIsUsedFor: string;
  relationToManufacturing: string;
  suitableFor: string[];
  bulkSupply: boolean;
  productFilter: (product: any) => boolean;
  slug: string;
}

export function CategoryPage({
  title,
  h1,
  description,
  whatItIs,
  whatItIsUsedFor,
  relationToManufacturing,
  suitableFor,
  bulkSupply,
  productFilter,
  slug
}: CategoryPageProps) {
  const filteredProducts = products.filter(productFilter);

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://diaenterprisesindia.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": `https://diaenterprisesindia.com/${slug}`
      }
    ]
  };

  return (
    <>
      <SEO 
        title={title} 
        description={description} 
        canonical={`/${slug}`}
        exactTitle={true}
      />
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      <div className="pt-24 pb-16 bg-brand-offwhite min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:text-brand-green">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-gray-700 font-medium">{h1}</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-4xl mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-charcoal mb-6">
              {h1}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <h2 className="text-2xl font-heading font-semibold mb-4 text-brand-charcoal">What is it?</h2>
                <p className="text-gray-700 leading-relaxed">{whatItIs}</p>
              </section>

              <section className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <h2 className="text-2xl font-heading font-semibold mb-4 text-brand-charcoal">What is it used for?</h2>
                <p className="text-gray-700 leading-relaxed">{whatItIsUsedFor}</p>
              </section>

              <section className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <h2 className="text-2xl font-heading font-semibold mb-4 text-brand-charcoal">Relation to Paper Plate Manufacturing</h2>
                <p className="text-gray-700 leading-relaxed">{relationToManufacturing}</p>
              </section>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-charcoal text-white p-8 rounded-sm">
                <h3 className="text-xl font-heading font-semibold mb-6">Suitable For</h3>
                <ul className="space-y-4">
                  {suitableFor.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="text-brand-green-light shrink-0 mr-3 mt-1" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {bulkSupply && (
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <h4 className="font-semibold text-brand-green-light mb-2">Bulk Supply Available</h4>
                    <p className="text-sm text-gray-300">We offer bulk supply across India to meet your high-volume manufacturing needs.</p>
                  </div>
                )}
              </div>

              <div className="bg-brand-green text-white p-8 rounded-sm text-center">
                <h3 className="text-xl font-heading font-semibold mb-4">Ready to Order?</h3>
                <p className="mb-6 text-brand-offwhite">Get in touch with Dia Enterprise today to discuss your requirements and get a quote.</p>
                <Link to="/#contact" className="inline-flex items-center justify-center w-full bg-white text-brand-green px-6 py-3 rounded-sm font-medium hover:bg-brand-offwhite transition-colors">
                  Contact Dia Enterprise
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-heading font-bold text-brand-charcoal mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Internal Links for SEO */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-xl font-heading font-semibold text-brand-charcoal mb-4">Explore More Raw Materials</h3>
            <div className="flex flex-wrap gap-4">
              <Link to="/paper-plate-raw-materials" className="text-brand-green hover:underline">Paper Plate Raw Materials</Link>
              <Link to="/silver-paper" className="text-brand-green hover:underline">Silver Paper</Link>
              <Link to="/kraft-paper" className="text-brand-green hover:underline">Kraft Paper</Link>
              <Link to="/chipboard" className="text-brand-green hover:underline">Chipboard</Link>
              <Link to="/paper-plates" className="text-brand-green hover:underline">Paper Plates</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
