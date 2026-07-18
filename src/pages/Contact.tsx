import React, { useState } from 'react';
import { MapPin, Send, CheckCircle2, ChevronDown, ChevronUp, Compass, TramFront } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';
import { FAQ_ITEMS } from '../data/faqData';
import type { ContactFormData } from '../types';
import { DorcolMapPreview } from '../components/DorcolMapPreview';

export const ContactPage: React.FC = () => {
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
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = 'Please write a message with at least 10 characters';
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

  return (
    <div className="min-h-screen bg-[#FBF8F3] pb-24">
      {/* Editorial Header */}
      <section className="bg-[#211714] text-[#FDFBF7] py-16 sm:py-20 relative overflow-hidden border-b border-[#33241F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33241F] text-[#DDD4C6] text-xs font-medium uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-[#C76743]" />
            <span>Kontakt · Visit &amp; Inquiries</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FDFBF7]">
            Find Us in Historic Dorćol
          </h1>
          <p className="text-sm sm:text-base text-[#DDD4C6] max-w-xl mx-auto leading-relaxed">
            Whether inquiring about private dining, roasted beans, or simply checking our table availability, we are always glad to hear from you.
          </p>
          <p className="text-xs font-serif italic text-[#C76743]">
            Gospodar Jevremova 48a · Belgrade, Serbia
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Hours, Location, Stylized Map & Transit */}
          <div className="lg:col-span-5 space-y-8">
            {/* Hours Card */}
            <div className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 border border-[#EAE3D6] shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C76743]">
                    Weekly Schedule
                  </span>
                  <h3 className="font-serif text-2xl text-[#211714]">
                    Opening Hours
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#ECF0E8] text-[#47533E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open Today
                </span>
              </div>

              <div className="space-y-4 text-xs">
                {CAFE_INFO.hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b border-[#F4EFEA] last:border-0 last:pb-0">
                    <div>
                      <p className="font-semibold text-[#211714] text-sm">{item.day}</p>
                      <p className="text-[11px] text-[#718364]">Kitchen Pass: {item.kitchen}</p>
                    </div>
                    <span className="font-serif font-medium text-[#4A362D] text-sm bg-[#F4EFEA] px-3 py-1 rounded-full">
                      {item.coffee}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#886959] italic pt-2">
                * Espresso and wine bar remains open after the hot kitchen closes.
              </p>
            </div>

            {/* Stylized Interactive Map Preview */}
            <DorcolMapPreview />

            {/* Transit and Parking Tips */}
            <div className="p-6 rounded-3xl bg-[#F4EFEA] border border-[#DDD4C6] space-y-4 text-xs text-[#4A362D]">
              <h4 className="font-serif text-lg font-semibold text-[#211714]">
                Getting to Morrow
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <TramFront className="w-4 h-4 text-[#C76743] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#211714] block">Belgrade Tram:</strong>
                    Lines 2, 5, and 10 stop at <em>Cara Dušana</em>. Walk 3 minutes uphill along Kapetan Mišina to Gospodar Jevremova.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-[#718364] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#211714] block">From Kalemegdan &amp; Knez Mihailova:</strong>
                    A gentle 8-minute downhill stroll through the historic cobblestone alleys of Stari Grad.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & FAQ */}
          <div className="lg:col-span-7 space-y-10">
            {/* Inquiry Form Card */}
            <div className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-10 border border-[#EAE3D6] shadow-sm">
              <div className="mb-6 space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C76743]">
                  Get in Touch
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#211714]">
                  Send an Inquiry
                </h2>
                <p className="text-xs text-[#664C3F]">
                  For private gatherings, coffee beans, catering, or questions about our space.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#ECF0E8] border border-[#718364] text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#47533E] text-[#ECF0E8] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#242A1F]">
                    Hvala! Your message was received (Demo).
                  </h3>
                  <p className="text-xs text-[#47533E] max-w-sm mx-auto leading-relaxed">
                    This is an interactive portfolio prototype. In a live production system, our Dorćol host team would reply within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded-full bg-[#242A1F] text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A362D] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Nikola Tesla"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFEA] border border-[#DDD4C6] text-xs text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                      />
                      {formErrors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A362D] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nikola@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFEA] border border-[#DDD4C6] text-xs text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A362D] mb-1.5">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+381..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFEA] border border-[#DDD4C6] text-xs text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A362D] mb-1.5">
                        Inquiry Topic *
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value as ContactFormData['topic'] })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFEA] border border-[#DDD4C6] text-xs text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                      >
                        <option value="general">General Inquiries &amp; Table Notes</option>
                        <option value="private-event">Private Events &amp; Terrace Hire</option>
                        <option value="coffee-wholesale">Specialty Coffee Beans &amp; Roasting</option>
                        <option value="catering">Bakery &amp; Sourdough Catering</option>
                        <option value="press">Press, Photography &amp; Editorial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A362D] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we assist you with your visit or inquiry?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFEA] border border-[#DDD4C6] text-xs text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                    />
                    {formErrors.message && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#211714] text-[#FDFBF7] font-semibold text-xs uppercase tracking-widest hover:bg-[#C76743] transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending...' : 'Transmit Message (Demo)'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Dorćol Visiting FAQ Accordion */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#718364]">
                  Frequent Questions
                </span>
                <h3 className="font-serif text-2xl text-[#211714]">
                  Visiting Morrow
                </h3>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#FDFBF7] border border-[#EAE3D6] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <div>
                        <span className="font-serif text-base sm:text-lg text-[#211714] font-medium block">
                          {faq.question}
                        </span>
                        {faq.serbianQuestion && (
                          <span className="text-xs font-serif italic text-[#C76743] block mt-0.5">
                            {faq.serbianQuestion}
                          </span>
                        )}
                      </div>
                      <div className="p-1 rounded-full bg-[#F4EFEA] text-[#211714] shrink-0">
                        {openFaqIndex === idx ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {openFaqIndex === idx && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#664C3F] leading-relaxed border-t border-[#F4EFEA]">
                        {faq.answer}
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
