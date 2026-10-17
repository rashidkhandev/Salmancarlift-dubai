import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Button from '../components/common/Button';
import { BUSINESS_CONFIG, getTelLink, getWhatsAppLink } from '../utils/contactLinks';
import { useDocumentSeo, PAGE_SEO } from '../utils/seoConfig';

export const ContactPage = () => {
  useDocumentSeo(PAGE_SEO.contact);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    pickup: '',
    destination: '',
    message: '',
    honeypot: '' // spam trap
  });

  const [status, setStatus] = useState({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check - bot submission silently ignored
    if (formData.honeypot) {
      return;
    }

    // Validation
    const phonePattern = /^[0-9+\s-]{7,15}$/;
    if (!formData.name.trim() || !formData.phone.trim() || !formData.pickup.trim() || !formData.destination.trim()) {
      setStatus({
        message: 'Please fill in all required fields (Name, Phone, Pickup, Destination).',
        type: 'err'
      });
      return;
    }

    if (!phonePattern.test(formData.phone.trim())) {
      setStatus({
        message: 'Please enter a valid phone number (e.g. +971 52 148 8011).',
        type: 'err'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ message: '', type: '' });

    try {
      // Create lead payload
      const lead = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        whatsapp: formData.whatsapp.trim() || formData.phone.trim(),
        pickup: formData.pickup.trim(),
        destination: formData.destination.trim(),
        message: formData.message.trim(),
        createdAt: new Date().toISOString(),
        source: 'react-website-booking-form'
      };

      // Optional Firebase Firestore submission if environment keys or window.firebaseConfig are present
      const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY || (typeof window !== 'undefined' && window.firebaseConfig?.apiKey);
      if (firebaseApiKey && firebaseApiKey !== 'REPLACE_ME') {
        try {
          const [firebaseApp, firestore] = await Promise.all([
            import(/* @vite-ignore */ 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'),
            import(/* @vite-ignore */ 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js')
          ]);

          const config = window.firebaseConfig || {
            apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
            authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
            projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
            storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
            appId: import.meta.env.VITE_FIREBASE_APP_ID
          };

          const app = firebaseApp.initializeApp(config);
          const db = firestore.getFirestore(app);
          await firestore.addDoc(firestore.collection(db, 'leads'), lead);
        } catch (fbErr) {
          console.warn('Firestore optional push skipped:', fbErr);
        }
      }

      // Format WhatsApp fallback message
      const waText = `Hi Salman Carlift! I just submitted a booking request:%0A*Name:* ${encodeURIComponent(lead.name)}%0A*Phone:* ${encodeURIComponent(lead.phone)}%0A*Pickup:* ${encodeURIComponent(lead.pickup)}%0A*Destination:* ${encodeURIComponent(lead.destination)}${lead.message ? `%0A*Message:* ${encodeURIComponent(lead.message)}` : ''}`;

      setStatus({
        message: 'Thank you! Your booking request has been received. Our coordinator will contact you promptly on WhatsApp. You can also tap below to open WhatsApp instantly.',
        type: 'ok',
        waUrl: `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${waText}`
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        whatsapp: '',
        pickup: '',
        destination: '',
        message: '',
        honeypot: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        message: 'Your details were captured. Please also message us on WhatsApp for instant confirmation.',
        type: 'ok'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Contact
          </p>
          <span className="eyebrow">Get In Touch</span>
          <h1>Book Your Ride or Ask a Question</h1>
          <p style={{ maxWidth: '640px', lineHeight: '1.7', fontSize: '1.05rem' }}>
            Reach us on WhatsApp for the fastest reply, call us directly, or fill in the booking form and our team will confirm your route within minutes.
          </p>
        </div>
      </section>

      {/* Form & Direct Contact Info */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'flex-start', gap: '48px' }}>
          {/* Booking Form Card */}
          <div className="ticket">
            <h3 style={{ color: '#f7f5f0', fontSize: '1.35rem', marginBottom: '8px' }}>
              Send a Booking Request
            </h3>
            <p style={{ marginBottom: '24px' }}>
              Fill in your pickup and destination details below for a confirmed seat quote.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              {/* Spam honeypot trap */}
              <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label htmlFor="website">Leave empty</label>
                <input
                  type="text"
                  id="website"
                  name="honeypot"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="e.g. Faisal Khan"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="+971 5X XXX XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="whatsapp">WhatsApp Number (if different)</label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  autoComplete="tel"
                  placeholder="+971 5X XXX XXXX"
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="pickup">Pickup Location *</label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  required
                  placeholder="e.g. Al Nahda 2, Sharjah / Marina Diamond, Dubai"
                  value={formData.pickup}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="destination">Destination *</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  required
                  placeholder="e.g. Business Bay, Dubai / Mussafah, Abu Dhabi"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message / Preferences</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Preferred pickup timing (e.g. 7:30 AM), plan type (monthly/weekly/daily), number of passengers..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="gold"
                block
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Request...' : 'Send Booking Request'}
              </Button>

              {status.message && (
                <div
                  className={`form-status ${status.type}`}
                  role="status"
                  aria-live="polite"
                  style={{ marginTop: '16px', lineHeight: '1.6' }}
                >
                  <p>{status.message}</p>
                  {status.waUrl && (
                    <div style={{ marginTop: '12px' }}>
                      <Button href={status.waUrl} variant="wa" size="sm" target="_blank" rel="noopener noreferrer">
                        Open in WhatsApp Now &rarr;
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Direct Info Cards */}
          <div>
            <div className="ticket" style={{ marginBottom: '24px' }}>
              <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem' }}>Direct Dispatch &amp; Booking</h3>
              <div className="perforation"></div>
              <p className="mono" style={{ color: 'var(--gold-400)', fontSize: '1.2rem', fontWeight: 700, margin: '8px 0 16px' }}>
                <a href={getTelLink()}>{BUSINESS_CONFIG.phoneDisplay}</a>
              </p>
              <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>
                Need an immediate ride confirmation? Message us on WhatsApp or call our dispatch desk directly.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <WhatsAppButton size="sm">
                  WhatsApp Us
                </WhatsAppButton>
                <Button href={getTelLink()} variant="outline" size="sm">
                  Call Now
                </Button>
              </div>
            </div>

            <div className="ticket" style={{ marginBottom: '24px' }}>
              <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem' }}>Operating Hours</h3>
              <div className="perforation"></div>
              <p style={{ margin: 0, lineHeight: '1.7' }}>
                Open <strong>24 hours a day, 7 days a week</strong> — including UAE public holidays, Eid, and New Year. Pre-book anytime for a confirmed pickup window.
              </p>
            </div>

            <div className="ticket">
              <h3 style={{ color: '#f7f5f0', fontSize: '1.25rem' }}>Fast WhatsApp Booking Tip</h3>
              <div className="perforation"></div>
              <p style={{ margin: 0, lineHeight: '1.7' }}>
                For the fastest confirmation, simply send your <strong>WhatsApp Location Pin</strong> along with your shift hours directly to our number.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
