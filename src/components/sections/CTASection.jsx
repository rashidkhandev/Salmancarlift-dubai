import React from 'react';
import Button from '../common/Button';
import WhatsAppButton from '../common/WhatsAppButton';
import { getTelLink, BUSINESS_CONFIG } from '../../utils/contactLinks';

export const CTASection = ({
  eyebrow = "Ready When You Are",
  title = "Book Your Car Lift in Under a Minute",
  subtitle = "Send your pickup location and destination on WhatsApp — our team confirms your ride the same minute, day or night."
}) => {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div
          className="ticket"
          style={{
            padding: '56px 36px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--navy-800), var(--navy-700))',
            borderColor: 'rgba(228,199,119,.35)'
          }}
        >
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            {eyebrow}
          </span>
          <h2 style={{ color: '#f7f5f0', fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', marginBottom: '14px' }}>
            {title}
          </h2>
          <p style={{ maxWidth: '540px', margin: '0 auto 28px', fontSize: '1.05rem', lineHeight: '1.7' }}>
            {subtitle}
          </p>

          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <WhatsAppButton size="md">
              Book on WhatsApp
            </WhatsAppButton>
            <Button href={getTelLink()} variant="outline">
              Call {BUSINESS_CONFIG.phoneDisplay}
            </Button>
            <Button to="/contact" variant="gold">
              Get an Instant Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
