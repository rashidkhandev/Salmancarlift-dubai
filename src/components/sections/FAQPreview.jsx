import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { FAQS_DATA } from '../../utils/contactLinks';

export const FAQPreview = ({ limit = 3, showButton = true, title = "Frequently Asked Questions", eyebrow = "Good to Know" }) => {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default
  const faqs = limit ? FAQS_DATA.slice(0, limit) : FAQS_DATA;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section bg-panel" id="faq">
      <div className="container" style={{ maxWidth: '840px' }}>
        <SectionHeading
          center
          eyebrow={eyebrow}
          title={title}
          subtitle="Clear, upfront answers about our schedules, safety standards, and pricing."
        />

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-a-${index}`;

            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={faqId}
                >
                  <span>{faq.question}</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div
                  id={faqId}
                  className="faq-a"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.35s ease, opacity 0.3s ease'
                  }}
                  role="region"
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {showButton && (
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Button to="/faq" variant="outline">
              View Full FAQ
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQPreview;
