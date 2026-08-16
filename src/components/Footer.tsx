import React from 'react';
import { BankLogo } from './BankLogo';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onOpenAccountOpening: () => void;
  onOpenNetBanking: () => void;
  onReplaySplash?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAccountOpening,
  onOpenNetBanking,
  onReplaySplash
}) => {
  return (
    <footer className="bg-[#001D42] text-slate-300 border-t border-[#002D62] text-xs">
      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column (Col Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <BankLogo 
              size={54} 
              showText={true} 
              textColor="text-white" 
              subtextColor="text-[#DFB748]" 
            />
            <p className="text-slate-300 leading-relaxed text-xs pt-1 pr-4">
              Gurukul PREMIER Bank is a specialized school activity banking institution dedicated to practical financial education, disciplined savings, and trustworthy counter banking operations.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#DFB748] shrink-0" />
                <span>Banking Activity Centre • Gurukul The School</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#DFB748] shrink-0" />
                <span>Operating Sessions: 09:00 AM – 03:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                <span>10 Specialized Student-Managed Desks</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (Col Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs border-b border-[#002D62] pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#hero" className="hover:text-white hover:underline transition-colors flex items-center gap-1 font-semibold">
                  <ChevronRight size={11} className="text-[#C5A059]" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors flex items-center gap-1 font-semibold">
                  <ChevronRight size={11} className="text-[#C5A059]" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white hover:underline transition-colors flex items-center gap-1 font-semibold">
                  <ChevronRight size={11} className="text-[#C5A059]" />
                  <span>Banking Team</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline transition-colors flex items-center gap-1 font-semibold">
                  <ChevronRight size={11} className="text-[#C5A059]" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline transition-colors flex items-center gap-1 font-semibold">
                  <ChevronRight size={11} className="text-[#C5A059]" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Banking Products Column (Col Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs border-b border-[#002D62] pb-2">
              Banking Products
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#services" className="hover:text-white hover:underline transition-colors flex items-center gap-1 font-semibold">
                  <ChevronRight size={11} className="text-[#C5A059]" />
                  <span>Student Savings Account</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline transition-colors flex items-center gap-1 font-semibold">
                  <ChevronRight size={11} className="text-[#C5A059]" />
                  <span>Class Club Current Account</span>
                </a>
              </li>
              <li>
                <a href="#loans" className="hover:text-white hover:underline transition-colors flex items-center gap-1 font-semibold">
                  <ChevronRight size={11} className="text-[#C5A059]" />
                  <span>Fixed & Recurring Deposits</span>
                </a>
              </li>
              <li>
                <a href="#loans" className="hover:text-white hover:underline transition-colors flex items-center gap-1 font-semibold">
                  <ChevronRight size={11} className="text-[#C5A059]" />
                  <span>Loans & Academic Credit</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline transition-colors flex items-center gap-1 font-semibold">
                  <ChevronRight size={11} className="text-[#C5A059]" />
                  <span>Insurance & Protection Plans</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Quick Action Column (Col Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs border-b border-[#002D62] pb-2">
              Support & Actions
            </h4>
            <div className="space-y-2.5 pt-1">
              <button
                onClick={onOpenAccountOpening}
                className="w-full text-left p-2.5 rounded-sm bg-[#002D62] hover:bg-[#00387a] border border-[#C5A059]/40 transition-colors block"
              >
                <div className="text-white font-extrabold text-xs flex items-center justify-between uppercase tracking-wider">
                  <span>Open Student Account</span>
                  <ChevronRight size={13} className="text-[#DFB748]" />
                </div>
                <div className="text-[10px] text-slate-300 mt-0.5">
                  Instant KYC starter kit allotment
                </div>
              </button>

              <button
                onClick={onOpenNetBanking}
                className="w-full text-left p-2.5 rounded-sm bg-[#002D62] hover:bg-[#00387a] border border-[#C5A059]/40 transition-colors block"
              >
                <div className="text-white font-extrabold text-xs flex items-center justify-between uppercase tracking-wider">
                  <span>Internet Banking Login</span>
                  <ChevronRight size={13} className="text-[#DFB748]" />
                </div>
                <div className="text-[10px] text-slate-300 mt-0.5">
                  Access passbook & transaction records
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Strip */}
        <div className="mt-10 pt-6 border-t border-[#002D62] text-[11px] text-slate-400 leading-relaxed">
          <p className="bg-[#00142e] p-3 rounded-sm border border-[#002D62]">
            <strong className="text-slate-200">Institutional Activity Note: </strong> 
            Gurukul PREMIER Bank (GPB) operates as an educational simulated commercial bank project for classroom activities and student financial literacy. All accounts, certificates, vouchers, and transactions are managed internally within the academic learning environment.
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#001228] py-4 px-4 sm:px-8 border-t border-[#001D42] text-slate-400 text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span>© 2026 <strong className="text-slate-300">Gurukul PREMIER Bank</strong>. All Rights Reserved.</span>
            {onReplaySplash && (
              <>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <button
                  onClick={onReplaySplash}
                  className="text-[10px] text-slate-400 hover:text-[#DFB748] underline uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Replay Security Screen
                </button>
              </>
            )}
          </div>
          <div className="text-xs font-bold tracking-widest text-[#DFB748] uppercase">
            Trust • Grow • Prosper
          </div>
        </div>
      </div>
    </footer>
  );
};
