import React, { useState } from 'react';
import { X, Check, ShieldCheck, Truck, Wrench, MessageSquare, Plus, Minus, FileText, Star, Share2 } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product, quantity: number) => void;
  isInQuote: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  isInQuote,
}) => {
  const [qty, setQty] = useState(1);
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppProduct = () => {
    const phone = '+254723059567'.replace(/[^0-9]/g, '');
    const text = `Hello Great Star Dental Supply,\nI would like to inquire about this product:\n*${product.name}*\nSKU: ${product.sku}\nPrice: ${product.priceFormatted || 'Quote Only'}\nQty needed: ${qty}\n\nPlease confirm availability and delivery to our clinic.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto print:hidden" id="product-modal">
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-6">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal Dialog Card */}
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-3xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-700 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-slate-100 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image & Badges */}
            <div className="bg-slate-50 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1d3597] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                    {product.categoryLabel}
                  </span>
                  {product.badge && (
                    <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="aspect-square bg-white rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center shadow-inner">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Trust assurances */}
              <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{product.warranty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{product.leadTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Biomedical Support & Genuine Spares Available</span>
                </div>
              </div>
            </div>

            {/* Product Details & Specs */}
            <div className="p-6 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <span className="font-semibold text-slate-700">{product.brand}</span>
                    <span>•</span>
                    <span>SKU: {product.sku}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {product.name}
                  </h3>
                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                    <span className="text-xs text-slate-400">({product.reviewsCount} clinic reviews)</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Clinic Wholesale Price:</span>
                    <span className="text-2xl font-black text-[#1d3597]">
                      {product.priceFormatted || 'Quote on Request'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                      <Check className="w-3 h-3" />
                      {product.inStock ? 'Ready for Dispatch' : 'Special Order'}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Clinical Overview
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Features
                  </h5>
                  <ul className="space-y-1.5">
                    {product.features.map((feat, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications Table */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Technical Specifications
                  </h5>
                  <div className="border border-slate-200 rounded-lg overflow-hidden text-xs">
                    {Object.entries(product.specs).map(([key, value], idx) => (
                      <div
                        key={key}
                        className={`flex justify-between p-2 ${
                          idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                        }`}
                      >
                        <span className="text-slate-500 font-medium">{key}</span>
                        <span className="text-slate-800 font-semibold text-right max-w-[55%]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Controls */}
              <div className="pt-6 mt-6 border-t border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-slate-300 rounded-xl bg-slate-50 p-1">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-white transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-slate-800">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-white transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Quote Button */}
                  <button
                    onClick={() => {
                      onAddToQuote(product, qty);
                    }}
                    className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow transition ${
                      isInQuote
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-[#1d3597] hover:bg-blue-800 text-white'
                    }`}
                  >
                    {isInQuote ? (
                      <>
                        <Check className="w-4 h-4" />
                        Added to Quote (Update Qty: {qty})
                      </>
                    ) : (
                      <>
                        <FileText className="w-4 h-4" />
                        Add to Clinic Quote List
                      </>
                    )}
                  </button>
                </div>

                {/* Secondary Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleWhatsAppProduct}
                    className="py-2.5 px-3 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Inquire on WhatsApp
                  </button>
                  <button
                    onClick={handleShare}
                    className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    {copied ? 'Link Copied!' : 'Share Product'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
