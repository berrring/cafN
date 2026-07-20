import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, CheckCircle2, Heart, Camera } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#150E0C] text-[#EAE3D6] pt-14 pb-12 border-t border-[#33241F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-[#33241F]">
          {/* Brand & Ethos */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-3xl font-normal tracking-tight text-[#FDFBF7]">
                MORROW
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C76743] font-medium">
                Coffee &amp; Kitchen · Dorćol
              </p>
            </div>

            <p className="text-sm text-[#DDD4C6] leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>

            <div className="pt-1">
              <div className="inline-block px-3 py-1 rounded-md border border-[#47533E] bg-[#242A1F]/60 text-xs text-[#ECF0E8] font-serif italic">
                {t('footer.polako_quote')}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {CAFE_INFO.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-md border border-[#33241F] bg-[#211714] hover:bg-[#C76743] hover:text-white hover:border-[#C76743] text-xs text-[#DDD4C6] transition-colors flex items-center gap-1.5"
                >
                  {social.name === 'Instagram' && <Camera className="w-3.5 h-3.5" />}
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#FDFBF7]">
              {t('footer.nav_title')}
            </h4>
            <ul className="space-y-2 text-sm text-[#DDD4C6]">
              <li>
                <Link to="/" className="hover:text-[#FDFBF7] transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#FDFBF7] transition-colors">
                  {t('nav.menu')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FDFBF7] transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#FDFBF7] transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-[#FDFBF7] transition-colors">
                  {t('nav.reservations')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FDFBF7] transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Visiting */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#FDFBF7]">
              {t('footer.hours_title')}
            </h4>
            <div className="space-y-2.5 text-xs text-[#DDD4C6]">
              <div>
                <p className="font-medium text-[#FDFBF7]">{t('footer.weekdays')}</p>
                <p className="text-[#DDD4C6]">{t('footer.coffee_bar')} 07:30 – 21:00</p>
                <p className="text-[#A8988D]">{t('footer.kitchen_pass')} 07:30 – 16:30</p>
              </div>
              <div>
                <p className="font-medium text-[#FDFBF7]">{t('footer.weekend')}</p>
                <p className="text-[#DDD4C6]">{t('footer.coffee_bar')} 08:30 – 22:00 ({language === 'ru' ? 'Вск до 21:00' : language === 'sr' ? 'Ned do 21:00' : 'Sun till 21:00'})</p>
                <p className="text-[#A8988D]">{t('footer.brunch')} 08:30 – 17:00</p>
              </div>
              <div className="pt-1">
                <p className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C76743] shrink-0 mt-0.5" />
                  <span>{CAFE_INFO.address.street}, Dorćol, Belgrade</span>
                </p>
              </div>
            </div>
          </div>

          {/* Dorćol Letters Newsletter */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#FDFBF7]">
              {t('footer.newsletter_title')}
            </h4>
            <p className="text-xs text-[#DDD4C6] leading-relaxed">
              {t('footer.newsletter_desc')}
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-lg bg-[#242A1F] border border-[#47533E] text-xs text-[#ECF0E8] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('footer.newsletter_success')}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div>
                  <input
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#211714] border border-[#33241F] text-xs text-[#FDFBF7] placeholder-[#664C3F] focus:outline-none focus:border-[#C76743] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#C76743] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#D87C58] transition-colors"
                >
                  {t('footer.newsletter_btn')}
                </button>
              </form>
            )}

            <div className="text-xs text-[#A8988D] space-y-1 pt-1">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-[#5B6B50]" />
                <span>{CAFE_INFO.contact.phone} (Mock)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-[#5B6B50]" />
                <span>{CAFE_INFO.contact.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Concept Project Notice */}
        <div className="pt-6 pb-2">
          <div className="p-4 rounded-xl bg-[#211714] border border-[#33241F] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C76743]" />
                <h5 className="text-xs uppercase tracking-wider font-semibold text-[#FDFBF7]">
                  {t('footer.disclaimer_title')}
                </h5>
              </div>
              <p className="text-xs text-[#DDD4C6] max-w-3xl leading-relaxed">
                {t('footer.disclaimer_text')}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 text-xs text-[#A8988D]">
              <Heart className="w-3 h-3 text-[#C76743] fill-[#C76743]" />
              <span>{t('footer.made_with')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#664C3F]">
          <p>© {new Date().getFullYear()} Morrow Coffee &amp; Kitchen. Fictional Portfolio Project.</p>
          <div className="flex items-center gap-3">
            <span>Dorćol, Belgrade (11000)</span>
            <span>·</span>
            <span>React &amp; TypeScript</span>
            <span>·</span>
            <Link to="/about" className="hover:text-[#DDD4C6] underline underline-offset-2">
              {t('nav.about')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};