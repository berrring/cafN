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
      <section className="relative overflow-hidden bg-[#FBF8F3] border-b border-[#EAE3D6] pt-8 pb-16 lg:py-24">
        {/* Subtle background grain and ambient tint */}
        <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C76743]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#718364]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D6] border border-[#DCD2C2] text-xs text-[#4A362D] font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#C76743]" />
                <span className="font-serif italic">Belgrade Specialty Coffee &amp; Kitchen</span>
                <span className="text-[#886959]">·</span>
                <span>Dorćol Stari Grad</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6.5xl font-normal tracking-tight text-[#211714] leading-[1.08] text-balance">
                  Where Dorćol pauses for <span className="font-serif italic text-[#C76743]">exceptional coffee</span> &amp; honest food.
                </h1>
                <p className="text-base sm:text-lg text-[#664C3F] max-w-xl leading-relaxed">
                  Tucked behind historic cobblestones, Morrow pairs seasonal single-origin micro-lots with artisanal sourdough, Valjevo kajmak, and the cherished Belgrade rhythm of <em className="font-serif text-[#211714] font-medium">polako</em>.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/menu"
                  className="px-6 py-3.5 rounded-full bg-[#211714] text-[#FDFBF7] font-semibold text-xs uppercase tracking-widest hover:bg-[#C76743] transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/reservations"
                  className="px-6 py-3.5 rounded-full bg-transparent text-[#211714] border border-[#211714] hover:bg-[#EAE3D6] font-semibold text-xs uppercase tracking-widest transition-all duration-200"
                >
                  <span>Book a Table</span>
                </Link>

                <div className="flex items-center gap-2 text-xs text-[#718364] pl-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open today 07:30 – 21:00</span>
                </div>
              </div>

              {/* Cultural Touchpoint Micro Quote */}
              <div className="pt-6 border-t border-[#EAE3D6] max-w-lg">
                <div className="flex items-start gap-3">
                  <span className="font-serif text-3xl leading-none text-[#C76743]/40 select-none">“</span>
                  <div>
                    <p className="text-xs sm:text-sm text-[#4A362D] font-serif italic leading-relaxed">
                      U Dorćolu se kafa ne pije u hodu. Ona je razgovor, sunčev zrak na staroj cigli i vreme koje pripada samo tebi.
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-[#886959] mt-1 font-sans">
                      — The Morrow Morning Philosophy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Mosaic */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FDFBF7] bg-[#211714]">
                  <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                    alt="Barista brewing specialty pour-over coffee in Dorćol café"
                    className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150E0C]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#C76743] font-semibold inline-block mb-1">
                      Micro-Lot Brew Bar
                    </span>
                    <p className="font-serif text-lg text-[#FDFBF7]">Single Origin Pour-Over</p>
                    <p className="text-xs text-[#DCD2C2]">Ethiopia Sidama &amp; Colombia Pink Bourbon</p>
                  </div>
                </div>

                {/* Floating Plate Card */}
                <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#FDFBF7] rounded-xl p-3.5 shadow-xl border border-[#EAE3D6] max-w-[210px] hidden sm:block animate-float">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=200&q=80"
                      alt="Valjevo kajmak tartine"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-xs font-serif font-bold text-[#211714]">Valjevo Kajmak</p>
                      <p className="text-[10px] text-[#718364]">Wild herbs tartine</p>
                      <p className="text-[11px] font-semibold text-[#C76743]">780 RSD</p>
                    </div>
                  </div>
                </div>

                {/* Badge of honor */}
                <div className="absolute -top-4 -right-4 bg-[#242A1F] text-[#ECF0E8] p-3 rounded-full shadow-lg border border-[#47533E] flex items-center justify-center text-center w-20 h-20 rotate-6">
                  <div className="text-[10px] leading-tight font-serif">
                    <span className="block font-bold text-xs text-[#FDFBF7]">88+</span>
                    <span>SCA Cup Score</span>
                  </div>
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
                <p className="text-xs uppercase tracking-wider font-semibold text-[#4A362D]">
                  {metric.label}
                </p>
                <p className="text-xs text-[#664C3F]">
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Showcase */}
      <section className="py-20 bg-[#FBF8F3] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C76743]">
                Daily Selections
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#211714]">
                From Our Brew Bar &amp; Kitchen Pass
              </h2>
              <p className="text-sm text-[#664C3F] max-w-lg">
                Seasonal ingredients, unhurried fermentation, and coffees selected directly from dedicated washing stations across the globe.
              </p>
            </div>

            {/* Category Switcher Tabs */}
            <div className="inline-flex p-1 rounded-full bg-[#EAE3D6] border border-[#DCD2C2] self-start md:self-auto">
              <button
                onClick={() => setActiveMenuTab('coffee')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeMenuTab === 'coffee'
                    ? 'bg-[#211714] text-[#FDFBF7] shadow-sm'
                    : 'text-[#4A362D] hover:text-[#211714]'
                }`}
              >
                Coffee (Kafa)
              </button>
              <button
                onClick={() => setActiveMenuTab('breakfast')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeMenuTab === 'breakfast'
                    ? 'bg-[#211714] text-[#FDFBF7] shadow-sm'
                    : 'text-[#4A362D] hover:text-[#211714]'
                }`}
              >
                Breakfast (Doručak)
              </button>
              <button
                onClick={() => setActiveMenuTab('pastries')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeMenuTab === 'pastries'
                    ? 'bg-[#211714] text-[#FDFBF7] shadow-sm'
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
                className="group bg-[#FDFBF7] rounded-xl overflow-hidden border border-[#EAE3D6] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-[#211714]">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2.5 py-1 rounded-full bg-[#150E0C]/80 backdrop-blur-xs text-white text-xs font-semibold">
                        {item.priceRsd} RSD
                      </span>
                    </div>
                    {item.tags && item.tags.length > 0 && (
                      <div className="absolute bottom-2.5 left-2.5 flex gap-1 flex-wrap">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FDFBF7]/90 text-[#211714]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-4 space-y-1.5">
                    <p className="text-[11px] font-serif italic text-[#C76743]">
                      {item.serbianName}
                    </p>
                    <h3 className="font-serif text-lg font-medium text-[#211714] group-hover:text-[#C76743] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#664C3F] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-[#F4EFEA] mt-2 flex items-center justify-between text-[11px] text-[#886959]">
                  <span>{item.originOrFarm || 'Dorćol House Recipe'}</span>
                  <Link
                    to="/menu"
                    className="font-medium text-[#211714] group-hover:text-[#C76743] inline-flex items-center gap-1"
                  >
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#211714] text-[#FDFBF7] font-semibold text-xs uppercase tracking-widest hover:bg-[#C76743] transition-colors shadow-sm"
            >
              <span>View Complete 24-Item Menu &amp; Drink List</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Story & Polako Philosophy */}
      <section className="py-20 bg-[#211714] text-[#FDFBF7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Side */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#33241F] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                  alt="Interior of Morrow café with brick arches"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150E0C]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-widest text-[#C76743] font-semibold mb-1">
                    Gospodar Jevremova 48a
                  </p>
                  <p className="font-serif text-xl text-[#FDFBF7]">
                    An 1894 textile merchant storehouse revitalized for Belgrade's coffee era.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#150E0C] border border-[#33241F]">
                  <p className="font-serif text-2xl text-[#C76743]">Polako</p>
                  <p className="text-xs text-[#DDD4C6] mt-1">
                    No rush. Coffee as an experience of presence, not fuel on the run.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#150E0C] border border-[#33241F]">
                  <p className="font-serif text-2xl text-[#718364]">Lokalno</p>
                  <p className="text-xs text-[#DDD4C6] mt-1">
                    Valjevo kajmak, Fruška Gora natural wines, and Dorćol handmade ceramics.
                  </p>
                </div>
              </div>
            </div>

            {/* Prose Side */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#C76743]">
                  Philosophy &amp; Dorćol Spirit
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FDFBF7]">
                  Born from Belgrade's ancient coffee heartbeat.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#DDD4C6] leading-relaxed">
                Centuries ago, the first kafana in Europe opened its doors right here in Belgrade in 1522, long before Vienna or Paris caught the scent of roasted beans. Morrow is our love letter to that legacy.
              </p>

              <p className="text-sm sm:text-base text-[#C1B49F] leading-relaxed">
                We do not serve coffee in disposable urgency. In our sunny hall overlooking the quiet plane trees of Jevremova, every extraction respects the grower, every sourdough loaf ferments for two full turns of the sun, and guests are invited to read, deliberate, laugh, and stay as long as they wish.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#C76743] hover:text-[#D87C58] transition-colors"
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
      <section className="py-20 bg-[#F4EFEA] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#718364]">
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
              <span>Explore 12 Photo Gallery with Lightbox</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden shadow-xs h-64 bg-[#211714]">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
                alt="Morrow warm hall interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xs h-64 bg-[#211714]">
              <img
                src="https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=600&q=80"
                alt="Hand poured V60 coffee"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xs h-64 bg-[#211714]">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
                alt="Laminated pastry and gibanica"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xs h-64 bg-[#211714]">
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80"
                alt="Dorćol cobblestone street"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visiting & Hours Section */}
      <section className="py-20 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#211714] text-[#FDFBF7] rounded-3xl overflow-hidden shadow-2xl border border-[#33241F]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Hours & Status */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#C76743]">
                    Visit Us in Dorćol
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#FDFBF7]">
                    Pull Up a Chair at Morrow
                  </h3>
                  <p className="text-sm text-[#DDD4C6] leading-relaxed">
                    Walk-ins are welcomed at all hours. If you're joining us for weekend brunch or with a group of friends, we invite you to book ahead.
                  </p>
                </div>

                {/* Hours table */}
                <div className="space-y-3 pt-2">
                  {CAFE_INFO.hours.map((schedule, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#150E0C] border border-[#33241F] flex items-center justify-between text-xs"
                    >
                      <span className="font-medium text-[#FDFBF7]">{schedule.day}</span>
                      <div className="text-right">
                        <span className="text-[#DDD4C6] block">Coffee: {schedule.coffee}</span>
                        <span className="text-[#886959] text-[11px] block">Kitchen: {schedule.kitchen}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    to="/reservations"
                    className="px-6 py-3 rounded-full bg-[#C76743] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#D87C58] transition-colors"
                  >
                    Request a Reservation
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-full bg-[#33241F] text-[#FDFBF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#4A362D] transition-colors"
                  >
                    Location &amp; Directions
                  </Link>
                </div>
              </div>

              {/* Right Column: Address and Transit */}
              <div className="lg:col-span-5 bg-[#150E0C] p-8 sm:p-12 border-t lg:border-t-0 lg:border-l border-[#33241F] flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-[#718364] font-semibold">
                    Address &amp; Neighborhood
                  </h4>
                  <div className="space-y-2 text-sm text-[#DDD4C6]">
                    <p className="font-serif text-xl text-[#FDFBF7]">
                      {CAFE_INFO.address.street}
                    </p>
                    <p>{CAFE_INFO.address.neighborhood}</p>
                    <p>{CAFE_INFO.address.city}, {CAFE_INFO.address.country}</p>
                  </div>

                  <div className="pt-2 text-xs text-[#886959] space-y-1">
                    <p className="font-medium text-[#C1B49F]">Public Transit &amp; Walking:</p>
                    <p>{CAFE_INFO.address.transitNote}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#211714] border border-[#33241F] text-xs text-[#C1B49F] space-y-1">
                  <p className="font-semibold text-[#FDFBF7]">Fictional Project Note:</p>
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
