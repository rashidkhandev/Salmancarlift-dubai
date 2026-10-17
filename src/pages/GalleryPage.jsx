import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { useDocumentSeo, PAGE_SEO } from '../utils/seoConfig';

export const GalleryPage = () => {
  useDocumentSeo(PAGE_SEO.gallery);

  const galleryItems = [
    {
      icon: "🚗",
      title: "Comfortable Sedans",
      subtitle: "Air-conditioned Toyota, Nissan, and executive sedans"
    },
    {
      icon: "🌅",
      title: "Dubai Highways at Dawn",
      subtitle: "Sheikh Zayed Road early commuter departures"
    },
    {
      icon: "👤",
      title: "Licensed, Uniformed Drivers",
      subtitle: "Courteous, punctual UAE-licensed professionals"
    },
    {
      icon: "😊",
      title: "Happy Daily Commuters",
      subtitle: "Trusted daily by students, bankers, and office staff"
    },
    {
      icon: "🚐",
      title: "Office Shuttle Fleet",
      subtitle: "HiAce and Coaster vans for workforce transport"
    },
    {
      icon: "✈️",
      title: "Airport Terminal Pickups",
      subtitle: "Terminal 1, 2, 3 DXB & AUH flight arrival meet & greet"
    },
    {
      icon: "✨",
      title: "Clean, Inspected Interiors",
      subtitle: "Sanitized daily, smoke-free, comfortable seating"
    },
    {
      icon: "🗺️",
      title: "Sharjah & Ajman Routes",
      subtitle: "Doorstep community pickups beat peak-hour traffic"
    }
  ];

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Gallery
          </p>
          <span className="eyebrow">Visual Tour</span>
          <h1>Inside Salman Carlift &amp; Our Routes</h1>
          <p style={{ maxWidth: '640px', lineHeight: '1.7', fontSize: '1.05rem' }}>
            A glimpse into the daily experience of commuting with Salman Carlift across Dubai, Abu Dhabi, Sharjah, and the Northern Emirates.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container grid-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="ticket"
              style={{
                aspectRatio: '4/3',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                background: 'linear-gradient(135deg, var(--navy-700), var(--navy-800))'
              }}
            >
              <div style={{ fontSize: '2.4rem', marginBottom: '12px' }} role="img" aria-label={item.title}>
                {item.icon}
              </div>
              <p style={{ margin: '0 0 6px', color: '#f7f5f0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem' }}>
                {item.title}
              </p>
              <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', lineHeight: '1.4', padding: '0 10px' }}>
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section bg-panel" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="ticket cta-card" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: '#f7f5f0', marginBottom: '14px' }}>Want to See Your Route in Action?</h2>
            <p style={{ maxWidth: '520px', margin: '0 auto 24px', lineHeight: '1.7' }}>
              Message us on WhatsApp for photos or exact details of the vehicle type and seat availability operating near your home or office.
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

export default GalleryPage;
