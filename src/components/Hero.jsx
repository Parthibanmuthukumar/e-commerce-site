import React from 'react';
import { ArrowDown, Sparkles, MoveRight } from 'lucide-react';

export default function Hero() {
  const metrics = [
    { value: "100%", label: "Organic Wool" },
    { value: "450+", label: "GSM Heavy Weight" },
    { value: "Zero-G", label: "Structural Drape" }
  ];

  return (
    <section className="relative overflow-hidden bg-radial-grid py-12 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-cyber-border select-none">
      
      {/* Soft warm glows in background */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyber-cyan/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-cyber-indigo/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Typography Stack & CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8 animate-fade-in-up z-10">
          
          {/* Partnership Badge */}
          <div className="inline-flex items-center gap-2 self-start bg-[#F4F1EA] border border-cyber-border rounded-full py-1.5 px-4 text-[10px] font-bold tracking-widest text-cyber-muted uppercase">
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyber-indigo animate-ping"></span>
            ANTI GRAVITY SWAG
            <span className="text-cyber-border">|</span>
            <span className="text-cyber-indigo font-mono">EDITION 2026</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cyber-text leading-[1.1] sm:leading-[1.15]">
            Anti Gravity <br />
            <span className="font-serif italic text-cyber-indigo font-medium">
              The Neural Overlay.
            </span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-cyber-muted text-sm sm:text-base max-w-xl leading-relaxed">
            A high-fidelity clothing collaboration crafted with Google DeepMind. Premium organic cotton, ribbed woolen textures, and structured zero-gravity drapes designed for engineers who construct the future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#catalog"
              className="px-8 py-4 rounded bg-cyber-black text-white text-xs font-bold tracking-widest hover:bg-[#FAF9F5] hover:text-cyber-black border border-cyber-black transition-all duration-300 text-center flex items-center justify-center gap-2 group"
            >
              SHOP COLLECTION
              <MoveRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#catalog"
              className="px-8 py-4 rounded bg-transparent border border-slate-300 text-cyber-black text-xs font-bold tracking-widest hover:border-cyber-black transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              EXPLORE SIZES
              <ArrowDown size={13} className="text-cyber-muted animate-bounce" />
            </a>
          </div>

          {/* Metrics Section */}
          <div className="pt-8 border-t border-cyber-border grid grid-cols-3 gap-6 max-w-lg">
            {metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-cyber-text tracking-tight font-display">
                  {metric.value}
                </div>
                <div className="text-[10px] font-bold tracking-widest text-cyber-muted uppercase font-mono">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Premium Portrait Model photography */}
        <div className="lg:col-span-5 relative flex items-center justify-center z-10">
          
          {/* Subtle minimal square frames behind */}
          <div className="absolute -inset-2 border border-cyber-border rounded-lg pointer-events-none z-0"></div>

          {/* Concept Image Visual Wrapper */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[3/4] rounded bg-[#F4F1EA] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-cyber-border overflow-hidden group z-10">
            
            {/* Glossy inner card glass outline */}
            <div className="absolute inset-0 border border-white/20 rounded pointer-events-none z-20"></div>

            {/* Actual online portrait model */}
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop" 
              alt="Anti Gravity Summer Collection Model"
              className="w-full h-full object-cover rounded group-hover:scale-102 transition-transform duration-700 pointer-events-none" 
            />

            {/* Overlay interactive collection label */}
            <div className="absolute bottom-6 left-6 right-6 glass-panel rounded p-3.5 border border-cyber-border/40 z-20 flex items-center gap-3 shadow-sm select-none">
              <div className="h-8 w-8 rounded bg-cyber-black flex items-center justify-center text-white shrink-0">
                <Sparkles size={14} className="text-white" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <div className="text-[9px] font-bold text-cyber-muted uppercase tracking-widest leading-none">NEW RELEASE</div>
                <div className="text-xs font-bold text-cyber-text truncate mt-1">DeepMind Sand Trench active</div>
              </div>
              <div className="h-2 w-2 rounded-full bg-cyber-indigo animate-pulse"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
