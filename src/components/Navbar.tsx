import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, Calendar, MapPin, Coffee } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

const NAV_LINKS = [
  { name: 'Home', path: '/', serbian: 'Početna' },
  { name: 'Menu', path: '/menu', serbian: 'Meni' },
  { name: 'About', path: '/about', serbian: 'O nama' },
  { name: 'Gallery', path: '/gallery', serbian: 'Galerija' },
  { name: 'Reservations', path: '/reservations', serbian: 'Rezervacije' },
  { name: 'Contact', path: '/contact', serbian: 'Kontakt' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#150E0C] text-[#EAE3D6] text-xs py-2 px-4 hidden md:block border-b border-[#33241F]/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-[#F4EFEA] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open today: 07:30 – 21:00
            </span>
            <span className="text-[#664C3F]">·</span>
            <span className="flex items-center gap-1.5 text-[#DDD4C6]">
              <Coffee className="w-3.5 h-3.5 text-[#C76743]" />
              Batch Single Origin: Ethiopia Sidama (Washed)
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#DDD4C6]">
            <MapPin className="w-3.5 h-3.5 text-[#C76743]" />
            <span>Gospodar Jevremova 48a, Dorćol</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FBF8F3]/95 backdrop-blur-md shadow-xs border-b border-[#EAE3D6] py-3'
            : 'bg-[#FBF8F3] border-b border-[#EAE3D6]/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C76743] rounded"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#211714] group-hover:text-[#C76743] transition-colors">
                MORROW
              </span>
              <span className="text-xs uppercase tracking-widest text-[#47533E] font-medium hidden sm:inline">
                Dorćol
              </span>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#52433B] font-medium">
              Coffee &amp; Kitchen · Belgrade
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-md text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#211714] font-semibold bg-[#EAE3D6] text-shadow-none'
                      : 'text-[#4A362D] hover:text-[#211714] hover:bg-[#F4EFEA]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold bg-[#211714] text-[#FBF8F3] hover:bg-[#C76743] transition-colors shadow-xs active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/reservations"
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#211714] text-[#FBF8F3]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#211714] hover:bg-[#EAE3D6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C76743]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[102px] z-50 bg-[#150E0C]/60 backdrop-blur-xs lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#FBF8F3] w-full max-h-[calc(100vh-102px)] overflow-y-auto border-b border-[#EAE3D6] p-6 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              <div className="border-b border-[#EAE3D6] pb-3 mb-2">
                <span className="text-xs uppercase tracking-widest text-[#47533E] font-semibold">
                  Morrow Navigacija
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#EAE3D6] text-[#211714] font-semibold'
                          : 'text-[#4A362D] hover:bg-[#F4EFEA]'
                      }`
                    }
                  >
                    <span className="font-serif text-lg">{link.name}</span>
                    <span className="text-xs uppercase tracking-wider text-[#718364]">
                      {link.serbian}
                    </span>
                  </NavLink>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  to="/reservations"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#211714] text-[#FBF8F3] font-semibold tracking-wider uppercase text-xs hover:bg-[#C76743] transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Table in Dorćol</span>
                </Link>
              </div>
            </div>

            {/* Mobile Footer Info */}
            <div className="mt-8 pt-5 border-t border-[#EAE3D6] space-y-2.5 text-xs text-[#52433B]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C76743]" />
                <span>{CAFE_INFO.address.street}, {CAFE_INFO.address.neighborhood}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#F4EFEA] border border-[#EAE3D6] mt-2">
                <p className="text-xs text-[#4A362D]">
                  <strong className="text-[#211714]">Portfolio Project:</strong> Fictional Belgrade specialty café concept.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
