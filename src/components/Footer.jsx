import React from 'react';
import { MessageSquare, ArrowUp, Cpu } from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sitemaps = [
    {
      title: "Collections",
      links: [
        { name: "Jackets & Outerwear", href: "#catalog" },
        { name: "Knitwear & Fleece", href: "#catalog" },
        { name: "Cargo & Trousers", href: "#catalog" },
        { name: "Boots & Accessories", href: "#catalog" },
        { name: "Limited drops", href: "#catalog" }
      ]
    },
    {
      title: "Customer Service",
      links: [
        { name: "Shipping & Delivery", href: "#" },
        { name: "Returns & Exchanges", href: "#" },
        { name: "Size Guides", href: "#" },
        { name: "Order Tracking", href: "#" },
        { name: "Contact Concierge", href: "#" }
      ]
    },
    {
      title: "Anti Gravity",
      links: [
        { name: "About the Brand", href: "#" },
        { name: "Google DeepMind Collaboration", href: "#" },
        { name: "Sourcing & Materials", href: "#" },
        { name: "Workspace Research", href: "#" },
        { name: "Careers in AI Swag", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-cyber-black text-slate-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-cyber-border select-none relative z-10">
      
      {/* Decorative inner footer border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FAF9F5]/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-2 space-y-5 text-left">
            
            <a href="#" className="font-serif text-2xl font-bold tracking-wider text-white flex items-center gap-1.5">
              ANTI
              <span className="text-cyber-indigo relative">
                GRAVITY
                <span className="absolute -bottom-0.5 right-0 left-0 h-[1.5px] bg-cyber-indigo"></span>
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              An advanced, autonomous agentic developer clothing collaboration built in partnership with Google DeepMind. Premium organic cotton, woolen weaves, and structured zero-gravity drapes.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://github.com" target="_blank" className="p-2 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white transition-all duration-200">
                <GithubIcon size={15} />
              </a>
              <a href="https://twitter.com" target="_blank" className="p-2 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white transition-all duration-200">
                <TwitterIcon size={15} />
              </a>
              <a href="https://discord.com" target="_blank" className="p-2 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white transition-all duration-200">
                <MessageSquare size={15} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="p-2 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white transition-all duration-200">
                <LinkedinIcon size={15} />
              </a>
            </div>

          </div>

          {/* Sitemap Columns */}
          {sitemaps.map((section, idx) => (
            <div key={idx} className="space-y-4 text-left">
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-widest leading-none">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Details Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright & System Status */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-[10px] font-bold tracking-widest uppercase">
            <span className="text-slate-500 font-mono">
              © {currentYear} ANTI GRAVITY INC. ALL RIGHTS RESERVED.
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex items-center gap-1.5 text-cyber-indigo bg-cyber-indigo/5 border border-cyber-indigo/10 px-2.5 py-1 rounded-full font-mono text-[9px]">
              <span className="h-1 w-1 rounded-full bg-cyber-indigo animate-ping"></span>
              ALL SYSTEMS ONLINE
            </div>
          </div>

          {/* Payment Gateways / Methods Mockups */}
          <div className="flex items-center gap-4">
            {/* Visa */}
            <div className="h-7 w-11 rounded bg-white/5 border border-white/10 flex items-center justify-center font-bold text-[9px] text-slate-400 font-mono select-none">
              VISA
            </div>
            {/* MasterCard */}
            <div className="h-7 w-11 rounded bg-white/5 border border-white/10 flex items-center justify-center font-bold text-[9px] text-slate-400 font-mono select-none">
              MC
            </div>
            {/* Apple Pay */}
            <div className="h-7 w-11 rounded bg-white/5 border border-white/10 flex items-center justify-center font-bold text-[9px] text-slate-400 font-mono select-none">
              APPLE
            </div>
            {/* Stripe */}
            <div className="h-7 w-11 rounded bg-white/5 border border-white/10 flex items-center justify-center font-bold text-[9px] text-slate-400 font-mono select-none">
              STRIPE
            </div>
            {/* Dedicated compile core icon */}
            <button
              onClick={handleScrollTop}
              className="p-2 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white transition-all duration-200"
              title="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
