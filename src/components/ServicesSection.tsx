import React, { useState } from 'react';
import { 
  BANKING_SERVICES 
} from '../data/bankingData';
import { BankingService } from '../types';
import { 
  Wallet, 
  Building2, 
  UserCheck, 
  PiggyBank, 
  Landmark, 
  ShieldCheck, 
  TrendingUp, 
  Coins, 
  Headphones, 
  ArrowRight,
  CheckCircle2,
  FileText,
  Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenAccountOpening: () => void;
  onOpenNetBanking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenAccountOpening,
  onOpenNetBanking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeServiceModal, setActiveServiceModal] = useState<BankingService | null>(null);

  const categories = ['All', 'Accounts', 'Deposits', 'Lending', 'Wealth & Insurance', 'Operations'];

  const filteredServices = selectedCategory === 'All'
    ? BANKING_SERVICES
    : BANKING_SERVICES.filter(s => s.category === selectedCategory);

  const getServiceIcon = (name: string) => {
    const props = { size: 22, className: 'text-[#0B2545]' };
    switch (name) {
      case 'Wallet': return <Wallet {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'PiggyBank': return <PiggyBank {...props} />;
      case 'Landmark': return <Landmark {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Coins': return <Coins {...props} />;
      case 'Headphones': return <Headphones {...props} />;
      default: return <Wallet {...props} />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Gold Accent Bar */}
          <div className="w-12 h-1 bg-[#C5A059] mx-auto mb-4"></div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-slate-50 border border-slate-200 text-xs font-extrabold text-[#002D62] uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            Comprehensive Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002D62] tracking-tight">
            Banking Services & Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal mt-2 leading-relaxed">
            From flexible zero-balance savings to guaranteed term deposits and dedicated student loan options, explore financial products engineered for security and growth.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-bold transition-all duration-150 uppercase tracking-wider ${
                  selectedCategory === cat
                    ? 'bg-[#002D62] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-sm border border-slate-200 border-t-4 border-t-[#C5A059] p-6 shadow-banking hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Badge Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-amber-50 group-hover:border-[#C5A059]/40 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-extrabold text-[#002D62] bg-amber-50 border border-[#C5A059]/60 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Name */}
                <h3 className="text-lg font-extrabold text-[#002D62] tracking-tight group-hover:text-[#0A3B75] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 line-clamp-3">
                  {service.shortDesc}
                </p>

                {/* Key Bullet / Highlight */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-[#C5A059] font-bold flex items-center gap-1.5">
                  <Sparkles size={13} className="shrink-0" />
                  <span className="truncate">{service.keyHighlights}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveServiceModal(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002D62] hover:text-[#C5A059] transition-colors uppercase tracking-wider"
                >
                  <span>Details & Rates</span>
                  <ArrowRight size={13} />
                </button>

                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  {service.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeServiceModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          onClick={() => setActiveServiceModal(null)}
        >
          <div 
            className="bg-white rounded-sm max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#002D62] text-white p-6 flex items-center justify-between border-b border-[#C5A059]/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-[#DFB748]">
                  {getServiceIcon(activeServiceModal.iconName)}
                </div>
                <div>
                  <span className="text-[10px] text-[#DFB748] uppercase font-extrabold tracking-wider">
                    {activeServiceModal.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {activeServiceModal.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveServiceModal(null)}
                className="text-slate-300 hover:text-white p-1 rounded-sm hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-1.5">
                  Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeServiceModal.fullDesc}
                </p>
              </div>

              {/* Highlights badge */}
              <div className="p-3 bg-amber-50/70 border border-[#C5A059]/40 rounded-sm">
                <div className="text-xs font-bold text-[#002D62] flex items-center gap-1.5 uppercase tracking-wider">
                  <Sparkles size={14} className="text-[#C5A059]" />
                  <span>Key Institutional Highlights</span>
                </div>
                <div className="text-xs text-slate-700 mt-1 font-semibold">
                  {activeServiceModal.keyHighlights}
                </div>
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-2">
                  Standard Features & Benefits
                </h4>
                <ul className="space-y-2">
                  {activeServiceModal.features.map((feat, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#C5A059] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setActiveServiceModal(null);
                    onOpenAccountOpening();
                  }}
                  className="px-4 py-2 text-xs font-extrabold text-white bg-[#002D62] hover:bg-[#0A3B75] rounded-sm shadow-xs uppercase tracking-wider"
                >
                  Apply at Desk 04
                </button>

                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 bg-slate-100 rounded-sm uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
