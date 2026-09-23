import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuoteDrawer } from './components/QuoteDrawer';
import { ProductModal } from './components/ProductModal';
import { HomePage } from './views/HomePage';
import { CatalogPage } from './views/CatalogPage';
import { AboutPage } from './views/AboutPage';
import { ContactPage } from './views/ContactPage';
import { CATEGORIES, PRODUCTS } from './data/products';
import { Product, QuoteItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'catalog' | 'about' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Quote items persistence in localStorage
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('gs_dental_quote');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    // Default starter item to illustrate clinic quote value
    const defaultItem = PRODUCTS.find((p) => p.id === 'gs-turbine-optic');
    return defaultItem ? [{ product: defaultItem, quantity: 2 }] : [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('gs_dental_quote', JSON.stringify(quoteItems));
    } catch (e) {
      console.error(e);
    }
  }, [quoteItems]);

  // Scroll to top on page switch
  const handleNavigate = (page: 'home' | 'catalog' | 'about' | 'contact', categoryFilter?: string) => {
    setCurrentPage(page);
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quote cart actions
  const handleAddToQuote = (product: Product, quantity = 1) => {
    setQuoteItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsQuoteOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const quoteProductIds = new Set(quoteItems.map((item) => item.product.id));
  const totalQuoteCount = quoteItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        categories={CATEGORIES}
        quoteCount={totalQuoteCount}
        onOpenQuote={() => setIsQuoteOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Pages */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            categories={CATEGORIES}
            products={PRODUCTS}
            onShopCatalog={(cat) => handleNavigate('catalog', cat)}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onQuickView={(p) => setSelectedProduct(p)}
            onAddToQuote={(p) => handleAddToQuote(p, 1)}
            quoteProductIds={quoteProductIds}
          />
        )}

        {currentPage === 'catalog' && (
          <CatalogPage
            products={PRODUCTS}
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onQuickView={(p) => setSelectedProduct(p)}
            onAddToQuote={(p) => handleAddToQuote(p, 1)}
            quoteProductIds={quoteProductIds}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigateToCatalog={() => handleNavigate('catalog')}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Floating WhatsApp & Call Integration Button */}
      <WhatsAppButton quoteItems={quoteItems} />

      {/* Slide-over Clinic Quote Drawer */}
      <QuoteDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearQuote={handleClearQuote}
        onNavigateToCatalog={() => {
          setIsQuoteOpen(false);
          handleNavigate('catalog');
        }}
      />

      {/* Product Quick View & Specifications Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToQuote={handleAddToQuote}
        isInQuote={selectedProduct ? quoteProductIds.has(selectedProduct.id) : false}
      />
    </div>
  );
}
