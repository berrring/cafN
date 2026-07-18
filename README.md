# Morrow Coffee & Kitchen (Morrow Kafa & Kuhinja)

> A modern, responsive multi-page web application for **Morrow Coffee & Kitchen**, an independent specialty coffee bar and seasonal brunch café located in historic Dorćol, Belgrade, Serbia.
>
> *Note: This is a fictional design and engineering portfolio concept project.*

---

## ☕ About the Project

Morrow Coffee & Kitchen blends the timeless ritual of Belgrade's coffeehouse tradition (*"Polako"* — the art of unhurried living) with contemporary European editorial design. The concept pairs single-origin light roasts with regional Balkan culinary staples like aged Valjevo kajmak, Vojvodina wild sourdough, and Fruška Gora natural wines.

### Key Highlights
- **Modern Balkan Café Aesthetic:** Warm cream (`#FBF8F3`), deep espresso brown (`#211714`), muted olive green (`#47533E`), and subtle terracotta (`#C76743`).
- **Editorial Typography:** Classic serif headings (Playfair Display) combined with clean geometric body typography (Plus Jakarta Sans).
- **Cultural Authenticity:** Serbian phrases and cultural touches (*"Polako"*, *"Domaća iz džezve"*, *"Studio Blato"* ceramics, Europe's first kafana in Dorćol in 1522).
- **Ambient Sound Synthesizer:** Client-side café room tone generator powered by Web Audio API (no external audio assets).

---

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Tooling:** Vite 8
- **Styling:** Tailwind CSS v4
- **Routing:** React Router 7
- **Icons:** Lucide React
- **Audio:** Web Audio API (procedural ambient sound synthesis)

---

## 📖 Pages & Features

1. **Home (`/`)**
   - Editorial hero with live status indicator (*"Open Today in Dorćol: 07:30 – 21:00"*), batch brew micro-lot announcement, and Belgrade coffee philosophy quote.
   - Core metrics (88+ SCA Cup Score, 48h sourdough fermentation, Valjevo dairy, 1894 preserved brickwork).
   - Interactive daily menu preview (Coffee, Breakfast, Bakery) with prices in Serbian Dinars (RSD).
   - Visiting hours schedule, Dorćol location guide, and reservation CTA.

2. **Menu (`/menu`)**
   - 24 realistic fictional items across 5 categories: Specialty Coffee, Morning & Eggs, Seasonal Brunch, Artisan Bakery, and Drinks & Natural Wines.
   - Dietary filtering (*Vegetarian*, *Vegan*, *Gluten-Free*, *House Signature*).
   - Live instant search across dish names, Serbian titles, and tasting notes.
   - Dual-currency toggle: view prices in RSD or approximate EUR (`1€ ≈ 117 RSD`).
   - Detailed story cards for origin terroirs, farms, altitudes, and allergens.
   - Specialty Brew Bar extraction guide (V60, Batch, Cold Drip, Copper Džezva).

3. **About (`/about`)**
   - Dorćol neighborhood heritage and the historic 1522 Belgrade kafana lineage.
   - The three pillars of the *Polako* philosophy.
   - Profiles of the fictional founders (Elena Jovanović & Mihailo Radović).
   - Local artisan collaboration with *Studio Blato* for hand-thrown stoneware ceramics.

4. **Gallery (`/gallery`)**
   - 12 high-resolution editorial photos sorted by *Interior & Mood*, *Coffee Bar*, *Kitchen & Pastry*, and *Dorćol Streets*.
   - Responsive asymmetrical masonry layout.
   - Fullscreen accessible Lightbox modal with keyboard arrow navigation (`←` / `→`), `Escape` key close, photo counter, and location notes.

5. **Reservations (`/reservations`)**
   - Complete booking request form: date picker, 18 time slots, guest counter pills (1–6 guests), and seating zone selector (*Main Brick Hall*, *Cobblestone Terrace*, *Barista Slow Bar*, *Study Alcove*).
   - Dynamic real-time Reservation Slip that previews your table voucher as you fill out the form.
   - Interactive demo booking confirmation voucher with a reference code, arrival guidelines, and printable pass.

6. **Contact (`/contact`)**
   - Weekly opening hours and kitchen pass schedule.
   - Custom stylized vector map of Dorćol streets (*Gospodar Jevremova*, *Cara Dušana*, *Kralja Petra*, *Kalemegdan*, Danube river) with tram transit lines and one-click address copying.
   - Validated inquiry form with simulated confirmation.
   - FAQ accordion answering questions about pets, laptops/Wi-Fi, and dietary needs.

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
git clone https://github.com/berrring/cafN.git
cd cafN
npm install
```

### Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### Production Build
```bash
npm run build
```
Generates an optimized, deployable production bundle in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 📄 License & Disclaimer

This project is a creative portfolio concept created for web development and UI/UX design demonstration purposes. All business names, addresses, menu items, reviews, and individuals depicted are fictional.
