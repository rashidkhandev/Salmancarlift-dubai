import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Button from '../components/common/Button';
import { SERVICES_DATA, getTelLink } from '../utils/contactLinks';
import { useDocumentSeo, PAGE_SEO } from '../utils/seoConfig';

export const ServicesPage = () => {
  useDocumentSeo(PAGE_SEO.services);

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Services
          </p>
          <span className="eyebrow">Full Service List</span>
          <h1>Car Lift Services for Every Commute</h1>
          <p style={{ maxWidth: '620px', lineHeight: '1.7', fontSize: '1.05rem' }}>
            Whether you travel the same route every morning or need a single ride tonight, there's a Salman Carlift service built for it with verified drivers and on-time pickups.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container grid-2" style={{ gap: '32px' }}>
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="ticket">
              <div className="ticket-row">
                <span className="code">{service.code}</span>
                {service.tag && <span className="tag-pill">{service.tag}</span>}
              </div>
              <h3 style={{ color: '#f7f5f0', marginTop: '14px', fontSize: '1.35rem' }}>
                {service.title}
              </h3>
              <p style={{ lineHeight: '1.7', minHeight: '52px' }}>
                {service.description}
              </p>
              <div className="perforation"></div>
              <ul style={{ color: 'var(--ink-muted)', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex}>✓ {feature}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <WhatsAppButton
                  message={`Hi Salman Carlift, I would like to book or ask for pricing on ${service.title}.`}
                  size="sm"
                  block
                >
                  Book on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Route Teaser */}
      <section className="section bg-panel" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container text-center" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Tailored For You</span>
          <h2>Need a Corporate Fleet or Unique Route?</h2>
          <p style={{ margin: '0 auto 28px', lineHeight: '1.7' }}>
            We specialize in tailored transport contracts for corporate offices, hotels, hospitals, retail chains, and events across Dubai and Abu Dhabi.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button to="/contact" variant="gold">
              Request Fleet Quote
            </Button>
            <Button href={getTelLink()} variant="outline">
              Speak with a Coordinator
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
