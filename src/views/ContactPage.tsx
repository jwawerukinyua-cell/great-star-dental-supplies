import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  Building2,
  ChevronDown,
  Sparkles,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { FAQ_LIST } from '../data/products';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    doctorName: '',
    clinicName: '',
    phone: '',
    email: '',
    categoryInterest: 'Dental Units / Operatory Chairs',
    preferredContact: 'WhatsApp',
    message: '',
  });

  const categoriesList = [
    'Dental Units / Operatory Chairs',
    'Handpieces & High-Speed Turbines',
    'Endodontics & Cordless Motors',
    'Orthodontics (Brackets, Archwires, Pliers)',
    'Autoclaves & Infection Control',
    'Digital Sensors & Handheld X-Rays',
    'Daily Clinic Consumables (PPE, Composites)',
    'Turnkey New Clinic Setup Consultation',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const phone = '+254723059567'.replace(/[^0-9]/g, '');
    const msg = `*NEW CLINIC INQUIRY*\n*Great Star Dental Supply (Nairobi, Kenya)*\n\n*Doctor:* ${
      formData.doctorName || 'Doctor'
    }\n*Clinic:* ${formData.clinicName || 'N/A'}\n*Phone/WhatsApp:* ${formData.phone || 'N/A'}\n*Email:* ${
      formData.email || 'N/A'
    }\n*Category of Interest:* ${formData.categoryInterest}\n*Preferred Response:* ${
      formData.preferredContact
    }\n\n*Message:*\n${formData.message || 'I would like to inquire about pricing in KSh, stock availability, and proforma quotation.'}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16" id="contact-us-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 text-[#1d3597] text-xs font-bold border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Clinic Support & Showroom
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Get in Touch with Great Star Dental Supply
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Have questions about dental unit specs, bulk wholesale discounts, or urgent clinic deliveries? Our biomedical equipment specialists are standing by.
          </p>
        </div>

        {/* Contact Grid: Details + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Showroom & Headquarters Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-700" />
                Showroom & Distribution Center
              </h3>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">Physical Address:</strong>
                    <span>Jengi House 5th Fl, Left Wing, Opposite Co-operative Bank, Nairobi, Kenya</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      5th Floor Showroom & Dedicated Dental Equipment Service Center
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">Direct Clinic Phone / WhatsApp:</strong>
                    <a
                      href="tel:+254723059567"
                      className="text-blue-700 font-semibold hover:underline block text-sm mt-0.5"
                    >
                      +254 723 059 567
                    </a>
                    <span className="text-[11px] text-slate-400">Direct sales & orders hotline</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">Official Email:</strong>
                    <a
                      href="mailto:info@greatstardental.com"
                      className="text-slate-700 hover:text-blue-700 hover:underline block mt-0.5"
                    >
                      info@greatstardental.com
                    </a>
                    <a
                      href="mailto:orders@greatstardental.com"
                      className="text-slate-700 hover:text-blue-700 hover:underline block"
                    >
                      orders@greatstardental.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">Working Hours:</strong>
                    <p className="mt-0.5">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                    <p className="text-slate-400 text-[11px]">Sunday: Emergency surgical & clinical support on-call</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Presence Cards: Facebook and TikTok (Explicit user request) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Connect on Social Media
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Watch live video demonstrations of our dental chairs, unpackings of orthodontic brackets, and maintenance tutorials on our official channels:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Facebook Card */}
                <a
                  href="https://www.facebook.com/share/1dkmV17yNe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 bg-slate-50 hover:bg-blue-50/50 transition group flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1877F2] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-xs text-slate-900 group-hover:text-blue-700 flex items-center gap-1">
                      <span>Facebook</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </div>
                    <span className="text-[10px] text-slate-500 block truncate">
                      Great Star Dental Supply
                    </span>
                  </div>
                </a>

                {/* TikTok Card */}
                <a
                  href="https://www.tiktok.com/@greatstardentalsupply?_r=1&_t=ZS-99uw5KYDmiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-pink-500 bg-slate-50 hover:bg-pink-50/40 transition group flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-xs text-slate-900 group-hover:text-pink-600 flex items-center gap-1">
                      <span>TikTok</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </div>
                    <span className="text-[10px] text-slate-500 block truncate">
                      @greatstardentalsupply
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick WhatsApp Hotline Highlight */}
            <div className="p-5 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl text-white shadow-md flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 block">
                  Urgent Clinic Re-Stock?
                </span>
                <h4 className="font-extrabold text-sm">Instant WhatsApp Order Desk</h4>
                <p className="text-xs text-emerald-100">Send voice notes or photo of needed items.</p>
              </div>
              <button
                onClick={handleWhatsAppSend}
                className="px-4 py-2.5 bg-white text-emerald-800 font-bold text-xs rounded-xl shadow hover:bg-emerald-50 transition whitespace-nowrap"
              >
                Chat Now
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Clinic Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm">
              <div className="mb-6">
                <h3 className="font-black text-xl text-slate-900 tracking-tight">
                  Send a Direct Equipment Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out your clinic requirements below to receive a formal quotation, technical brochure, and dispatch availability.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.doctorName || 'Doctor'}</strong>. Our senior dental equipment specialist will contact <strong>{formData.clinicName || 'your clinic'}</strong> via {formData.preferredContact} within 1 hour.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppSend}
                      className="px-5 py-2.5 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Forward Directly to WhatsApp
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          doctorName: '',
                          clinicName: '',
                          phone: '',
                          email: '',
                          categoryInterest: 'Dental Units / Operatory Chairs',
                          preferredContact: 'WhatsApp',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Practitioner / Doctor Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Jane Doe, BDS"
                        value={formData.doctorName}
                        onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Clinic or Hospital Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Metro Dental Specialists"
                        value={formData.clinicName}
                        onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+254 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="clinic@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Equipment Category of Interest
                      </label>
                      <select
                        value={formData.categoryInterest}
                        onChange={(e) => setFormData({ ...formData, categoryInterest: e.target.value })}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition font-medium"
                      >
                        {categoriesList.map((cat, idx) => (
                          <option key={idx} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Preferred Response Method
                      </label>
                      <select
                        value={formData.preferredContact}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition font-medium"
                      >
                        <option value="WhatsApp">WhatsApp (Fastest Response)</option>
                        <option value="Direct Phone Call">Direct Phone Call</option>
                        <option value="Email Proforma">Email Proforma PDF</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Inquiry Details & Clinic Specifications
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify requested models, quantity of brackets/turbines, voltage needs, clinic address for delivery estimate, or request showroom appointment..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition leading-relaxed"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 bg-[#1d3597] hover:bg-blue-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Clinic Inquiry
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto px-5 py-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                      title="Send directly to WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Instant WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              Frequently Asked Questions
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Purchasing, Warranty & Deliveries
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 pt-4">
            {FAQ_LIST.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50/70 hover:bg-slate-50 transition"
                  >
                    <span className="font-bold text-xs sm:text-sm text-slate-800">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white border-t border-slate-100 text-xs text-slate-600 leading-relaxed animate-in fade-in duration-150">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
