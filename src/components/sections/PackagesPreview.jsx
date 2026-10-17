import React from 'react';
import Button from '../common/Button';
import WhatsAppButton from '../common/WhatsAppButton';

export const PackagesPreview = () => {
  return (
    <section className="section bg-panel-alt">
      <div className="container grid-2" style={{ alignItems: 'center', gap: '48px' }}>
        <div>
          <span className="eyebrow">Packages</span>
          <h2>One Monthly Fee. Zero Surprises.</h2>
          <p style={{ lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '28px' }}>
            Compare our Monthly, Weekly and Corporate packages side-by-side and choose the commute plan that matches your schedule and budget. Every plan includes fixed pickup windows and licensed drivers.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Button to="/packages" variant="outline">
              Compare All Packages
            </Button>
            <Button to="/contact" variant="gold">
              Get Custom Quote
            </Button>
          </div>
        </div>

        <div className="ticket" style={{ borderColor: 'rgba(228,199,119,.4)' }}>
          <div className="ticket-row">
            <span className="code">MOST BOOKED</span>
            <span className="tag-pill">Save up to 40%</span>
          </div>
          <h3 style={{ color: '#f7f5f0', marginTop: '14px', fontSize: '1.35rem' }}>
            Monthly Commuter Plan
          </h3>
          <p>
            Reserved daily seat, fixed pickup time, dedicated route across Dubai, Sharjah, Abu Dhabi &amp; neighbouring emirates.
          </p>
          <ul style={{ color: 'var(--ink-muted)', display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0 20px', padding: 0 }}>
            <li>✓ Guaranteed daily seat reservation</li>
            <li>✓ Consistent driver &amp; known route timing</li>
            <li>✓ Direct WhatsApp route coordinator</li>
          </ul>
          <div className="perforation"></div>
          <WhatsAppButton
            message="Hi Salman Carlift, I would like to ask for pricing on the Monthly Commuter Plan."
            size="md"
            block
          >
            Ask for Monthly Pricing
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default PackagesPreview;
