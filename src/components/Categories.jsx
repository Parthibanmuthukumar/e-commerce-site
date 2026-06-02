import React from 'react';
import { categories } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

export default function Categories({ onCategorySelect }) {
  return (
    <section id="sectors" className="py-16 px-4 sm:px-6 lg:px-8 border-b border-cyber-border bg-white select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Heading Stack */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <span className="text-cyber-cyan font-mono text-xs font-semibold uppercase tracking-widest leading-none">
            PREMIUM SECTORS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cyber-black tracking-tight">
            Browse Core Collections
          </h2>
          <div className="h-[2px] w-12 bg-cyber-cyan mx-auto rounded-full mt-2"></div>
        </div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onCategorySelect(cat.slug)}
              className="relative aspect-[3/4] rounded border border-cyber-border bg-[#F4F1EA]/30 shadow-sm overflow-hidden group cursor-pointer"
            >
              
              {/* Image Frame with zoom translation */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none brightness-75 group-hover:brightness-50"
                />
              </div>

              {/* Glowing overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-cyber-black/20 to-transparent z-10"></div>
              <div className="absolute inset-0 border border-white/10 rounded pointer-events-none z-20"></div>

              {/* Glow border outline on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-cyber-cyan/40 rounded transition-colors duration-300 z-20 pointer-events-none"></div>

              {/* Text content stack */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col justify-end text-left">
                <span className="text-[10px] font-bold text-cyber-indigo font-mono uppercase tracking-widest mb-1.5 leading-none">
                  {cat.itemCount}
                </span>
                <h3 className="font-serif text-lg font-bold text-white tracking-wide group-hover:text-cyber-cyan transition-colors leading-tight">
                  {cat.name}
                </h3>
                
                {/* Expand action button */}
                <div className="h-0 opacity-0 group-hover:h-8 group-hover:opacity-100 overflow-hidden transition-all duration-300 flex items-center gap-1 text-[10px] font-bold tracking-widest text-slate-300 pt-3 group-hover:pt-2 uppercase font-mono">
                  Browse Collection
                  <ArrowUpRight size={13} className="text-cyber-cyan" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
