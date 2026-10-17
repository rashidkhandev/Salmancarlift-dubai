import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { useDocumentSeo, PAGE_SEO } from '../utils/seoConfig';

export const NotFound = () => {
  useDocumentSeo(PAGE_SEO.notFound);

  return (
    <main id="main-content">
      <section className="page-hero" style={{ textAlign: 'center', padding: 'calc(var(--nav-h) + 60px) 0 80px' }}>
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Error 404</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--gold-400)' }}>Page Not Found</h1>
          <p style={{ maxWidth: '540px', margin: '0 auto 28px', lineHeight: '1.7', fontSize: '1.1rem' }}>
            The destination route you are looking for has been moved or doesn't exist. Let's get you back on the right road.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button to="/" variant="gold">
              Return to Home
            </Button>
            <Button to="/services" variant="outline">
              View Services
            </Button>
            <WhatsAppButton size="md">
              Ask on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="section bg-panel" style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <h3 style={{ color: '#f7f5f0', marginBottom: '18px' }}>Popular Destinations</h3>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            <li>
              <Link to="/routes" className="tag-pill" style={{ fontSize: '0.9rem', padding: '8px 18px' }}>
                Dubai to Abu Dhabi Route
              </Link>
            </li>
            <li>
              <Link to="/packages" className="tag-pill" style={{ fontSize: '0.9rem', padding: '8px 18px' }}>
                Monthly Commuter Plans
              </Link>
            </li>
            <li>
              <Link to="/contact" className="tag-pill" style={{ fontSize: '0.9rem', padding: '8px 18px' }}>
                Book Daily Ride
              </Link>
            </li>
            <li>
              <Link to="/faq" className="tag-pill" style={{ fontSize: '0.9rem', padding: '8px 18px' }}>
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
