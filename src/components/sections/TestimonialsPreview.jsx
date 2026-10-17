import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { TESTIMONIALS_DATA } from '../../utils/contactLinks';

export const TestimonialsPreview = ({ limit = 3, showButton = true }) => {
  const testimonials = TESTIMONIALS_DATA.slice(0, limit);

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Testimonials"
          title="Trusted by Daily Commuters Across the UAE"
          subtitle="Real experiences from office executives, HR teams, and daily passengers."
        />

        <div className="grid-3">
          {testimonials.map((item, idx) => (
            <div key={idx} className="ticket">
              <span className="quote-mark" aria-hidden="true">&#8221;</span>
              <p style={{ minHeight: '76px', fontStyle: 'italic', lineHeight: '1.6' }}>
                "{item.quote}"
              </p>
              <div className="perforation"></div>
              <div className="ticket-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="avatar-ring" aria-hidden="true">{item.initial}</span>
                  <div>
                    <strong style={{ color: '#f7f5f0', display: 'block', fontSize: '0.95rem' }}>
                      {item.name}
                    </strong>
                    <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--ink-faint)' }}>
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showButton && (
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Button to="/testimonials" variant="outline">
              Read More Stories
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsPreview;
