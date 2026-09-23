import React, { useState } from 'react';
import { MessageCircle, Phone, X, Send, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { QuoteItem } from '../types';

interface WhatsAppButtonProps {
  quoteItems?: QuoteItem[];
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ quoteItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  // Business contact information for Great Star Dental Supplies Ltd (Nairobi, Kenya)
  const whatsappNumber = '+254723059567';
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, '');
  const displayPhone = '+254 723 059 567';

  const defaultPrompts = [
    'Hello, I would like to inquire about the GS-9000 Dental Unit.',
    'Hi Great Star, please share your current wholesale price list for orthodontic supplies.',
    'Do you have autoclaves and high-speed handpieces in stock for urgent delivery?',
    'I need assistance with a turnkey clinic equipment setup proforma invoice.'
  ];

  const handleOpenWhatsApp = (textToSend?: string) => {
    let finalMessage = textToSend || customMsg.trim();
    if (!finalMessage) {
      if (quoteItems.length > 0) {
        finalMessage = `Hello Great Star Dental Supplies,\nI would like to request a formal clinic quote for the following items:\n${quoteItems
          .map((i, idx) => `${idx + 1}. ${i.product.name} (Qty: ${i.quantity})`)
          .join('\n')}\n\nPlease provide availability and proforma invoice. Thank you!`;
      } else {
        finalMessage = 'Hello Great Star Dental Supplies, I am inquiring about dental supplies and clinic equipment.';
      }
    }

    const encoded = encodeURIComponent(finalMessage);
    const url = `https://wa.me/${cleanPhone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end print:hidden">
      {/* Popover Panel */}
      {isOpen && (
        <div
          id="whatsapp-chat-card"
          className="mb-3 w-[330px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-[#128c7e] text-white p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                  GS
                </div>
                <div>
                  <h4 className="font-bold text-base leading-tight">Great Star Dental Support</h4>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-100 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Online • Instant Clinic Dispatch</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-white/90 mt-2.5 bg-black/10 p-2 rounded-lg leading-relaxed">
              Dr. or Clinic Procurement Officer: chat directly with our equipment specialist on WhatsApp for quick proformas & stock availability.
            </p>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-slate-50/70 max-h-[360px] overflow-y-auto">
            {quoteItems.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900">
                <div className="flex items-center justify-between font-semibold mb-1">
                  <span>Inquiry Items in Cart ({quoteItems.length})</span>
                  <span className="text-[10px] bg-blue-200 text-blue-900 px-2 py-0.5 rounded-full">Ready to Send</span>
                </div>
                <p className="text-slate-600 line-clamp-2">
                  {quoteItems.map(i => `${i.product.name} (x${i.quantity})`).join(', ')}
                </p>
                <button
                  onClick={() => handleOpenWhatsApp()}
                  className="mt-2 w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-xs flex items-center justify-center gap-1.5 transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Quote List on WhatsApp
                </button>
              </div>
            )}

            <div>
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                Quick Inquiries
              </label>
              <div className="space-y-1.5">
                {defaultPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handleOpenWhatsApp(prompt)}
                    className="w-full text-left text-xs bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 text-slate-700 p-2.5 rounded-xl transition flex items-center justify-between group shadow-sm"
                  >
                    <span className="line-clamp-1">{prompt}</span>
                    <Send className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 flex-shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="pt-1">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type clinic question..."
                  value={customMsg}
                  onChange={e => setCustomMsg(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleOpenWhatsApp()}
                  className="flex-1 text-xs bg-white border border-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={() => handleOpenWhatsApp()}
                  className="bg-[#25D366] hover:bg-[#1ebd59] text-white p-2.5 rounded-xl transition flex items-center justify-center shadow"
                  title="Send via WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Phone direct */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                Mon - Sat: 8:00 AM - 6:00 PM
              </span>
              <a
                href={`tel:${cleanPhone}`}
                className="font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="flex items-center gap-3">
        {/* Helper Tooltip on Desktop */}
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-lg border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer transition animate-bounce"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Chat on WhatsApp</span>
          </div>
        )}

        <button
          id="floating-whatsapp-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Contact on WhatsApp"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7" fill="currentColor" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
                1
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
