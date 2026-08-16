import React from 'react';
import { ArrowRight, PhoneCall, UserPlus, ShieldCheck } from 'lucide-react';
import { BankLogo } from './BankLogo';

interface CallToActionProps {
  onOpenAccountOpening: () => void;
  onExploreServices: () => void;
  onContactUs: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onOpenAccountOpening,
  onExploreServices,
  onContactUs
}) => {
  return (
    <section className="py-16 sm:py-20 bg-[#002D62] text-white relative overflow-hidden border-t border-b border-[#001D42]">
      {/* Background Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.05] pointer-events-none">
        <BankLogo size={700} showText={false} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10 space-y-6">
        {/* Subtitle */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#001D42] border border-[#C5A059]/40 text-xs font-bold text-[#DFB748] uppercase tracking-wider">
          <ShieldCheck size={14} className="text-[#C5A059]" />
          <span>Premier Institutional Banking Services</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Your Financial Journey Starts Here.
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed">
          Explore our banking services and discover solutions designed around your financial needs. Visit our counter desks or open a student savings account today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAccountOpening}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-extrabold text-[#002D62] bg-[#C5A059] hover:bg-[#b08e4c] rounded-sm uppercase tracking-wider transition-all shadow-banking active:scale-98"
          >
            <UserPlus size={16} />
            <span>Open Student Account</span>
          </button>

          <button
            onClick={onExploreServices}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-extrabold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-sm uppercase tracking-wider transition-all"
          >
            <span>Explore Services</span>
            <ArrowRight size={15} />
          </button>

          <button
            onClick={onContactUs}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-slate-300 hover:text-white uppercase tracking-wider transition-all"
          >
            <PhoneCall size={15} className="text-[#DFB748]" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
};
