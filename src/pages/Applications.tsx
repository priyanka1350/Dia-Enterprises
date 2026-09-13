import { Utensils, PartyPopper, Disc, Store, Layers } from 'lucide-react';

export function Applications() {
  const applications = [
    {
      title: "Disposable Food Service",
      description: "Materials for everyday disposable food-serving applications.",
      icon: <Utensils size={40} className="text-brand-green" />
    },
    {
      title: "Events & Functions",
      description: "Suitable materials for plates used at events, functions, gatherings, and celebrations.",
      icon: <PartyPopper size={40} className="text-brand-green" />
    },
    {
      title: "Thali & Traditional Serving",
      description: "Green sheets and materials suitable for Thali-style plate production.",
      icon: <Disc size={40} className="text-brand-green" />
    },
    {
      title: "Commercial Food Service",
      description: "Materials suitable for manufacturers supplying disposable plates to commercial food-service businesses.",
      icon: <Store size={40} className="text-brand-green" />
    },
    {
      title: "High-Volume Manufacturing",
      description: "Multiple GSM options designed to support different production requirements.",
      icon: <Layers size={40} className="text-brand-green" />
    }
  ];

  return (
    <section id="applications" className="bg-brand-offwhite py-12 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-brand-charcoal mb-6">
            Materials for Different Paper Plate Applications
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our materials can support a variety of disposable food-service and paper plate manufacturing requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {applications.map((app, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="bg-brand-offwhite w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {app.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-brand-charcoal mb-3">
                {app.title}
              </h3>
              <p className="text-gray-600">
                {app.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
