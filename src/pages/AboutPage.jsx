import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/common/WhatsAppButton';
import SectionHeading from '../components/common/SectionHeading';
import { useDocumentSeo, PAGE_SEO } from '../utils/seoConfig';

export const AboutPage = () => {
  useDocumentSeo(PAGE_SEO.about);

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / About Us
          </p>
          <span className="eyebrow">Our Story</span>
          <h1>Built Around One Idea: Never Miss the Ride</h1>
          <p style={{ maxWidth: '640px', lineHeight: '1.7', fontSize: '1.05rem' }}>
            Salman Carlift started with a simple frustration shared by thousands of daily commuters in the UAE — unreliable pickup times, unclear pricing and last-minute cancellations. We built a car lift service that fixes exactly that.
          </p>
        </div>
      </section>

      {/* Story & Differentiators */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center', gap: '48px' }}>
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2>Your Daily Ride Partner, Every Single Day</h2>
            <p style={{ lineHeight: '1.7', marginBottom: '16px' }}>
              Salman Carlift is a dedicated passenger transport service covering Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain. We run monthly, weekly and daily car lift routes for office staff, students, families and independent professionals who need a dependable ride without owning or renting a car.
            </p>
            <p style={{ lineHeight: '1.7' }}>
              Every driver on our network is licensed and briefed on route timing, pickup etiquette and passenger comfort. Vehicles are inspected regularly, and every route is monitored so pickup windows stay consistent — even during Dubai's busiest traffic hours.
            </p>
          </div>

          <div className="ticket">
            <div className="ticket-row">
              <span className="code">SINCE DAY ONE</span>
              <span className="tag-pill">UAE Wide</span>
            </div>
            <h3 style={{ color: '#f7f5f0', marginTop: '14px', fontSize: '1.3rem' }}>
              What Sets Us Apart
            </h3>
            <ul style={{ color: 'var(--ink-muted)', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
              <li>✓ Fixed monthly pricing — no surge, no hidden toll fees</li>
              <li>✓ Comprehensive coverage across all 7 emirates plus Al Ain</li>
              <li>✓ 24-hour availability, including weekends and public holidays</li>
              <li>✓ Private and sharing options on every single route</li>
              <li>✓ Direct WhatsApp booking and live coordinator support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Three Commitments */}
      <section className="section bg-panel">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Promise"
            title="Three Commitments We Don't Compromise On"
            subtitle="The operational standards that keep our riders coming back month after month."
          />

          <div className="grid-3">
            <div className="ticket">
              <div className="icon-badge">⏱️</div>
              <h3 style={{ color: '#f7f5f0', fontSize: '1.2rem' }}>Punctuality</h3>
              <p>
                Your pickup time is a promise, not an estimate. Routes are planned around real Dubai and Abu Dhabi traffic patterns to ensure you reach work on time.
              </p>
            </div>
            <div className="ticket">
              <div className="icon-badge">🔒</div>
              <h3 style={{ color: '#f7f5f0', fontSize: '1.2rem' }}>Safety & Comfort</h3>
              <p>
                Licensed drivers, well-maintained air-conditioned vehicles and strictly capped passenger counts on every sharing car lift route.
              </p>
            </div>
            <div className="ticket">
              <div className="icon-badge">💳</div>
              <h3 style={{ color: '#f7f5f0', fontSize: '1.2rem' }}>Transparent Pricing</h3>
              <p>
                What we quote on WhatsApp is what you pay — monthly, weekly or per trip, with zero last-minute additions, toll charges, or surge fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="ticket" style={{ padding: '56px 32px', textAlign: 'center', background: 'linear-gradient(135deg, var(--navy-800), var(--navy-700))' }}>
            <h2 style={{ color: '#f7f5f0', marginBottom: '14px' }}>Want to Know More Before You Book?</h2>
            <p style={{ maxWidth: '520px', margin: '0 auto 24px', lineHeight: '1.7' }}>
              Message our team directly on WhatsApp — we're happy to walk you through routes, timing and pricing before you commit to a plan.
            </p>
            <WhatsAppButton size="md">
              Chat on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
