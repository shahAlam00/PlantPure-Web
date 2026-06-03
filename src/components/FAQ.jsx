import React, { useState } from 'react';

const faqData = [
  { q: "Is PlantPure really 100% chemical-free?", a: "Yes, our formula is 100% natural, using only plant-based ingredients like Henna, Indigo, and Hibiscus without any synthetic additives." },
  { q: "How long does the color last?", a: "Depending on hair type and care routine, the natural color typically lasts 3 to 5 weeks." },
  { q: "Will it cover stubborn greys?", a: "Yes, our triple-sifted formula is designed for deep penetration to effectively cover even stubborn greys." },
  { q: "How long does one kit last?", a: "A single kit generally provides enough product for 1-2 full applications, depending on hair length and thickness." },
  { q: "Do you ship across India?", a: "We offer free shipping across all serviceable pin codes in India." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-[#f7f9f2] px-4">
      <div className="custom-container mx-auto max-w-3xl">
        {/* Header */}
        <h2 className="text-3xl font-bold text-[#1a3c26] text-center mb-10">
          Questions, answered.
        </h2>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button 
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-[#1a3c26]"
              >
                {item.q}
                <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              {/* Answer Toggle */}
              {openIndex === index && (
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;