export function Comparison() {
  const comparisonData = [
    { material: "Silver", gsm: "80 GSM", finish: "Silver", bestSuited: "Lightweight plates" },
    { material: "Silver", gsm: "120 GSM", finish: "Silver", bestSuited: "General-purpose plates" },
    { material: "Silver", gsm: "180 GSM", finish: "Silver", bestSuited: "Stronger plates" },
    { material: "Silver", gsm: "200 GSM", finish: "Silver", bestSuited: "Heavy-duty plates" },
    { material: "Kraft", gsm: "200 GSM", finish: "Kraft", bestSuited: "Sturdy plates" },
    { material: "Chipboard", gsm: "200 GSM", finish: "Chipboard", bestSuited: "Rigid plate applications" },
    { material: "Thali Green", gsm: "80 GSM", finish: "Green", bestSuited: "Thali-style plates" },
    { material: "Colour Plate", gsm: "—", finish: "Colour", bestSuited: "Decorative / specialty plates" }
  ];

  return (
    <section id="comparison" className="bg-brand-offwhite py-12 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-charcoal mb-4">
            Find the Right Material for Your Requirement
          </h2>
          <p className="text-lg text-gray-600">
            Compare our raw materials to select the perfect base for your paper plate manufacturing.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-charcoal text-white">
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-sm">Material</th>
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-sm text-right">GSM</th>
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-sm">Finish / Type</th>
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-sm">Best Suited For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-brand-offwhite/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-brand-charcoal">{row.material}</td>
                  <td className="py-4 px-6 text-brand-green font-semibold text-right whitespace-nowrap">{row.gsm}</td>
                  <td className="py-4 px-6 text-gray-600">{row.finish}</td>
                  <td className="py-4 px-6 text-gray-600">{row.bestSuited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
