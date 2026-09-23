import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  LayoutGrid,
  List,
  RotateCcw,
  Check,
  ChevronRight,
  ChevronDown,
  ArrowUpDown,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { Product, Category } from '../types';
import { ProductCard } from '../components/ProductCard';

interface CatalogPageProps {
  products: Product[];
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onQuickView: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  quoteProductIds: Set<string>;
  onRequestQuote: () => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  products,
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onQuickView,
  onAddToQuote,
  quoteProductIds,
  onRequestQuote,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(800000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'popularity' | 'price-asc' | 'price-desc' | 'name'>('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Extract unique brands
  const brands = useMemo(() => {
    const bSet = new Set<string>();
    products.forEach((p) => bSet.add(p.brand));
    return Array.from(bSet);
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category
      if (selectedCategory && selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Brand
      if (selectedBrand !== 'all' && p.brand !== selectedBrand) {
        return false;
      }
      // Max price (if product has price)
      if (p.price && p.price > maxPrice) {
        return false;
      }
      // In-stock only
      if (inStockOnly && !p.inStock) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchDesc = p.shortDescription.toLowerCase().includes(q);
        const matchSku = p.sku.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchCat = p.categoryLabel.toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchSku && !matchBrand && !matchCat) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        const priceA = a.price && a.price > 0 ? a.price : 99999999;
        const priceB = b.price && b.price > 0 ? b.price : 99999999;
        return priceA - priceB;
      }
      if (sortBy === 'price-desc') {
        const priceA = a.price && a.price > 0 ? a.price : -1;
        const priceB = b.price && b.price > 0 ? b.price : -1;
        return priceB - priceA;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      // popularity
      return b.rating * b.reviewsCount - a.rating * a.reviewsCount;
    });
  }, [products, selectedCategory, selectedBrand, maxPrice, inStockOnly, searchQuery, sortBy]);

  const resetFilters = () => {
    onSelectCategory('all');
    setSelectedBrand('all');
    setMaxPrice(800000);
    setInStockOnly(false);
    onSearchChange('');
    setSortBy('popularity');
  };

  const hasActiveFilters =
    (selectedCategory && selectedCategory !== 'all') ||
    selectedBrand !== 'all' ||
    maxPrice < 800000 ||
    inStockOnly ||
    sortBy !== 'popularity' ||
    searchQuery.trim() !== '';

  return (
    <div className="bg-slate-50 min-h-screen py-8 lg:py-12" id="product-catalog-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb & Title */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
            <span>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-[#1d3597]">Product Catalog</span>
            {selectedCategory && selectedCategory !== 'all' && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-800 capitalize">
                  {categories.find((c) => c.id === selectedCategory)?.name || selectedCategory}
                </span>
              </>
            )}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Dental Equipment & Clinical Supplies
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Browse our complete portfolio of operatory systems, handpieces, orthodontic consumables, and autoclaves.
              </p>
            </div>
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1d3597] hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-sm transition flex-shrink-0"
            >
              <FileText className="w-4 h-4" />
              Request Bulk Proforma
            </button>
          </div>
        </div>

        {/* Layout with Sidebar & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Mobile Filter Trigger */}
          <div className="lg:hidden flex items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="flex items-center gap-2 text-xs font-bold text-slate-800"
            >
              <SlidersHorizontal className="w-4 h-4 text-blue-600" />
              <span>Filters {hasActiveFilters && '(Active)'}</span>
            </button>
            <span className="text-xs text-slate-500">
              {filteredProducts.length} items found
            </span>
          </div>

