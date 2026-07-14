import React, { useState, useMemo } from 'react';
import { Search, Coffee, AlertCircle, ChevronRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import type { MenuCategory, MenuItem } from '../types';

const CATEGORIES: { id: MenuCategory; name: string; serbian: string }[] = [
  { id: 'all', name: 'Full Menu', serbian: 'Ceo meni' },
  { id: 'coffee', name: 'Specialty Coffee', serbian: 'Specijalna kafa' },
  { id: 'breakfast', name: 'Morning & Eggs', serbian: 'Doručak i jaja' },
  { id: 'brunch', name: 'Seasonal Brunch', serbian: 'Branč i činije' },
  { id: 'pastries', name: 'Artisan Bakery', serbian: 'Pekara i peciva' },
  { id: 'drinks', name: 'Drinks & Wines', serbian: 'Pića i vina' },
];

const DIETARY_FILTERS = ['All', 'Vegetarian', 'Vegan', 'Gluten-Free', 'House Signature'] as const;

export const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [selectedDiet, setSelectedDiet] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItemDetail, setSelectedItemDetail] = useState<MenuItem | null>(null);
  const [showEurEquivalent, setShowEurEquivalent] = useState<boolean>(false);

  // Filtered menu
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary match
      if (selectedDiet !== 'All') {
        if (!item.tags || !item.tags.includes(selectedDiet as NonNullable<MenuItem['tags']>[number])) {
          return false;
        }
      }
      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesSerbian = item.serbianName.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesOrigin = item.originOrFarm?.toLowerCase().includes(query);
        if (!matchesName && !matchesSerbian && !matchesDesc && !matchesOrigin) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedDiet, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FBF8F3] pb-24">
      {/* Editorial Header */}
      <section className="bg-[#211714] text-[#FDFBF7] py-16 sm:py-20 relative overflow-hidden border-b border-[#33241F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33241F] text-[#DDD4C6] text-xs font-medium uppercase tracking-widest">
            <Coffee className="w-3.5 h-3.5 text-[#C76743]" />
            <span>Morrow Kafa &amp; Kuhinja</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FDFBF7]">
            Seasonal Menu &amp; Coffee List
          </h1>
          <p className="text-sm sm:text-base text-[#DDD4C6] max-w-2xl mx-auto leading-relaxed">
            Every dish begins with regional heirloom pantry items; every coffee is roasted with light Scandinavian precision to celebrate origin character.
          </p>
          <p className="text-xs font-serif italic text-[#C76743]">
            Sve cene su izražene u dinarima (RSD). Kitchen serves hot plates until 16:30 daily.
          </p>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <section className="sticky top-[69px] sm:top-[77px] z-30 bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#EAE3D6] py-4 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Main Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-1 sm:pb-0 gap-2 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shrink-0 transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#211714] text-[#FDFBF7] shadow-sm'
                    : 'bg-[#EAE3D6]/70 text-[#4A362D] hover:bg-[#DDD4C6]'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Search, Dietary & Currency Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#886959] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search coffee notes, kajmak, sourdough, tea..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F4EFEA] border border-[#DDD4C6] text-xs text-[#211714] placeholder-[#886959] focus:outline-none focus:border-[#C76743] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#886959] hover:text-[#211714]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Tags and EUR toggle */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-[11px] uppercase tracking-wider text-[#664C3F] font-semibold hidden md:inline">
                Diet:
              </span>
              {DIETARY_FILTERS.map((diet) => (
                <button
                  key={diet}
                  onClick={() => setSelectedDiet(diet)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-medium shrink-0 transition-colors ${
                    selectedDiet === diet
                      ? 'bg-[#C76743] text-white'
                      : 'bg-[#F4EFEA] text-[#664C3F] hover:bg-[#EAE3D6] border border-[#DDD4C6]'
                  }`}
                >
                  {diet}
                </button>
              ))}

              {/* Currency Equivalent Toggle */}
              <button
                onClick={() => setShowEurEquivalent(!showEurEquivalent)}
                className={`ml-1 px-3 py-1 rounded-lg text-[11px] font-medium shrink-0 border transition-colors ${
                  showEurEquivalent
                    ? 'bg-[#47533E] text-white border-[#47533E]'
                    : 'bg-[#F4EFEA] text-[#47533E] border-[#DDD4C6] hover:bg-[#EAE3D6]'
                }`}
                title="Toggle approx EUR equivalent (1€ ≈ 117 RSD)"
              >
                {showEurEquivalent ? 'EUR Shown (~117 RSD)' : 'Show € (EUR)'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Brew Bar Spotlight Banner */}
      {(selectedCategory === 'all' || selectedCategory === 'coffee') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="p-6 rounded-2xl bg-[#EAE3D6] border border-[#DCD2C2] grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#C76743] font-bold">
                Specialty Brew Bar
              </span>
              <h3 className="font-serif text-xl font-medium text-[#211714]">
                Extraction Methods
              </h3>
              <p className="text-xs text-[#664C3F]">
                Our baristas dial in grind size and water temperature every morning to highlight distinct terroir.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#DCD2C2]">
                <p className="font-semibold text-[#211714]">V60 Pour-Over</p>
                <p className="text-[11px] text-[#664C3F]">Floral, clean &amp; tea-like</p>
              </div>
              <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#DCD2C2]">
                <p className="font-semibold text-[#211714]">Batch Brew</p>
                <p className="text-[11px] text-[#664C3F]">Smooth, daily micro-lot</p>
              </div>
              <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#DCD2C2]">
                <p className="font-semibold text-[#211714]">Cold Drip 16h</p>
                <p className="text-[11px] text-[#664C3F]">Deep winey chocolate</p>
              </div>
              <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#DCD2C2]">
                <p className="font-semibold text-[#211714]">Copper Džezva</p>
                <p className="text-[11px] text-[#664C3F]">Reimagined tradition</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Menu Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#F4EFEA] rounded-2xl border border-[#DDD4C6] p-8 space-y-3">
            <AlertCircle className="w-8 h-8 text-[#C76743] mx-auto" />
            <h3 className="font-serif text-2xl text-[#211714]">No items found</h3>
            <p className="text-xs text-[#664C3F]">
              Try adjusting your search terms or dietary filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDiet('All');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 rounded-full bg-[#211714] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const eurPrice = (item.priceRsd / 117.2).toFixed(2);

              return (
                <div
                  key={item.id}
                  className="group bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#EAE3D6] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Item Image with Price Tag */}
                    <div className="relative h-52 sm:h-56 overflow-hidden bg-[#211714]">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#150E0C]/60 via-transparent to-transparent" />

                      {/* Price Pill */}
                      <div className="absolute top-3 right-3 bg-[#150E0C]/90 backdrop-blur-xs text-[#FDFBF7] px-3 py-1.5 rounded-full font-serif font-semibold text-xs border border-[#33241F] shadow-md flex items-center gap-1.5">
                        <span>{item.priceRsd} RSD</span>
                        {showEurEquivalent && (
                          <span className="text-[10px] text-[#D87C58] font-sans font-normal border-l border-[#4A362D] pl-1.5">
                            ≈ €{eurPrice}
                          </span>
                        )}
                      </div>

                      {/* Popular / Signature Badges */}
                      <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2.5 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase shadow-xs ${
                              tag === 'House Signature'
                                ? 'bg-[#C76743] text-white'
                                : 'bg-[#FDFBF7]/90 text-[#211714]'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-2">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xs font-serif italic text-[#C76743]">
                          {item.serbianName}
                        </span>
                        {item.calories && (
                          <span className="text-[11px] text-[#886959]">
                            {item.calories}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-xl font-medium text-[#211714] group-hover:text-[#C76743] transition-colors leading-snug">
                        {item.name}
                      </h3>

                      <p className="text-xs text-[#664C3F] leading-relaxed">
                        {item.description}
                      </p>

                      {item.originOrFarm && (
                        <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#718364] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#718364]" />
                          <span>Origin: {item.originOrFarm}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: Allergens & Inspect button */}
                  <div className="p-5 pt-3 border-t border-[#F4EFEA] flex items-center justify-between text-xs text-[#886959]">
                    <div className="truncate max-w-[200px]">
                      {item.allergens && item.allergens.length > 0 ? (
                        <span className="text-[10px] text-[#886959]">
                          Contains: {item.allergens.join(', ')}
                        </span>
                      ) : (
                        <span className="text-[10px] text-[#718364]">
                          No common allergens
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedItemDetail(item)}
                      className="text-xs font-semibold text-[#211714] hover:text-[#C76743] inline-flex items-center gap-1"
                    >
                      <span>Story</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Item Story Detail Modal */}
      {selectedItemDetail && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#150E0C]/80 backdrop-blur-xs p-4 animate-fade-in"
          onClick={() => setSelectedItemDetail(null)}
        >
          <div
            className="bg-[#FDFBF7] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EAE3D6] p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-serif italic text-[#C76743]">
                  {selectedItemDetail.serbianName}
                </span>
                <h3 className="font-serif text-2xl text-[#211714]">
                  {selectedItemDetail.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItemDetail(null)}
                className="p-1 rounded-lg text-[#886959] hover:text-[#211714] hover:bg-[#EAE3D6]"
              >
                ✕
              </button>
            </div>

            <div className="rounded-xl overflow-hidden h-48 bg-[#211714]">
              <img
                src={selectedItemDetail.imageUrl}
                alt={selectedItemDetail.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-[#4A362D] leading-relaxed">
              {selectedItemDetail.description}
            </p>

            {selectedItemDetail.originOrFarm && (
              <div className="p-3 rounded-xl bg-[#F4EFEA] border border-[#DDD4C6] text-xs space-y-1">
                <span className="font-semibold text-[#211714] block">Sourcing &amp; Terroir:</span>
                <span className="text-[#664C3F]">{selectedItemDetail.originOrFarm}</span>
              </div>
            )}

            <div className="flex items-center justify-between text-xs pt-2 border-t border-[#EAE3D6]">
              <span className="font-serif font-bold text-lg text-[#211714]">
                {selectedItemDetail.priceRsd} RSD
              </span>
              <span className="text-[#886959]">
                Category: {selectedItemDetail.category.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Sourcing and Baker's Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 rounded-2xl bg-[#F4EFEA] border border-[#DDD4C6] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-semibold text-[#211714]">
              48-Hour Wild Fermentation
            </h4>
            <p className="text-xs text-[#664C3F] leading-relaxed">
              Our sourdough uses stoneground heritage grain from small organic Vojvodina millers, naturally fermented with wild yeasts for remarkable crumb and digestibility.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-semibold text-[#211714]">
              Valjevo Mountain Pastures
            </h4>
            <p className="text-xs text-[#664C3F] leading-relaxed">
              All kajmak and fresh cheeses arrive weekly from family-owned grazing farms near Valjevo, preserving traditional Serbian wooden-vat aging methods.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-semibold text-[#211714]">
              Ethical Direct Bean Trade
            </h4>
            <p className="text-xs text-[#664C3F] leading-relaxed">
              We pay roasters and origin cooperatives an average of 65% above Fair Trade minimums to ensure living wages and ecological shade-grown farming.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
