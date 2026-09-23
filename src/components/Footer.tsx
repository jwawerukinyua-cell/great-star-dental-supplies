import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: 'home' | 'catalog' | 'about' | 'contact', categoryFilter?: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top CTA Banner inside Footer */}
        <div className="bg-gradient-to-r from-blue-900 via-[#1d3597] to-slate-900 rounded-3xl p-8 sm:p-10 mb-16 shadow-2xl border border-blue-800/40 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-800/60 text-blue-200 text-xs font-semibold border border-blue-700/50">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Turnkey Clinic Setup Packages
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Equipping a New Dental Practice or Upgrading Operatories?
              </h3>
              <p className="text-sm text-blue-100/90 leading-relaxed">
                Receive customized package discounts on dental chairs, compressors, suction units, and autoclaves with complimentary biomedical installation and 3-year warranty support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-[#1d3597] rounded-xl font-bold text-xs shadow-lg transition flex items-center justify-center gap-2"
              >
                Request Clinic Package Quote
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/254723059567?text=Hello%20Great%20Star,%20we%20want%20to%20inquire%20about%20a%20turnkey%20dental%20clinic%20setup."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl font-bold text-xs shadow-lg transition flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-xs">
          {/* Column 1: Brand & Socials (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" variant="light" onClick={() => onNavigate('home')} />
            <p className="text-slate-400 leading-relaxed text-xs pr-4">
              Great Star Dental Supply is a premier supplier of certified clinical dental equipment, high-speed turbines, orthodontic appliances, and infection control consumables to dental practitioners, orthodontists, and dental clinics across Kenya.
            </p>
            
            {/* Social Media Links explicitly requested: Facebook and TikTok */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Follow Our Showroom & Demos
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/share/1dkmV17yNe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition"
                  title="Follow Great Star Dental on Facebook"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@greatstardentalsupply?_r=1&_t=ZS-99uw5KYDmiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition"
                  title="Watch product demonstrations on TikTok"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@greatstardentalsupply?_r=1&_t=ZS-99uw5KYDmiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white text-xs ml-1 transition"
                >
                  @greatstardentalsupply
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Core Product Lines */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'units')}
                  className="hover:text-white transition hover:underline"
                >
                  Dental Units & Chairs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'handpieces')}
                  className="hover:text-white transition hover:underline"
                >
                  Handpieces & Endodontics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'orthodontics')}
                  className="hover:text-white transition hover:underline"
                >
                  Orthodontic Brackets & Wires
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'consumables')}
                  className="hover:text-white transition hover:underline"
                >
                  Autoclaves & Consumables
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'imaging')}
                  className="hover:text-white transition hover:underline"
                >
                  Digital X-Ray & Sensors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'surgical')}
                  className="hover:text-white transition hover:underline"
                >
                  Surgical & Implantology
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Company & Clinic Care
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition hover:underline"
                >
                  About Great Star Dental
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition hover:underline"
                >
                  Wholesale Equipment Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="hover:text-white transition hover:underline"
                >
                  Request Official Proforma
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition hover:underline"
                >
                  Showroom Inspection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition hover:underline"
                >
                  Biomedical Maintenance Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Showroom */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Headquarters & Showroom
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Jengi House 5th Fl, Left Wing, Opposite Co-operative Bank, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+254723059567" className="hover:text-white transition font-medium">
                  +254 723 059 567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@greatstardental.com" className="hover:text-white transition">
                  info@greatstardental.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Certifications & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              ISO 13485:2016 Compliant
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Award className="w-4 h-4 text-blue-400" />
              CE Mark European Standards
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              100% Genuine Certified
            </span>
          </div>

          <div>
            © {new Date().getFullYear()} Great Star Dental Supplies Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
