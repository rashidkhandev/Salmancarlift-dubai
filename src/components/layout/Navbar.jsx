import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';
import Button from '../common/Button';
import WhatsAppButton from '../common/WhatsAppButton';
import MobileMenu from './MobileMenu';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { getTelLink, BUSINESS_CONFIG } from '../../utils/contactLinks';

export const Navbar = () => {
  const { isScrolled } = useScrollPosition(12);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile navigation on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Handle escape key to close mobile nav
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Routes', path: '/routes' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container nav-inner">
          <Logo onClick={() => setMobileOpen(false)} />

          <MobileMenu
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
            navItems={navItems}
          />

          <div className="nav-cta">
            <Button
              href={getTelLink()}
              variant="outline"
              size="sm"
              aria-label={`Call Salman Carlift at ${BUSINESS_CONFIG.phoneDisplay}`}
            >
              Call Now
            </Button>
            <WhatsAppButton size="sm">
              WhatsApp
            </WhatsAppButton>
            <button
              className="nav-toggle"
              id="nav-toggle"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="nav-links"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Dark backdrop overlay on mobile */}
        {mobileOpen && (
          <div
            className="mobile-backdrop"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </header>
    </>
  );
};

export default Navbar;
