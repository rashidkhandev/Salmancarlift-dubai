import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { TESTIMONIALS_DATA } from '../utils/contactLinks';
import { useDocumentSeo, PAGE_SEO } from '../utils/seoConfig';

export const TestimonialsPage = () => {
  useDocumentSeo(PAGE_SEO.testimonials);

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Testimonials
          </p>
          <span className="eyebrow">Verified Commuter Reviews</span>
          <h1>What Our Passengers Say</h1>
          <p style={{ maxWidth: '640px', lineHeight: '1.7', fontSize: '1.05rem' }}>
            From individual daily commuters to corporate HR administrators managing workforce shifts across Dubai and Abu Dhabi.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section">
        <div className="container grid-3">
          {TESTIMONIALS_DATA.map((item, index) => (
            <div key={index} className="ticket">
              <span className="quote-mark" aria-hidden="true">&#8221;</span>
              <p style={{ minHeight: '80px', fontStyle: 'italic', lineHeight: '1.65' }}>
                "{item.quote}"
              </p>
              <div className="perforation"></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className="avatar-ring" aria-hidden="true">{item.initial}</span>
                <div>
                  <strong style={{ color: '#f7f5f0', display: 'block', fontSize: '0.95rem' }}>
                    {item.name}
                  </strong>
                  <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--ink-faint)' }}>
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-panel">
        <div className="container">
          <div className="ticket cta-card" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: '#f7f5f0', marginBottom: '14px' }}>Ready to Join Them?</h2>
            <p style={{ maxWidth: '520px', margin: '0 auto 24px', lineHeight: '1.7' }}>
              Book your first ride today and experience why hundreds of daily commuters and corporate teams trust Salman Carlift.
            </p>
            <WhatsAppButton size="md">
              Book on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
