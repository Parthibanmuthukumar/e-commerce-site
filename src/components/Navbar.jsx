import React, { useState } from 'react';
import { Menu, X, Search, Heart, ShoppingBag, User } from 'lucide-react';

export default function Navbar({ 
  currentPage, 
  onChangePage, 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist, 
  onOpenSearch 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", name: "Home" },
    { id: "collection", name: "Collection" },
    { id: "new", name: "New In" }
  ];

  return (
    <>
      {/* Promo Ticker Bar */}
      <div className="w-full bg-[#1C1A17] text-[#FAF9F5] py-2.5 px-4 text-[10px] font-bold tracking-widest text-center uppercase border-b border-white/5 select-none">
        <span className="inline-block animate-pulse-slow">
          ⚡ COMPLEMENTARY EXPRESS COURIER SHIPPING WORLDWIDE FOR ORDERS OVER ₹12,000
        </span>
      </div>

      {/* Primary Sticky Header */}
      <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-[#E5E0D8] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <button 
                onClick={() => onChangePage("home")}
                className="font-serif text-xl font-bold tracking-widest text-[#1C1A17] flex items-center gap-1.5 group cursor-pointer"
              >
                ANTI
                <span className="text-[#C26B4F] relative group-hover:text-[#9C8C77] transition-colors duration-300">
                  GRAVITY
                  <span className="absolute -bottom-0.5 right-0 left-0 h-[1.5px] bg-[#C26B4F]"></span>
                </span>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex space-x-12">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onChangePage(link.id)}
                  className={`font-display font-bold text-xs uppercase tracking-widest transition-colors duration-200 relative py-2 cursor-pointer group ${
                    currentPage === link.id
                      ? "text-[#1C1A17]"
                      : "text-[#7A756E] hover:text-[#1C1A17]"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[#1C1A17] transition-all duration-300 ${
                    currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </nav>

            {/* Action Icon Buttons */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Search Toggle */}
              <button 
                onClick={onOpenSearch}
                className="p-1.5 text-[#7A756E] hover:text-[#1C1A17] transition-colors duration-200 cursor-pointer hover:scale-105 transition-transform"
                aria-label="Search items"
              >
                <Search size={20} />
              </button>

              {/* Wishlist Toggle */}
              <button 
                onClick={onOpenWishlist}
                className="p-1.5 text-[#7A756E] hover:text-[#1C1A17] transition-colors duration-200 relative cursor-pointer hover:scale-105 transition-transform"
                aria-label="Open wishlist"
              >
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#C26B4F] text-[9px] font-bold text-white shadow-sm animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Cart Drawer Toggle */}
              <button 
                onClick={onOpenCart}
                className="p-1.5 text-[#7A756E] hover:text-[#1C1A17] transition-colors duration-200 relative cursor-pointer hover:scale-105 transition-transform"
                aria-label="Open shopping cart"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#1C1A17] text-[9px] font-bold text-white shadow-sm animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* User Mockup Avatar */}
              <div className="h-8 w-8 rounded-full border border-[#E5E0D8] bg-[#F4F1EA] flex items-center justify-center text-[#1C1A17] hover:border-[#C26B4F] transition-colors duration-200 cursor-pointer overflow-hidden group">
                <User size={16} className="group-hover:scale-110 transition-transform duration-200" />
              </div>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex items-center md:hidden space-x-4">
              <button 
                onClick={onOpenSearch}
                className="p-1.5 text-[#7A756E] hover:text-[#1C1A17] transition-colors"
              >
                <Search size={20} />
              </button>
              
              <button 
                onClick={onOpenCart}
                className="p-1.5 text-[#7A756E] hover:text-[#1C1A17] transition-colors relative"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#1C1A17] text-[8px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#7A756E] hover:text-[#1C1A17] transition-colors cursor-pointer"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* --- Responsive Mobile Navigation Drawer (Right-to-Left Sliding Sidebar) --- */}
      
      {/* Soft Dim Blur Mask Overlay (Moved outside <header> for global unconstrained viewport context) */}
      <div 
        className={`fixed inset-0 bg-[#1C1A17]/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500 ease-out ${
          mobileMenuOpen ? 'opacity-100 animate-fade-in' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Sliding Sidebar Body (solid bg-[#FAF9F5] cream background to match luxury warm aesthetic, z-50 viewport-level stacking) */}
      <div className={`fixed right-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-[#FAF9F5] border-l border-[#E5E0D8] shadow-2xl z-50 md:hidden flex flex-col justify-between p-6 transition-transform duration-500 ease-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Top Panel Brand Logo & Close Trigger */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E5E0D8]">
          <span className="font-serif text-sm font-bold tracking-widest text-[#1C1A17]">ANTI GRAVITY</span>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 text-[#7A756E] hover:text-[#1C1A17] transition-colors rounded border border-[#E5E0D8] bg-[#FAF9F5] cursor-pointer"
          >
            <X size={15} />
          </button>
        </div>

        {/* Stacks navigation menu links in middle */}
        <nav className="flex-1 py-8 flex flex-col space-y-4 text-left">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setMobileMenuOpen(false);
                onChangePage(link.id);
              }}
              className={`w-full text-left font-display font-bold text-xs uppercase tracking-widest py-3 border-b border-[#E5E0D8]/40 transition-colors cursor-pointer ${
                currentPage === link.id
                  ? "text-[#C26B4F] pl-2 border-l border-[#C26B4F]"
                  : "text-[#7A756E] hover:text-[#1C1A17] pl-0"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Bottom Panel Actions */}
        <div className="pt-6 border-t border-[#E5E0D8] space-y-4 text-left">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWishlist();
            }}
            className="flex items-center justify-between w-full text-[#1C1A17] hover:text-[#C26B4F] text-xs font-bold uppercase tracking-widest cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Heart size={16} />
              Wishlist Staging
            </span>
            <span className="bg-[#F4F1EA] text-[#7A756E] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#E5E0D8]">
              {wishlistCount}
            </span>
          </button>

          <div className="flex items-center gap-2.5 pt-2 border-t border-[#E5E0D8]/40">
            <div className="h-8 w-8 rounded-full border border-[#E5E0D8] bg-[#F4F1EA] flex items-center justify-center text-[#1C1A17]">
              <User size={15} />
            </div>
            <span className="text-[#1C1A17] text-xs font-bold uppercase tracking-widest">Developer Space</span>
          </div>
        </div>

      </div>
    </>
  );
}
