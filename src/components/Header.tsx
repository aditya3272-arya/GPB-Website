import React, { useState, useEffect } from 'react';
import { BankLogo } from './BankLogo';
import { 
  Phone, 
  Clock, 
  Lock, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  UserPlus
} from 'lucide-react';
import { NOTICES } from '../data/bankingData';

interface HeaderProps {
  onOpenNetBanking: () => void;
  onOpenAccountOpening: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNetBanking,
  onOpenAccountOpening,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNoticeIndex((prev) => (prev + 1) % NOTICES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Streamlined, clean navigation links without redundancy
  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Banking Desks', href: '#team', id: 'team', badge: '10 Desks' },
    { 
      name: 'Services', 
      href: '#services', 
      id: 'services',
      hasDropdown: true,
      subItems: [
        { name: 'Student Savings Accounts', href: '#services', desc: 'Zero min. balance privilege accounts' },
        { name: 'Class Club Accounts', href: '#services', desc: 'Current accounts for school societies' },
        { name: 'Term Deposits (FD/RD)', href: '#loans', desc: 'Quarterly compounding guaranteed returns' },
        { name: 'Insurance & Cheque Desk', href: '#services', desc: 'Activity cover & chequebook issuance' },
      ]
    },
    { name: 'Calculators', href: '#loans', id: 'loans' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-banking">
      {/* Top Institutional Ribbon */}
      <div className="bg-[#002D62] text-slate-100 text-[11px] py-1.5 px-4 sm:px-8 border-b border-[#C5A059]/25">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Notice Ticker */}
          <div className="flex items-center gap-2 overflow-hidden flex-1 max-w-2xl">
            <span className="bg-[#C5A059] text-[#002D62] font-extrabold px-1.5 py-0.5 rounded-xs text-[9.5px] uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Sparkles size={10} />
              Notice
            </span>
            <span className="truncate text-slate-200 font-medium">
              {NOTICES[currentNoticeIndex]?.text}
            </span>
          </div>

          {/* Institutional Fast Info */}
          <div className="hidden md:flex items-center gap-6 text-slate-300 text-[11px] shrink-0">
            <div className="flex items-center gap-1.5 font-medium">
              <Clock size={12} className="text-[#C5A059]" />
              <span>09:00 - 15:30 (Mon-Fri)</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Phone size={12} className="text-[#C5A059]" />
              <span>Desk 02 Support</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold text-emerald-300">
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>Official Activity Portal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-200 border-b border-slate-200/80 ${scrolled ? 'py-2.5 bg-white/98 backdrop-blur-md' : 'py-3.5 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#hero" className="flex items-center gap-2.5 group outline-none shrink-0" aria-label="Gurukul PREMIER Bank Home">
            <BankLogo size={46} showText={true} />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-extrabold uppercase tracking-wider text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <div 
                  key={link.name} 
                  className="relative py-2"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={`inline-flex items-center gap-1.5 py-1 transition-colors relative ${
                      isActive
                        ? 'text-[#002D62] font-black'
                        : 'text-slate-700 hover:text-[#002D62]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[9px] bg-amber-50 text-[#002D62] font-extrabold px-1.5 py-0.5 rounded-xs border border-[#C5A059]/40 uppercase tracking-tight">
                        {link.badge}
                      </span>
                    )}
                    {link.hasDropdown && (
                      <ChevronDown 
                        size={13} 
                        className={`text-slate-400 transition-transform duration-150 ${activeDropdown === link.name ? 'rotate-180 text-[#002D62]' : ''}`} 
                      />
                    )}
                    
                    {/* Active Accent Underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
                    )}
                  </a>

                  {/* Dropdown Menu for Services */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white shadow-xl rounded-sm border border-slate-200 border-t-2 border-t-[#C5A059] p-2 mt-0.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="px-3 py-1.5 text-[9.5px] uppercase font-extrabold tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                        Institutional Services
                      </div>
                      {link.subItems?.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2.5 rounded-sm hover:bg-slate-50 transition-colors group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="font-extrabold text-slate-800 text-xs group-hover:text-[#002D62] flex items-center justify-between uppercase tracking-wider">
                            <span>{item.name}</span>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-[#C5A059] transition-opacity" />
                          </div>
                          <div className="text-[11px] text-slate-500 font-normal normal-case leading-snug mt-0.5">
                            {item.desc}
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAccountOpening}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-extrabold text-[#002D62] bg-slate-50 hover:bg-slate-100 border border-slate-300 hover:border-[#C5A059] rounded-sm transition-all shadow-2xs uppercase tracking-wider active:scale-98"
              title="Apply for student bank account opening"
            >
              <UserPlus size={14} className="text-[#C5A059]" />
              <span>Open Account</span>
            </button>

            <button
              onClick={onOpenNetBanking}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-extrabold text-white bg-[#002D62] hover:bg-[#001D42] rounded-sm transition-all shadow-sm border border-[#001D42] active:scale-98 uppercase tracking-wider"
            >
              <Lock size={13} className="text-[#DFB748]" />
              <span>NetBanking</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenNetBanking}
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-extrabold text-white bg-[#002D62] rounded-sm uppercase tracking-wider"
            >
              <Lock size={12} className="text-[#DFB748]" />
              <span>Login</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#002D62] hover:bg-slate-100 rounded-sm border border-slate-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-2 pb-1 border-b border-slate-100">
            Quick Navigation
          </div>
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-xs font-extrabold uppercase tracking-wider rounded-sm flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-[#002D62] bg-slate-50 border-l-2 border-l-[#C5A059]'
                    : 'text-slate-700 hover:text-[#002D62] hover:bg-slate-50'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[9px] bg-amber-50 text-[#002D62] font-bold px-1.5 py-0.5 rounded-xs border border-[#C5A059]/40">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAccountOpening();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-extrabold text-[#002D62] bg-slate-50 hover:bg-slate-100 rounded-sm border border-slate-300 uppercase tracking-wider"
            >
              <UserPlus size={14} className="text-[#C5A059]" />
              <span>Open Student Account (KYC)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenNetBanking();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-extrabold text-white bg-[#002D62] hover:bg-[#001D42] rounded-sm shadow-xs uppercase tracking-wider"
            >
              <Lock size={14} className="text-[#DFB748]" />
              <span>Internet Banking Login</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
