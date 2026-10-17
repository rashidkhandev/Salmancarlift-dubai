import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Button from '../components/common/Button';
import { ROUTES_DATA } from '../utils/contactLinks';
import { useDocumentSeo, PAGE_SEO } from '../utils/seoConfig';

export const RoutesPage = () => {
  useDocumentSeo(PAGE_SEO.routes);

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Routes
          </p>
          <span className="eyebrow">Route Network</span>
          <h1>Active Car Lift Routes Across the UAE</h1>
          <p style={{ maxWidth: '640px', lineHeight: '1.7', fontSize: '1.05rem' }}>
            Fixed daily departures between Dubai and the key emirates, connecting residential hubs with major business zones, industrial parks, and educational campuses.
          </p>
        </div>
      </section>

      {/* Routes Detailed List */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          {ROUTES_DATA.map((route) => (
            <div key={route.id} className="ticket" style={{ marginBottom: '28px' }}>
              <div className="ticket-row" style={{ flexWrap: 'wrap', gap: '12px' }}>
                <h3 style={{ color: '#f7f5f0', margin: 0, fontSize: '1.4rem' }}>
                  {route.from} <span className="mono" style={{ color: 'var(--gold-400)' }}>&rarr;</span> {route.to}
                </h3>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span className="code">{route.code}</span>
                  <span className="tag-pill">{route.status}</span>
                </div>
              </div>

              <p style={{ marginTop: '16px', lineHeight: '1.7', fontSize: '1.02rem' }}>
                {route.details}
              </p>

              <div className="perforation"></div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {route.pills.map((pill, pIndex) => (
                    <span key={pIndex} className="tag-pill">
                      {pill}
                    </span>
                  ))}
                </div>

                <WhatsAppButton
                  message={`Hi Salman Carlift, I need pricing and seat availability for the ${route.from} to ${route.to} route.`}
                  size="sm"
                >
                  Book Seat on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Areas Info */}
      <section className="section bg-panel">
        <div className="container grid-2" style={{ alignItems: 'center', gap: '48px' }}>
          <div>
            <span className="eyebrow">Coverage Area</span>
            <h2>All Seven Emirates, Plus Al Ain</h2>
            <p style={{ lineHeight: '1.7', marginBottom: '16px' }}>
              Salman Carlift operates active daily and on-request routes across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain.
            </p>
            <p style={{ lineHeight: '1.7' }}>
              Don't see your exact community or pickup point listed? Message us directly — most corridors between these locations can easily be arranged as a private lift or added to our morning and evening commuter routes.
            </p>
            <div style={{ marginTop: '24px' }}>
              <WhatsAppButton message="Hi Salman Carlift, I want to check if you cover my pickup location: ">
                Check Custom Route
              </WhatsAppButton>
            </div>
          </div>

          <div className="ticket">
            <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem', marginBottom: '16px' }}>
              Key Dubai Destinations Served
            </h3>
            <ul style={{ color: 'var(--ink-muted)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <li>✓ Business Bay</li>
              <li>✓ Downtown Dubai</li>
              <li>✓ DIFC & World Trade Center</li>
              <li>✓ Dubai Marina & JBR</li>
              <li>✓ JLT & Media City</li>
              <li>✓ Dubai Internet City</li>
              <li>✓ Deira & Bur Dubai</li>
              <li>✓ Al Quoz Industrial</li>
              <li>✓ Dubai Silicon Oasis</li>
              <li>✓ Dubai South & DWC</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoutesPage;
