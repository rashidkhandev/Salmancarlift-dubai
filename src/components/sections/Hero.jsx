import React from 'react';
import Button from '../common/Button';
import WhatsAppButton from '../common/WhatsAppButton';
import { getTelLink } from '../../utils/contactLinks';

export const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">24 Hours &middot; 7 Emirates &middot; One Call Away</span>
          <h1>
            Reliable Car Lift Services <span className="gold">Across the UAE</span>
          </h1>
          <p className="hero-sub">
            Safe, comfortable and affordable daily pick &amp; drop for professionals, students and families — from Dubai to every corner of the Emirates, on a schedule that works around your day.
          </p>

          <div className="hero-actions">
            <WhatsAppButton size="md">
              Book on WhatsApp
            </WhatsAppButton>
            <Button href={getTelLink()} variant="outline">
              Call Now
            </Button>
            <Button to="/contact" variant="gold">
              Get a Quote
            </Button>
          </div>

          <div className="hero-meta">
            <div className="stat">
              <b>8+</b>
              <span>Emirates Covered</span>
            </div>
            <div className="stat">
              <b>24/7</b>
              <span>Availability</span>
            </div>
            <div className="stat">
              <b>8</b>
              <span>Ride Options</span>
            </div>
          </div>
        </div>

        {/* Highway Route Signature SVG Visual */}
        <div className="route-visual" aria-hidden="true">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id="carpath"
                d="M80,320 C 60,220 140,200 130,120 C 122,60 220,60 210,140 C 200,220 320,220 300,90"
                fill="none"
              />
            </defs>
            <path
              d="M80,320 C 60,220 140,200 130,120 C 122,60 220,60 210,140 C 200,220 320,220 300,90"
              fill="none"
              stroke="#e4c777"
              strokeWidth="2"
              className="route-dash"
              opacity="0.75"
            />
            <g className="route-node active">
              <circle cx="80" cy="320" r="7" />
              <text x="94" y="324">DXB</text>
            </g>
            <g className="route-node">
              <circle cx="130" cy="120" r="6" />
              <text x="144" y="124">SHJ</text>
            </g>
            <g className="route-node">
              <circle cx="210" cy="140" r="6" />
              <text x="224" y="144">AJM</text>
            </g>
            <g className="route-node">
              <circle cx="300" cy="90" r="7" />
              <text x="270" y="72">AUH</text>
            </g>
            <g className="route-node">
              <circle cx="300" cy="220" r="6" />
              <text x="314" y="224">FUJ</text>
            </g>
            <circle r="5" fill="#25d366">
              <animateMotion
                dur="5.5s"
                repeatCount="indefinite"
                path="M80,320 C 60,220 140,200 130,120 C 122,60 220,60 210,140 C 200,220 320,220 300,90"
              />
            </circle>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
