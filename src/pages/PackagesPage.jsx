import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/common/WhatsAppButton';
import SectionHeading from '../components/common/SectionHeading';
import { PACKAGES_DATA } from '../utils/contactLinks';
import { useDocumentSeo, PAGE_SEO } from '../utils/seoConfig';

export const PackagesPage = () => {
  useDocumentSeo(PAGE_SEO.packages);

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Packages
          </p>
          <span className="eyebrow">Commuter Plans</span>
          <h1>Transparent Packages for Every Budget</h1>
          <p style={{ maxWidth: '640px', lineHeight: '1.7', fontSize: '1.05rem' }}>
            Choose between weekly flexibility, maximum monthly savings, or dedicated corporate shuttle fleets. Fixed fees, no surge pricing, and no contract lock-in.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section">
        <div className="container grid-3">
          {PACKAGES_DATA.map((plan, index) => (
            <div
              key={index}
              className="ticket"
              style={
                plan.highlight
                  ? { borderColor: 'rgba(228,199,119,.55)', boxShadow: '0 20px 50px -15px rgba(201,162,75,.25)' }
                  : {}
              }
            >
              <div className="ticket-row">
                <span className="code">{plan.code}</span>
                {plan.badge && <span className="tag-pill">{plan.badge}</span>}
              </div>

              <h3 style={{ color: '#f7f5f0', marginTop: '14px', fontSize: '1.35rem' }}>
                {plan.title}
              </h3>
              <p style={{ minHeight: '52px', lineHeight: '1.6' }}>
                {plan.description}
              </p>

              <div className="perforation"></div>

              <ul style={{ color: 'var(--ink-muted)', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '26px' }}>
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx}>✓ {feat}</li>
                ))}
              </ul>

              <WhatsAppButton
                message={`Hi Salman Carlift, I would like to ask about pricing for ${plan.title}.`}
                size="md"
                block
              >
                {plan.ctaText}
              </WhatsAppButton>
            </div>
          ))}
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="section bg-panel">
        <div className="container">
          <SectionHeading
            center
            eyebrow="How Pricing Works"
            title="Simple, Distance-Based Pricing"
            subtitle="No unpredictable taxi meters or peak surge surcharges. Just fair, agreed rates."
          />

          <div className="grid-3">
            <div className="ticket">
              <div className="icon-badge">1</div>
              <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem' }}>Tell Us Your Route</h3>
              <p>
                Share your pickup point, exact destination, and preferred departure time with us on WhatsApp or through our online form.
              </p>
            </div>

            <div className="ticket">
              <div className="icon-badge">2</div>
              <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem' }}>Get an Instant Quote</h3>
              <p>
                We immediately calculate the exact distance, optimize the vehicle route, and reply with a fixed weekly, monthly, or per-trip fee.
              </p>
            </div>

            <div className="ticket">
              <div className="icon-badge">3</div>
              <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem' }}>Confirm &amp; Ride</h3>
              <p>
                Confirm your seat with your coordinator. Driver details, vehicle plate, and pickup contact are sent immediately for your first ride.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PackagesPage;
