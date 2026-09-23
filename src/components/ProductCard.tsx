import React from 'react';
import { Eye, FileText, Check, Star, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  isInQuote?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToQuote,
  isInQuote = false,
}) => {
  return (
    <div
      className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
      id={`product-card-${product.id}`}
    >
      <div>
        {/* Card Image Container */}
        <div className="relative aspect-square w-full bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.badge && (
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-600 text-white shadow-sm">
                {product.badge}
              </span>
            )}
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-slate-700 shadow-sm border border-slate-200/60">
              {product.categoryLabel}
            </span>
          </div>

          {/* Quick View Button Hover Overlay */}
          <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="px-4 py-2 bg-white/95 backdrop-blur-sm text-slate-800 rounded-xl text-xs font-bold shadow-lg hover:bg-white flex items-center gap-1.5 transition transform translate-y-2 group-hover:translate-y-0 duration-300"
            >
              <Eye className="w-3.5 h-3.5 text-blue-600" />
              Quick Specs
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-5">
          {/* Brand & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span className="font-semibold text-slate-500 uppercase text-[10px] tracking-wider">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-semibold text-[11px]">
              <Star className="w-3 h-3 fill-current" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h4
            onClick={() => onQuickView(product)}
            className="font-bold text-sm text-slate-900 line-clamp-2 hover:text-blue-700 cursor-pointer transition leading-snug min-h-[2.5rem]"
          >
            {product.name}
          </h4>

          {/* Short Description */}
          <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Clinical Spec highlights chip */}
          <div className="mt-3 flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feat, i) => (
              <span
                key={i}
                className="text-[10px] bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md line-clamp-1 max-w-full"
              >
                {feat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4 sm:p-5 pt-0 mt-auto">
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 block font-medium">Clinic Price</span>
            <span className="text-base font-black text-[#1d3597]">
              {product.priceFormatted || 'Quote on Request'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onAddToQuote(product)}
              className={`p-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
                isInQuote
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-blue-50 text-blue-800 hover:bg-blue-600 hover:text-white border border-blue-200/60'
              }`}
              title={isInQuote ? 'Already in Quote List' : 'Add to Clinic Quote'}
            >
              {isInQuote ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="hidden sm:inline">In Quote</span>
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">Inquire</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
