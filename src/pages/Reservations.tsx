import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, Download } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';
import type { ReservationFormData } from '../types';

const TIME_SLOTS = [
  '08:30', '09:00', '09:30', '10:00', '10:30', '11:00',
  '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
  '14:30', '15:30', '16:30', '17:30', '18:30', '19:30',
];

const SEATING_AREAS = [
  { id: 'main-hall', name: 'Main Brick Hall', desc: 'Preserved 1894 brickwork & oak banquettes' },
  { id: 'terrace', name: 'Cobblestone Terrace', desc: 'Courtyard breeze under morning sun' },
  { id: 'barista-counter', name: 'Barista Slow Bar', desc: 'Front row seats to single origin V60s' },
  { id: 'quiet-nook', name: 'Study Alcove', desc: 'Arched window corner, ideal for reading' },
] as const;

export const ReservationsPage: React.FC = () => {
  // Tomorrow's date as default
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: defaultDate,
    time: '10:30',
    guests: 2,
    area: 'main-hall',
    occasion: '',
    dietaryNotes: '',
    agreeToPolicy: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    reference: string;
    data: ReservationFormData;
    timestamp: string;
  } | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 6) {
      newErrors.phone = 'Valid phone number is required';
    }
    if (!formData.date) newErrors.date = 'Please pick a reservation date';
    if (!formData.time) newErrors.time = 'Please select a seating time';
    if (!formData.agreeToPolicy) newErrors.agreeToPolicy = 'Please accept the reservation policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const code = `MRW-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedBooking({
        reference: code,
        data: { ...formData },
        timestamp: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FBF8F3] pb-24">
      {/* Editorial Header */}
      <section className="bg-[#211714] text-[#FDFBF7] py-14 sm:py-18 relative overflow-hidden border-b border-[#33241F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#33241F] text-[#DDD4C6] text-xs font-medium uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-[#C76743]" />
            <span>Rezervacije · Table Booking</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FDFBF7]">
            Reserve Your Table in Dorćol
          </h1>
          <p className="text-sm sm:text-base text-[#DDD4C6] max-w-xl mx-auto leading-relaxed">
            Join us for weekend brunch, morning pour-overs, or a quiet afternoon in our dining hall.
          </p>
          <div className="p-3 rounded-lg bg-[#150E0C] border border-[#33241F] max-w-md mx-auto text-xs text-[#DDD4C6]">
            <p>
              <strong className="text-[#FDFBF7]">Portfolio Demo Mode:</strong> Submitting simulates a booking confirmation with an interactive voucher. No real booking is placed.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {confirmedBooking ? (
          /* Confirmation Success Voucher */
          <div className="max-w-2xl mx-auto animate-fade-in space-y-6">
            <div className="bg-[#FDFBF7] rounded-2xl p-8 sm:p-10 border border-[#EAE3D6] shadow-xl relative overflow-hidden">
              <div className="text-center space-y-2.5 pb-6 border-b border-[#EAE3D6]">
                <div className="w-14 h-14 rounded-full bg-[#ECF0E8] text-[#47533E] flex items-center justify-center mx-auto mb-1">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#C76743]">
                  Reservation Request Confirmed (Demo)
                </span>
                <h2 className="font-serif text-3xl text-[#211714]">
                  Radujemo se vašem dolasku!
                </h2>
                <p className="text-xs sm:text-sm text-[#4A362D]">
                  We look forward to welcoming you to Morrow Coffee &amp; Kitchen.
                </p>
              </div>

              {/* Booking Pass Details */}
              <div className="py-6 space-y-4">
                <div className="p-4 rounded-xl bg-[#F4EFEA] border border-[#DDD4C6] flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#664C3F]">
                      Booking Reference
                    </span>
                    <p className="font-mono text-xl font-bold text-[#211714]">
                      {confirmedBooking.reference}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-wider text-[#664C3F]">
                      Party Size
                    </span>
                    <p className="font-serif text-xl font-bold text-[#211714]">
                      {confirmedBooking.data.guests} {confirmedBooking.data.guests === 1 ? 'Guest' : 'Guests'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 bg-white rounded-lg border border-[#EAE3D6]">
                    <span className="text-xs text-[#664C3F] block">Date:</span>
                    <span className="font-medium text-[#211714]">{confirmedBooking.data.date}</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-lg border border-[#EAE3D6]">
                    <span className="text-xs text-[#664C3F] block">Time Slot:</span>
                    <span className="font-medium text-[#211714]">{confirmedBooking.data.time}</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-lg border border-[#EAE3D6]">
                    <span className="text-xs text-[#664C3F] block">Guest Name:</span>
                    <span className="font-medium text-[#211714]">{confirmedBooking.data.name}</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-lg border border-[#EAE3D6]">
                    <span className="text-xs text-[#664C3F] block">Seating Area:</span>
                    <span className="font-medium text-[#211714] capitalize">
                      {confirmedBooking.data.area.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                {confirmedBooking.data.occasion && (
                  <div className="p-3.5 bg-white rounded-lg border border-[#EAE3D6] text-xs">
                    <span className="text-[#664C3F] block">Occasion:</span>
                    <span className="font-medium text-[#211714]">{confirmedBooking.data.occasion}</span>
                  </div>
                )}
              </div>

              {/* Policy & Guidance */}
              <div className="pt-4 border-t border-[#EAE3D6] text-xs text-[#4A362D] space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C76743] shrink-0" />
                  <span>Tables are held for 15 minutes past reservation time.</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#47533E] shrink-0" />
                  <span>{CAFE_INFO.address.street}, Dorćol, Belgrade (Tram 2 or 10).</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setConfirmedBooking(null)}
                  className="flex-1 py-3 px-4 rounded-lg bg-[#211714] text-[#FDFBF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#C76743] transition-colors text-center"
                >
                  Make Another Reservation
                </button>
                <button
                  onClick={() => window.print()}
                  className="py-3 px-5 rounded-lg border border-[#211714] text-[#211714] font-semibold text-xs uppercase tracking-wider hover:bg-[#EAE3D6] transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print Voucher</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Main Two-Column Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#FDFBF7] rounded-2xl p-6 sm:p-9 border border-[#EAE3D6] shadow-xs">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#211714]">
                    Table Details
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4A362D] mt-1">
                    Select your party size, preferred time, and dining space.
                  </p>
                </div>

                {/* Date & Guests Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD4C6] text-xs sm:text-sm text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                    />
                    {errors.date && <p className="text-xs text-red-600 mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                      Number of Guests *
                    </label>
                    <div className="grid grid-cols-6 gap-1.5">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setFormData({ ...formData, guests: num })}
                          className={`py-2 rounded-lg text-xs font-semibold transition-colors ${
                            formData.guests === num
                              ? 'bg-[#211714] text-white shadow-xs'
                              : 'bg-white text-[#4A362D] border border-[#DDD4C6] hover:bg-[#EAE3D6]'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Time Slot Picker */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                    Preferred Time Slot *
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-colors ${
                          formData.time === slot
                            ? 'bg-[#C76743] text-white shadow-xs font-semibold'
                            : 'bg-white text-[#4A362D] border border-[#DDD4C6] hover:bg-[#EAE3D6]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {errors.time && <p className="text-xs text-red-600 mt-1">{errors.time}</p>}
                </div>

                {/* Seating Area Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-2">
                    Seating Area Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SEATING_AREAS.map((area) => (
                      <button
                        key={area.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, area: area.id })}
                        className={`p-3.5 rounded-lg border text-left transition-colors ${
                          formData.area === area.id
                            ? 'bg-[#211714] text-white border-[#211714] shadow-xs'
                            : 'bg-white text-[#211714] border-[#DDD4C6] hover:border-[#886959]'
                        }`}
                      >
                        <p className="text-xs sm:text-sm font-semibold font-serif">{area.name}</p>
                        <p className={`text-xs mt-0.5 ${formData.area === area.id ? 'text-[#DDD4C6]' : 'text-[#52433B]'}`}>
                          {area.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest Contact Details */}
                <div className="pt-4 border-t border-[#EAE3D6] space-y-4">
                  <h3 className="font-serif text-xl text-[#211714]">
                    Guest Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ana Petrović"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD4C6] text-xs sm:text-sm text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ana.petrovic@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD4C6] text-xs sm:text-sm text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+381 64 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD4C6] text-xs sm:text-sm text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                        Special Occasion (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Birthday, Anniversary"
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD4C6] text-xs sm:text-sm text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D2E26] mb-1.5">
                      Dietary Notes or Requests
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Bringing a dog, high chair needed, oat milk preference"
                      value={formData.dietaryNotes}
                      onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD4C6] text-xs sm:text-sm text-[#211714] focus:outline-none focus:border-[#C76743] transition-colors"
                    />
                  </div>
                </div>

                {/* Policy Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeToPolicy}
                      onChange={(e) => setFormData({ ...formData, agreeToPolicy: e.target.checked })}
                      className="mt-0.5 rounded border-[#DDD4C6] text-[#C76743] focus:ring-[#C76743]"
                    />
                    <span className="text-xs text-[#4A362D]">
                      I understand tables are held for 15 minutes, and that this form is a simulated portfolio demonstration.
                    </span>
                  </label>
                  {errors.agreeToPolicy && (
                    <p className="text-xs text-red-600 mt-1">{errors.agreeToPolicy}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#211714] text-[#FDFBF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#C76743] transition-colors shadow-xs disabled:opacity-50"
                >
                  {isSubmitting ? 'Confirming Demo Booking...' : 'Request Table Reservation'}
                </button>
              </form>
            </div>

            {/* Live Reservation Slip Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#211714] text-[#FDFBF7] rounded-2xl p-6 sm:p-8 border border-[#33241F] shadow-lg sticky top-28 space-y-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C76743]">
                    Live Reservation Ticket
                  </span>
                  <h3 className="font-serif text-2xl text-[#FDFBF7] mt-1">
                    Morrow Table Voucher
                  </h3>
                  <p className="text-xs text-[#DDD4C6] mt-0.5">
                    Updates automatically as you make your selections.
                  </p>
                </div>

                {/* Slip Details */}
                <div className="p-4 rounded-xl bg-[#150E0C] border border-[#33241F] space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between border-b border-[#33241F] pb-2">
                    <span className="text-[#A8988D]">Venue:</span>
                    <span className="font-serif font-medium text-[#FDFBF7]">Morrow Coffee &amp; Kitchen</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#33241F] pb-2">
                    <span className="text-[#A8988D]">Location:</span>
                    <span className="text-[#DDD4C6]">Dorćol, Belgrade</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#33241F] pb-2">
                    <span className="text-[#A8988D]">Date &amp; Time:</span>
                    <span className="font-semibold text-[#C76743]">
                      {formData.date || 'Pick date'} at {formData.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#33241F] pb-2">
                    <span className="text-[#A8988D]">Party Size:</span>
                    <span className="text-[#FDFBF7] font-medium">
                      {formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#33241F] pb-2">
                    <span className="text-[#A8988D]">Seating:</span>
                    <span className="capitalize text-[#DDD4C6]">
                      {formData.area.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#A8988D]">Guest Name:</span>
                    <span className="text-[#FDFBF7] font-medium">
                      {formData.name || 'Your Name'}
                    </span>
                  </div>
                </div>

                {/* Hospitality Note */}
                <div className="p-3.5 rounded-lg bg-[#293023]/60 border border-[#47533E] text-xs text-[#ECF0E8] space-y-1">
                  <p className="font-semibold text-[#A8B99B]">Hospitality Promise:</p>
                  <p className="text-xs text-[#DDD4C6] leading-relaxed">
                    Fresh water and warm hospitality are included with every table. Walk-ins are always welcomed if you find yourself nearby in Dorćol.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
