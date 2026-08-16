import React from 'react';

interface BankLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  textColor?: string;
  subtextColor?: string;
}

export const BankLogo: React.FC<BankLogoProps> = ({
  className = '',
  size = 56,
  showText = true,
  textColor = 'navy-text',
  subtextColor = 'gold-accent'
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Exact Vector Seal Replica of Gurukul PREMIER Bank */}
      <svg
        viewBox="0 0 500 500"
        style={{ width: dimension, height: dimension, minWidth: dimension }}
        className="shrink-0 drop-shadow-sm"
        aria-label="Gurukul PREMIER Bank Seal"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFB748" />
            <stop offset="50%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#9A7718" />
          </linearGradient>
          <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#003B80" />
            <stop offset="100%" stopColor="#002D62" />
          </linearGradient>
        </defs>

        {/* Outer White Background */}
        <circle cx="250" cy="250" r="246" fill="#FFFFFF" />

        {/* Outer Navy Ring */}
        <circle cx="250" cy="250" r="236" fill="none" stroke="#002D62" strokeWidth="12" />

        {/* Inner Gold Ring */}
        <circle cx="250" cy="250" r="218" fill="none" stroke="url(#goldGradient)" strokeWidth="7" />

        {/* Outer Fine Gold Accent Ring */}
        <circle cx="250" cy="250" r="206" fill="none" stroke="#C5A059" strokeWidth="1.5" />


        {/* Left Laurel Wreath in Gold */}
        <g fill="url(#goldGradient)" transform="translate(10, 0)">
          {/* Leaves curving upward along left perimeter */}
          <path d="M 80 160 C 65 140 50 165 72 175 C 78 178 84 172 80 160 Z" />
          <path d="M 92 185 C 75 170 65 195 86 205 C 92 208 97 200 92 185 Z" />
          <path d="M 68 190 C 50 180 45 205 65 215 C 72 218 76 210 68 190 Z" />
          <path d="M 84 218 C 65 210 60 235 80 245 C 88 248 91 238 84 218 Z" />
          <path d="M 62 225 C 44 220 42 245 60 255 C 68 258 71 248 62 225 Z" />
          <path d="M 80 252 C 62 250 60 275 78 285 C 86 288 88 276 80 252 Z" />
          <path d="M 60 260 C 44 260 45 285 62 295 C 70 298 72 286 60 260 Z" />
          <path d="M 82 288 C 66 292 70 315 88 322 C 94 324 96 312 82 288 Z" />
          <path d="M 66 298 C 52 305 58 328 75 335 C 82 338 84 324 66 298 Z" />
          <path d="M 90 322 C 78 332 86 352 104 355 C 110 356 110 342 90 322 Z" />
          <path d="M 78 335 C 68 348 78 368 95 370 C 102 370 102 355 78 335 Z" />
          {/* Branch stem */}
          <path d="M 72 150 Q 52 255 105 375" fill="none" stroke="#C59B27" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Right Laurel Wreath in Gold */}
        <g fill="url(#goldGradient)" transform="translate(-10, 0)">
          {/* Leaves curving upward along right perimeter */}
          <path d="M 420 160 C 435 140 450 165 428 175 C 422 178 416 172 420 160 Z" />
          <path d="M 408 185 C 425 170 435 195 414 205 C 408 208 403 200 408 185 Z" />
          <path d="M 432 190 C 450 180 455 205 435 215 C 428 218 424 210 432 190 Z" />
          <path d="M 416 218 C 435 210 440 235 420 245 C 412 248 409 238 416 218 Z" />
          <path d="M 438 225 C 456 220 458 245 440 255 C 432 258 429 248 438 225 Z" />
          <path d="M 420 252 C 438 250 440 275 422 285 C 414 288 412 276 420 252 Z" />
          <path d="M 440 260 C 456 260 455 285 438 295 C 430 298 428 286 440 260 Z" />
          <path d="M 418 288 C 434 292 430 315 412 322 C 406 324 404 312 418 288 Z" />
          <path d="M 434 298 C 448 305 442 328 425 335 C 418 338 416 324 434 298 Z" />
          <path d="M 410 322 C 422 332 414 352 396 355 C 390 356 390 342 410 322 Z" />
          <path d="M 422 335 C 432 348 422 368 405 370 C 398 370 398 355 422 335 Z" />
          {/* Branch stem */}
          <path d="M 428 150 Q 448 255 395 375" fill="none" stroke="#C59B27" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Bank Temple / Classical Greek Facade */}
        <g id="bank-temple">
          {/* Pediment Roof (Navy Blue Triangle with Gold Trim) */}
          <polygon points="250,55 365,115 135,115" fill="#002D62" stroke="#C5A059" strokeWidth="4" />
          <polygon points="250,68 350,111 150,111" fill="#002D62" />

          {/* Book with Flame inside Pediment */}
          {/* Flame */}
          <path d="M 250 66 C 255 76 257 84 253 90 C 248 94 243 88 247 80 C 244 86 242 90 245 93 C 248 96 255 95 256 89 C 257 83 252 74 250 66 Z" fill="url(#goldGradient)" />
          {/* Open Book */}
          <path d="M 250 102 C 244 95 235 94 228 97 L 228 107 C 235 104 244 105 250 110 C 256 105 265 104 272 107 L 272 97 C 265 94 256 95 250 102 Z" fill="#DFB748" stroke="#002D62" strokeWidth="1" />
          {/* Book Spine */}
          <line x1="250" y1="102" x2="250" y2="110" stroke="#002D62" strokeWidth="1.5" />

          {/* Architrave / Pedestal bar under pediment */}
          <rect x="140" y="115" width="220" height="9" fill="url(#goldGradient)" rx="1" />
          <rect x="145" y="124" width="210" height="5" fill="#002D62" />

          {/* 4 Classical Columns */}
          {/* Column 1 */}
          <g transform="translate(162, 129)">
            <path d="M -9 0 C -9 -3 9 -3 9 0 C 9 3 -9 3 -9 0" fill="url(#goldGradient)" />
            <circle cx="-6" cy="1" r="3" fill="none" stroke="#C5A059" strokeWidth="1.5" />
            <circle cx="6" cy="1" r="3" fill="none" stroke="#C59B27" strokeWidth="1.5" />
            <rect x="-7.5" y="4" width="15" height="52" fill="#002D62" />
            <line x1="-3.5" y1="4" x2="-3.5" y2="56" stroke="url(#goldGradient)" strokeWidth="1.2" />
            <line x1="0" y1="4" x2="0" y2="56" stroke="url(#goldGradient)" strokeWidth="1.2" />
            <line x1="3.5" y1="4" x2="3.5" y2="56" stroke="url(#goldGradient)" strokeWidth="1.2" />
            <rect x="-9.5" y="56" width="19" height="5" fill="url(#goldGradient)" rx="1" />
          </g>

          {/* Column 2 */}
          <g transform="translate(220, 129)">
            <path d="M -9 0 C -9 -3 9 -3 9 0 C 9 3 -9 3 -9 0" fill="url(#goldGradient)" />
            <circle cx="-6" cy="1" r="3" fill="none" stroke="#C5A059" strokeWidth="1.5" />
            <circle cx="6" cy="1" r="3" fill="none" stroke="#C5A059" strokeWidth="1.5" />
            <rect x="-7.5" y="4" width="15" height="52" fill="#002D62" />
            <line x1="-3.5" y1="4" x2="-3.5" y2="56" stroke="url(#goldGradient)" strokeWidth="1.2" />
            <line x1="0" y1="4" x2="0" y2="56" stroke="url(#goldGradient)" strokeWidth="1.2" />
            <line x1="3.5" y1="4" x2="3.5" y2="56" stroke="url(#goldGradient)" strokeWidth="1.2" />
            <rect x="-9.5" y="56" width="19" height="5" fill="url(#goldGradient)" rx="1" />
          </g>

          {/* Column 3 */}
          <g transform="translate(280, 129)">
            <path d="M -9 0 C -9 -3 9 -3 9 0 C 9 3 -9 3 -9 0" fill="url(#goldGradient)" />
            <circle cx="-6" cy="1" r="3" fill="none" stroke="#C5A059" strokeWidth="1.5" />
            <circle cx="6" cy="1" r="3" fill="none" stroke="#C5A059" strokeWidth="1.5" />
            <rect x="-7.5" y="4" width="15" height="52" fill="#002D62" />
            <line x1="-3.5" y1="4" x2="-3.5" y2="56" stroke="url(#goldGradient)" strokeWidth="1.2" />
            <line x1="0" y1="4" x2="0" y2="56" stroke="url(#goldGradient)" strokeWidth="1.2" />
            <line x1="3.5" y1="4" x2="3.5" y2="56" stroke="url(#goldGradient)" strokeWidth="1.2" />
            <rect x="-9.5" y="56" width="19" height="5" fill="url(#goldGradient)" rx="1" />
          </g>

          {/* Column 4 */}
          <g transform="translate(338, 129)">
            <path d="M -9 0 C -9 -3 9 -3 9 0 C 9 3 -9 3 -9 0" fill="url(#goldGradient)" />
            <circle cx="-6" cy="1" r="3" fill="none" stroke="#C5A059" strokeWidth="1.5" />
            <circle cx="6" cy="1" r="3" fill="none" stroke="#C5A059" strokeWidth="1.5" />
            <rect x="-7.5" y="4" width="15" height="52" fill="#002D62" />
            <line x1="-3.5" y1="4" x2="-3.5" y2="56" stroke="url(#goldGradient)" strokeWidth="1.2" />
            <line x1="0" y1="4" x2="0" y2="56" stroke="url(#goldGradient)" strokeWidth="1.2" />
            <line x1="3.5" y1="4" x2="3.5" y2="56" stroke="url(#goldGradient)" strokeWidth="1.2" />
            <rect x="-9.5" y="56" width="19" height="5" fill="url(#goldGradient)" rx="1" />
          </g>

          {/* Temple Base Steps */}
          <rect x="145" y="190" width="210" height="7" fill="#002D62" />
          <rect x="140" y="197" width="220" height="5" fill="url(#goldGradient)" />
          <rect x="135" y="202" width="230" height="7" fill="#002D62" />
        </g>

        {/* Center Large Serif Monogram: GPB */}
        <text
          x="250"
          y="322"
          textAnchor="middle"
          fill="#002D62"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: '118px',
            letterSpacing: '-2px'
          }}
        >
          GPB
        </text>

        {/* Divider 1: Horizontal Gold Lines with Central Dot */}
        <g>
          <line x1="80" y1="342" x2="242" y2="342" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="250" cy="342" r="4.5" fill="#C5A059" />
          <line x1="258" y1="342" x2="420" y2="342" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Text: GURUKUL PREMIER BANK */}
        <text
          x="250"
          y="376"
          textAnchor="middle"
          fill="#002D62"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: '26px',
            letterSpacing: '1.5px'
          }}
        >
          GURUKUL PREMIER BANK
        </text>

        {/* Divider 2: Horizontal Gold Lines with Central Dot */}
        <g>
          <line x1="100" y1="392" x2="242" y2="392" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="250" cy="392" r="3.5" fill="#C5A059" />
          <line x1="258" y1="392" x2="400" y2="392" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Motto: TRUST. GROW. PROSPER. */}
        <text
          x="250"
          y="416"
          textAnchor="middle"
          fill="#002D62"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: '17px',
            letterSpacing: '3.5px'
          }}
        >
          TRUST. GROW. PROSPER.
        </text>

        {/* Bottom Star with Flanking Horizontal Dashes */}
        <g transform="translate(250, 440)">
          <line x1="-50" y1="0" x2="-20" y2="0" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
          {/* 5-pointed star */}
          <polygon
            points="0,-10 3,-3 10,-3 4,2 6,9 0,5 -6,9 -4,2 -10,-3 -3,-3"
            fill="url(#goldGradient)"
          />
          <line x1="20" y1="0" x2="50" y2="0" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col justify-center select-none">
          <div className="text-lg sm:text-xl font-extrabold text-[#002D62] tracking-tight leading-tight">
            GURUKUL PREMIER
          </div>
          <div className="text-[9.5px] text-[#C5A059] tracking-[0.22em] font-extrabold uppercase mt-0.5">
            Banking Trust • Est. 2026
          </div>
        </div>
      )}
    </div>
  );
};
