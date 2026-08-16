import React, { useState } from 'react';
import { 
  BANKING_ROLES 
} from '../data/bankingData';
import { TeamMemberRole } from '../types';
import { 
  User, 
  Sparkles, 
  Info, 
  MapPin, 
  CheckCircle, 
  ChevronRight, 
  Edit3, 
  RotateCcw,
  Sliders,
  Play,
  Pause
} from 'lucide-react';

interface TeamCarouselProps {
  onSelectRole?: (role: TeamMemberRole) => void;
}

export const TeamCarousel: React.FC<TeamCarouselProps> = ({ onSelectRole }) => {
  const [selectedRole, setSelectedRole] = useState<TeamMemberRole | null>(null);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [customRoles, setCustomRoles] = useState<TeamMemberRole[]>(BANKING_ROLES);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<'normal' | 'slow' | 'fast'>('normal');

  // Handle live test edit for teachers/students if they want to preview their real names
  const handleUpdateName = (id: string, newName: string) => {
    setCustomRoles((prev) =>
      prev.map((r) => (r.id === id ? { ...r, customName: newName } : r))
    );
  };

  const handleResetToDefaults = () => {
    setCustomRoles(BANKING_ROLES);
  };

  // Speed duration mapping for smooth linear conveyor belt
  const speedDuration = {
    slow: '60s',
    normal: '40s',
    fast: '25s'
  }[speed];

  // We duplicate the array 3 times to ensure infinite seamless linear conveyor belt looping
  const duplicatedRoles = [...customRoles, ...customRoles, ...customRoles];

  return (
    <section id="team" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* Gold Accent Bar */}
            <div className="w-12 h-1 bg-[#C5A059] mb-4"></div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white border border-slate-200 text-xs font-extrabold text-[#002D62] uppercase tracking-wider mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              Class Activity Operations
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002D62] tracking-tight">
              Our Banking Team
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal max-w-2xl mt-1.5">
              Meet the 10 dedicated student officers managing daily counters, customer relations, verification desks, and financial management for Gurukul PREMIER Bank.
            </p>
          </div>

          {/* Carousel Control Toolbar */}
          <div className="flex items-center gap-2 self-start md:self-end">
            {/* Pause/Play toggle */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-sm transition-colors shadow-2xs uppercase tracking-wider"
              title={isPaused ? 'Resume conveyor belt' : 'Pause conveyor belt'}
            >
              {isPaused ? <Play size={13} className="text-emerald-600" /> : <Pause size={13} className="text-slate-600" />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>

            {/* Speed Selector */}
            <div className="hidden sm:flex items-center bg-white border border-slate-300 rounded-sm p-0.5 text-xs font-bold text-slate-600 shadow-2xs">
              <button
                onClick={() => setSpeed('slow')}
                className={`px-2 py-1 rounded-2xs transition-colors uppercase tracking-wider ${speed === 'slow' ? 'bg-[#002D62] text-white font-extrabold' : 'hover:text-[#002D62]'}`}
              >
                Relaxed
              </button>
              <button
                onClick={() => setSpeed('normal')}
                className={`px-2 py-1 rounded-2xs transition-colors uppercase tracking-wider ${speed === 'normal' ? 'bg-[#002D62] text-white font-extrabold' : 'hover:text-[#002D62]'}`}
              >
                Normal
              </button>
              <button
                onClick={() => setSpeed('fast')}
                className={`px-2 py-1 rounded-2xs transition-colors uppercase tracking-wider ${speed === 'fast' ? 'bg-[#002D62] text-white font-extrabold' : 'hover:text-[#002D62]'}`}
              >
                Faster
              </button>
            </div>

            {/* Optional Personalization Editor Toggle */}
            <button
              onClick={() => setIsCustomizing(!isCustomizing)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#002D62] bg-amber-50 hover:bg-amber-100 border border-[#C5A059]/50 rounded-sm transition-colors shadow-2xs uppercase tracking-wider"
            >
              <Edit3 size={13} className="text-[#C5A059]" />
              <span>{isCustomizing ? 'Done' : 'Fill Names'}</span>
            </button>
          </div>
        </div>

        {/* Live In-Browser Customization Panel */}
        {isCustomizing && (
          <div className="mt-6 bg-white p-5 rounded-sm border border-amber-200 shadow-sm animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <div>
                <h4 className="text-xs font-extrabold text-[#002D62] uppercase tracking-wider">
                  Quick Name Replacement Tool (10 Roles)
                </h4>
                <p className="text-[11px] text-slate-500">
                  Type student names here to instantly update the carousel cards on this page.
                </p>
              </div>
              <button
                onClick={handleResetToDefaults}
                className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-red-700 hover:underline font-bold"
              >
                <RotateCcw size={12} />
                <span>Reset to [STUDENT NAME]</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {customRoles.map((item, idx) => (
                <div key={item.id} className="text-xs bg-slate-50 p-2.5 rounded-sm border border-slate-200">
                  <div className="font-bold text-[#002D62] truncate text-[11px] mb-1">
                    {idx + 1}. {item.role}
                  </div>
                  <input
                    type="text"
                    value={item.customName || ''}
                    placeholder="[STUDENT NAME]"
                    onChange={(e) => handleUpdateName(item.id, e.target.value)}
                    className="w-full px-2 py-1 text-xs bg-white border border-slate-300 rounded-sm focus:border-[#002D62] outline-none font-bold"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 
        CRITICAL CAROUSEL TRACK:
        Strictly Straight Horizontal Conveyor Belt moving from LEFT → RIGHT.
        No bouncing, no curves, no 3D rotation, perfectly linear and continuous.
      */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft edge masking for realistic subtle blend */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div
          className="animate-marquee-ltr"
          style={{
            animationDuration: speedDuration,
            animationPlayState: isPaused ? 'paused' : undefined
          }}
        >
          {duplicatedRoles.map((item, index) => {
            const displayName = item.customName?.trim() ? item.customName : item.namePlaceholder;
            const isPlaceholder = !item.customName?.trim();

            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => {
                  setSelectedRole(item);
                  if (onSelectRole) onSelectRole(item);
                }}
                className="w-72 sm:w-80 shrink-0 mx-3 sm:mx-4 bg-white rounded-sm border border-slate-200 border-t-4 border-t-[#C5A059] shadow-banking hover:shadow-lg hover:border-[#002D62]/60 transition-all duration-200 cursor-pointer flex flex-col group"
              >
                <div className="p-5 flex flex-col flex-1">
                  {/* Top Desk Badge & Department */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold text-[#002D62] bg-slate-100 px-2.5 py-0.5 rounded-sm border border-slate-200 tracking-wider">
                      {item.deskNumber}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      {item.department}
                    </span>
                  </div>

                  {/* Student Photo Placeholder Frame */}
                  <div className="w-28 h-32 mx-auto rounded-sm border-2 border-dashed border-[#C5A059]/60 bg-slate-50/80 group-hover:border-[#002D62] group-hover:bg-slate-100/50 transition-colors flex flex-col items-center justify-center p-2 mb-4 relative overflow-hidden">
                    <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-400 group-hover:text-[#002D62] group-hover:bg-amber-100 transition-colors flex items-center justify-center mb-1.5">
                      <User size={20} />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight text-slate-600 uppercase text-center leading-tight">
                      {item.photoPlaceholder}
                    </span>
                    <span className="text-[8px] text-slate-400 mt-0.5 uppercase tracking-wider font-semibold">
                      Passport Size
                    </span>
                  </div>

                  {/* Student Name */}
                  <div className="text-center mb-2">
                    <h3 className={`text-base font-extrabold tracking-tight ${isPlaceholder ? 'text-slate-800' : 'text-[#002D62]'}`}>
                      {displayName}
                    </h3>
                  </div>

                  {/* Banking Role (Visually Prominent) */}
                  <div className="text-center pt-2 border-t border-slate-100 mb-3">
                    <div className="inline-block px-3 py-1 rounded-sm bg-[#002D62]/5 text-[#002D62] font-extrabold text-xs tracking-wider uppercase border border-[#002D62]/15 group-hover:bg-[#002D62] group-hover:text-white transition-colors">
                      {item.role}
                    </div>
                  </div>

                  {/* Brief Role Duties Preview */}
                  <p className="text-[11px] text-slate-600 text-center leading-relaxed line-clamp-2 mt-auto">
                    {item.description}
                  </p>

                  {/* Click to inspect prompt */}
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-[#002D62] transition-colors uppercase tracking-wider">
                    <span>Officer Desk Details</span>
                    <ChevronRight size={13} className="text-[#C5A059]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Role Details Modal Drawer */}
      {selectedRole && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedRole(null)}
        >
          <div 
            className="bg-white rounded-sm max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#002D62] text-white p-5 flex items-center justify-between border-b border-[#C5A059]/40">
              <div className="flex items-center gap-2.5">
                <span className="bg-[#C5A059] text-[#001a3a] font-extrabold text-xs px-2 py-0.5 rounded-sm">
                  {selectedRole.deskNumber}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {selectedRole.role}
                </h3>
              </div>
              <button
                onClick={() => setSelectedRole(null)}
                className="text-slate-300 hover:text-white p-1 rounded-sm hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              {/* Officer Profile Summary */}
              <div className="flex items-center gap-4 p-3.5 bg-slate-50 rounded-sm border border-slate-200">
                <div className="w-16 h-20 rounded-sm border-2 border-dashed border-[#C5A059] bg-white flex flex-col items-center justify-center text-center p-1 shrink-0">
                  <User size={20} className="text-slate-400 mb-0.5" />
                  <span className="text-[8px] text-slate-500 font-bold">
                    {selectedRole.photoPlaceholder}
                  </span>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                    Appointed Student Officer
                  </div>
                  <div className="text-base font-extrabold text-[#002D62]">
                    {selectedRole.customName || selectedRole.namePlaceholder}
                  </div>
                  <div className="text-xs text-[#C5A059] font-bold flex items-center gap-1 mt-0.5 uppercase tracking-wider">
                    <MapPin size={12} />
                    <span>{selectedRole.department}</span>
                  </div>
                </div>
              </div>

              {/* Desk Operational Description */}
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-1.5">
                  Desk Responsibilities & Purpose
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedRole.description}
                </p>
              </div>

              {/* Key Duties Checklist */}
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-2">
                  Key Operational Duties
                </h4>
                <ul className="space-y-2">
                  {selectedRole.keyResponsibilities.map((duty, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#C5A059] mt-0.5 shrink-0" />
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  Gurukul PREMIER Bank • Operations
                </span>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="px-4 py-1.5 text-xs font-bold text-white bg-[#002D62] hover:bg-[#0A3B75] rounded-sm uppercase tracking-wider"
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
