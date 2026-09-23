import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Search,
  FileText,
  Menu,
  X,
  Clock,
  ShieldCheck,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { Logo } from './Logo';
import { Category } from '../types';

interface NavbarProps {
  currentPage: 'home' | 'catalog' | 'about' | 'contact';
  onNavigate: (page: 'home' | 'catalog' | 'about' | 'contact', categoryFilter?: string) => void;
  categories: Category[];
  quoteCount: number;
  onOpenQuote: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  categories,
  quoteCount,
  onOpenQuote,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'catalog' | 'about' | 'contact', cat?: string) => {
    onNavigate(page, cat);
    setMobileMenuOpen(false);
    setCategoriesDropdown(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
      {/* Top Clinical Announcement & Contact Utility Bar */}
      <div className="bg-[#1d3597] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Certifications & Delivery */}
          <div className="flex items-center gap-4 text-blue-100 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              ISO 13485 & CE Medical Certified Sourcing
            </span>
            <span className="hidden lg:inline text-blue-300">•</span>
            <span className="hidden lg:inline text-blue-100">
              📍 Jengi House 5th Fl (Left Wing), Opp. Co-operative Bank, Nairobi
            </span>
          </div>

          {/* Right: Hotline, Hours, Socials (Facebook & TikTok) */}
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <a
              href="tel:+254723059567"
              className="flex items-center gap-1.5 text-white hover:text-emerald-300 font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+254 723 059 567</span>
            </a>
            <span className="text-blue-400 hidden sm:inline">|</span>
            <span className="hidden sm:flex items-center gap-1 text-blue-200">
              <Clock className="w-3.5 h-3.5" />
              Mon-Sat: 8AM - 6PM
            </span>
            <span className="text-blue-400 hidden sm:inline">|</span>
            
            {/* Social media links requested in prompt */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/share/1dkmV17yNe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition hover:scale-110"
                title="Follow Great Star Dental on Facebook"
                aria-label="Facebook"
              >
                {/* Custom Facebook SVG icon */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@greatstardentalsupply?_r=1&_t=ZS-99uw5KYDmiq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition hover:scale-110"
                title="Follow Great Star Dental on TikTok"
                aria-label="TikTok"
              >
                {/* Custom TikTok SVG icon */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Logo
          size="md"
          onClick={() => handleNavClick('home')}
        />

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-6 relative">
          <input
            type="text"
            placeholder="Search dental units, handpieces, brackets, autoclaves..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => {
              if (currentPage !== 'catalog') {
                onNavigate('catalog');
              }
            }}
            className="w-full pl-9 pr-4 py-2 bg-slate-100 hover:bg-slate-50 focus:bg-white text-xs text-slate-800 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition ${
              currentPage === 'home'
                ? 'text-[#1d3597] bg-blue-50'
                : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          {/* Catalog / Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleNavClick('catalog')}
              onMouseEnter={() => setCategoriesDropdown(true)}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1 transition ${
                currentPage === 'catalog'
                  ? 'text-[#1d3597] bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              Shop Catalog
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {categoriesDropdown && (
              <div
                onMouseLeave={() => setCategoriesDropdown(false)}
                className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Product Lines
                </div>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleNavClick('catalog', cat.id)}
                    className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:text-[#1d3597] hover:bg-blue-50 rounded-xl font-medium transition flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">
                      {cat.itemCount}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('about')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition ${
              currentPage === 'about'
                ? 'text-[#1d3597] bg-blue-50'
                : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition ${
              currentPage === 'contact'
                ? 'text-[#1d3597] bg-blue-50'
                : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
            }`}
          >
            Contact & Showroom
          </button>
        </nav>

        {/* Action Buttons: Quote Cart & Request Quote CTA */}
        <div className="flex items-center gap-2.5">
          {/* Mobile search toggle */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-blue-700 hover:bg-slate-100 rounded-xl transition"
            aria-label="Toggle search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Quote Inquiry Cart Button */}
          <button
            id="nav-quote-cart-btn"
            onClick={onOpenQuote}
            className="relative px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-2 transition"
            title="View Quote List"
          >
            <FileText className="w-4 h-4 text-blue-700" />
            <span className="hidden sm:inline">Clinic Quote</span>
            {quoteCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#1d3597] text-white text-[11px] font-bold flex items-center justify-center">
                {quoteCount}
              </span>
            )}
          </button>

          {/* Primary CTA */}
          <button
            id="nav-request-quote-cta"
            onClick={onOpenQuote}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#1d3597] hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-sm transition hover:shadow"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            Request a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-blue-700 hover:bg-slate-100 rounded-xl transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Dropdown */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3 border-t border-slate-100 pt-2 bg-slate-50">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (currentPage !== 'catalog') onNavigate('catalog');
              }}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>
      )}

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold ${
              currentPage === 'home' ? 'text-[#1d3597] bg-blue-50' : 'text-slate-700'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('catalog')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold ${
              currentPage === 'catalog' ? 'text-[#1d3597] bg-blue-50' : 'text-slate-700'
            }`}
          >
            Product Catalog (All Equipment)
          </button>

          {/* Quick Categories inside Mobile Drawer */}
          <div className="pl-4 py-1 space-y-1 border-l-2 border-blue-100 ml-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => handleNavClick('catalog', c.id)}
                className="w-full text-left py-1 text-xs text-slate-600 hover:text-blue-700 flex items-center justify-between pr-2"
              >
                <span>{c.name}</span>
                <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">
                  {c.itemCount}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold ${
              currentPage === 'about' ? 'text-[#1d3597] bg-blue-50' : 'text-slate-700'
            }`}
          >
            About Great Star Dental
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold ${
              currentPage === 'contact' ? 'text-[#1d3597] bg-blue-50' : 'text-slate-700'
            }`}
          >
            Contact Us & Showroom
          </button>

          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="flex-1 py-2.5 bg-[#1d3597] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow"
            >
              <FileText className="w-3.5 h-3.5" />
              Open Quote List ({quoteCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
