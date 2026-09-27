import { ArrowRight, Layers, Box, PackageSearch, Truck } from 'lucide-react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';

// Import all sections
import { About } from './About';
import { Products } from './Products';
import { GSMExplainer } from './GSMExplainer';
import { WhyDia } from './WhyDia';
// import { Applications } from './Applications';
import { Gallery } from './Gallery';
import { Contact } from './Contact';

export function Home() {
  return (
    <>
      <SEO 
        title="Dia Enterprise | Paper Plate Raw Material & Paper Plate Supplier India" 
        description="Dia Enterprise supplies paper plates and paper plate raw materials across India, including silver paper, kraft paper and chipboard for paper plate manufacturing."
        exactTitle={true}
      />

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-[100vh] flex items-center pt-24 overflow-hidden scroll-mt-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:w-3/4 lg:w-2/3"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-brand-green/10 text-brand-green font-semibold text-sm mb-6 uppercase tracking-wider">
                Paper Plates & Raw Materials Supplier
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-semibold leading-tight mb-6 text-brand-charcoal">
                Paper Plate & Raw Material Supplier in India
              </h1>
              <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-700">
                Dia Enterprise supplies paper plates and paper plate raw materials across India. From our comprehensive range, we provide high-quality silver paper, kraft paper and chipboard specifically for paper plate manufacturing.
                <br className="hidden md:block" /><br className="hidden md:block" />
                Whether you need lightweight raw materials for everyday food-serving applications or heavy-duty materials for sturdy plate production, we deliver the right materials for your needs.
              </p>
              
              <div className="flex flex-wrap items-center justify-start gap-4">
                <a 
                  href="/#products"
                  className="bg-brand-green hover:bg-brand-green-light text-white px-6 py-3 md:px-8 md:py-4 rounded-sm font-medium text-base md:text-lg transition-colors shadow-lg flex items-center"
                >
                  Explore Products
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <a 
                  href="/#contact"
                  className="bg-transparent border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white px-8 py-4 rounded-sm font-medium text-lg transition-colors shadow-lg"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-brand-charcoal text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Box className="text-white mb-4" size={32} />
              <h3 className="font-heading font-medium mb-2">Multiple GSM Options</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <Layers className="text-white mb-4" size={32} />
              <h3 className="font-heading font-medium mb-2">Wide Material Range</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <Truck className="text-white mb-4" size={32} />
              <h3 className="font-heading font-medium mb-2">Bulk Supply</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <PackageSearch className="text-white mb-4" size={32} />
              <h3 className="font-heading font-medium mb-2">One-Stop Sourcing</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Sections */}
      <About />
      <Products />
      <GSMExplainer />
      <WhyDia />
      {/* <Applications /> */}
      {/* <SupplyProcess /> */}
      {/* <Comparison /> */}
      <Gallery />
      {/* <FAQ /> */}
      
      {/* Pre-Contact Banner */}
      <section className="bg-brand-green text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-medium mb-4 text-white">
            Paper Plates & Raw Materials — All Under One Roof
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">One Supplier. Finished Plates & Raw Materials. Simplified Sourcing.</p>
          <a href="#contact" className="inline-block bg-white text-brand-green px-8 py-3.5 rounded-sm font-medium text-lg hover:bg-brand-offwhite transition-colors">
            Contact Us Today
          </a>
        </div>
      </section>

      <Contact />
    </>
  );
}
