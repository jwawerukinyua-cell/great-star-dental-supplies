import React from 'react';
import { ShieldCheck, Truck, Wrench, BadgePercent, CheckCircle2, Clock, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const trustCards = [
    {
      icon: ShieldCheck,
      color: 'bg-blue-100 text-blue-700',
      title: 'Medical Quality Assurance',
      subtitle: 'ISO 13485:2016 & CE Certified',
      description:
        'Every dental unit, handpiece, and orthodontic bracket batch undergoes strict dimensional verification and clinical sterility standards before release to your practice.',
    },
    {
      icon: Truck,
      color: 'bg-emerald-100 text-emerald-700',
      title: 'Reliable Nationwide Delivery',
      subtitle: 'Safe Shockproof Transit',
      description:
        'Equipped with specialized crating for sensitive digital radiography and operatory chairs. In-stock clinic consumables dispatched same-day with real-time tracking.',
    },
    {
      icon: Wrench,
      color: 'bg-amber-100 text-amber-700',
      title: 'Biomedical Support & Warranty',
      subtitle: 'Certified Engineers on Call',
      description:
        'Factory-trained dental equipment technicians handle on-site chair plumbing, electrical hookups, compressor calibration, and emergency warranty repairs.',
    },
    {
      icon: BadgePercent,
      color: 'bg-teal-100 text-teal-700',
      title: 'Competitive B2B Wholesale',
      subtitle: 'Direct Manufacturer Pricing',
      description:
        'We eliminate unnecessary middleman markups so dental clinics, orthodontists, and residency training centers can access top-tier tools within budget.',
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/60" id="why-choose-us-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-[#1d3597] text-xs font-bold mb-2">
            <Award className="w-3.5 h-3.5 text-blue-700" />
            The Great Star Advantage
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Why Dental Clinics & Orthodontists Trust Us
          </h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            We understand that patient health and clinic profitability depend on zero downtime, flawless instrument ergonomics, and dependable supply chains.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                    {card.subtitle}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
