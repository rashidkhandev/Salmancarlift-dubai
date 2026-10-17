import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { BUSINESS_CONFIG, getTelLink, getWhatsAppLink } from '../../utils/contactLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand info */}
          <div>
            <Logo className="footer-brand" style={{ marginBottom: '16px' }} />
            <p style={{ marginTop: '14px', lineHeight: '1.7' }}>
              Reliable daily car lift, staff transport and airport transfer services across the UAE. Licensed drivers, comfortable vehicles, on-time pickups — every single day.
            </p>
            <div className="social-row" aria-label="Social media channels">
              <a href={BUSINESS_CONFIG.social.facebook} aria-label="Facebook">f</a>
              <a href={BUSINESS_CONFIG.social.instagram} aria-label="Instagram">ig</a>
              <a href={getWhatsAppLink()} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">wa</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/routes">Popular Routes</Link></li>
              <li><Link to="/packages">Packages & Pricing</Link></li>
              <li><Link to="/gallery">Fleet Gallery</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4>Service Areas</h4>
            <ul>
              <li><Link to="/routes">Dubai Metro & Communities</Link></li>
              <li><Link to="/routes">Abu Dhabi Capital Route</Link></li>
              <li><Link to="/routes">Sharjah Daily Commute</Link></li>
              <li><Link to="/routes">Ajman Residential Hubs</Link></li>
              <li><Link to="/routes">Ras Al Khaimah</Link></li>
              <li><Link to="/routes">Fujairah & Al Ain</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4>Get in Touch</h4>
            <ul>
              <li style={{ color: 'var(--cream-50)', fontWeight: 600 }}>
                {BUSINESS_CONFIG.hours}
              </li>
              <li className="mono">
                <a href={getTelLink()} style={{ color: 'var(--gold-400)', fontWeight: 700 }}>
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--wa-green)' }}>
                  Chat on WhatsApp (Instant Reply)
                </a>
              </li>
              <li>
                <Link to="/contact">Send an Online Booking Request</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.
          </p>
          <p>
            <Link to="/privacy">Privacy Policy</Link>
            &nbsp;&middot;&nbsp;
            <Link to="/terms">Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
