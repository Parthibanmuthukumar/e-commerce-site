import React from 'react';
import { ArrowRight, Sparkles, ArrowDownRight } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-cyber-border bg-[#FAF9F5] select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Banner A: The Neural Overlay (Apparel/Swag) */}
        <div className="relative rounded border border-cyber-border bg-[#F4F1EA]/40 p-8 sm:p-10 shadow-sm overflow-hidden group flex flex-col justify-between h-[360px] sm:h-[400px]">
          
          {/* Cover Image in background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop"
              alt="Neural Overlay Apparel Collection"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 pointer-events-none brightness-[0.7] group-hover:brightness-50"
            />
          </div>

          {/* Shields */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-black/90 via-cyber-black/20 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 border border-white/5 rounded pointer-events-none z-20"></div>

          {/* Content */}
          <div className="relative z-20 max-w-sm space-y-3 flex-grow flex flex-col justify-center text-left">
            <span className="text-[10px] font-bold text-cyber-cyan font-mono uppercase tracking-widest leading-none flex items-center gap-1.5">
              <Sparkles size={11} className="text-cyber-cyan" />
              LIMITED SWAG DROP
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight pt-1">
              THE NEURAL <br /> OVERLAY.
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1.5">
              Co-engineered with Google DeepMind. Premium structural outerwear and heavyweight fleece items designed for high-performance builders.
            </p>
          </div>

          <div className="relative z-20 pt-4 self-start">
            <a
              href="#catalog"
              className="px-5 py-3 rounded bg-white text-cyber-black text-xs font-bold tracking-widest hover:bg-cyber-black hover:text-white transition-all duration-300 flex items-center gap-1.5"
            >
              SHOP COATS
              <ArrowRight size={13} />
            </a>
          </div>

        </div>

        {/* Banner B: Knitwear Collection */}
        <div className="relative rounded border border-cyber-border bg-[#F4F1EA]/40 p-8 sm:p-10 shadow-sm overflow-hidden group flex flex-col justify-between h-[360px] sm:h-[400px]">
          
          {/* Cover Image in background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=600&auto=format&fit=crop"
              alt="DeepMind Woolen knitwear Collection"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 pointer-events-none brightness-[0.7] group-hover:brightness-50"
            />
          </div>

          {/* Shields */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-black/90 via-cyber-black/20 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 border border-white/5 rounded pointer-events-none z-20"></div>

          {/* Content */}
          <div className="relative z-20 max-w-sm space-y-3 flex-grow flex flex-col justify-center text-left">
            <span className="text-[10px] font-bold text-cyber-cyan font-mono uppercase tracking-widest leading-none flex items-center gap-1.5">
              <Sparkles size={11} className="text-cyber-cyan" />
              ORGANIC WOOLENS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight pt-1">
              THE RIBBED <br /> KNITWEAR.
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1.5">
              Crafted from 100% fine woolen fibers. double-ribbed crewnecks and snug structures tailored for thermal retention.
            </p>
          </div>

          <div className="relative z-20 pt-4 self-start">
            <a
              href="#catalog"
              className="px-5 py-3 rounded bg-white text-cyber-black text-xs font-bold tracking-widest hover:bg-cyber-black hover:text-white transition-all duration-300 flex items-center gap-1.5"
            >
              SHOP KNITS
              <ArrowDownRight size={13} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
