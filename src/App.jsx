import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import PromoBanner from './components/PromoBanner';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// Drawers & Modals Overlays
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import QuickViewModal from './components/QuickViewModal';
import SearchOverlay from './components/SearchOverlay';

// Lucide Icons for features strip
import { ShieldCheck, Truck, RotateCcw, Headset } from 'lucide-react';

export default function App() {
  // Page Router State ("home", "collection", "new")
  const [currentPage, setCurrentPage] = useState('home');
  
  // Global States
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  // Overlay Controls State
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // E-commerce handlers
  const handleAddToCart = (product, size) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.id === product.id && item.size === size
      );

      if (existingIdx > -1) {
        const newCart = [...prevCart];
        newCart[existingIdx].quantity += 1;
        return newCart;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            size: size || 'S',
            quantity: 1,
          },
        ];
      }
    });

    // Slide cart drawer open for shopping confirmation
    setTimeout(() => {
      setCartOpen(true);
    }, 150);
  };

  const handleUpdateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      handleRemoveCartItem(id, size);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveCartItem = (id, size) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.size === size))
    );
  };

  const handleToggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const handleRemoveWishlistItem = (product) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== product.id)
    );
  };

  const handleMoveToCart = (product) => {
    const defaultSize = product.sizes[0] || 'S';
    handleAddToCart(product, defaultSize);
    handleRemoveWishlistItem(product);
  };

  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
    setQuickViewOpen(true);
  };

  const handleSearchSelect = (product) => {
    setSearchOpen(false);
    handleOpenQuickView(product);
  };

  const handleCategorySelect = (slug) => {
    setActiveCategory(slug);
    setCurrentPage('collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChangePage = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Math totals
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const features = [
    {
      icon: <Truck size={24} className="text-[#C26B4F]" />,
      title: "COMPLEMENTARY DELIVERY",
      desc: "Free express shipping on all orders over $150",
    },
    {
      icon: <RotateCcw size={24} className="text-[#C26B4F]" />,
      title: "30-DAY EXCHANGES",
      desc: "Hassle-free sizing exchanges & return cache",
    },
    {
      icon: <ShieldCheck size={24} className="text-[#C26B4F]" />,
      title: "SECURE CHECKOUT",
      desc: "SSL-encrypted credit card & gateway pathways",
    },
    {
      icon: <Headset size={24} className="text-[#C26B4F]" />,
      title: "CONCIERGE DIAGNOSTICS",
      desc: "24/7 dedicated assistance for tailored fitting",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#1C1A17] font-sans antialiased overflow-x-hidden">
      
      {/* 1. Header sticky Navbar (Handles page switches) */}
      <Navbar
        currentPage={currentPage}
        onChangePage={handleChangePage}
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* --- Dynamic Multi-Page Rendering --- */}
      
      {currentPage === 'home' && (
        <div className="animate-fade-in-up">
          {/* 2. Hero Section */}
          <Hero />

          {/* 3. Feature Icons Info Row Strip */}
          <section className="bg-[#F4F1EA] border-b border-[#E5E0D8] py-10 px-4 sm:px-6 lg:px-8 select-none">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 bg-white border border-[#E5E0D8] rounded p-4 sm:p-5 hover:border-[#9C8C77] hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded bg-[#F4F1EA] border border-[#E5E0D8] flex items-center justify-center shrink-0 text-[#1C1A17]">
                    {feat.icon}
                  </div>
                  <div className="text-left space-y-1">
                    <h4 className="font-display text-[10px] font-bold text-[#1C1A17] tracking-widest uppercase leading-none">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] text-[#7A756E] font-semibold tracking-wide leading-tight">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Category Browse Grid */}
          <Categories onCategorySelect={handleCategorySelect} />

          {/* 5. Mini Featured best sellers strip */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8] bg-[#FAF9F5] select-none text-center">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="space-y-2">
                <span className="text-[#C26B4F] font-mono text-xs font-bold uppercase tracking-widest leading-none">
                  BEST SELLERS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1A17] tracking-tight">
                  High-Fidelity Woolen Sweaters & Trench Coats
                </h3>
                <p className="text-[#7A756E] text-xs sm:text-sm max-w-md mx-auto leading-relaxed pt-1">
                  Inspect our top-reviewed pieces, customized with double-ribbed drop shoulders and concealed zippers.
                </p>
              </div>
              <button 
                onClick={() => handleChangePage('collection')}
                className="px-8 py-3.5 rounded bg-[#1C1A17] text-white text-xs font-bold tracking-widest hover:bg-white hover:text-cyber-black border border-[#1C1A17] transition-all cursor-pointer"
              >
                BROWSE COMPLETE CATALOG
              </button>
            </div>
          </section>

          {/* 6. Testimonials Slider */}
          <Testimonials />

          {/* 7. Newsletter subscription changelog */}
          <Newsletter />
        </div>
      )}

      {currentPage === 'collection' && (
        <div className="animate-fade-in-up">
          {/* Collection Page Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 py-16 px-4 border-b border-[#E5E0D8] bg-[#FAF9F5] select-none text-left">
            <span className="text-[#9C8C77] font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">
              THE COLLECTION SUITE
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1A17] tracking-tight leading-tight">
              Sustainably Engineered Swag
            </h1>
            <p className="text-[#7A756E] text-sm max-w-lg leading-relaxed mt-2">
              Browse our complete catalog of structural woolen knits, RIPSTOP utility cargo trousers, double-fleece hoodies, combat nubuck boots, and commuter backpacks branded for the Anti Gravity collective.
            </p>
          </div>

          {/* Product Grid Catalog with active filters */}
          <ProductGrid
            onOpenQuickView={handleOpenQuickView}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistItems={wishlist}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      )}

      {currentPage === 'new' && (
        <div className="animate-fade-in-up">
          {/* New Arrivals Page Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 py-16 px-4 border-b border-[#E5E0D8] bg-[#FAF9F5] select-none text-left">
            <span className="text-[#C26B4F] font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">
              NEW ARRIVALS
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1A17] tracking-tight font-serif italic leading-tight">
              The Cold Season Drops
            </h1>
            <p className="text-[#7A756E] text-sm max-w-lg leading-relaxed mt-2">
              Inspect our newest heavyweight GSM releases, limited editions combat boots, and workspace gear co-engineered with Google DeepMind.
            </p>
          </div>

          {/* Product Grid Catalog filtered by New Releases */}
          <ProductGrid
            onOpenQuickView={handleOpenQuickView}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistItems={wishlist}
            activeCategory="all"
            onCategoryChange={() => {}}
          />

          {/* Dual Promo Campaign Banners */}
          <PromoBanner />
        </div>
      )}

      {/* 9. Elegant Sitemap Footer */}
      <Footer />

      {/* --- Dynamic Slide-outs & Centered Overlays --- */}
      
      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveItem={handleRemoveWishlistItem}
        onMoveToCart={handleMoveToCart}
      />

      {/* Product Search overlay */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={handleSearchSelect}
      />

      {/* Detail specification Quick View modal overlay */}
      <QuickViewModal
        isOpen={quickViewOpen}
        onClose={() => {
          setQuickViewOpen(false);
          setQuickViewProduct(null);
        }}
        product={quickViewProduct}
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}
