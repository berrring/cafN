import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Sparkles, ArrowRight, ShieldCheck, Leaf, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FBF8F3]">
      {/* Editorial Header */}
      <section className="bg-[#211714] text-[#FDFBF7] py-16 sm:py-20 relative overflow-hidden border-b border-[#33241F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#33241F] text-[#DDD4C6] text-xs uppercase tracking-widest font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C76743]" />
            <span>{t('about.badge')}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FDFBF7] leading-tight">
            {t('about.hero_title')}
          </h1>

          <p className="text-base sm:text-lg text-[#DDD4C6] max-w-2xl mx-auto leading-relaxed">
            {t('about.hero_desc')}
          </p>
        </div>
      </section>

      {/* Chapter 1: The Dorćol Heritage */}
      <section className="py-16 lg:py-20 border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C76743]">
                {t('about.ch1_badge')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#211714] leading-tight">
                {t('about.ch1_title')}
              </h2>
              <p className="text-sm sm:text-base text-[#4A362D] leading-relaxed">
                {t('about.ch1_p1')}
              </p>
              <p className="text-sm sm:text-base text-[#4A362D] leading-relaxed">
                {t('about.ch1_p2')}
              </p>
              <div className="p-4 rounded-lg bg-[#F4EFEA] border-l-4 border-[#C76743] text-xs sm:text-sm text-[#3D2E26] italic font-serif">
                {t('about.ch1_quote')}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#EAE3D6] bg-[#211714]">
                <img
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80"
                  alt="Historic Dorćol cobblestone alley in Belgrade"
                  className="w-full h-88 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150E0C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-[#FDFBF7]">
                  <p className="text-xs uppercase tracking-wider text-[#C76743] font-semibold">
                    Old Dorćol Cobblestones
                  </p>
                  <p className="font-serif text-lg">Gospodar Jevremova</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Philosophy of Polako */}
      <section className="py-16 lg:py-20 bg-[#F4EFEA] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#47533E]">
              {t('about.ch2_badge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211714]">
              {t('about.ch2_title')}
            </h2>
            <p className="text-sm sm:text-base text-[#4A362D] leading-relaxed">
              {t('about.ch2_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-7 rounded-xl bg-[#FDFBF7] border border-[#DDD4C6] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#211714] text-[#C76743] flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#211714]">
                {t('about.pillar1_title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A362D] leading-relaxed">
                {t('about.pillar1_desc')}
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#FDFBF7] border border-[#DDD4C6] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#211714] text-[#718364] flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#211714]">
                {t('about.pillar2_title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A362D] leading-relaxed">
                {t('about.pillar2_desc')}
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#FDFBF7] border border-[#DDD4C6] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#211714] text-[#C76743] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#211714]">
                {t('about.pillar3_title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A362D] leading-relaxed">
                {t('about.pillar3_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Creators */}
      <section className="py-16 lg:py-20 border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C76743]">
              {t('about.team_badge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211714]">
              {t('about.team_title')}
            </h2>
            <p className="text-sm text-[#4A362D] max-w-xl">
              {t('about.team_sub')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Person 1 */}
            <div className="p-6 rounded-xl bg-[#FDFBF7] border border-[#EAE3D6] flex flex-col sm:flex-row gap-5 items-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="Elena Jovanović - Head of Coffee"
                className="w-28 h-28 rounded-xl object-cover shrink-0 shadow-sm"
              />
              <div className="space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C76743]">
                  {t('about.elena_role')}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#211714]">
                  Elena Jovanović
                </h3>
                <p className="text-xs sm:text-sm text-[#4A362D] leading-relaxed">
                  {t('about.elena_desc')}
                </p>
              </div>
            </div>

            {/* Person 2 */}
            <div className="p-6 rounded-xl bg-[#FDFBF7] border border-[#EAE3D6] flex flex-col sm:flex-row gap-5 items-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                alt="Mihailo Radović - Head Baker & Kitchen Director"
                className="w-28 h-28 rounded-xl object-cover shrink-0 shadow-sm"
              />
              <div className="space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#47533E]">
                  {t('about.mihailo_role')}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#211714]">
                  Mihailo Radović
                </h3>
                <p className="text-xs sm:text-sm text-[#4A362D] leading-relaxed">
                  {t('about.mihailo_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Local Artisans & Ceramics */}
      <section className="py-16 lg:py-20 bg-[#211714] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-[#33241F] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80"
                  alt="Handmade ceramic cups by local Dorćol potter"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C76743]">
                {t('about.craft_badge')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#FDFBF7]">
                {t('about.craft_title')}
              </h2>
              <p className="text-sm sm:text-base text-[#DDD4C6] leading-relaxed">
                {t('about.craft_p1')}
              </p>
              <p className="text-sm text-[#C1B49F] leading-relaxed">
                {t('about.craft_p2')}
              </p>
              <div className="pt-2">
                <Link
                  to="/gallery"
                  className="px-6 py-2.5 rounded-lg bg-[#C76743] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#D87C58] transition-colors inline-flex items-center gap-2"
                >
                  <span>{t('about.craft_btn')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Disclaimer Box */}
      <section className="py-10 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-5 rounded-xl bg-[#EAE3D6] border border-[#DCD2C2] text-xs text-[#4A362D] space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-[#211714]">
              <ShieldCheck className="w-4 h-4 text-[#C76743]" />
              <span>{t('about.disclaimer_title')}</span>
            </div>
            <p className="leading-relaxed">
              {t('about.disclaimer_text')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
