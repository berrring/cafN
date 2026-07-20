import React, { useState } from 'react';
import { MapPin, Send, CheckCircle2, ChevronDown, ChevronUp, Compass, TramFront } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';
import { FAQ_ITEMS } from '../data/faqData';
import type { ContactFormData } from '../types';
import { DorcolMapPreview } from '../components/DorcolMapPreview';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    topic: 'general',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = language === 'ru' ? 'Пожалуйста, введите ваше имя' : language === 'sr' ? 'Unesite vaše ime' : 'Please enter your name';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = language === 'ru' ? 'Укажите корректный email' : language === 'sr' ? 'Unesite ispravan email' : 'Please provide a valid email';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = language === 'ru' ? 'Сообщение должно содержать не менее 10 символов' : language === 'sr' ? 'Poruka mora sadržati bar 10 karaktera' : 'Please write a message with at least 10 characters';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        topic: 'general',
        message: '',
      });
    }, 600);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getFaqQuestion = (faq: (typeof FAQ_ITEMS)[number]) => {
    if (language === 'ru') return faq.russianQuestion || faq.question;
    if (language === 'sr') return faq.serbianQuestion || faq.question;
    return faq.question;
  };

  const getFaqSubtitle = (faq: (typeof FAQ_ITEMS)[number]) => {
    if (language === 'ru') return faq.serbianQuestion;
    if (language === 'sr') return faq.question;
    return faq.serbianQuestion;
  };

  const getFaqAnswer = (faq: (typeof FAQ_ITEMS)[number]) => {
    if (language === 'ru') return faq.russianAnswer || faq.answer;
    if (language === 'sr') return faq.serbianAnswer || faq.answer;
    return faq.answer;
  };

  const getDayLabel = (day: string) => {
    if (language === 'ru') {
      if (day === 'Monday – Friday') return 'Понедельник – Пятница';
      if (day === 'Saturday') return 'Суббота';
      if (day === 'Sunday') return 'Воскресенье';
    }
    if (language === 'sr') {
      if (day === 'Monday – Friday') return 'Ponedeljak – Petak';
      if (day === 'Saturday') return 'Subota';
      if (day === 'Sunday') return 'Nedelja';
    }
    return day;
  };

  return (
    <div className="min-h-screen bg-[#FBF8F3] pb-24">
      {/* Editorial Header */}
      <section className="bg-[#211714] text-[#FDFBF7] py-14 sm:py-18 relative overflow-hidden border-b border-[#33241F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#33241F] text-[#DDD4C6] text-xs font-medium uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-[#C76743]" />
            <span>{t('contact.badge')}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FDFBF7]">
            {t('contact.title')}
          </h1>
          <p className="text-sm sm:text-base text-[#DDD4C6] max-w-xl mx-auto leading-relaxed">
            {t('contact.desc')}
          </p>
          <p className="text-xs font-serif italic text-[#C76743]">
            Gospodar Jevremova 48a · Belgrade, Serbia
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Hours, Location, Stylized Map & Transit */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hours Card */}
            <div className="bg-[#FDFBF7] rounded-xl p-6 sm:p-7 border border-[#EAE3D6] shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C76743]">
                    {t('contact.schedule_badge')}
                  </span>
                  <h3 className="font-serif text-2xl text-[#211714]">
                    {t('contact.schedule_title')}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#ECF0E8] text-[#47533E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t('contact.open_today_badge')}
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {CAFE_INFO.hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-2.5 border-b border-[#F4EFEA] last:border-0 last:pb-0">
                    <div>
                      <p className="font-semibold text-[#211714]">{getDayLabel(item.day)}</p>
                      <p className="text-xs text-[#52433B]">
                        {language === 'ru' ? 'Кухня' : language === 'sr' ? 'Kuhinja' : 'Kitchen'}: {item.kitchen}
                      </p>
                    </div>
                    <span className="font-serif font-medium text-[#4A362D] bg-[#F4EFEA] px-2.5 py-1 rounded-md">
                      {item.coffee}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#52433B] italic pt-1">
                {t('contact.wine_note')}
              </p>
            </div>

            {/* Stylized Interactive Map Preview */}
            <DorcolMapPreview />

            {/* Transit and Parking Tips */}
            <div className="p-6 rounded-xl bg-[#F4EFEA] border border-[#DDD4C6] space-y-3 text-xs sm:text-sm text-[#4A362D]">
              <h4 className="font-serif text-lg font-semibold text-[#211714]">
                {t('contact.transit_title')}
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <TramFront className="w-4 h-4 text-[#C76743] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#211714] font-medium block">
                      {language === 'ru' ? 'Трамваи Белграда:' : language === 'sr' ? 'Tramvaji Beograda:' : 'Belgrade Tram:'}
                    </span>
                    <span className="leading-relaxed">
                      {t('contact.transit_tram')}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-[#47533E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#211714] font-medium block">
                      {language === 'ru' ? 'Пешком из центра:' : language === 'sr' ? 'Peške iz centra:' : 'From Kalemegdan & Knez Mihailova:'}
                    </span>
                    <span className="leading-relaxed">
                      {t('contact.transit_walk')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & FAQ */}
          <div className="lg:col-span-7 space-y-8">
            {/* Inquiry Form Card */}
            <div className="bg-[#FDFBF7] rounded-xl p-6 sm:p-9 border border-[#EAE3D6] shadow-xs">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C76743]">
                  {t('contact.form_badge')}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#211714]">
                  {t('contact.form_title')}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A362D]">
                  {t('contact.form_desc')}
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#ECF0E8] border border-[#718364] text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#47533E] text-[#ECF0E8] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#242A1F]">
                    {t('contact.success_title')}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#47533E] max-w-sm mx-auto leading-relaxed">
                    {t('contact.success_desc')}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded-lg bg-[#242A1F] text-white text-xs font-semibold"
                  >
                    {t('contact.success_btn')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                        {t('contact.form_name')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'ru' ? 'например, Никола Тесла' : 'e.g. Nikola Tesla'}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD4C6] text-xs sm:text-sm text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                      />
                      {formErrors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                        {t('contact.form_email')}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nikola@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD4C6] text-xs sm:text-sm text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                        {t('contact.form_phone')}
                      </label>
                      <input
                        type="tel"
                        placeholder="+381..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD4C6] text-xs sm:text-sm text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                        {t('contact.form_topic')}
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value as ContactFormData['topic'] })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD4C6] text-xs sm:text-sm text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                      >
                        <option value="general">
                          {language === 'ru' ? 'Общие вопросы и столы' : language === 'sr' ? 'Opšta pitanja i stolovi' : 'General Inquiries & Table Notes'}
                        </option>
                        <option value="private-event">
                          {language === 'ru' ? 'Частные события и аренда террасы' : language === 'sr' ? 'Privatni događaji i zakup terase' : 'Private Events & Terrace Hire'}
                        </option>
                        <option value="coffee-wholesale">
                          {language === 'ru' ? 'Спешелти кофе и оптовые поставки' : language === 'sr' ? 'Specijalitetna kafa i veleprodaja' : 'Specialty Coffee Beans & Roasting'}
                        </option>
                        <option value="catering">
                          {language === 'ru' ? 'Пекарня и кейтеринг выпечки' : language === 'sr' ? 'Pekara i ketering' : 'Bakery & Sourdough Catering'}
                        </option>
                        <option value="press">
                          {language === 'ru' ? 'Пресса и медиа' : language === 'sr' ? 'Mediji i saradnja' : 'Press & Media'}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                      {t('contact.form_msg')}
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={
                        language === 'ru'
                          ? 'Чем мы можем помочь вам с визитом или заказом?'
                          : language === 'sr'
                          ? 'Kako možemo da vam pomognemo u vezi posete ili upita?'
                          : 'How can we assist you with your visit or inquiry?'
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD4C6] text-xs sm:text-sm text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                    />
                    {formErrors.message && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#211714] text-[#FDFBF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#C76743] transition-colors shadow-xs flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? t('contact.form_sending') : t('contact.form_send')}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Dorćol Visiting FAQ Accordion */}
            <div className="space-y-3.5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#47533E]">
                  {t('contact.faq_badge')}
                </span>
                <h3 className="font-serif text-2xl text-[#211714]">
                  {t('contact.faq_title')}
                </h3>
              </div>

              <div className="space-y-2.5">
                {FAQ_ITEMS.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#FDFBF7] border border-[#EAE3D6] overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-[#F4EFEA]/50 transition-colors"
                    >
                      <div>
                        <span className="font-serif text-base sm:text-lg text-[#211714] font-medium block">
                          {getFaqQuestion(faq)}
                        </span>
                        {getFaqSubtitle(faq) && (
                          <span className="text-xs font-serif italic text-[#C76743] block mt-0.5">
                            {getFaqSubtitle(faq)}
                          </span>
                        )}
                      </div>
                      <div className="p-1.5 rounded-md bg-[#F4EFEA] text-[#211714] shrink-0">
                        {openFaqIndex === idx ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {openFaqIndex === idx && (
                      <div className="px-4.5 pb-4.5 pt-1 text-xs sm:text-sm text-[#4A362D] leading-relaxed border-t border-[#F4EFEA]">
                        {getFaqAnswer(faq)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};