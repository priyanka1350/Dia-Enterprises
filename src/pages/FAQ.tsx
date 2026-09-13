import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What type of paper plate raw materials does DIA Enterprises offer?",
      answer: "DIA Enterprises offers a range of paper plate raw materials including silver paper, Kraft, chipboard, Thali green sheets and plates, and colour plate materials."
    },
    {
      question: "What GSM options are available?",
      answer: "Our range includes 80 GSM, 120 GSM, 180 GSM, and 200 GSM materials across different product categories."
    },
    {
      question: "Do you provide silver paper?",
      answer: "Yes. DIA Enterprises offers silver paper in 80 GSM, 120 GSM, 180 GSM, and 200 GSM options."
    },
    {
      question: "Do you provide Kraft and chipboard?",
      answer: "Yes. 200 GSM Kraft and chipboard are part of our paper plate raw-material range."
    },
    {
      question: "Do you provide green sheets for Thali plates?",
      answer: "Yes. DIA Enterprises offers 80 GSM Thali green sheets and plate materials."
    },
    {
      question: "Do you supply colour plate materials?",
      answer: "Yes. We offer colour plate materials suitable for decorative and specialty paper plate applications."
    },
    {
      question: "Can I enquire about bulk quantities?",
      answer: "Yes. Contact DIA Enterprises with your required material, GSM, and quantity to discuss your requirement."
    }
  ];

  return (
    <section id="faq" className="bg-white py-12 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-brand-charcoal mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-lg transition-colors ${openIndex === index ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 bg-white hover:border-gray-300'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className={`text-lg font-heading font-semibold pr-8 ${openIndex === index ? 'text-brand-green' : 'text-brand-charcoal'}`}>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-green shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
