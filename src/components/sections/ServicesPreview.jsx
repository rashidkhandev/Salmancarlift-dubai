import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { SERVICES_DATA } from '../../utils/contactLinks';

export const ServicesPreview = ({ showViewAll = false }) => {
  return (
    <section className="section bg-panel" id="services">
      <div className="container">
        <SectionHeading
          center
          eyebrow="What We Offer"
          title="Car Lift Services Built Around Your Day"
          subtitle="From a single daily commute to a full office fleet — choose the ride that fits your routine."
        />

        <div className="grid-3">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="ticket">
              <div className="ticket-row">
                <span className="code">{service.code}</span>
                {service.tag && <span className="tag-pill">{service.tag}</span>}
              </div>
              <h3 style={{ color: '#f7f5f0', marginTop: '14px', fontSize: '1.25rem' }}>
                {service.title}
              </h3>
              <p style={{ minHeight: '66px' }}>{service.description}</p>
              <div className="perforation"></div>
              <Button to="/services" variant="outline" size="sm" block>
                View Details
              </Button>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Button to="/services" variant="gold">
              Explore All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesPreview;
