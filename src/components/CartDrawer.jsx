import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Tag, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem 
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'ZEROG' || code === 'ANTIGRAVITY') {
      setDiscountPercent(25);
      setPromoApplied(true);
      setPromoError(false);
    } else {
      setPromoError(true);
      setTimeout(() => setPromoError(false), 2000);
    }
  };

  // Mathematical compilations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = parseFloat(((subtotal * discountPercent) / 100).toFixed(2));
  const shipping = subtotal > 100 ? 0 : 15;
  const total = parseFloat((subtotal - discountAmount + shipping).toFixed(2));

  return (
    <>
      {/* Background Screen Blur Mask overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-[4px] z-50 transition-opacity duration-300 pointer-events-auto ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Cart Slider Panel */}
      <div className={`fixed right-0 top-0 bottom-0 w-full max-w-[420px] bg-cyber-dark border-l border-slate-800 shadow-2xl z-50 flex flex-col justify-between transition-transform duration-300 transition-drawer ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header Drawer */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-display font-extrabold text-white text-lg tracking-wide uppercase">
              Shopping Bag
            </h3>
            <span className="bg-slate-900 border border-slate-800 text-cyber-cyan text-xs font-bold font-mono px-2 py-0.5 rounded-full">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
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
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="h-16 w-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 animate-pulse">
                <Trash2 size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-sm">Your bag is empty</h4>
                <p className="text-slate-500 text-xs mt-1.5 max-w-[240px] mx-auto leading-relaxed">
                  Staging cache is currently uncompiled. Deploy products from our catalog to get started.
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
            cartItems.map((item, idx) => (
              <div 
                key={`${item.id}-${item.size}`} 
                className="flex items-center gap-4 bg-slate-950/40 border border-slate-900 rounded-xl p-3 relative group"
              >
                
                {/* Product image thumbnail */}
                <div className="h-16 w-16 rounded bg-slate-900 border border-slate-800 shrink-0 overflow-hidden flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>

                {/* Info and controls */}
                <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                  <h4 className="text-sm font-bold text-white tracking-wide truncate pr-6 group-hover:text-cyber-cyan transition-colors">
                    {item.name}
                  </h4>
                  
                  {/* Selected Size / Version */}
                  <span className="text-[10px] text-slate-500 font-mono font-medium">
                    Modifier: <span className="text-cyber-cyan">{item.size}</span>
                  </span>

                  {/* Quantity selector & Price row */}
                  <div className="flex items-center justify-between mt-1 gap-4">
                    {/* Quantity selectors */}
                    <div className="flex items-center border border-slate-800 rounded bg-slate-900">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
                        className="px-1.5 py-1 text-slate-500 hover:text-white"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={11} />
                      </button>
                      <span className="px-2 text-xs font-bold text-white font-mono leading-none">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                        className="px-1.5 py-1 text-slate-500 hover:text-white"
                        aria-label="Increase quantity"
                      >
                        <Plus size={11} />
                      </button>
                    </div>

                    <span className="text-sm font-extrabold text-white tracking-tight font-display">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                </div>

                {/* Remove Trash toggle */}
                <button
                  onClick={() => onRemoveItem(item.id, item.size)}
                  className="absolute top-3 right-3 p-1 text-slate-600 hover:text-rose-500 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 size={13} />
                </button>

              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-slate-800 bg-slate-950/40 space-y-4">
            
            {/* Promo Code Input Block */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Enter ZEROG coupon..."
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className={`w-full pl-8 pr-3 py-2 bg-slate-900 border text-xs font-mono text-white rounded focus:border-cyber-cyan ${
                    promoError ? 'border-rose-600' : 'border-slate-800'
                  }`}
                />
                <Tag size={12} className="absolute left-2.5 top-3 text-slate-500" />
              </div>
              <button
                type="submit"
                className="px-4 bg-slate-900 border border-slate-800 text-slate-300 hover:bg-white hover:text-cyber-black text-[10px] font-bold tracking-wider rounded uppercase transition-colors"
              >
                APPLY
              </button>
            </form>

            {promoApplied && (
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400 font-mono bg-emerald-500/5 border border-emerald-500/10 px-2 py-1 rounded">
                <ShieldCheck size={11} />
                Promo ZEROG compiled: 25% discount applied successfully.
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-2 text-xs font-semibold tracking-wide">
              <div className="flex justify-between text-slate-500">
                <span>SUBTOTAL</span>
                <span className="font-mono text-slate-300">₹{subtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-400 font-mono">
                  <span>DISCOUNT (25%)</span>
                  <span>-₹{discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-500">
                <span>ESTIMATED COMPUTING FEE</span>
                <span className="font-mono text-slate-300">
                  {shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-extrabold border-t border-slate-900/60 pt-3 text-white">
                <span>ESTIMATED TOTAL</span>
                <span className="font-mono text-cyber-cyan text-base tracking-tight">₹{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={() => alert("Deployment pipeline established! Synthesizing workspace nodes...")}
              className="w-full py-4 rounded bg-white text-cyber-black text-xs font-bold tracking-widest hover:bg-cyber-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 uppercase mt-2"
            >
              COMPILE & DEPLOY WORKSPACE
            </button>

          </div>
        )}

      </div>
    </>
  );
}
