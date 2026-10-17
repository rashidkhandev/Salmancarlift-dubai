import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { ROUTES_DATA } from '../../utils/contactLinks';

export const RoutesPreview = () => {
  return (
    <section className="section" id="routes">
      <div className="container">
        <SectionHeading
          eyebrow="Live Routes"
          title="Popular Car Lift Routes"
          subtitle="Fixed daily departures between the emirates, with confirmed seats and flexible pickup points."
        />

        <div>
          {ROUTES_DATA.map((route) => (
            <div key={route.id} className="route-item">
              <div className="cities">
                <span>{route.from}</span>
                <span className="arrow">&rarr;</span>
                <span>{route.to}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className="tag-pill">{route.tag}</span>
                <span className="price mono">{route.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Button to="/routes" variant="gold">
            See All Routes &amp; Coverage
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoutesPreview;
