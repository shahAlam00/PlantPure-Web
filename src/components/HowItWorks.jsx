import React from 'react';

const steps = [
  {
    number: "01",
    title: "Mix",
    description: "Blend henna powder with warm water into a smooth paste."
  },
  {
    number: "02",
    title: "Apply",
    description: "Section your hair and apply evenly from root to tip."
  },
  {
    number: "03",
    title: "Rinse",
    description: "Wait 45 mins, rinse with water. Follow with indigo for darker tones."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-[#f7f9f2]">
      <div className="custom-container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h4 className="text-[#2d6a4f] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
            How it works
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c26]">
            Salon results, at home.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              // Compact card height with consistent rounded corners
              className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between h-48"
            >
              <div>
                <h3 className="text-lg font-bold text-[#1a3c26] mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
              
              {/* Step number styled as requested */}
              <div className="text-3xl font-bold text-[#d8e2dc] self-end">
                {step.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;