import { useEffect } from 'react';
import { BUSINESS_CONFIG } from './contactLinks';

export const PAGE_SEO = {
  home: {
    title: "Car Lift Dubai | Monthly & Daily Car Lift Services UAE — Salman Carlift",
    description: "Salman Carlift offers reliable monthly, weekly & daily car lift services across Dubai, Abu Dhabi, Sharjah & the UAE. Office transport, airport transfer, private & sharing rides. Book on WhatsApp.",
    keywords: "car lift dubai, dubai car lift, monthly car lift dubai, weekly car lift dubai, office transport dubai, staff transport dubai, private car lift dubai, sharing car lift dubai, uae car lift",
    canonical: "/"
  },
  services: {
    title: "Car Lift Services Dubai | Monthly, Weekly, Office & Private Transport",
    description: "Explore all Salman Carlift services: monthly & weekly car lift, daily pick & drop, office and staff transport, airport transfer, and private or sharing rides across the UAE.",
    keywords: "car lift services dubai, office transport dubai, staff transport dubai, private car lift dubai, sharing car lift dubai, airport transfer uae",
    canonical: "/services"
  },
  routes: {
    title: "Car Lift Routes Dubai & UAE | Abu Dhabi, Sharjah, Ajman & Al Ain",
    description: "View active car lift routes across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Al Ain. Daily departures, flexible pickups, monthly commuter seats.",
    keywords: "car lift routes dubai, car lift dubai to abu dhabi, car lift dubai to sharjah, car lift dubai to ajman, uae car lift routes",
    canonical: "/routes"
  },
  packages: {
    title: "Car Lift Packages & Pricing Dubai | Monthly, Weekly & Corporate Rates",
    description: "Compare Salman Carlift packages: Weekly Flex, Monthly Commuter, and Corporate Office Transport. Simple distance-based pricing with zero hidden fees.",
    keywords: "car lift price dubai, monthly car lift cost dubai, cheap car lift dubai, corporate transport uae",
    canonical: "/packages"
  },
  about: {
    title: "About Salman Carlift | Trusted Passenger Transport Across the UAE",
    description: "Learn about Salman Carlift: our mission to provide safe, punctual, and affordable daily commutes across Dubai and the UAE with licensed, professional drivers.",
    keywords: "about salman carlift, safe car lift uae, reliable car lift company dubai",
    canonical: "/about"
  },
  contact: {
    title: "Contact & Book Car Lift Dubai | 24/7 WhatsApp & Phone Support",
    description: "Book your car lift in Dubai or ask any question. Reach Salman Carlift 24/7 on WhatsApp, call +971 52 148 8011, or submit an instant online ride request.",
    keywords: "book car lift dubai, contact salman carlift, car lift whatsapp number dubai",
    canonical: "/contact"
  },
  faq: {
    title: "Car Lift Dubai FAQ | Common Questions Answered — Salman Carlift",
    description: "Get answers to frequently asked questions about car lift bookings, monthly plans, sharing rides, pickup timing, and coverage areas across Dubai and the UAE.",
    keywords: "car lift dubai faq, car lift rules uae, sharing car lift safety",
    canonical: "/faq"
  },
  testimonials: {
    title: "Client Testimonials & Reviews | Salman Carlift Dubai & UAE",
    description: "Read real stories and reviews from daily commuters, HR managers, and travelers who rely on Salman Carlift for daily commutes and airport transfers.",
    keywords: "salman carlift reviews, car lift testimonials dubai",
    canonical: "/testimonials"
  },
  gallery: {
    title: "Fleet & Routes Gallery | Salman Carlift Dubai",
    description: "Explore vehicles, highway routes, and passenger comfort standards from Salman Carlift across Dubai, Sharjah, Abu Dhabi, and beyond.",
    keywords: "salman carlift fleet, car lift vehicle photos dubai",
    canonical: "/gallery"
  },
  privacy: {
    title: "Privacy Policy | Salman Carlift Dubai",
    description: "Read the Salman Carlift privacy policy to understand how we collect, use, and protect your personal information when booking our services.",
    keywords: "salman carlift privacy policy",
    canonical: "/privacy"
  },
  terms: {
    title: "Terms & Conditions | Salman Carlift Dubai",
    description: "Read the terms and conditions governing bookings, cancellations, payments, and passenger conduct with Salman Carlift in the United Arab Emirates.",
    keywords: "salman carlift terms and conditions",
    canonical: "/terms"
  },
  notFound: {
    title: "404 - Page Not Found | Salman Carlift Dubai",
    description: "The page you are looking for does not exist or has moved. Return to Salman Carlift home or contact us directly on WhatsApp.",
    keywords: "404 not found",
    canonical: "/404"
  }
};

/**
 * Custom Hook or Component to dynamically synchronize page title, meta description, and canonical tag
 */
export const useDocumentSeo = (seoData) => {
  useEffect(() => {
    if (!seoData) return;

    // Document Title
    document.title = seoData.title;

    // Description Meta Tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = seoData.description;

    // Keywords Meta Tag
    if (seoData.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = seoData.keywords;
    }

    // Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    const fullCanonical = `${BUSINESS_CONFIG.canonicalBase}${seoData.canonical === '/' ? '' : seoData.canonical}`;
    canonicalTag.href = fullCanonical;

    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = seoData.title;

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = seoData.description;

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = fullCanonical;

    // Twitter Tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.content = seoData.title;

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.content = seoData.description;

    // Scroll to top upon page navigation
    window.scrollTo(0, 0);
  }, [seoData]);
};