          {/* Desktop Filter Sidebar */}
          <aside
            className={`lg:block bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 ${
              mobileFilterOpen
                ? 'fixed inset-0 z-50 overflow-y-auto p-6 bg-white m-0 rounded-none'
                : 'hidden'
            }`}
          >
            {mobileFilterOpen && (
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 lg:hidden">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-blue-600" />
                  Filter Equipment
                </h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-[11px]">
                Filter Catalog
              </h3>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-[11px] text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 hover:underline"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>

            {/* Sort Products Dropdown in Sidebar */}
            <div className="pb-4 border-b border-slate-100">
              <label
                htmlFor="sidebar-sort-dropdown"
                className="text-xs font-bold text-slate-800 flex items-center justify-between mb-2"
              >
                <span className="flex items-center gap-1.5">
                  <ArrowUpDown className="w-3.5 h-3.5 text-blue-600" />
                  Sort Products
                </span>
                <span className="text-[10px] text-slate-400 font-normal">Catalog Order</span>
              </label>
              <div className="relative">
                <select
                  id="sidebar-sort-dropdown"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full appearance-none bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-800 rounded-xl px-3.5 py-2.5 pr-8 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition cursor-pointer shadow-xs"
                >
                  <option value="popularity">Popularity / Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name: A-Z</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="text-xs font-bold text-slate-800 block mb-2.5">
                Clinical Category
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => onSelectCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition flex items-center justify-between ${
                    !selectedCategory || selectedCategory === 'all'
                      ? 'bg-blue-50 text-[#1d3597] font-bold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>All Categories</span>
                  <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                    {products.length}
                  </span>
                </button>

                {categories.map((cat) => {
                  const count = products.filter((p) => p.category === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => onSelectCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition flex items-center justify-between ${
                        selectedCategory === cat.id
                          ? 'bg-blue-50 text-[#1d3597] font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="line-clamp-1">{cat.name}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Brand / Series Filter */}
            <div className="pt-4 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-800 block mb-2.5">
                Brand / Series
              </label>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSelectedBrand('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition ${
                    selectedBrand === 'all'
                      ? 'text-[#1d3597] font-bold bg-blue-50/70'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Brands
                </button>
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBrand(b)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition ${
                      selectedBrand === b
                        ? 'text-[#1d3597] font-bold bg-blue-50/70'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-800">
                  Max Unit Price
                </label>
                <span className="text-xs font-black text-[#1d3597]">
                  KSh {maxPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="800000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-blue-700 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>KSh 5,000</span>
                <span>KSh 800,000</span>
              </div>
            </div>

            {/* Availability Filter */}
            <div className="pt-4 border-t border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
                />
                <span className="text-xs font-semibold text-slate-700">
                  Ready in Stock Only
                </span>
              </label>
            </div>

            {/* Biomedical Trust Banner in Sidebar */}
            <div className="pt-4 border-t border-slate-100 bg-blue-50/60 p-3.5 rounded-xl border border-blue-100">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 mb-1">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Clinic Warranty</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                All dental equipment supplied by Great Star is covered by minimum 1-3 years warranty and genuine replacement parts.
              </p>
            </div>

            {mobileFilterOpen && (
              <div className="pt-4">
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-3 bg-[#1d3597] text-white font-bold text-xs rounded-xl"
                >
                  Apply Filters ({filteredProducts.length} Results)
                </button>
              </div>
            )}
          </aside>

          {/* Main Product Grid Content (3 columns on lg) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Top Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-xs text-slate-500 font-medium">
                  Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of {products.length} products
                </span>

                {/* Active Filter Chips */}
                {selectedCategory && selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 text-[11px] bg-blue-50 text-blue-800 px-2.5 py-1 rounded-full font-medium">
                    Category: {selectedCategory}
                    <button onClick={() => onSelectCategory('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedBrand !== 'all' && (
                  <span className="inline-flex items-center gap-1 text-[11px] bg-blue-50 text-blue-800 px-2.5 py-1 rounded-full font-medium">
                    Brand: {selectedBrand}
                    <button onClick={() => setSelectedBrand('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>

              {/* Sort and View Toggle */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <span className="hidden md:inline font-medium">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-slate-100 text-xs font-semibold text-slate-800 rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                  >
                    <option value="popularity">Popularity / Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Name: A-Z</option>
                  </select>
                </div>

                {/* Grid / List Switcher */}
                <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-lg transition ${
                      viewMode === 'grid'
                        ? 'bg-white text-[#1d3597] shadow-xs'
                        : 'text-slate-400 hover:text-slate-700'
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-lg transition ${
                      viewMode === 'list'
                        ? 'bg-white text-[#1d3597] shadow-xs'
                        : 'text-slate-400 hover:text-slate-700'
                    }`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm space-y-4">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">
                  No matching dental equipment found
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                  We could not find products matching your current search or filter combination. Try adjusting your filters or search keywords.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 bg-[#1d3597] text-white rounded-xl text-xs font-bold shadow transition hover:bg-blue-800"
                >
                  Reset All Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              /* Grid Layout */
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onQuickView={onQuickView}
                    onAddToQuote={onAddToQuote}
                    isInQuote={quoteProductIds.has(p.id)}
                  />
                ))}
              </div>
            ) : (
              /* List Layout */
              <div className="space-y-4">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row gap-5 items-center group"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      onClick={() => onQuickView(p)}
                      className="w-full sm:w-44 h-44 object-cover rounded-xl border border-slate-200 flex-shrink-0 cursor-pointer group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-blue-700 uppercase bg-blue-50 px-2 py-0.5 rounded">
                          {p.categoryLabel}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500 font-semibold">{p.brand}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-400">SKU: {p.sku}</span>
                      </div>

                      <h4
                        onClick={() => onQuickView(p)}
                        className="font-bold text-base text-slate-900 hover:text-blue-700 cursor-pointer transition"
                      >
                        {p.name}
                      </h4>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {p.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.features.slice(0, 3).map((f, i) => (
                          <span
                            key={i}
                            className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & Action in List */}
                    <div className="sm:border-l border-slate-100 sm:pl-5 flex flex-row sm:flex-col justify-between sm:justify-center items-center sm:items-end w-full sm:w-48 gap-3">
                      <div className="text-left sm:text-right">
                        <span className="text-[10px] text-slate-400 block font-medium">Clinic Price</span>
                        <span className="text-lg font-black text-[#1d3597]">
                          {p.priceFormatted || 'Quote Only'}
                        </span>
                      </div>

                      <div className="flex sm:flex-col gap-2 w-full">
                        <button
                          onClick={() => onAddToQuote(p)}
                          className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                            quoteProductIds.has(p.id)
                              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                              : 'bg-[#1d3597] text-white hover:bg-blue-800'
                          }`}
                        >
                          {quoteProductIds.has(p.id) ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Added to Quote
                            </>
                          ) : (
                            <>
                              <FileText className="w-3.5 h-3.5" />
                              Add to Quote
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => onQuickView(p)}
                          className="w-full py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
                        >
                          View Specs
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
