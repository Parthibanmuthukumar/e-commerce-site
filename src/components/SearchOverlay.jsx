import React, { useState, useEffect, useRef } from 'react';
import { X, Search, CornerDownLeft, Eye } from 'lucide-react';
import { products } from '../data/products';

export default function SearchOverlay({ 
  isOpen, 
  onClose, 
  onSelectProduct 
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Auto-focus search input on launch
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Real-time fuzzy query filter logic
  const filteredMatches = query.trim() === ''
    ? []
    : products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      
      {/* Background Mask screen overlay */}
      <div 
        className="fixed inset-0 bg-[#FAF9F5]/98 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Main Content Pane */}
      <div className="relative max-w-3xl mx-auto px-4 pt-20 sm:pt-28 pb-10 z-10 animate-fade-in-up">
        
        {/* Search header container */}
        <div className="relative">
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute -top-12 right-0 p-1.5 text-cyber-muted hover:text-cyber-black rounded border border-cyber-border bg-white"
          >
            <X size={15} />
          </button>

          {/* Search bar input container */}
          <div className="relative flex items-center border-b border-cyber-black focus-within:border-cyber-indigo transition-colors duration-300">
            <Search className="text-cyber-muted mr-4 shrink-0" size={22} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search trench coats, woolen sweaters, cargo pants..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full py-4 text-base bg-transparent text-cyber-black placeholder-cyber-muted font-sans tracking-wide"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="p-1 text-cyber-muted hover:text-cyber-black shrink-0 mr-2"
              >
                <X size={15} />
              </button>
            )}
            <div className="hidden sm:flex items-center gap-1 text-[9px] font-bold text-cyber-muted font-mono tracking-wider uppercase shrink-0 border border-cyber-border px-2 py-1 rounded bg-white">
              ESC TO CLOSE
            </div>
          </div>

        </div>

        {/* Results grid */}
        <div className="mt-8 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-cyber-muted space-y-2">
              <h4 className="font-serif font-bold text-cyber-black text-sm">Discover premium apparel</h4>
              <p className="text-xs max-w-xs mx-auto leading-relaxed">
                Type queries such as <span className="text-cyber-indigo font-mono font-semibold">"coat"</span>, <span className="text-cyber-indigo font-mono font-semibold">"sweater"</span>, or <span className="text-cyber-indigo font-mono font-semibold">"boots"</span> to search active collections.
              </p>
            </div>
          ) : filteredMatches.length === 0 ? (
            <div className="py-12 text-center text-cyber-muted space-y-2">
              <h4 className="font-serif font-bold text-cyber-black text-sm">No matches found</h4>
              <p className="text-xs max-w-xs mx-auto leading-relaxed">
                We couldn't compile any matches for <span className="text-cyber-indigo font-mono">"{query}"</span>. Please try another query.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-cyber-muted font-mono uppercase tracking-widest block mb-2 text-left">
                COMPILED MATCHES ({filteredMatches.length})
              </span>
              {filteredMatches.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => onSelectProduct(prod)}
                  className="flex items-center gap-4 bg-white border border-cyber-border rounded p-3.5 hover:border-cyber-black cursor-pointer transition-all duration-200 group text-left shadow-sm"
                >
                  
                  {/* Small square cover */}
                  <div className="h-12 w-12 rounded bg-cyber-slate border border-cyber-border flex items-center justify-center shrink-0 overflow-hidden">
                    <img src={prod.image} alt={prod.name} className="h-full w-full object-cover" />
                  </div>

                  {/* Details info */}
                  <div className="flex-grow min-w-0 flex flex-col gap-0.5 text-left">
                    <span className="text-[9px] font-bold text-cyber-indigo font-mono uppercase tracking-widest leading-none">
                      {prod.category}
                    </span>
                    <h4 className="text-sm font-serif font-bold text-cyber-text tracking-wide truncate mt-1 leading-snug">
                      {prod.name}
                    </h4>
                  </div>

                  {/* Price and Action triggers */}
                  <div className="flex items-center gap-6 shrink-0 font-mono">
                    <span className="text-sm font-bold text-cyber-black font-serif">${prod.price}</span>
                    <span className="h-8 w-8 rounded-full bg-cyber-slate border border-cyber-border flex items-center justify-center text-cyber-muted group-hover:bg-cyber-black group-hover:text-white group-hover:border-cyber-black transition-all">
                      <Eye size={13} />
                    </span>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
