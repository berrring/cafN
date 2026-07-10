import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

export const PortfolioDisclaimer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Portfolio concept notice"
      className="bg-[#211714] text-[#F4EFEA] text-xs border-b border-[#33241F] py-2 px-4 transition-all duration-300 relative z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#C76743] text-white">
            <Info className="w-3 h-3" /> Portfolio Concept
          </span>
          <p className="text-[#DDD4C6] leading-tight">
            <strong className="font-medium text-[#F4EFEA]">Morrow Coffee & Kitchen</strong> is a fictional specialty café and brunch concept in Dorćol, Belgrade, created solely for portfolio demonstration. Not an operating commercial venue.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-[#DDD4C6] hover:text-white p-1 rounded hover:bg-[#33241F] transition-colors shrink-0"
          aria-label="Dismiss disclaimer banner"
          title="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
