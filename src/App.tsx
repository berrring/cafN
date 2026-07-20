import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { PortfolioDisclaimer } from './components/PortfolioDisclaimer';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AmbientSoundWidget } from './components/AmbientSoundWidget';
import { Home } from './pages/Home';
import { MenuPage } from './pages/Menu';
import { AboutPage } from './pages/About';
import { GalleryPage } from './pages/Gallery';
import { ReservationsPage } from './pages/Reservations';
import { ContactPage } from './pages/Contact';
import { NotFoundPage } from './pages/NotFound';

// Scroll to top upon route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#211714]">
          {/* Concept project banner */}
          <PortfolioDisclaimer />

          {/* Navigation */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/reservations" element={<ReservationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Ambient sound synthesizer for café atmosphere */}
          <AmbientSoundWidget />

          {/* Global Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
