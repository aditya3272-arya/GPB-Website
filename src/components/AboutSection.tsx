import React from 'react';
import { 
  Building2, 
  Target, 
  ShieldCheck, 
  Sparkles, 
  GraduationCap, 
  BookOpen,
  Award
} from 'lucide-react';
import { BankLogo } from './BankLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Institutional Brand & Seal */}
          <div className="lg:col-span-5 flex flex-col items-center text-center p-8 bg-white rounded-sm border border-slate-200 border-t-4 border-t-[#C5A059] shadow-banking relative">
            <div className="w-48 h-48 mb-6 drop-shadow-sm">
              <BankLogo size={192} showText={false} />
            </div>

            <h3 className="text-xl font-extrabold text-[#002D62] tracking-tight">
              Gurukul PREMIER Bank
            </h3>
            <p className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase mt-1">
              Trust • Grow • Prosper
            </p>

            <div className="w-full mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4 text-left">
              <div className="bg-slate-50 p-3 rounded-sm border border-slate-200">
                <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">Activity Bank</div>
                <div className="text-xs font-bold text-[#002D62] mt-0.5">Gurukul The School</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-sm border border-slate-200">
                <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">Operating Model</div>
                <div className="text-xs font-bold text-[#002D62] mt-0.5">10 Specialized Desks</div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Banking Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              {/* Gold Accent Bar */}
              <div className="w-12 h-1 bg-[#C5A059] mb-4"></div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white border border-slate-200 text-xs font-extrabold text-[#002D62] uppercase tracking-wider mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                About Our Institution
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002D62] tracking-tight">
                Instilling Real-World Financial Excellence
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Gurukul PREMIER Bank is established as a model commercial banking institution designed to provide students with immersive, hands-on exposure to modern financial operations, credit governance, liquidity management, and ethical banking services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-sm border border-slate-200 border-t-2 border-t-[#C5A059] shadow-2xs">
                <div className="w-8 h-8 rounded-sm bg-amber-50 border border-[#C5A059]/40 flex items-center justify-center mb-2.5">
                  <Target size={16} className="text-[#C5A059]" />
                </div>
                <h4 className="text-xs font-extrabold text-[#002D62] uppercase tracking-wider">
                  Our Mission
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  To cultivate disciplined financial habits, rigorous accounting standards, and deep practical literacy through authentic counter banking.
                </p>
              </div>

              <div className="bg-white p-4 rounded-sm border border-slate-200 border-t-2 border-t-[#C5A059] shadow-2xs">
                <div className="w-8 h-8 rounded-sm bg-amber-50 border border-[#C5A059]/40 flex items-center justify-center mb-2.5">
                  <ShieldCheck size={16} className="text-[#C5A059]" />
                </div>
                <h4 className="text-xs font-extrabold text-[#002D62] uppercase tracking-wider">
                  Governance & Compliance
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Structured with maker-checker accountability, dual-signatory verification, and complete ledger transparency for every account.
                </p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-sm border border-slate-200 flex items-center gap-3.5 shadow-2xs">
              <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#002D62] shrink-0">
                <GraduationCap size={20} />
              </div>
              <div className="text-xs text-slate-700 leading-relaxed">
                <strong className="text-[#002D62] font-bold">100% Student-Managed Desks: </strong>
                From KYC verification to cash management, loan appraisals, and insurance vouchers, every counter is operated by student banking officers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
