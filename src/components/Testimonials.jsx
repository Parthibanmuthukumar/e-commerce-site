import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "The DeepMind Trench Coat is a masterwork of structural tailoring. The ripstop canvas drapes beautifully, and the concealed pockets are incredibly functional. A flawless addition to my daily workspace.",
      author: "Marcus Chen",
      role: "Lead Architect at Stripe",
      rating: 5,
      avatarInitials: "MC",
      avatarBg: "bg-[#E6DFD3] text-cyber-black"
    },
    {
      id: 2,
      quote: "The Heavy Fleece Hoodie is incredibly dense and comfy. The double-layered hood holds its shape perfectly without sloppy drawstrings, giving a clean minimalist aesthetic that fits both calls and coding.",
      author: "Elena Rostova",
      role: "Principal Engineer at Vercel",
      rating: 5,
      avatarInitials: "ER",
      avatarBg: "bg-[#8E9B8B] text-white"
    },
    {
      id: 3,
      quote: "Tactical straight-leg ripstop cargo pants that are actual luxury. The ripstop cotton feels incredibly premium, and the integrated magnetic buckle is pure engineering delight. Absolute 10/10.",
      author: "Dr. Kenji Tanaka",
      role: "Director of Systems at Toyota Connected",
      rating: 5,
      avatarInitials: "KT",
      avatarBg: "bg-[#CFC2B0] text-cyber-black"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-cyber-border bg-[#FAF9F5] relative select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
          <span className="text-cyber-cyan font-mono text-xs font-semibold uppercase tracking-widest leading-none">
            REVIEWS FROM THE FIELD
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cyber-black tracking-tight">
            Developer Testimonials
          </h2>
          <div className="h-[2px] w-12 bg-cyber-cyan mx-auto rounded-full mt-2"></div>
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded border border-cyber-border bg-white shadow-sm relative group hover:shadow-md transition-all duration-300"
            >
              
              {/* Floating Quote Icon decoration */}
              <div className="absolute top-6 right-6 text-cyber-border/40 group-hover:text-cyber-cyan/20 transition-colors duration-300">
                <Quote size={36} className="stroke-[1.5]" />
              </div>

              <div className="space-y-4">
                
                {/* 5-Star Ratings */}
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill="currentColor" 
                      className="stroke-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-cyber-text text-sm leading-relaxed italic relative z-10 text-left">
                  "{rev.quote}"
                </p>

              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3.5 mt-8 pt-4 border-t border-cyber-border/60">
                
                {/* Avatar Mockup */}
                <div className={`h-10 w-10 rounded-full shrink-0 flex items-center justify-center text-xs font-bold tracking-wider ${rev.avatarBg} border border-cyber-border/40 shadow-sm`}>
                  {rev.avatarInitials}
                </div>

                <div className="min-w-0 text-left">
                  <div className="text-sm font-bold text-cyber-black tracking-wide truncate">
                    {rev.author}
                  </div>
                  <div className="text-[10px] font-bold text-cyber-muted tracking-widest uppercase truncate mt-0.5 font-mono">
                    {rev.role}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
