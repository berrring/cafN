import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import type { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, items, onClose, onSelect }) => {
  const { language } = useLanguage();
  const currentIndex = items.findIndex((i) => i.id === item?.id);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else {
      onSelect(items[0]);
    }
  }, [currentIndex, items, onSelect]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else {
      onSelect(items[items.length - 1]);
    }
  }, [currentIndex, items, onSelect]);

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, handleNext, handlePrev]);

  if (!item) return null;

  const itemTitle =
    language === 'ru'
      ? item.russianTitle || item.title
      : language === 'sr'
      ? item.serbianTitle || item.title
      : item.title;

  const itemSubtitle =
    language === 'ru'
      ? item.serbianTitle
      : language === 'sr'
      ? item.title
      : item.serbianTitle;

  const itemDesc =
    language === 'ru'
      ? item.russianDescription || item.description
      : item.description;

  const ofWord = language === 'ru' ? 'из' : language === 'sr' ? 'od' : 'of';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={itemTitle}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#150E0C]/95 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-lg bg-[#211714] text-[#FDFBF7] hover:bg-[#C76743] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close image lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-lg bg-[#211714]/80 text-[#FDFBF7] hover:bg-[#C76743] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C76743]"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-lg bg-[#211714]/80 text-[#FDFBF7] hover:bg-[#C76743] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C76743]"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#211714] border border-[#33241F] max-h-[68vh] flex items-center justify-center">
          <img
            src={item.imageUrl}
            alt={itemTitle}
            className="w-auto h-auto max-h-[68vh] max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4 text-[#FDFBF7]">
          <div className="flex items-center justify-center gap-2 mb-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#47533E] text-[#ECF0E8]">
              <Tag className="w-3 h-3" />
              {item.category}
            </span>
            {item.locationNote && (
              <span className="inline-flex items-center gap-1 text-xs text-[#DDD4C6]">
                <MapPin className="w-3 h-3 text-[#C76743]" />
                {item.locationNote}
              </span>
            )}
            <span className="text-xs text-[#A8988D]">
              {currentIndex + 1} {ofWord} {items.length}
            </span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight">
            {itemTitle}
          </h3>
          <p className="text-xs italic font-serif text-[#C76743] mb-1">
            {itemSubtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#DDD4C6] leading-relaxed">
            {itemDesc}
          </p>
        </div>
      </div>
    </div>
  );
};