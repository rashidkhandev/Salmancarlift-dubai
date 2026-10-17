import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import RoutesPage from './pages/RoutesPage';
import PackagesPage from './pages/PackagesPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFound from './pages/NotFound';

export const App = () => {
  return (
    <div className="app-layout">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Global Navigation */}
      <Navbar />

      {/* Application Routing */}
      <Routes>
        {/* Main Routes with legacy .html alias support */}
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/about.html" element={<AboutPage />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services.html" element={<ServicesPage />} />

        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/routes.html" element={<RoutesPage />} />

        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/packages.html" element={<PackagesPage />} />

        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery.html" element={<GalleryPage />} />

        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/testimonials.html" element={<TestimonialsPage />} />

        <Route path="/faq" element={<FAQPage />} />
        <Route path="/faq.html" element={<FAQPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact.html" element={<ContactPage />} />

        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/privacy.html" element={<PrivacyPage />} />

        <Route path="/terms" element={<TermsPage />} />
        <Route path="/terms.html" element={<TermsPage />} />

        {/* 404 Catch-All */}
        <Route path="/404" element={<NotFound />} />
        <Route path="/404.html" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Global Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
};

export default App;
