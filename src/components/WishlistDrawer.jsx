import React from 'react';
import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlistItems, 
  onRemoveItem, 
  onMoveToCart 
}) {
  return (
    <>
      {/* Background Mask screen overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-[4px] z-50 transition-opacity duration-300 pointer-events-auto ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Slide-out Panel */}
      <div className={`fixed right-0 top-0 bottom-0 w-full max-w-[420px] bg-cyber-dark border-l border-slate-800 shadow-2xl z-50 flex flex-col justify-between transition-transform duration-300 transition-drawer ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header Drawer */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-display font-extrabold text-white text-lg tracking-wide uppercase flex items-center gap-1.5">
              <Heart size={18} className="text-rose-500 fill-rose-500" />
              Saved Staging
            </h3>
            <span className="bg-slate-900 border border-slate-800 text-cyber-cyan text-xs font-bold font-mono px-2 py-0.5 rounded-full">
              {wishlistItems.length}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-lg border border-transparent hover:border-slate-800"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Items Stack */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="h-16 w-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 animate-pulse">
                <Heart size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-sm">Your staging is empty</h4>
                <p className="text-slate-500 text-xs mt-1.5 max-w-[240px] mx-auto leading-relaxed">
                  Saved licenses or apparel are currently uncatalogued. Toggle hearts in the cards to save them.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-white text-cyber-black text-xs font-bold tracking-wider hover:bg-cyber-cyan rounded transition-colors"
              >
                BROWSE PRODUCTS
              </button>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center gap-4 bg-slate-950/40 border border-slate-900 rounded-xl p-3 relative group"
              >
                
                {/* Product image thumbnail */}
                <div className="h-16 w-16 rounded bg-slate-900 border border-slate-800 shrink-0 overflow-hidden flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>

                {/* Info and controls */}
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-cyber-cyan font-mono uppercase tracking-widest leading-none">
                    {item.category}
                  </span>
                  
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide truncate pr-6 group-hover:text-cyber-cyan transition-colors">
                    {item.name}
                  </h4>
                  
                  <div className="text-xs font-extrabold text-white font-display mt-0.5">
                    ${item.price}
                  </div>

                  {/* Quantity selector & Price row */}
                  <div className="flex items-center justify-between mt-2 gap-4">
                    
                    {/* Move to Cart */}
                    <button
                      onClick={() => onMoveToCart(item)}
                      className="h-7 px-3 rounded bg-slate-900 border border-slate-800 hover:bg-white hover:text-cyber-black hover:border-white text-[10px] font-bold tracking-wider flex items-center gap-1.5 transition-all"
                    >
                      <ShoppingCart size={11} />
                      MOVE TO BAG
                    </button>

                  </div>

                </div>

                {/* Remove Trash toggle */}
                <button
                  onClick={() => onRemoveItem(item)}
                  className="absolute top-3 right-3 p-1 text-slate-600 hover:text-rose-500 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 size={13} />
                </button>

              </div>
            ))
          )}
        </div>

        {/* Action Button close */}
        {wishlistItems.length > 0 && (
          <div className="p-5 border-t border-slate-800 bg-slate-950/40">
            <button
              onClick={onClose}
              className="w-full py-3.5 rounded bg-transparent border border-slate-700 text-white text-xs font-bold tracking-widest hover:border-cyber-cyan hover:bg-slate-900/40 transition-colors uppercase"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}

      </div>
    </>
  );
}
