import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { FAQS_DATA } from '../utils/contactLinks';
import { useDocumentSeo, PAGE_SEO } from '../utils/seoConfig';

export const FAQPage = () => {
  useDocumentSeo(PAGE_SEO.faq);
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / FAQ
          </p>
          <span className="eyebrow">Knowledge Base</span>
          <h1>Frequently Asked Questions</h1>
          <p style={{ maxWidth: '640px', lineHeight: '1.7', fontSize: '1.05rem' }}>
            Everything you need to know about booking, monthly schedules, pricing transparency, and ride safety with Salman Carlift.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div>
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openIndex === index;
              const aId = `faq-full-a-${index}`;

              return (
                <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-q"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={aId}
                  >
                    <span>{faq.question}</span>
                    <span className="plus" aria-hidden="true">+</span>
                  </button>
                  <div
                    id={aId}
                    className="faq-a"
                    style={{
                      maxHeight: isOpen ? '300px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      transition: 'max-height 0.35s ease, opacity 0.3s ease'
                    }}
                    role="region"
                  >
                    <p style={{ lineHeight: '1.7' }}>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Contact Help */}
      <section className="section bg-panel" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="ticket" style={{ padding: '56px 32px', textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: '#f7f5f0', marginBottom: '14px' }}>Still Have Questions?</h2>
            <p style={{ maxWidth: '520px', margin: '0 auto 24px', lineHeight: '1.7' }}>
              Our dispatch and customer support team is available 24/7 on WhatsApp. Ask about custom schedules, fare estimates, or multi-stop routes.
            </p>
            <WhatsAppButton size="md">
              Ask Us on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
