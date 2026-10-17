import React from 'react';

export const TrustStrip = () => {
  const trustItems = [
    {
      icon: "🛡️",
      title: "Licensed Drivers",
      subtitle: "Verified UAE RTA compliant"
    },
    {
      icon: "⏱️",
      title: "On-Time Pickup",
      subtitle: "Consistent daily windows"
    },
    {
      icon: "💰",
      title: "Affordable Packages",
      subtitle: "Fixed monthly & weekly rates"
    },
    {
      icon: "💬",
      title: "Instant WhatsApp Booking",
      subtitle: "Direct confirmation in minutes"
    }
  ];

  return (
    <section className="section" style={{ padding: '48px 0', borderBottom: '1px solid rgba(228,199,119,.1)' }}>
      <div className="container grid-4">
        {trustItems.map((item, index) => (
          <div key={index} className="ticket" style={{ padding: '22px', textAlign: 'center' }}>
            <div className="icon-badge" style={{ margin: '0 auto 12px' }}>
              <span role="img" aria-label={item.title}>{item.icon}</span>
            </div>
            <p style={{ color: '#f7f5f0', margin: '0 0 4px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>
              {item.title}
            </p>
            <span style={{ fontSize: '0.8rem', color: 'var(--ink-faint)', display: 'block' }}>
              {item.subtitle}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
