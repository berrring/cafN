import React, { useState, useMemo } from 'react';
import { Eye, MapPin, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import type { GalleryCategory, GalleryItem } from '../types';
import { Lightbox } from '../components/Lightbox';

const CATEGORIES: { id: GalleryCategory; label: string; serbian: string }[] = [
  { id: 'all', label: 'All Photos', serbian: 'Sve fotografije' },
  { id: 'interior', label: 'Interior & Mood', serbian: 'Enterijer i atmosfera' },
  { id: 'coffee', label: 'Coffee Bar', serbian: 'Kafa i priprema' },
  { id: 'kitchen', label: 'Kitchen & Pastry', serbian: 'Kuhinja i pekara' },
  { id: 'dorcol', label: 'Dorćol Streets', serbian: 'Dorćolski ambijent' },
];

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#FBF8F3] pb-24">
      {/* Editorial Header */}
      <section className="bg-[#211714] text-[#FDFBF7] py-14 sm:py-18 relative overflow-hidden border-b border-[#33241F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#33241F] text-[#DDD4C6] text-xs font-medium uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5 text-[#C76743]" />
            <span>Galerija · Visual Archive</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FDFBF7]">
            Atmosphere &amp; Space
          </h1>
          <p className="text-sm sm:text-base text-[#DDD4C6] max-w-xl mx-auto leading-relaxed">
            Morning light through Dorćol plane trees, porcelain tumblers, and freshly baked pastries on oak boards.
          </p>
          <p className="text-xs font-serif italic text-[#C76743]">
            Click any photograph to open the high-resolution lightbox view.
          </p>
        </div>
      </section>

      {/* Filter Category Bar */}
      <section className="sticky top-[69px] sm:top-[77px] z-30 bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#EAE3D6] py-3.5 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start sm:justify-center overflow-x-auto gap-1.5 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider shrink-0 transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#211714] text-[#FDFBF7] shadow-xs'
                  : 'bg-[#EAE3D6] text-[#4A362D] hover:bg-[#DCD2C2]'
              }`}
            >
              <span>{cat.label}</span>
              <span className="text-xs opacity-75 ml-1.5">
                ({cat.id === 'all' ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter((i) => i.category === cat.id).length})
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Creative Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-xl overflow-hidden bg-[#211714] border border-[#EAE3D6] shadow-xs hover:border-[#C76743]/50 transition-all duration-200 cursor-pointer ${
                idx % 5 === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Ambient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#150E0C]/90 via-[#150E0C]/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-200" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-[#150E0C]/85 text-[#FDFBF7] border border-[#33241F]">
                    {item.category}
                  </span>
                  {item.locationNote && (
                    <span className="px-2.5 py-1 rounded text-xs bg-[#150E0C]/75 text-[#DDD4C6] hidden sm:inline-flex items-center gap-1 border border-[#33241F]">
                      <MapPin className="w-3 h-3 text-[#C76743]" />
                      {item.locationNote}
                    </span>
                  )}
                </div>

                {/* Expand icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="p-2 rounded-lg bg-[#FDFBF7]/90 text-[#211714] shadow-md hover:bg-white">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Captions */}
                <div className="absolute bottom-4 left-4 right-4 text-[#FDFBF7] space-y-1">
                  <p className="text-xs font-serif italic text-[#C76743]">
                    {item.serbianTitle}
                  </p>
                  <h3 className="font-serif text-lg sm:text-xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DDD4C6] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cultural Atmosphere Note */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-16 text-center">
        <div className="p-8 rounded-xl bg-[#F4EFEA] border border-[#DDD4C6] space-y-2">
          <p className="font-serif text-2xl text-[#211714] italic">
            “Svaka šoljica ima svoj ugao sunca.”
          </p>
          <p className="text-xs uppercase tracking-widest text-[#664C3F]">
            Every cup finds its morning sunbeam at Morrow
          </p>
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </div>
  );
};
