import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Wrench,
  Award,
  PhoneCall,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface HeroSectionProps {
  onShopCatalog: () => void;
  onRequestQuote: () => void;
  onSelectCategory: (catId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopCatalog,
  onRequestQuote,
  onSelectCategory,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-16 pb-16 sm:pt-20 lg:pt-24 lg:pb-28 overflow-hidden border-b border-slate-200/60">
      {/* Subtle Background Aesthetic Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left pt-2 sm:pt-4">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Your Trusted Partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d3597] via-blue-600 to-teal-600">
                Premium Dental Equipment
              </span>{' '}
              & Supplies
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Empowering dental practices, orthodontists, and maxillofacial clinics with certified operatory chairs, precision fiber-optic handpieces, autoclaves, and daily clinic consumables at verified wholesale pricing.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                id="hero-shop-catalog-btn"
                onClick={onShopCatalog}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#1d3597] hover:bg-blue-800 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-900/15 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Shop Full Catalog
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-request-quote-btn"
                onClick={onRequestQuote}
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl font-bold text-sm shadow-sm transition-all duration-200 hover:border-slate-400 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                Request Clinic Proforma
              </button>

              <a
                href="https://wa.me/254723059567?text=Hello%20Great%20Star%20Dental,%20I%20would%20like%20to%20inquire%20about%20dental%20equipment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl font-bold text-sm shadow-sm transition flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Key Clinical Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">ISO 13485 & CE</div>
                  <div className="text-[11px] text-slate-500">Medical Certified</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">Rapid Dispatch</div>
                  <div className="text-[11px] text-slate-500">Safe Sterile Transit</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">Biomedical Team</div>
                  <div className="text-[11px] text-slate-500">On-Site Setup & Care</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">500+ Clinics</div>
                  <div className="text-[11px] text-slate-500">Supplied Nationwide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Featured Clinical Showcase Card */}
              <div className="bg-white rounded-3xl p-4 shadow-2xl border border-slate-200/80 overflow-hidden relative group">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                    alt="Great Star Luxury Dental Operatory Unit"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md w-fit mb-1.5 border border-emerald-500/30">
                      Operatory Flagship
                    </span>
                    <h3 className="font-bold text-lg text-white leading-tight">
                      GreatStar GS-9000 Dental Operatory Unit
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 line-clamp-1">
                      Multi-axis sensor LED lamp, ultra-quiet hydraulic lift & Italian leather upholstery.
                    </p>
                  </div>
                </div>

                {/* Floating Micro Badge 1: Warranty */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-2 rounded-xl shadow-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">3-Year On-Site Warranty</span>
                </div>

                {/* Floating Micro Badge 2: Quick Jump */}
                <div className="p-4 bg-slate-50 rounded-2xl mt-4 border border-slate-200/70 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Clinic Proforma Special</span>
                    <span className="text-sm font-extrabold text-[#1d3597]">
                      Save up to 18% on Turnkey Packages
                    </span>
                  </div>
                  <button
                    onClick={() => onSelectCategory('units')}
                    className="px-3.5 py-1.5 bg-[#1d3597] hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-sm transition"
                  >
                    View Units
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
