import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Sparkles, ArrowRight, ShieldCheck, Leaf, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FBF8F3]">
      {/* Editorial Header */}
      <section className="bg-[#211714] text-[#FDFBF7] py-20 sm:py-24 relative overflow-hidden border-b border-[#33241F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33241F] text-[#DDD4C6] text-xs uppercase tracking-widest font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C76743]" />
            <span>Naša Priča · Our Story</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FDFBF7] leading-tight">
            Rooted in Dorćol, inspired by the ritual of unhurried coffee.
          </h1>

          <p className="text-base sm:text-lg text-[#DDD4C6] max-w-2xl mx-auto leading-relaxed">
            Morrow was born from a simple desire: to honor Belgrade’s historic 500-year café tradition while crafting coffees and seasonal food with modern culinary precision.
          </p>
        </div>
      </section>

      {/* Chapter 1: The Dorćol Heritage */}
      <section className="py-20 border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C76743]">
                Chapter I · The Neighborhood
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#211714] leading-tight">
                Where Four Roads Cross Under Ancient Plane Trees
              </h2>
              <p className="text-sm sm:text-base text-[#664C3F] leading-relaxed">
                The name <em>Dorćol</em> derives from the Turkish <em>dört-yol</em> — the intersection of four trade roads. For centuries, this corner of Belgrade between Kalemegdan Fortress and the Danube River has welcomed merchants, poets, printmakers, and wandering dreamers.
              </p>
              <p className="text-sm sm:text-base text-[#664C3F] leading-relaxed">
                In 1522, Europe’s first recorded coffeehouse opened in Dorćol, long before London, Paris, or Vienna tasted the dark brew. Belgrade has never forgotten how to drink coffee: here, it is not a hurried utility, but an irreplaceable sanctuary of social life.
              </p>
              <div className="p-4 rounded-xl bg-[#F4EFEA] border-l-4 border-[#C76743] text-xs text-[#4A362D] italic font-serif">
                “A Belgrade morning without an hour at the café is not a morning at all; it is merely an awakening without purpose.”
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FDFBF7] bg-[#211714]">
                <img
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80"
                  alt="Historic Dorćol cobblestone alley in Belgrade"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150E0C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FDFBF7]">
                  <p className="text-xs uppercase tracking-widest text-[#C76743] font-semibold">
                    Old Dorćol Cobblestones
                  </p>
                  <p className="font-serif text-lg">Gospodar Jevremova in afternoon light</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Philosophy of Polako */}
      <section className="py-20 bg-[#F4EFEA] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#718364]">
              Chapter II · The Ethos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211714]">
              The Philosophy of Polako (Taking It Slow)
            </h2>
            <p className="text-sm sm:text-base text-[#664C3F] leading-relaxed">
              In Serbian, <strong className="text-[#211714]">polako</strong> means to take your time, to breathe, to refuse the anxious velocity of modern life. We built Morrow around three immovable pillars:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FDFBF7] border border-[#DDD4C6] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#211714] text-[#C76743] flex items-center justify-center">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#211714]">
                The Ritual of the Cup
              </h3>
              <p className="text-xs text-[#664C3F] leading-relaxed">
                Coffee beans are living agricultural seeds with unique terroirs. We roast lightly to highlight jasmine blossoms, bergamot, candied citrus, and black tea notes rather than heavy ash.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FDFBF7] border border-[#DDD4C6] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#211714] text-[#718364] flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#211714]">
                The Seasonal Kitchen
              </h3>
              <p className="text-xs text-[#664C3F] leading-relaxed">
                Honoring Serbian regional staples without cliché: rich Valjevo kajmak, heirloom Požega plums, stone-ground spelt from Vojvodina, and cold-pressed wild sunflower oil.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FDFBF7] border border-[#DDD4C6] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#211714] text-[#C76743] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#211714]">
                The Community Table
              </h3>
              <p className="text-xs text-[#664C3F] leading-relaxed">
                No plastic, no rush, no table-turning algorithms. Whether you stay for ten minutes or three hours with a sketchbook and a batch brew, you belong here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Meet the Concept Founders */}
      <section className="py-20 border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C76743]">
              Chapter III · The Creators
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211714]">
              The People Behind the Craft
            </h2>
            <p className="text-sm text-[#664C3F] max-w-xl">
              Fictional characters created for the Morrow portfolio project to embody Belgrade’s creative culinary scene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Person 1 */}
            <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-[#EAE3D6] flex flex-col sm:flex-row gap-6 items-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="Elena Jovanović - Head of Coffee"
                className="w-32 h-32 rounded-2xl object-cover shrink-0 shadow-md"
              />
              <div className="space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C76743]">
                  Co-Founder &amp; Q-Grader
                </span>
                <h3 className="font-serif text-xl font-medium text-[#211714]">
                  Elena Jovanović
                </h3>
                <p className="text-xs text-[#664C3F] leading-relaxed">
                  After four years roasting in Copenhagen and Berlin, Elena returned to Dorćol to champion washed African and Central American micro-lots alongside traditional copper-ibrik techniques.
                </p>
              </div>
            </div>

            {/* Person 2 */}
            <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-[#EAE3D6] flex flex-col sm:flex-row gap-6 items-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                alt="Mihailo Radović - Head Baker & Kitchen Director"
                className="w-32 h-32 rounded-2xl object-cover shrink-0 shadow-md"
              />
              <div className="space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718364]">
                  Co-Founder &amp; Baker
                </span>
                <h3 className="font-serif text-xl font-medium text-[#211714]">
                  Mihailo Radović
                </h3>
                <p className="text-xs text-[#664C3F] leading-relaxed">
                  Trained in French viennoiserie, Mihailo reinterprets Balkan staples into light laminated pastries, naturally leavened sourdoughs, and comforting weekend brunch plates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Local Artisans & Ceramics */}
      <section className="py-20 bg-[#211714] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#33241F] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80"
                  alt="Handmade ceramic cups by local Dorćol potter"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C76743]">
                Tactile Craft
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#FDFBF7]">
                Every Cup Holds a Dorćol Story
              </h2>
              <p className="text-sm text-[#DDD4C6] leading-relaxed">
                You will not find paper cups on our dining tables. We collaborated with local ceramics workshop <em>Studio Blato</em> down on Ulica Cara Uroša to throw custom stoneware tumblers and wide rimmed brunch plates.
              </p>
              <p className="text-sm text-[#C1B49F] leading-relaxed">
                The clay is harvested from Danube riverbed sediments and fired with chalk-white and raw basalt glazes. When you lift your cup, you feel the texture of Belgrade itself.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/gallery"
                  className="px-6 py-3 rounded-full bg-[#C76743] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#D87C58] transition-colors inline-flex items-center gap-2"
                >
                  <span>View Space &amp; Craft Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Disclaimer Box */}
      <section className="py-12 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-6 rounded-2xl bg-[#EAE3D6] border border-[#DCD2C2] text-xs text-[#4A362D] space-y-2">
            <div className="flex items-center gap-2 font-semibold text-[#211714]">
              <ShieldCheck className="w-4 h-4 text-[#C76743]" />
              <span>Portfolio Transparency Notice</span>
            </div>
            <p className="leading-relaxed">
              Morrow Coffee &amp; Kitchen is a conceptual web application designed to demonstrate front-end development, UX architecture, responsive typography, and editorial design. The founders, physical venue, menu prices, and brand stories are entirely fictional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
