import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What raw materials are used for making paper plates?",
      answer: "Paper plates are typically manufactured using raw materials like silver paper, kraft paper, chipboard, and various grades of coated paper, ranging from 80 GSM to 200 GSM depending on the required strength."
    },
    {
      question: "Does Dia Enterprise supply paper plate raw materials in India?",
      answer: "Yes, Dia Enterprise supplies a wide range of paper plate raw materials across India, including silver paper, kraft paper, chipboard, and thali green sheets."
    },
    {
      question: "Does Dia Enterprise supply silver paper for paper plate manufacturing?",
      answer: "Yes, we supply silver paper for paper plate manufacturing. It is available in various thicknesses, including 80 GSM, 120 GSM, 180 GSM, and 200 GSM."
    },
    {
      question: "Does Dia Enterprise supply kraft paper for paper plates?",
      answer: "Yes, we supply 200 GSM kraft paper which provides a sturdy and rigid base for manufacturing heavy-duty paper plates."
    },
    {
      question: "Does Dia Enterprise supply chipboard for paper plate manufacturing?",
      answer: "Yes, Dia Enterprise offers 200 GSM chipboard, suitable for manufacturers looking for increased structural strength and durability in their paper plates."
    },
    {
      question: "Can I purchase paper plate raw materials in bulk?",
      answer: "Yes, bulk supply of all our paper plate raw materials is available. You can contact Dia Enterprise to discuss your specific volume requirements."
    },
    {
      question: "Where does Dia Enterprise supply paper plate raw materials?",
      answer: "Dia Enterprise supplies paper plate raw materials to customers, businesses, and manufacturers all across India."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="bg-white py-12 md:py-20 scroll-mt-20">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-brand-charcoal mb-4">
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
                <h3 className={`text-lg font-heading font-medium pr-8 ${openIndex === index ? 'text-brand-green' : 'text-brand-charcoal'}`}>
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
