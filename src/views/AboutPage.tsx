import React from 'react';
import {
  ShieldCheck,
  Award,
  Target,
  Users,
  CheckCircle2,
  Building2,
  Wrench,
  ArrowRight,
  HeartHandshake,
  Sparkles
} from 'lucide-react';
import { Logo } from '../components/Logo';

interface AboutPageProps {
  onNavigateToCatalog: () => void;
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateToCatalog,
  onRequestQuote,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16" id="about-us-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Hero Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1d3597] text-xs font-bold border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Empowering Dental Practices Across the Nation
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              The Story Behind{' '}
              <span className="text-[#1d3597]">Great Star Dental Supplies Ltd</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Founded on the belief that every dentist, orthodontist, and oral surgeon deserves world-class instruments and dependable operatory equipment without excessive markups or equipment downtime.
            </p>
          </div>
        </div>

        {/* Mission, Vision & Core Purpose */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#1d3597] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-slate-900">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To equip dental clinics, teaching hospitals, and specialty orthodontic practices with ergonomically superior, ISO-certified dental machinery and consumables that enhance practitioner comfort and ensure uncompromising patient safety.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-slate-900">Uncompromising Quality</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We partner directly with leading medical device manufacturers in Germany, Japan, and Taiwan. Every dental turbine, orthodontic bracket batch, and autoclave is clinically audited for zero-defect standards and sterilization resilience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-slate-900">Clinic Partnership</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We are not just order fulfillers. We act as long-term technical partners offering turnkey operatory planning, plumbing guidance, equipment relocation, genuine spare parts, and fast emergency supply dispatch.
            </p>
          </div>
        </div>

        {/* Narrative & Milestone Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                Our Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                From a Clinic-First Vision to a Leading Dental Supply Network
              </h2>
              <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                <p>
                  Great Star Dental Supplies Ltd started with a straightforward realization: dental practitioners were frequently burdened by delayed shipments of essential daily items like impression materials and composite resins, or were forced to pay exorbitant prices for operatory chairs with zero local technician backing.
                </p>
                <p>
                  We built our operations around three non-negotiables: authentic factory-backed medical certifications, transparent wholesale proforma invoicing, and an in-house team of certified biomedical dental engineers capable of on-site repairs and maintenance.
                </p>
                <p>
                  Today, Great Star Dental Supplies proudly equips more than 500 private dental clinics, hospital dental departments, and orthodontic practices nationwide. From single operatory startups to sprawling multi-doctor dental complexes, our clients know that Great Star stands for unwavering reliability.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-2xl font-black text-[#1d3597] block">500+</span>
                  <span className="text-xs text-slate-500 font-medium">Dental Practices Supplied</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-2xl font-black text-emerald-600 block">1,200+</span>
                  <span className="text-xs text-slate-500 font-medium">Dental SKU Lines in Stock</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
                  alt="Dental operatory and precision instruments"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    Medical Device Testing Lab
                  </div>
                  <h4 className="font-bold text-base text-white">
                    Certified Technical Inspection Facility
                  </h4>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Every dental handpiece and unit is inspected and pressure-tested before clinic dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our 4 Pillars of Medical Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Engineered to protect clinical outcomes and dental business continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-bold text-sm text-slate-900">Direct Sourcing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct partnerships with ISO 13485-accredited manufacturers guarantee authentic devices, updated firmware, and full parts traceability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-bold text-sm text-slate-900">Biomedical Engineering</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our in-house certified technicians assist with operatory chair pipeline plumbing, dental air compressor setup, and scheduled safety audits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-bold text-sm text-slate-900">Cold Chain & Sterile Pack</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Temperature-sensitive resins, adhesives, and impression materials are stored in climate-controlled warehouses to preserve clinical shelf-life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                04
              </div>
              <h4 className="font-bold text-sm text-slate-900">Fair Clinic Economics</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Volume tier discounts for orthodontic chains and turnkey package financing help young practitioners build thriving dental practices.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-[#1d3597] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Upgrade Your Clinic Equipment?
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
            Visit our showroom to test-drive the GS-9000 operatory unit or consult with our equipment specialist for a custom proforma quote.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onNavigateToCatalog}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-[#1d3597] font-bold text-xs rounded-xl shadow transition"
            >
              Explore Wholesale Catalog
            </button>
            <button
              onClick={onRequestQuote}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow transition"
            >
              Request Official Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
