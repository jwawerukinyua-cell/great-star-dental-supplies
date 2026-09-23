import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, CheckCircle, FileText, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { QuoteItem } from '../types';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearQuote: () => void;
  onNavigateToCatalog: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearQuote,
  onNavigateToCatalog,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    doctorName: '',
    clinicName: '',
    phone: '',
    email: '',
    city: '',
    notes: '',
  });

  if (!isOpen) return null;

  const totalCalculated = items.reduce((acc, item) => {
    if (item.product.price) {
      return acc + item.product.price * item.quantity;
    }
    return acc;
  }, 0);

  const hasQuoteOnlyItems = items.some(i => i.product.isQuoteOnly || !i.product.price);

  const handleWhatsAppExport = () => {
    const phone = '+254723059567'.replace(/[^0-9]/g, '');
    const itemsList = items
      .map(
        (it, idx) =>
          `${idx + 1}. *${it.product.name}*\n   SKU: ${it.product.sku} | Qty: ${it.quantity} | Est: ${
            it.product.priceFormatted || 'Quote Required'
          }`
      )
      .join('\n\n');

    const msg = `*OFFICIAL CLINIC QUOTE INQUIRY*\n*Great Star Dental Supply (Nairobi, Kenya)*\n\n*Clinic:* ${
      formData.clinicName || 'Dental Practice'
    }\n*Contact:* ${formData.doctorName || 'Doctor'}\n*Phone:* ${formData.phone || 'N/A'}\n*Location:* ${
      formData.city || 'N/A'
    }\n\n*Requested Equipment / Supplies:*\n${itemsList}\n\n*Estimated Item Total:* KSh ${totalCalculated.toLocaleString()}${
      hasQuoteOnlyItems ? ' (+ Custom Equipment Quote)' : ''
    }\n\n*Notes:* ${formData.notes || 'Please provide proforma invoice with delivery lead time.'}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden print:hidden" id="quote-drawer-backdrop">
      {/* Dim Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Clinic Quote Request</h3>
                <p className="text-xs text-slate-500">
                  {items.length} {items.length === 1 ? 'item' : 'items'} in your quotation list
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Quotation Request Received!</h4>
                <p className="text-sm text-slate-600 max-w-xs mx-auto">
                  Thank you, <strong>{formData.doctorName || 'Doctor'}</strong>. Our Great Star Dental equipment specialist has received your request for <strong>{formData.clinicName || 'your practice'}</strong>.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 border border-slate-200 text-left space-y-1">
                  <p>• <strong>Proforma turnaround:</strong> within 1-2 hours</p>
                  <p>• <strong>Official stamped PDF invoice:</strong> will be sent to {formData.email || 'your email'}</p>
                  <p>• <strong>Urgent assistance:</strong> our WhatsApp desk is ready.</p>
                </div>
                <div className="pt-4 space-y-2">
                  <button
                    onClick={handleWhatsAppExport}
                    className="w-full py-3 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Open & Expedite on WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClearQuote();
                      onClose();
                    }}
                    className="w-full py-2.5 text-slate-600 hover:text-slate-900 font-medium text-xs hover:underline"
                  >
                    Done & Return to Website
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">Your Quote List is Empty</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                    Browse our dental chairs, turbines, orthodontic brackets, and clinic consumables to request a wholesale clinic proforma.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToCatalog();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1d3597] hover:bg-blue-800 text-white rounded-xl text-xs font-semibold shadow transition"
                >
                  Explore Dental Catalog
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <>
                {/* Item List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Selected Supplies
                    </span>
                    <button
                      onClick={onClearQuote}
                      className="text-xs text-red-500 hover:text-red-700 font-medium flex items-center gap-1 hover:underline"
                    >
                      <Trash2 className="w-3 h-3" />
                      Clear All
                    </button>
                  </div>

                  {items.map(item => (
                    <div
                      key={item.product.id}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex gap-3 items-center group"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg border border-slate-200 bg-white flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h5 className="font-semibold text-xs text-slate-900 line-clamp-2 leading-tight">
                            {item.product.name}
                          </h5>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-slate-400 hover:text-red-600 p-1 rounded transition"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">SKU: {item.product.sku}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-xs text-[#1d3597]">
                            {item.product.priceFormatted || 'Quote on Request'}
                          </span>
                          {/* Quantity control */}
                          <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden shadow-sm">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-1 text-slate-600 hover:bg-slate-100 transition"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 py-0.5 text-xs font-bold text-slate-800 min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-1 text-slate-600 hover:bg-slate-100 transition"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing Summary */}
                <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated Catalog Total:</span>
                    <span className="font-bold text-slate-900">KSh {totalCalculated.toLocaleString()}</span>
                  </div>
                  {hasQuoteOnlyItems && (
                    <div className="flex justify-between text-amber-700 text-[11px]">
                      <span>Heavy Equipment / Special Units:</span>
                      <span className="font-semibold">Custom Discount Included</span>
                    </div>
                  )}
                  <p className="text-[11px] text-slate-500 pt-1 border-t border-blue-200/60 leading-relaxed">
                    * Proforma includes clinic VAT exemption details, biomedical warranty terms, and bulk discounts.
                  </p>
                </div>

                {/* Clinic Proforma Submission Form */}
                <form onSubmit={handleSubmitInquiry} className="space-y-3 pt-2">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                    Clinic Details for Proforma
                  </h5>
                  <div className="space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Doctor / Contact Name *"
                      value={formData.doctorName}
                      onChange={e => setFormData({ ...formData, doctorName: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Dental Clinic / Hospital Name *"
                      value={formData.clinicName}
                      onChange={e => setFormData({ ...formData, clinicName: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="tel"
                        required
                        placeholder="WhatsApp / Phone *"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Clinic Email *"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="City / Delivery Location"
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                    <textarea
                      rows={2}
                      placeholder="Special requirements (voltage, bracket prescription, clinic delivery date)..."
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#1d3597] hover:bg-blue-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Clinic Proforma Request
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppExport}
                      className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Send Instant Quote on WhatsApp
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
