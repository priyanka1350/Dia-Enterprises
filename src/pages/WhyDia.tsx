import { Layers, PackageSearch, Building2, ShieldCheck, Factory, Box } from 'lucide-react';

export function WhyDia() {
  const benefits = [
    {
      title: "Wide Material Range",
      description: "From silver-coated papers to Kraft, chipboard, green sheets, and colour materials, we provide multiple options under one roof.",
      icon: <Layers size={32} className="text-brand-green" />
    },
    {
      title: "Multiple GSM Options",
      description: "Choose from different GSM levels to suit different plate sizes, designs, and production requirements.",
      icon: <Box size={32} className="text-brand-green" />
    },
    {
      title: "One-Stop Sourcing",
      description: "Reduce the need to source materials from multiple suppliers. DIA Enterprises brings a wide range of paper plate raw materials together.",
      icon: <PackageSearch size={32} className="text-brand-green" />
    },
    {
      title: "Quality-Focused Supply",
      description: "We focus on providing materials suitable for consistent paper plate manufacturing requirements.",
      icon: <ShieldCheck size={32} className="text-brand-green" />
    },
    {
      title: "Manufacturing-Focused Approach",
      description: "Our product range is built around the practical requirements of paper plate manufacturers.",
      icon: <Factory size={32} className="text-brand-green" />
    },
    {
      title: "Bulk Requirements",
      description: "Whether you require regular production material or bulk quantities, DIA Enterprises is positioned to support business requirements.",
      icon: <Building2 size={32} className="text-brand-green" />
    }
  ];

  return (
    <section id="why-dia" className="bg-white py-12 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-brand-charcoal mb-4">
            Why Choose DIA Enterprises?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We simplify procurement by providing dependable access to the right raw materials for paper plate manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start p-8 rounded-xl bg-brand-offwhite border border-gray-100 hover:border-brand-green/30 transition-colors">
              <div className="bg-brand-green/10 p-4 rounded-lg mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading font-medium text-brand-charcoal mb-3">
                <span className="text-brand-green-light mr-2 text-sm font-mono">0{index + 1} —</span>
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
