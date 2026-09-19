

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
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-brand-charcoal animate-fade-in">
              About Dia Enterprise
            </h2>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white p-6 md:p-10 mb-6 md:mb-8 animate-fade-in space-y-4 md:space-y-5 text-center max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-brand-charcoal leading-snug font-medium font-heading">
              Your Trusted Sourcing Partner
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Dia Enterprise is a reliable supplier of finished paper plates and quality raw materials for paper plate manufacturers across the industry.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              We supply a comprehensive range of raw materials including silver paper, Kraft, chipboard, Thali green sheets, and colour plates — with multiple GSM options to match your exact production needs.
            </p>
            <p className="text-base text-brand-green leading-relaxed font-semibold">
              Our goal: to bring all your paper plate & raw material requirements under one roof with unmatched quality and service.
            </p>
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
