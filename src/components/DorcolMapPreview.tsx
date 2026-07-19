import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, TramFront, Compass } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

export const DorcolMapPreview: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${CAFE_INFO.address.street}, ${CAFE_INFO.address.neighborhood}, Belgrade`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#211714] border border-[#33241F] shadow-xl text-[#FDFBF7]">
      {/* Editorial Map Header */}
      <div className="p-4 sm:p-5 border-b border-[#33241F] bg-[#150E0C]/80 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#C76743]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#DDD4C6]">
              Dorćol Neighborhood Map
            </span>
          </div>
          <p className="text-sm font-serif text-[#FDFBF7] mt-0.5">
            {CAFE_INFO.address.street}, {CAFE_INFO.address.neighborhood}
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#33241F] hover:bg-[#C76743] text-xs font-medium text-[#FDFBF7] transition-colors"
          title="Copy fictional address"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Address Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Address</span>
            </>
          )}
        </button>
      </div>

      {/* Stylized SVG Map Canvas */}
      <div className="relative h-72 sm:h-80 w-full bg-[#1A1210] overflow-hidden flex items-center justify-center p-4">
        {/* Danube River graphic at the top */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-[#2E3C40]/60 to-transparent flex items-center justify-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#718364] font-medium font-serif italic">
            ~ Danube River (Dunav) — 500m North ~
          </span>
        </div>

        {/* Street Lines SVG */}
        <svg className="w-full h-full max-w-xl opacity-90" viewBox="0 0 500 300" fill="none">
          {/* Background grid */}
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2B1D19" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Major Streets */}
          {/* Cara Dušana (Horizontal Tram Street) */}
          <line x1="20" y1="90" x2="480" y2="90" stroke="#4A362D" strokeWidth="8" strokeLinecap="round" />
          <line x1="20" y1="90" x2="480" y2="90" stroke="#718364" strokeWidth="2" strokeDasharray="6 6" />
          <text x="30" y="82" fill="#886959" fontSize="10" fontFamily="sans-serif" letterSpacing="1">
            ULICA CARA DUŠANA (TRAM 2, 5, 10)
          </text>

          {/* Gospodar Jevremova (Horizontal Cafe Street) */}
          <line x1="30" y1="180" x2="470" y2="180" stroke="#C76743" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          <text x="35" y="172" fill="#D87C58" fontSize="10" fontFamily="serif" fontWeight="bold" letterSpacing="0.5">
            ULICA GOSPODAR JEVREMOVA
          </text>

          {/* Strahinjića Bana */}
          <line x1="40" y1="135" x2="460" y2="135" stroke="#33241F" strokeWidth="5" strokeLinecap="round" />
          <text x="45" y="130" fill="#664C3F" fontSize="9" fontFamily="sans-serif">
            Strahinjića Bana
          </text>

          {/* Gospodar Jovanova */}
          <line x1="40" y1="225" x2="460" y2="225" stroke="#33241F" strokeWidth="4" strokeLinecap="round" />
          <text x="45" y="220" fill="#664C3F" fontSize="9" fontFamily="sans-serif">
            Gospodar Jovanova
          </text>

          {/* Vertical Cross Streets: Kralja Petra */}
          <line x1="160" y1="40" x2="160" y2="270" stroke="#4A362D" strokeWidth="6" strokeLinecap="round" />
          <text x="166" y="260" fill="#886959" fontSize="9" transform="rotate(90 166 260)" letterSpacing="1">
            KRALJA PETRA
          </text>

          {/* Kapetan Mišina */}
          <line x1="290" y1="40" x2="290" y2="270" stroke="#33241F" strokeWidth="5" strokeLinecap="round" />
          <text x="296" y="260" fill="#664C3F" fontSize="9" transform="rotate(90 296 260)">
            Kapetan Mišina
          </text>

          {/* Francuska */}
          <line x1="410" y1="40" x2="410" y2="270" stroke="#33241F" strokeWidth="5" strokeLinecap="round" />
          <text x="416" y="260" fill="#664C3F" fontSize="9" transform="rotate(90 416 260)">
            Francuska
          </text>

          {/* Kalemegdan Park reference */}
          <rect x="25" y="240" width="80" height="45" rx="6" fill="#242A1F" stroke="#47533E" />
          <text x="32" y="265" fill="#ECF0E8" fontSize="8" fontFamily="sans-serif">
            Kalemegdan Park
          </text>

          {/* Morrow Pinpoint at Gospodar Jevremova near Kapetan Mišina */}
          <circle cx="250" cy="180" r="14" fill="#C76743" fillOpacity="0.25">
            <animate attributeName="r" values="10;22;10" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="180" r="8" fill="#C76743" stroke="#FDFBF7" strokeWidth="2" />
        </svg>

        {/* Pin Badge Overlay */}
        <div className="absolute top-[125px] left-1/2 -translate-x-[45px] sm:-translate-x-[20px] pointer-events-none">
          <div className="bg-[#150E0C] text-[#FDFBF7] px-2.5 py-1 rounded-md border border-[#C76743] shadow-md flex items-center gap-1.5 text-xs font-medium whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-[#C76743]" />
            <span>Morrow Coffee (No. 48a)</span>
          </div>
        </div>

        {/* Tram Stop Indicator */}
        <div className="absolute top-[70px] left-[130px] hidden sm:flex items-center gap-1.5 text-xs text-[#ECF0E8] bg-[#242A1F]/90 px-2.5 py-1 rounded-md border border-[#47533E]">
          <TramFront className="w-3.5 h-3.5 text-[#ECF0E8]" />
          <span>Tram Stop Cara Dušana (2, 10)</span>
        </div>
      </div>

      {/* Transit & Walking Footnotes */}
      <div className="p-4 bg-[#150E0C] border-t border-[#33241F] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#C1B49F]">
        <div className="flex items-center gap-2">
          <Navigation className="w-4 h-4 text-[#C76743] shrink-0" />
          <span>6 min walk from Kalemegdan Fortress</span>
        </div>
        <div className="flex items-center gap-2">
          <TramFront className="w-4 h-4 text-[#718364] shrink-0" />
          <span>3 min walk from Cara Dušana tram stop</span>
        </div>
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#D87C58] shrink-0" />
          <span>12 min stroll from Knez Mihailova</span>
        </div>
      </div>
    </div>
  );
};
