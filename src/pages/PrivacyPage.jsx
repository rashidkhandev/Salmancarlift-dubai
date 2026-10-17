import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG, getTelLink } from '../utils/contactLinks';
import { useDocumentSeo, PAGE_SEO } from '../utils/seoConfig';

export const PrivacyPage = () => {
  useDocumentSeo(PAGE_SEO.privacy);

  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Privacy Policy
          </p>
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p style={{ maxWidth: '600px' }}>Last updated: 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="ticket" style={{ padding: '36px', color: 'var(--ink-muted)', lineHeight: '1.8' }}>
            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem' }}>1. Information We Collect</h3>
            <p>
              When you book a ride or contact us through WhatsApp, phone, or our online form, we collect your name, phone number, WhatsApp number, pickup location, destination, and any preferences you specify. This information is used strictly to organize and coordinate your passenger transport booking.
            </p>

            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem', marginTop: '24px' }}>2. How We Use Your Information</h3>
            <p>
              We use your details exclusively to confirm rides, dispatch assigned drivers, provide route alerts, and maintain service punctuality. We do not sell, rent, or lease your personal information to third parties or marketing brokers.
            </p>

            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem', marginTop: '24px' }}>3. Data Storage &amp; Security</h3>
            <p>
              Booking requests are handled through secure infrastructure protected by industry-standard access control rules to ensure passenger phone numbers and locations remain confidential.
            </p>

            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem', marginTop: '24px' }}>4. Passenger Communication</h3>
            <p>
              By sending a booking request, you consent to being contacted via phone call or WhatsApp message regarding pickup confirmations, driver vehicle numbers, and route timings.
            </p>

            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem', marginTop: '24px' }}>5. Your Rights</h3>
            <p>
              You may request access to, correction of, or deletion of your contact records at any time by messaging us directly on WhatsApp or calling our customer line.
            </p>

            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem', marginTop: '24px' }}>6. Contact Us</h3>
            <p>
              For any privacy inquiries, contact Salman Carlift at{' '}
              <a href={getTelLink()} style={{ color: 'var(--gold-400)', fontWeight: 600 }}>
                {BUSINESS_CONFIG.phoneDisplay}
              </a>{' '}
              or via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
