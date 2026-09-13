export function About() {
  return (
    <section id="about" className="relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-br from-white via-brand-offwhite to-brand-green/10 overflow-hidden pt-24 pb-8 md:pb-12">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-72 h-72 bg-brand-charcoal/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-brand-charcoal animate-fade-in">
              About Dia Enterprise
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-6 md:gap-8 items-center bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white p-6 md:p-8 mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            
            {/* Image Space */}
            <div className="order-2 md:order-1 relative rounded-xl overflow-hidden aspect-square bg-gray-100 shadow-inner flex items-center justify-center border border-gray-200">
              <img src="/src/assets/manujanth.png" alt="Mr. Manjunath - Founder" className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent mix-blend-overlay"></div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2 space-y-3 md:space-y-4">
              <p className="text-xl md:text-2xl text-gray-800 leading-snug font-bold font-heading">
                A Decade of Manufacturing Excellence
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Founded 10 years ago by Mr. Manjunath, Dia Enterprise began with a vision to provide high-quality paper plate raw materials to manufacturers. Over the past decade, we have grown into a trusted and dependable sourcing partner in the industry.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                We supply a comprehensive range of quality raw materials, including silver paper, Kraft, chipboard, Thali green sheets, and colour plates. With multiple GSM options, we help you find the exact fit for your production needs.
              </p>
              <p className="text-base text-brand-green leading-relaxed font-semibold">
                Our goal remains simple: to bring all your paper plate manufacturing requirements under one roof with unmatched quality and service.
              </p>
            </div>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="/#products" className="inline-block bg-brand-green text-white hover:bg-brand-green-light px-6 py-3 rounded-full font-medium text-base transition-all shadow-lg hover:shadow-brand-green/30 hover:-translate-y-1">
              Explore Our Materials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
