import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const NotFoundPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FBF8F3] px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#EAE3D6] text-[#C76743] flex items-center justify-center mx-auto">
          <Coffee className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#886959] font-semibold">
            {language === 'ru' ? 'Ошибка 404 · Страница не найдена' : language === 'sr' ? 'Greška 404 · Stranica nije pronađena' : 'Error 404 · Page Not Found'}
          </span>
          <h1 className="font-serif text-4xl text-[#211714]">
            {language === 'ru' ? 'Заблудились на улочках Дорчола?' : language === 'sr' ? 'Zalutali u dorćolskim uličicama?' : 'Lost in the Dorćol Alleys?'}
          </h1>
          <p className="text-sm text-[#664C3F] leading-relaxed">
            {language === 'ru'
              ? 'Страница, которую вы ищете, переместилась или растворилась, как утренний пар над чашкой эспрессо.'
              : language === 'sr'
              ? 'Stranica koju tražite je premeštena ili je isparila kao jutarnja para iz šoljice espresa.'
              : 'The page you are looking for has either moved or evaporated like morning steam over an espresso cup.'}
          </p>
        </div>

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#211714] text-[#FDFBF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#C76743] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {language === 'ru' ? 'Вернуться на главную' : language === 'sr' ? 'Povratak na početnu' : 'Return to Morrow Home'}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};