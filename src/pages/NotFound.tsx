import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FBF8F3] px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#EAE3D6] text-[#C76743] flex items-center justify-center mx-auto">
          <Coffee className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#886959] font-semibold">
            Greška 404 · Page Not Found
          </span>
          <h1 className="font-serif text-4xl text-[#211714]">
            Lost in the Dorćol Alleys?
          </h1>
          <p className="text-sm text-[#664C3F] leading-relaxed">
            The page you are looking for has either moved or evaporated like morning steam over an espresso cup.
          </p>
        </div>

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#211714] text-[#FDFBF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#C76743] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Morrow Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
