
export function GSMExplainer() {
  return (
    <section id="gsm-explainer" className="bg-brand-offwhite py-12 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-brand-charcoal mb-6">
            Choosing the Right GSM for Your Plates
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            GSM, or grams per square metre, refers to the weight and density of the paper material. Different GSM levels can provide different characteristics in terms of thickness, rigidity, handling, and application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-heading font-medium text-brand-charcoal mb-2">80<span className="text-xl text-gray-400 font-medium">GSM</span></h3>
            <h4 className="text-lg font-medium text-brand-green mb-4">Lightweight & economical</h4>
            <p className="text-gray-600">Ideal for lightweight disposable plate applications.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-heading font-medium text-brand-charcoal mb-2">120<span className="text-xl text-gray-400 font-medium">GSM</span></h3>
            <h4 className="text-lg font-medium text-brand-green mb-4">Balanced & versatile</h4>
            <p className="text-gray-600">A practical option when manufacturers need a balance between weight and strength.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-heading font-medium text-brand-charcoal mb-2">180<span className="text-xl text-gray-400 font-medium">GSM</span></h3>
            <h4 className="text-lg font-medium text-brand-green mb-4">Stronger & more rigid</h4>
            <p className="text-gray-600">Suitable for applications requiring increased material strength.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-heading font-medium text-brand-charcoal mb-2">200<span className="text-xl text-gray-400 font-medium">GSM</span></h3>
            <h4 className="text-lg font-medium text-brand-green mb-4">Heavy-duty & sturdy</h4>
            <p className="text-gray-600">Designed for applications where greater rigidity and structural strength are required.</p>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-brand-charcoal font-medium">
            DIA Enterprises offers multiple GSM options so manufacturers can select materials according to their specific production requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
