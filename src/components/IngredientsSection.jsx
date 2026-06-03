import React from 'react';

const ingredients = [
  { name: "Henna", benefit: "Natural color + conditioning" },
  { name: "Indigo", benefit: "Deep brown to black tones" },
  { name: "Hibiscus Oil", benefit: "Shine, growth & root strength" }
];

const IngredientsSection = () => {
  return (
    // Reduced padding (py-12) to lower section height
    <section className="py-12 bg-[#f7f9f2]">
      <div className="custom-container mx-auto px-4">
        {/* Swapped order to put Image on the Left */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left: Image (Dummy placeholder included) */}
          <div className="flex-1 w-full">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[5/4] bg-gray-300 relative">
              <img 
                src="https://plantpure.in/wp-content/uploads/2025/10/pp_0001_hair-shampoo-color-protect.jpg" 
                alt="Botanical Ingredients" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 space-y-4">
            <h4 className="text-[#2d6a4f] text-[10px] font-bold uppercase tracking-[0.2em]">
              3 Sacred Ingredients
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c26] leading-tight">
              Botanical wisdom,<br />perfected in Japan.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Our triple-sifted microfine formula is manufactured using Japanese 
              precision and the time-tested ayurvedic trio that has cared for hair 
              for centuries.
            </p>

            <div className="space-y-4 pt-2">
              {ingredients.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-[#1a3c26] p-2 rounded-full text-white">
                    <span className="text-sm">🌿</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1a3c26] text-sm">{item.name}</h5>
                    <p className="text-xs text-gray-500">{item.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;