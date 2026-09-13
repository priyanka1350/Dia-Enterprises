import { ClipboardList, CheckSquare, PackageCheck, Truck, PlayCircle } from 'lucide-react';

export function SupplyProcess() {
  const steps = [
    {
      title: "Understand Your Requirement",
      description: "We understand your required material, GSM, finish, colour, and application.",
      icon: <ClipboardList size={32} className="text-white" />
    },
    {
      title: "Select the Right Material",
      description: "Choose from our range of silver, Kraft, chipboard, green, and colour materials.",
      icon: <CheckSquare size={32} className="text-white" />
    },
    {
      title: "Confirm Quantity",
      description: "We support requirements based on your production and bulk-supply needs.",
      icon: <PackageCheck size={32} className="text-white" />
    },
    {
      title: "Material Supply",
      description: "Your selected raw material is prepared for supply according to the agreed requirement.",
      icon: <Truck size={32} className="text-white" />
    },
    {
      title: "Ready for Production",
      description: "The material reaches you ready to support your paper plate manufacturing process.",
      icon: <PlayCircle size={32} className="text-white" />
    }
  ];

  return (
    <section id="supply-process" className="bg-brand-offwhite py-12 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-charcoal mb-6 text-center">
            From Material Selection to Production
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            A seamless supply process built around your manufacturing needs.
          </p>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 bg-brand-green w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-8 shadow-sm">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-brand-charcoal mb-2">
                    <span className="text-brand-green-light mr-2 text-sm font-mono uppercase tracking-widest">Step 0{index + 1}</span>
                    <br className="md:hidden" />
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
