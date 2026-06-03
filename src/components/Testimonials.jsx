import React from 'react';

const testimonials = [
  {
    name: "Anjali R.",
    text: "Finally! A grey cover that doesn't burn my scalp. My hair looks healthier than before."
  },
  {
    name: "Priya M.",
    text: "Used chemical dyes for 15 years. Switched to PlantPure 3 months ago — hair fall has dropped dramatically."
  },
  {
    name: "Meera S.",
    text: "Beautiful natural brown shade. My hairdresser asked what I'm using!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#f7f9f2]">
      <div className="custom-container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content & Testimonial Cards */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[#2d6a4f] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                Real Results
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a3c26] leading-tight">
                Loved by women who<br />refuse to compromise.
              </h2>
            </div>

            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="text-yellow-400 mb-2">★★★★★</div>
                  <p className="text-gray-700 italic text-sm mb-3">"{t.text}"</p>
                  <p className="text-[#1a3c26] font-bold text-xs">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop" 
                alt="Happy customer" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Rating Badge */}
            <div className="absolute top-6 right-6 bg-white px-5 py-3 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-xl font-bold text-[#1a3c26]">4.9★</p>
              <p className="text-[10px] text-gray-500 font-medium">on 5000+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;