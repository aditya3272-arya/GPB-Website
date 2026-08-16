import React, { useState } from 'react';
import { BANKING_ROLES } from '../data/bankingData';
import { TeamMemberRole } from '../types';
import { 
  MapPin, 
  CheckCircle, 
  ChevronRight, 
  Play,
  Pause,
  Layers
} from 'lucide-react';

interface TeamCarouselProps {
  onSelectRole?: (role: TeamMemberRole) => void;
}

export const TeamCarousel: React.FC<TeamCarouselProps> = ({ onSelectRole }) => {
  const [selectedRole, setSelectedRole] = useState<TeamMemberRole | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<'normal' | 'slow' | 'fast'>('normal');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [filterDesk, setFilterDesk] = useState<number | 'all'>('all');

  const handleImageError = (roleId: string) => {
    setFailedImages((prev) => ({ ...prev, [roleId]: true }));
  };

  // Speed duration mapping for smooth linear conveyor belt
  const speedDuration = {
    slow: '75s',
    normal: '48s',
    fast: '30s'
  }[speed];

  // Filter roles if filtered by desk, otherwise display all
  const filteredRoles = filterDesk === 'all' 
    ? BANKING_ROLES 
    : BANKING_ROLES.filter((r) => r.deskId === filterDesk);

  // Duplicate the array 3 times for seamless linear infinite marquee
  const duplicatedRoles = [...filteredRoles, ...filteredRoles, ...filteredRoles];

  return (
    <section id="team" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* Gold Accent Bar */}
            <div className="w-12 h-1 bg-[#C5A059] mb-4"></div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white border border-slate-200 text-xs font-extrabold text-[#002D62] uppercase tracking-wider mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              Class Activity Banking Officers
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002D62] tracking-tight">
              Our Banking Desks & Officers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal max-w-2xl mt-1.5">
              Meet the 19 appointed student officers managing 10 operational counters across customer care, insurance, cash clearing, loans, and investment advisory.
            </p>
          </div>

          {/* Carousel Control Toolbar */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            {/* Pause/Play toggle */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-sm transition-colors shadow-2xs uppercase tracking-wider cursor-pointer"
              title={isPaused ? 'Resume conveyor belt' : 'Pause conveyor belt'}
            >
              {isPaused ? <Play size={13} className="text-emerald-600" /> : <Pause size={13} className="text-slate-600" />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>

            {/* Speed Selector */}
            <div className="flex items-center bg-white border border-slate-300 rounded-sm p-0.5 text-xs font-bold text-slate-600 shadow-2xs">
              <button
                onClick={() => setSpeed('slow')}
                className={`px-2 py-1 rounded-2xs transition-colors uppercase tracking-wider cursor-pointer ${speed === 'slow' ? 'bg-[#002D62] text-white font-extrabold' : 'hover:text-[#002D62]'}`}
              >
                Slow
              </button>
              <button
                onClick={() => setSpeed('normal')}
                className={`px-2 py-1 rounded-2xs transition-colors uppercase tracking-wider cursor-pointer ${speed === 'normal' ? 'bg-[#002D62] text-white font-extrabold' : 'hover:text-[#002D62]'}`}
              >
                Normal
              </button>
              <button
                onClick={() => setSpeed('fast')}
                className={`px-2 py-1 rounded-2xs transition-colors uppercase tracking-wider cursor-pointer ${speed === 'fast' ? 'bg-[#002D62] text-white font-extrabold' : 'hover:text-[#002D62]'}`}
              >
                Fast
              </button>
            </div>
          </div>
        </div>

        {/* Desk Quick Filter Pills */}
        <div className="flex items-center gap-1.5 mt-6 overflow-x-auto pb-2 scrollbar-thin text-xs">
          <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1 shrink-0">
            <Layers size={13} />
            Filter Desk:
          </span>
          <button
            onClick={() => setFilterDesk('all')}
            className={`px-2.5 py-1 rounded-sm font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer ${filterDesk === 'all' ? 'bg-[#002D62] text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}
          >
            All Desks (19)
          </button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <button
              key={num}
              onClick={() => setFilterDesk(num)}
              className={`px-2.5 py-1 rounded-sm font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer ${filterDesk === num ? 'bg-[#002D62] text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}
            >
              Desk {num < 10 ? `0${num}` : num}
            </button>
          ))}
        </div>
      </div>

      {/* 
        CRITICAL CAROUSEL TRACK:
        Linear conveyor belt moving seamlessly from Left to Right.
      */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft edge masking for subtle blend */}
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
            const photoSrc = item.photoUrl;
            const isImageFailed = failedImages[item.id] || !photoSrc;

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
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[11px] font-extrabold text-[#002D62] bg-slate-100 px-2.5 py-0.5 rounded-sm border border-slate-200 tracking-wider">
                      {item.deskNumber}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider truncate max-w-[170px] text-right">
                      {item.department}
                    </span>
                  </div>

                  {/* Student Photo Card Frame */}
                  <div className="w-28 h-32 mx-auto rounded-sm border-2 border-slate-200 bg-slate-50 group-hover:border-[#C5A059] transition-colors relative overflow-hidden mb-3.5 shadow-inner flex items-center justify-center">
                    {!isImageFailed ? (
                      <img
                        src={photoSrc}
                        alt={item.name}
                        onError={() => handleImageError(item.id)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-gradient-to-b from-slate-50 to-slate-100">
                        <div className="w-12 h-12 rounded-full bg-[#002D62] text-[#DFB748] font-extrabold text-sm flex items-center justify-center shadow-xs mb-1.5">
                          {item.fallbackInitials || item.name.substring(0, 2).toUpperCase()}
                        </div>
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                          Passport Photo
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Student Name */}
                  <div className="text-center mb-1">
                    <h3 className="text-base font-extrabold tracking-tight text-[#002D62]">
                      {item.name}
                    </h3>
                  </div>

                  {/* Banking Role Badge */}
                  <div className="text-center pt-1.5 border-t border-slate-100 mb-2.5">
                    <div className="inline-block px-3 py-1 rounded-sm bg-[#002D62]/5 text-[#002D62] font-extrabold text-[11px] tracking-wider uppercase border border-[#002D62]/15 group-hover:bg-[#002D62] group-hover:text-white transition-colors">
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
                <h3 className="text-base font-bold text-white">
                  {selectedRole.role}
                </h3>
              </div>
              <button
                onClick={() => setSelectedRole(null)}
                className="text-slate-300 hover:text-white p-1 rounded-sm hover:bg-white/10 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              {/* Officer Profile Summary */}
              <div className="flex items-center gap-4 p-3.5 bg-slate-50 rounded-sm border border-slate-200">
                <div className="w-16 h-20 rounded-sm border border-slate-300 bg-white flex flex-col items-center justify-center text-center p-0.5 shrink-0 overflow-hidden">
                  {!failedImages[selectedRole.id] && selectedRole.photoUrl ? (
                    <img
                      src={selectedRole.photoUrl}
                      alt={selectedRole.name}
                      onError={() => handleImageError(selectedRole.id)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#002D62] text-[#DFB748] font-extrabold text-sm">
                      {selectedRole.fallbackInitials || selectedRole.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                    Appointed Student Officer
                  </div>
                  <div className="text-base font-extrabold text-[#002D62]">
                    {selectedRole.name}
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
                  className="px-4 py-1.5 text-xs font-bold text-white bg-[#002D62] hover:bg-[#0A3B75] rounded-sm uppercase tracking-wider cursor-pointer"
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
