import React, { useState, useEffect } from 'react';
import { X, Star, ShoppingBag, Check, ShieldCheck } from 'lucide-react';

export default function QuickViewModal({ 
  isOpen, 
  onClose, 
  product, 
  onAddToCart 
}) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [adding, setAdding] = useState(false);

  // Sync state variables when product parameters alter
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || '');
      setSelectedColor(product.colors[0]?.name || '');
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    setAdding(true);
    onAddToCart(product, selectedSize);
    
    setTimeout(() => {
      setAdding(false);
      onClose();
    }, 1000);
  };

  const hasDiscount = product.discount > 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      
      {/* Background Mask screen overlay */}
      <div 
        className="fixed inset-0 bg-[#1C1A17]/85 backdrop-blur-[5px] transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Centering container */}
      <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
        
        {/* Modal Sheet panel */}
        <div className="relative w-full max-w-4xl rounded border border-cyber-border bg-cyber-dark p-6 sm:p-8 shadow-2xl z-10 animate-fade-in-up transition-modal max-h-[90vh] overflow-y-auto">
          
          {/* Subtle glowing lines */}
          <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan rounded-tl pointer-events-none"></span>
          <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-indigo rounded-br pointer-events-none"></span>

          {/* Close Trigger absolute */}
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-cyber-muted hover:text-cyber-black transition-colors rounded border border-cyber-border bg-white"
          >
            <X size={18} />
          </button>

          {/* Grid Layout Column Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-4">
            
            {/* Left Column: Image Frame */}
            <div className="relative aspect-square w-full rounded bg-[#F4F1EA]/50 overflow-hidden flex items-center justify-center border border-cyber-border/40 p-4">
              
              {/* Product Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-cyber-black text-white font-mono text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded shadow-md z-20">
                  {product.badge}
                </span>
              )}

              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover rounded pointer-events-none animate-fade-in-up"
              />

            </div>

            {/* Right Column: Descriptions & Custom Settings */}
            <div className="flex flex-col justify-between text-left space-y-5">
              
              {/* Categorization & Title */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-cyber-indigo font-mono uppercase tracking-widest leading-none">
                  {product.category}
                </span>
                <h3 className="font-serif font-bold text-cyber-black text-xl sm:text-2xl tracking-wide leading-tight pt-1">
                  {product.name}
                </h3>
              </div>

              {/* Price & Rating stars Row */}
              <div className="flex items-center justify-between gap-6 border-b border-cyber-border pb-3.5">
                
                {/* Price tag */}
                <div className="flex items-baseline gap-3">
                  <span className="text-xl sm:text-2xl font-bold text-cyber-black font-serif tracking-tight">
                    ${product.price}
                  </span>
                  {hasDiscount && (
                    <span className="text-sm font-semibold text-cyber-muted line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        className="stroke-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-cyber-muted font-bold font-mono">
                    {product.rating} / 5.0
                  </span>
                </div>

              </div>

              {/* Description */}
              <p className="text-cyber-muted text-xs sm:text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Bulleted Specifications list */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-cyber-cyan font-mono uppercase tracking-widest">
                  Specifications Suite
                </span>
                <ul className="grid grid-cols-1 gap-2 pt-1">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-cyber-text">
                      <ShieldCheck size={14} className="text-cyber-indigo shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Selector and Color select options */}
              <div className="grid grid-cols-2 gap-4 border-t border-cyber-border pt-4">
                
                {/* Size select */}
                <div className="space-y-2 flex flex-col">
                  <span className="text-[9px] font-bold text-cyber-muted font-mono uppercase tracking-widest">
                    Select Size
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 rounded text-[10px] font-bold tracking-wide transition-all border cursor-pointer ${
                          selectedSize === size
                            ? 'bg-cyber-black text-white border-cyber-black shadow-sm'
                            : 'bg-white text-cyber-muted border-[#E5E0D8] hover:text-cyber-black hover:border-cyber-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color select pills */}
                <div className="space-y-2 flex flex-col">
                  <span className="text-[9px] font-bold text-cyber-muted font-mono uppercase tracking-widest">
                    Select Color
                  </span>
                  <div className="flex items-center gap-2.5 pt-1">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`h-6 w-6 rounded-full ${color.class} border-2 relative transition-transform hover:scale-110 cursor-pointer ${
                          selectedColor === color.name
                            ? 'border-[#1C1A17] scale-110 ring-2 ring-cyber-cyan ring-offset-2 ring-offset-cyber-dark'
                            : 'border-transparent'
                        }`}
                        title={color.name}
                      >
                        {selectedColor === color.name && (
                          <Check size={11} className="text-white absolute inset-0 m-auto stroke-[3]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Add to Cart button */}
              <div className="pt-4 border-t border-cyber-border">
                <button
                  onClick={handleAdd}
                  disabled={adding}
                  className={`w-full py-4 rounded bg-cyber-black text-white text-xs font-bold tracking-widest hover:bg-[#FAF9F5] hover:text-cyber-black border border-cyber-black transition-all duration-300 uppercase flex items-center justify-center gap-2 cursor-pointer`}
                >
                  {adding ? (
                    <>
                      <Check size={14} className="stroke-[3] animate-bounce" />
                      ADDING TO BAG STAGE...
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={14} />
                      ADD ITEM TO BAG
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
