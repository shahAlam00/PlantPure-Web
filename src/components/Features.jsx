import React from 'react';

const features = [
  { icon: "✨", title: "Covers Greys", description: "Rich, deep natural tones lasting weeks." },
  { icon: "♥", title: "Stops Hair Fall", description: "Strengthens roots, reduces breakage." },
  { icon: "🍃", title: "Adds Shine", description: "Frizz-free, glossy, bouncy hair." },
  { icon: "🛡", title: "Scalp Safe", description: "Zero chemicals. Safe for sensitive scalp." }
];

const Features = () => {
  return (
    // Reduced vertical padding (py-12) to decrease section height
    <section className="py-12 bg-[#f7f9f2]">
      <div className="custom-container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h4 className="text-[#2d6a4f] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
            Why PlantPure
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c26]">
            More than color. Real hair care.
          </h2>
        </div>

        {/* Feature Grid constrained by custom-container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="bg-[#fdf9e7] w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1a3c26] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;