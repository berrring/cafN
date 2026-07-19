import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';
import { MENU_ITEMS } from '../data/menuData';

export const Home: React.FC = () => {
  const [activeMenuTab, setActiveMenuTab] = useState<'coffee' | 'breakfast' | 'pastries'>('coffee');

  const featuredItems = MENU_ITEMS.filter((item) => item.category === activeMenuTab).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Editorial Hero Section */}
      <section className="relative overflow-hidden bg-[#FBF8F3] border-b border-[#EAE3D6] pt-10 pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Subhead & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAE3D6] text-xs text-[#3D2E26] font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#C76743]" />
                <span className="font-serif italic">Specialty Coffee &amp; Seasonal Kitchen</span>
                <span className="text-[#664C3F]">·</span>
                <span>Dorćol, Belgrade</span>
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#211714] leading-[1.1] text-balance">
                  Where Dorćol pauses for <span className="font-serif italic text-[#C76743]">exceptional coffee</span> &amp; honest food.
                </h1>
                <p className="text-base sm:text-lg text-[#4A362D] max-w-xl leading-relaxed">
                  Tucked behind historic cobblestones, Morrow pairs seasonal single-origin coffees with artisanal sourdough, Valjevo mountain kajmak, and Belgrade’s time-honored rhythm of <em className="font-serif text-[#211714] font-medium not-italic underline decoration-[#C76743]/40 underline-offset-4">polako</em>.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/menu"
                  className="px-6 py-3 rounded-lg bg-[#211714] text-[#FDFBF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#C76743] transition-colors shadow-xs flex items-center gap-2 active:scale-[0.98]"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/reservations"
                  className="px-6 py-3 rounded-lg bg-transparent text-[#211714] border border-[#211714] hover:bg-[#EAE3D6] font-semibold text-xs uppercase tracking-wider transition-colors active:scale-[0.98]"
                >
                  <span>Book a Table</span>
                </Link>

                <div className="flex items-center gap-2 text-xs text-[#47533E] font-medium pl-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open today until 21:00</span>
                </div>
              </div>

              {/* Cultural Touchpoint Quote */}
              <div className="pt-6 border-t border-[#EAE3D6] max-w-lg">
                <blockquote className="space-y-1">
                  <p className="text-sm text-[#4A362D] font-serif italic leading-relaxed">
                    “U Dorćolu se kafa ne pije u hodu. Ona je razgovor, sunčev zrak na staroj cigli i vreme koje pripada samo tebi.”
                  </p>
                  <cite className="text-xs uppercase tracking-wider text-[#664C3F] not-italic block font-sans">
                    — The Morrow Morning Philosophy
                  </cite>
                </blockquote>
              </div>
            </div>

            {/* Right Column: Clean Editorial Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#EAE3D6] bg-[#211714]">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                  alt="Barista brewing single-origin pour-over coffee in Dorćol café"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150E0C]/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded bg-[#C76743] font-semibold inline-block mb-1.5">
                    Micro-Lot Brew Bar
                  </span>
                  <p className="font-serif text-lg text-[#FDFBF7]">Single Origin Pour-Over</p>
                  <p className="text-xs text-[#DDD4C6]">Ethiopia Sidama Bensa &amp; Colombia Pink Bourbon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Pillars of Morrow */}
      <section className="py-12 bg-[#F4EFEA] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {CAFE_INFO.metrics.map((metric, idx) => (
              <div key={idx} className="border-l-2 border-[#C76743] pl-4 space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#211714]">
                  {metric.value}
                </span>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#3D2E26]">
                  {metric.label}
                </p>
                <p className="text-xs text-[#52433B] leading-normal">
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Showcase */}
      <section className="py-16 lg:py-20 bg-[#FBF8F3] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C76743]">
                Daily Selections
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#211714]">
                From Our Brew Bar &amp; Kitchen Pass
              </h2>
              <p className="text-sm text-[#4A362D] max-w-lg leading-relaxed">
                Seasonal ingredients, wild fermentation, and coffees selected directly from dedicated farmer cooperatives.
              </p>
            </div>

            {/* Category Segmented Control */}
            <div className="inline-flex p-1 rounded-lg bg-[#EAE3D6] border border-[#DCD2C2] self-start md:self-auto">
              <button
                onClick={() => setActiveMenuTab('coffee')}
                className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeMenuTab === 'coffee'
                    ? 'bg-[#211714] text-[#FDFBF7] shadow-xs'
                    : 'text-[#4A362D] hover:text-[#211714]'
                }`}
              >
                Coffee (Kafa)
              </button>
              <button
                onClick={() => setActiveMenuTab('breakfast')}
                className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeMenuTab === 'breakfast'
                    ? 'bg-[#211714] text-[#FDFBF7] shadow-xs'
                    : 'text-[#4A362D] hover:text-[#211714]'
                }`}
              >
                Breakfast (Doručak)
              </button>
              <button
                onClick={() => setActiveMenuTab('pastries')}
                className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeMenuTab === 'pastries'
                    ? 'bg-[#211714] text-[#FDFBF7] shadow-xs'
                    : 'text-[#4A362D] hover:text-[#211714]'
                }`}
              >
                Bakery (Pekara)
              </button>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#FDFBF7] rounded-xl overflow-hidden border border-[#EAE3D6] shadow-xs hover:border-[#C76743]/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-[#211714]">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2.5 py-1 rounded bg-[#150E0C]/90 text-white text-xs font-semibold">
                        {item.priceRsd} RSD
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5">
                    <p className="text-xs font-serif italic text-[#C76743]">
                      {item.serbianName}
                    </p>
                    <h3 className="font-serif text-lg font-medium text-[#211714] group-hover:text-[#C76743] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#4A362D] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-[#F4EFEA] flex items-center justify-between text-xs text-[#52433B]">
                  <span className="truncate max-w-[170px]">{item.originOrFarm || 'Dorćol House Recipe'}</span>
                  <Link
                    to="/menu"
                    className="font-medium text-[#211714] group-hover:text-[#C76743] inline-flex items-center gap-1 shrink-0"
                  >
                    View <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#211714] text-[#FDFBF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#C76743] transition-colors shadow-xs"
            >
              <span>Explore Complete 24-Item Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Story & Polako Philosophy */}
      <section className="py-16 lg:py-20 bg-[#211714] text-[#FDFBF7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Visual Side */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#33241F] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                  alt="Interior of Morrow café with brick arches"
                  className="w-full h-88 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150E0C]/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs uppercase tracking-wider text-[#C76743] font-semibold mb-1">
                    Gospodar Jevremova 48a
                  </p>
                  <p className="font-serif text-lg text-[#FDFBF7]">
                    An 1894 textile merchant storehouse revitalized for Belgrade's coffee era.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#150E0C] border border-[#33241F]">
                  <p className="font-serif text-xl text-[#C76743]">Polako</p>
                  <p className="text-xs text-[#DDD4C6] mt-1 leading-normal">
                    Coffee as an experience of presence, not fuel on the run.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#150E0C] border border-[#33241F]">
                  <p className="font-serif text-xl text-[#718364]">Lokalno</p>
                  <p className="text-xs text-[#DDD4C6] mt-1 leading-normal">
                    Valjevo kajmak, Fruška Gora wines, and handmade ceramics.
                  </p>
                </div>
              </div>
            </div>

            {/* Prose Side */}
            <div className="lg:col-span-7 space-y-5 lg:pl-4">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#C76743]">
                  Philosophy &amp; Dorćol Spirit
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FDFBF7]">
                  Born from Belgrade's coffee tradition.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#DDD4C6] leading-relaxed">
                Centuries ago, the first kafana in Europe opened its doors right here in Belgrade in 1522. Morrow is our contemporary tribute to that legacy — combining specialty roasting with authentic neighborhood warmth.
              </p>

              <p className="text-sm sm:text-base text-[#C1B49F] leading-relaxed">
                In our dining hall overlooking the quiet plane trees of Jevremova, every coffee extraction respects the grower, wild sourdough is baked fresh daily, and guests are invited to stay as long as they wish.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C76743] hover:text-[#D87C58] transition-colors"
                >
                  <span>Read Our Full Story &amp; Producer Directory</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Gallery Preview Strip */}
      <section className="py-16 lg:py-20 bg-[#F4EFEA] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#47533E]">
                Moments &amp; Space
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#211714]">
                A Look Inside Morrow
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#211714] hover:text-[#C76743] transition-colors"
            >
              <span>Explore Visual Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden shadow-xs h-60 bg-[#211714]">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
                alt="Morrow warm hall interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xs h-60 bg-[#211714]">
              <img
                src="https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=600&q=80"
                alt="Hand poured V60 coffee"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xs h-60 bg-[#211714]">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
                alt="Laminated pastry and gibanica"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xs h-60 bg-[#211714]">
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80"
                alt="Dorćol cobblestone street"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visiting & Hours Section */}
      <section className="py-16 lg:py-20 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#211714] text-[#FDFBF7] rounded-2xl overflow-hidden shadow-xl border border-[#33241F]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Hours & Status */}
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#C76743]">
                    Visit Us in Dorćol
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#FDFBF7]">
                    Pull Up a Chair at Morrow
                  </h3>
                  <p className="text-sm text-[#DDD4C6] leading-relaxed">
                    Walk-ins are always welcomed. If you're joining us for weekend brunch or with a group of friends, we invite you to book ahead.
                  </p>
                </div>

                {/* Hours table */}
                <div className="space-y-2.5 pt-1">
                  {CAFE_INFO.hours.map((schedule, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-[#150E0C] border border-[#33241F] flex items-center justify-between text-xs"
                    >
                      <span className="font-medium text-[#FDFBF7]">{schedule.day}</span>
                      <div className="text-right">
                        <span className="text-[#DDD4C6] block">Coffee: {schedule.coffee}</span>
                        <span className="text-[#886959] block">Kitchen: {schedule.kitchen}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/reservations"
                    className="px-6 py-2.5 rounded-lg bg-[#C76743] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#D87C58] transition-colors"
                  >
                    Reserve a Table
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-2.5 rounded-lg bg-[#33241F] text-[#FDFBF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#4A362D] transition-colors"
                  >
                    Location &amp; Directions
                  </Link>
                </div>
              </div>

              {/* Right Column: Address and Transit */}
              <div className="lg:col-span-5 bg-[#150E0C] p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-[#33241F] flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-[#718364] font-semibold">
                    Address &amp; Neighborhood
                  </h4>
                  <div className="space-y-1.5 text-sm text-[#DDD4C6]">
                    <p className="font-serif text-xl text-[#FDFBF7]">
                      {CAFE_INFO.address.street}
                    </p>
                    <p>{CAFE_INFO.address.neighborhood}</p>
                    <p>{CAFE_INFO.address.city}, {CAFE_INFO.address.country}</p>
                  </div>

                  <div className="pt-2 text-xs text-[#886959] space-y-1">
                    <p className="font-medium text-[#C1B49F]">Public Transit &amp; Walking:</p>
                    <p className="leading-relaxed">{CAFE_INFO.address.transitNote}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#211714] border border-[#33241F] text-xs text-[#C1B49F] space-y-1">
                  <p className="font-semibold text-[#FDFBF7]">Portfolio Project Note:</p>
                  <p>
                    Morrow is a portfolio concept. This address represents a simulated Dorćol setting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
