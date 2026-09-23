import React, { useState } from 'react';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  quoteProductIds: Set<string>;
  onNavigateToCatalog: (category?: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  onQuickView,
  onAddToQuote,
  quoteProductIds,
  onNavigateToCatalog,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Featured' },
    { id: 'units', label: 'Dental Chairs' },
    { id: 'handpieces', label: 'Handpieces & Endo' },
    { id: 'orthodontics', label: 'Orthodontics' },
    { id: 'consumables', label: 'Consumables & PPE' },
    { id: 'imaging', label: 'Imaging & X-Ray' },
  ];

  const filtered =
    activeTab === 'all'
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section className="py-16 bg-white border-b border-slate-200/60" id="featured-products-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Verified Clinic Favorites
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Best Sellers & Featured Equipment
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Tested by practicing dental surgeons and orthodontists. High durability, precision ergonomics, and instant proforma generation.
            </p>
          </div>

          <button
            onClick={() => onNavigateToCatalog(activeTab === 'all' ? undefined : activeTab)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1d3597] hover:text-blue-700 hover:underline flex-shrink-0"
          >
            View Full Catalog
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#1d3597] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToQuote={onAddToQuote}
              isInQuote={quoteProductIds.has(product.id)}
            />
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigateToCatalog()}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-md transition"
          >
            Browse All Dental Supplies in Catalog
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
