import React, { useState } from 'react';
import { products } from '../data/products';
import { Heart, Star, Eye, ShoppingCart, Check } from 'lucide-react';

export default function ProductGrid({ 
  onOpenQuickView, 
  onAddToCart, 
  onToggleWishlist, 
  wishlistItems,
  activeCategory,
  onCategoryChange
}) {
  const [addingId, setAddingId] = useState(null);

  const categoriesList = [
    { name: "All Products", slug: "all" },
    { name: "Outerwear", slug: "outerwear" },
    { name: "Knitwear & Fleece", slug: "knitwear" },
    { name: "Trousers", slug: "pants" },
    { name: "Gear & Acc", slug: "accessories" }
  ];

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(p => p.category.toLowerCase() === activeCategory);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    setAddingId(product.id);
    
    // Default size selector
    const defaultSize = product.sizes[0] || "Standard";
    onAddToCart(product, defaultSize);

    setTimeout(() => {
      setAddingId(null);
    }, 1000);
  };

  return (
    <section id="catalog" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-cyber-border bg-[#FAF9F5] select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 text-left">
            <span className="text-cyber-cyan font-mono text-xs font-semibold uppercase tracking-widest leading-none">
              CURATED DEVELOPMENT INVENTORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cyber-black tracking-tight">
              Featured Releases
            </h2>
            <div className="h-[2px] w-12 bg-cyber-cyan rounded-full mt-2"></div>
          </div>

          {/* Light-Themed Filtering Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categoriesList.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => onCategoryChange(cat.slug)}
                className={`px-4 py-2.5 rounded text-[10px] font-bold uppercase tracking-widest transition-all duration-200 border ${
                  activeCategory === cat.slug
                    ? "bg-cyber-black text-white border-cyber-black font-bold"
                    : "bg-white text-cyber-muted border-cyber-border hover:text-cyber-black hover:border-cyber-black"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
          {filteredProducts.map((prod) => {
            const isWishlisted = wishlistItems.some(item => item.id === prod.id);
            const hasDiscount = prod.discount > 0;

            return (
              <div 
                key={prod.id} 
                className="group flex flex-col justify-between h-full bg-white border border-cyber-border rounded hover:shadow-[0_8px_30px_rgba(28,26,23,0.04)] transition-all duration-300 relative p-4 cursor-pointer text-left"
                onClick={() => onOpenQuickView(prod)}
              >
                
                {/* Image Frame Container */}
                <div className="relative aspect-square w-full rounded bg-[#F4F1EA]/50 overflow-hidden flex items-center justify-center border border-cyber-border/40">
                  
                  {/* Badges Overlaid */}
                  {prod.badge && (
                    <span className="absolute top-2.5 left-2.5 bg-cyber-black text-white font-mono text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded shadow-sm z-20">
                      {prod.badge}
                    </span>
                  )}
                  {hasDiscount && (
                    <span className="absolute top-2.5 right-2.5 bg-cyber-indigo text-white font-mono text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded shadow-sm z-20">
                      SAVE {prod.discount}%
                    </span>
                  )}

                  {/* Thumbnail Cover Graphic */}
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 pointer-events-none"
                  />

                  {/* Glass Hover Overlay */}
                  <div className="absolute inset-0 bg-cyber-black/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-3">
                    
                    {/* Quick View */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuickView(prod);
                      }}
                      className="h-10 w-10 rounded-full bg-white text-cyber-black flex items-center justify-center hover:bg-cyber-black hover:text-white transition-all duration-200 shadow-sm"
                      title="Quick View Details"
                    >
                      <Eye size={16} />
                    </button>

                    {/* Add to Wishlist */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(prod);
                      }}
                      className={`h-10 w-10 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 shadow-sm ${
                        isWishlisted 
                          ? "bg-cyber-indigo text-white" 
                          : "bg-white text-cyber-muted hover:text-cyber-black"
                      }`}
                      title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
                    </button>

                  </div>

                </div>

                {/* Metadata & Details */}
                <div className="mt-4 flex flex-col flex-grow justify-between">
                  
                  <div>
                    {/* Category */}
                    <span className="text-[10px] font-bold text-cyber-indigo font-mono uppercase tracking-widest leading-none">
                      {prod.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-cyber-text text-sm sm:text-base tracking-wide mt-2 group-hover:text-cyber-indigo transition-colors leading-snug">
                      {prod.name}
                    </h3>

                    {/* Rating Stars Row */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={11} 
                            fill={i < Math.floor(prod.rating) ? "currentColor" : "none"} 
                            className="stroke-amber-400 fill-amber-400"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-cyber-muted font-bold tracking-wide">
                        ({prod.reviews})
                      </span>
                    </div>
                  </div>

                  <div>
                    {/* Sizing options pills */}
                    <div className="flex flex-wrap gap-1 mt-4">
                      {prod.sizes.slice(0, 3).map((size, idx) => (
                        <span 
                          key={idx}
                          className="text-[9px] font-bold text-cyber-muted bg-cyber-slate border border-cyber-border px-2 py-0.5 rounded"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Price Tag & Shopping Trigger */}
                <div className="mt-5 pt-3 border-t border-cyber-border/60 flex items-center justify-between gap-4">
                  
                  {/* Pricing Column */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-base sm:text-lg font-bold text-cyber-black tracking-tight font-serif">
                      ${prod.price}
                    </span>
                    {hasDiscount && (
                      <span className="text-[10px] sm:text-xs font-semibold text-cyber-muted line-through">
                        ${prod.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Quick Cart Button */}
                  <button
                    onClick={(e) => handleAddToCart(prod, e)}
                    disabled={addingId === prod.id}
                    className={`h-9 px-3.5 sm:px-4 rounded text-xs font-bold tracking-widest transition-all duration-300 uppercase ${
                      addingId === prod.id
                        ? "bg-cyber-emerald text-white"
                        : "bg-cyber-black text-white hover:bg-white hover:text-cyber-black border border-cyber-black"
                    }`}
                  >
                    {addingId === prod.id ? (
                      <Check size={13} className="stroke-[3]" />
                    ) : (
                      <>
                        <ShoppingCart size={12} className="mr-1.5 shrink-0" />
                        ADD
                      </>
                    )}
                  </button>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
