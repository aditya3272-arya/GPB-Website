import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  Lock, 
  FileSpreadsheet, 
  Award,
  BadgeCheck
} from 'lucide-react';
import { TRUST_PILLARS } from '../data/bankingData';

export const TrustSection: React.FC = () => {
  const getPillarIcon = (name: string) => {
    const props = { size: 24, className: 'text-[#002D62]' };
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Users': return <Users {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      default: return <BadgeCheck {...props} />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Gold Accent Bar */}
          <div className="w-12 h-1 bg-[#C5A059] mx-auto mb-4"></div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white border border-slate-200 text-xs font-extrabold text-[#002D62] uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            Institutional Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002D62] tracking-tight">
            Banking You Can Trust
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal mt-2 leading-relaxed">
            Built upon principles of integrity, transparency, and operational rigor. Gurukul PREMIER Bank maintains institutional standards across every transaction, ledger entry, and student consultation.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-sm border border-slate-200 border-t-4 border-t-[#C5A059] p-6 shadow-banking hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Pillar Icon & Stat */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  {pillar.statNumber && (
                    <div className="text-right">
                      <div className="text-lg font-extrabold text-[#002D62]">
                        {pillar.statNumber}
                      </div>
                      <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">
                        {pillar.statLabel}
                      </div>
                    </div>
                  )}
                </div>

                {/* Pillar Title */}
                <h3 className="text-base font-extrabold text-[#002D62] mb-2 tracking-tight">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#C5A059] uppercase tracking-wider">
                <BadgeCheck size={14} />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Safeguards Strip */}
        <div className="bg-white rounded-sm border border-slate-200 p-6 sm:p-8 shadow-banking">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Safeguard 1 */}
            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pr-4">
              <div className="w-10 h-10 rounded-sm bg-amber-50 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                <Lock size={20} className="text-[#C5A059]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#002D62]">
                  Dual-Signatory Verification
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  High-value transactions require mandatory authentication from both the Maker Desk and Checker Officer.
                </p>
              </div>
            </div>

            {/* Safeguard 2 */}
            <div className="flex items-start gap-4 pt-4 md:pt-0 md:px-4">
              <div className="w-10 h-10 rounded-sm bg-amber-50 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                <FileSpreadsheet size={20} className="text-[#C5A059]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#002D62]">
                  Daily Cashbook Balancing
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Every counter session concludes with end-of-day ledger reconciliation and physical vault audit.
                </p>
              </div>
            </div>

            {/* Safeguard 3 */}
            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-4">
              <div className="w-10 h-10 rounded-sm bg-amber-50 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                <Award size={20} className="text-[#C5A059]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#002D62]">
                  Transparent Passbooks
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Physical passbook printing with official stamps ensures every accountholder has verifiable paper records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
