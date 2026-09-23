import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Category } from '../types';

interface FeaturedCategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  categories,
  onSelectCategory,
}) => {
  return (
    <section className="py-16 bg-white border-b border-slate-200/60" id="featured-categories-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Comprehensive Dental Inventory
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Featured Clinical Categories
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              From heavy operatory units to microscopic orthodontic brackets and infection control, explore our ISO-certified lines.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#1d3597] hover:text-blue-700 hover:underline"
          >
            Explore All 120+ Products
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Category Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-200">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                    {cat.itemCount} Products
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {cat.tagline}
                  </p>

                  {/* Popular Items Pills */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cat.popularItems.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium bg-white group-hover:bg-blue-50/70 border border-slate-200 group-hover:border-blue-200 text-slate-600 group-hover:text-blue-900 px-2 py-0.5 rounded-md transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action bar */}
              <div className="px-5 pb-5 pt-0">
                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#1d3597] group-hover:text-blue-700">
                  <span>Browse Category</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
