import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentSeo, PAGE_SEO } from '../utils/seoConfig';

export const TermsPage = () => {
  useDocumentSeo(PAGE_SEO.terms);

  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Terms &amp; Conditions
          </p>
          <span className="eyebrow">Legal</span>
          <h1>Terms &amp; Conditions</h1>
          <p style={{ maxWidth: '600px' }}>Last updated: 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="ticket" style={{ padding: '36px', color: 'var(--ink-muted)', lineHeight: '1.8' }}>
            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem' }}>1. Booking &amp; Confirmation</h3>
            <p>
              All monthly, weekly, daily, private and sharing car lift bookings are coordinated and finalized via WhatsApp or phone. A booking is confirmed once our dispatch confirms route availability, pickup window, and agreed pricing with the passenger.
            </p>

            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem', marginTop: '24px' }}>2. Payments &amp; Invoicing</h3>
            <p>
              Monthly and weekly commuter plans are payable in advance for the agreed period. Daily pick &amp; drop and airport transfers may be paid per trip as agreed during booking. Corporate accounts receive a consolidated monthly invoice.
            </p>

            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem', marginTop: '24px' }}>3. Cancellations &amp; Route Changes</h3>
            <p>
              Passengers may reschedule or cancel a booking by notifying us on WhatsApp with reasonable notice. On monthly plans, seat reservations are held for the contracted term.
            </p>

            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem', marginTop: '24px' }}>4. Passenger Punctuality &amp; Conduct</h3>
            <p>
              Passengers are requested to be at their designated pickup stop at the scheduled time to ensure fellow commuters along the corridor reach their destinations on schedule.
            </p>

            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem', marginTop: '24px' }}>5. Fleet &amp; Driver Standards</h3>
            <p>
              All vehicles are maintained, cleaned, and inspected regularly. Drivers are licensed under UAE transport regulations. Salman Carlift reserves the right to assign the most optimal vehicle for the route.
            </p>

            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem', marginTop: '24px' }}>6. Governing Law</h3>
            <p>
              These terms are governed by the applicable laws of the United Arab Emirates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
