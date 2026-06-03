import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0b2619] py-8 border-t border-white/10">
      <div className="custom-container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/60 text-xs">
          
          {/* Brand/Logo Area */}
          <div className="flex items-center gap-2">
            <span className="text-[#d4af37]">🌿</span>
            <span className="text-white font-bold text-base">PlantPure</span>
          </div>

          {/* Copyright */}
          <div className="text-center">
            © 2026 PlantPure Naturals. All rights reserved.
          </div>

          {/* Contact Link */}
          <div>
            <a 
              href="tel:+91 96259 82035" 
              className="text-[#d4af37] hover:text-white transition-colors"
            >
              +91  96259 82035
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;