import React from 'react';
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Wallet,
  Landmark,
  BadgePercent,
  Calculator
} from 'lucide-react';
import { BankLogo } from './BankLogo';

interface HeroProps {
  onOpenAccountOpening: () => void;
  onOpenNetBanking: () => void;
  onExploreServices: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAccountOpening,
  onOpenNetBanking,
  onExploreServices,
  onOpenCalculator
}) => {
  return (
    <section id="hero" className="relative bg-white border-b border-slate-200 overflow-hidden">
      {/* Background Subtle Institutional Watermark & Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <div className="scale-150">
          <BankLogo size={900} showText={false} />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50/70 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-16 lg:pt-16 lg:pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Gold Accent Bar */}
            <div className="w-12 h-1 bg-[#C5A059]"></div>

            {/* Top Institutional Pillar Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-50 border border-slate-200 text-xs font-bold text-[#002D62] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
              <span className="text-slate-500 font-semibold">Institutional Values:</span>
              <span className="text-[#002D62] font-extrabold">Trust • Security • Growth • Service</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002D62] tracking-tight leading-[1.12]">
                Banking Built on <span className="text-[#002D62] relative inline-block">
                  Trust.
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-[#C5A059] rounded-sm opacity-90"></span>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl pt-2">
                Gurukul PREMIER Bank provides dependable banking solutions, disciplined wealth management, and customer-focused financial services tailored for our school and community activities.
              </p>
            </div>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 size={16} className="text-[#C5A059] shrink-0" />
                <span>Zero Fee Accounts</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 size={16} className="text-[#C5A059] shrink-0" />
                <span>8.10% p.a. Fixed Deposit</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 size={16} className="text-[#C5A059] shrink-0" />
                <span>10 Specialized Desks</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenAccountOpening}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-extrabold text-white bg-[#002D62] hover:bg-[#0A3B75] rounded-sm transition-all shadow-banking hover:shadow-lg border border-[#001a3a] active:scale-[0.98] uppercase tracking-wider cursor-pointer"
              >
                <span>Open an Account</span>
                <ArrowRight size={16} className="text-[#DFB748]" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-[#002D62] bg-white hover:bg-slate-50 rounded-sm transition-all border border-slate-300 shadow-2xs uppercase tracking-wider cursor-pointer"
              >
                <span>Explore Services</span>
              </button>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-bold text-slate-600 hover:text-[#002D62] transition-colors uppercase tracking-wider cursor-pointer"
              >
                <Calculator size={15} className="text-[#C5A059]" />
                <span>Interest Calculator</span>
              </button>
            </div>

            {/* Institutional Stats Summary Strip */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#002D62]">7.25%</div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Savings Interest</div>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <div className="text-xl sm:text-2xl font-extrabold text-[#002D62]">100%</div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Audit Compliance</div>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <div className="text-xl sm:text-2xl font-extrabold text-[#002D62]">10 Desks</div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Active Staff</div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Banking Services Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Decorative institutional backing card */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#002D62] via-[#C5A059]/20 to-[#002D62] rounded-lg opacity-20 blur-xs" />

              {/* Main Premium Presentation Container with Gold Top Accent */}
              <div className="relative bg-white rounded-sm border border-slate-200 border-t-4 border-t-[#C5A059] shadow-banking overflow-hidden">
                {/* Card Top Banner with Seal */}
                <div className="bg-[#002D62] p-5 text-white flex items-center justify-between border-b border-[#C5A059]/40">
                  <div className="flex items-center gap-3">
                    <BankLogo size={40} showText={false} />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-100">
                        GURUKUL PREMIER BANK
                      </div>
                      <div className="text-[10px] text-[#DFB748] font-bold tracking-widest uppercase mt-0.5">
                        PREMIER BANKING SERVICES
                      </div>
                    </div>
                  </div>
                  <div className="w-9 h-7 rounded-sm bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
                    <div className="w-5 h-4 rounded-2xs border border-[#C5A059] grid grid-cols-2 gap-0.5 p-0.5">
                      <div className="bg-amber-300/60 rounded-2xs"></div>
                      <div className="bg-amber-300/60 rounded-2xs"></div>
                    </div>
                  </div>
                </div>

                {/* Card Interior Details */}
                <div className="p-5 space-y-4">
                  {/* Introductory Panel */}
                  <div className="bg-slate-50 rounded-sm p-3.5 border border-slate-200">
                    <div className="text-[10px] uppercase font-extrabold text-[#C5A059] tracking-wider mb-0.5">
                      BANKING SERVICES
                    </div>
                    <div className="text-sm font-extrabold text-[#002D62]">
                      Solutions Designed Around You
                    </div>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed mt-1">
                      Explore our essential banking services, designed to make everyday banking simple, reliable, and convenient.
                    </p>
                  </div>

                  {/* 2x2 Service Grid */}
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    {/* Service 1 */}
                    <div className="p-3 rounded-sm border border-slate-200 bg-white hover:border-[#002D62]/40 transition-colors">
                      <div className="w-7 h-7 rounded-sm bg-[#002D62]/5 border border-[#002D62]/10 flex items-center justify-center mb-2">
                        <Wallet size={15} className="text-[#C5A059]" />
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs">
                        Accounts
                      </div>
                      <div className="text-[10.5px] text-slate-500 mt-0.5 font-medium">
                        Savings • Current • Student
                      </div>
                    </div>

                    {/* Service 2 */}
                    <div className="p-3 rounded-sm border border-slate-200 bg-white hover:border-[#002D62]/40 transition-colors">
                      <div className="w-7 h-7 rounded-sm bg-[#002D62]/5 border border-[#002D62]/10 flex items-center justify-center mb-2">
                        <Landmark size={15} className="text-[#C5A059]" />
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs">
                        Deposits
                      </div>
                      <div className="text-[10.5px] text-slate-500 mt-0.5 font-medium">
                        Fixed • Recurring
                      </div>
                    </div>

                    {/* Service 3 */}
                    <div className="p-3 rounded-sm border border-slate-200 bg-white hover:border-[#002D62]/40 transition-colors">
                      <div className="w-7 h-7 rounded-sm bg-[#002D62]/5 border border-[#002D62]/10 flex items-center justify-center mb-2">
                        <BadgePercent size={15} className="text-[#C5A059]" />
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs">
                        Loans & Credit
                      </div>
                      <div className="text-[10.5px] text-slate-500 mt-0.5 font-medium">
                        Flexible Financial Solutions
                      </div>
                    </div>

                    {/* Service 4 */}
                    <div className="p-3 rounded-sm border border-slate-200 bg-white hover:border-[#002D62]/40 transition-colors">
                      <div className="w-7 h-7 rounded-sm bg-[#002D62]/5 border border-[#002D62]/10 flex items-center justify-center mb-2">
                        <TrendingUp size={15} className="text-[#C5A059]" />
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs">
                        Investments
                      </div>
                      <div className="text-[10.5px] text-slate-500 mt-0.5 font-medium">
                        Plan • Grow • Secure
                      </div>
                    </div>
                  </div>

                  {/* Clean Institutional Bottom Strip */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-600">
                      Trusted Banking • Professional Service
                    </span>
                    <span className="font-extrabold text-[#C5A059] text-[10px] tracking-wider">
                      EST. 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
