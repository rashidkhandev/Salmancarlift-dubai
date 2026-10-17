/**
 * Centralized Business Details & Contact Configuration for Salman Car Lift Dubai
 */

export const BUSINESS_CONFIG = {
  name: "Salman Carlift Dubai",
  shortName: "Salman Carlift",
  phoneDisplay: "+971 52 148 8011",
  phoneRaw: "+971521488011",
  whatsappNumber: "971521488011",
  defaultWhatsAppMessage: "Hi Salman Carlift, I need a car lift booking.",
  hours: "24 Hours a day, 7 days a week (including public holidays)",
  coverage: "Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain & Al Ain",
  email: "info@salmancarliftdubai.com",
  canonicalBase: "https://salman-carleft-dubai.web.app",
  social: {
    facebook: "#",
    instagram: "#",
    whatsapp: "https://wa.me/971521488011"
  }
};

/**
 * Generate a customized WhatsApp chat link with optional custom text
 */
export const getWhatsAppLink = (customText) => {
  const message = encodeURIComponent(customText || BUSINESS_CONFIG.defaultWhatsAppMessage);
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${message}`;
};

/**
 * Call link helper
 */
export const getTelLink = () => `tel:${BUSINESS_CONFIG.phoneRaw}`;

/**
 * Service catalogue
 */
export const SERVICES_DATA = [
  {
    id: "SC-01",
    code: "SC-01",
    title: "Monthly Car Lift",
    tag: "Popular",
    description: "Fixed monthly seat on a trusted daily route — the most economical way for staff and students to commute across Dubai and Abu Dhabi.",
    features: [
      "Same driver, same route, every day",
      "Priority seat during Ramadan & peak hours",
      "Pause or pick a new pickup point anytime"
    ],
    link: "/services"
  },
  {
    id: "SC-02",
    code: "SC-02",
    title: "Weekly Car Lift",
    tag: "Flexible",
    description: "Short-term commuting cover for project-based work, visiting staff or temporary assignments — book by the week, cancel anytime.",
    features: [
      "Book by the week, no long lock-in",
      "Same safety standards as monthly plans",
      "Ideal for contract & seasonal staff"
    ],
    link: "/services"
  },
  {
    id: "SC-03",
    code: "SC-03",
    title: "Daily Pick & Drop",
    tag: "24/7 Available",
    description: "Need a one-off ride today? Daily pick & drop is ready across all seven emirates with confirmed pickup windows.",
    features: [
      "Confirmed pickup time before you leave",
      "Available day or night, 24 hours",
      "No app download required — book on WhatsApp"
    ],
    link: "/services"
  },
  {
    id: "SC-04",
    code: "SC-04",
    title: "Office Transport",
    tag: "Corporate",
    description: "Company-contracted transport for your workforce, with route planning, shift timing and a single monthly invoice.",
    features: [
      "Route planning for multiple pickup points",
      "One monthly invoice for the whole team",
      "Dedicated coordinator for your HR team"
    ],
    link: "/services"
  },
  {
    id: "SC-05",
    code: "SC-05",
    title: "Airport Transfer",
    tag: "Flight Timed",
    description: "Flight-timed pickups to and from DXB, AUH and SHJ airports, tracked to your landing time — no waiting, no surge pricing.",
    features: [
      "Direct Terminal 1, 2, 3 DXB, AUH & SHJ coverage",
      "Luggage assistance included",
      "Real-time flight arrival tracking"
    ],
    link: "/services"
  },
  {
    id: "SC-06",
    code: "SC-06",
    title: "Private & Sharing Car Lift",
    tag: "Choice of Ride",
    description: "Ride solo in a private car lift, or share a seat with fellow commuters on the same route to save on the monthly cost.",
    features: [
      "Capped passengers per vehicle for comfort",
      "Door-to-door private lift option",
      "Economical sharing rates"
    ],
    link: "/services"
  }
];

/**
 * Route corridors data
 */
export const ROUTES_DATA = [
  {
    id: "route-1",
    from: "Dubai",
    to: "Abu Dhabi",
    code: "ROUTE 1",
    status: "Daily departures",
    tag: "Most Popular",
    details: "The Dubai to Abu Dhabi car lift is our busiest daily route, built for professionals commuting along Sheikh Zayed Road every morning. Choose a monthly seat for a fixed schedule, or book a daily pick & drop for a one-off trip between the two capitals.",
    pills: ["Monthly seats available", "Morning & evening departures", "Private option on request"]
  },
  {
    id: "route-2",
    from: "Dubai",
    to: "Sharjah",
    code: "ROUTE 2",
    status: "Daily departures",
    tag: "High Frequency",
    details: "Thousands of residents commute between Sharjah and Dubai daily, and our Dubai to Sharjah car lift is designed around that exact pattern — early departures that beat the Al Nahda border traffic and evening returns timed to office hours.",
    pills: ["Peak-hour timed departures", "Sharing car lift available", "Popular with students & office staff"]
  },
  {
    id: "route-3",
    from: "Dubai",
    to: "Ajman",
    code: "ROUTE 3",
    status: "Daily departures",
    tag: "Commuter Favourite",
    details: "The Dubai to Ajman car lift connects residential communities in Ajman with workplaces across Dubai, with pickup points arranged close to major residential clusters for a shorter walk to your ride.",
    pills: ["Multiple pickup points", "Monthly & weekly plans", "Affordable sharing rates"]
  },
  {
    id: "route-4",
    from: "Abu Dhabi",
    to: "Dubai",
    code: "ROUTE 4",
    status: "Daily departures",
    tag: "Return Commute",
    details: "Reversing the capital's busiest commute, the Abu Dhabi to Dubai car lift runs early morning departures for professionals working in Dubai, with a dedicated evening return leg timed to typical office hours.",
    pills: ["Monthly commuter plan", "Early morning departures", "Evening return included"]
  },
  {
    id: "route-5",
    from: "Dubai",
    to: "Ras Al Khaimah",
    code: "ROUTE 5",
    status: "On request",
    tag: "Northern Emirates",
    details: "The Dubai to Ras Al Khaimah car lift is ideal for commuters and visiting staff travelling to the northern emirates, with flexible timing built around longer travel distances and fewer daily departures.",
    pills: ["Flexible timing", "Group & office bookings", "Northern Emirates coverage"]
  },
  {
    id: "route-6",
    from: "Dubai",
    to: "Fujairah",
    code: "ROUTE 6",
    status: "On request",
    tag: "East Coast",
    details: "Covering the cross-country journey to the East Coast, our Dubai to Fujairah car lift serves staff and families relocating or working across the mountain route, with private and scheduled options available on request.",
    pills: ["On-request scheduling", "Private lift recommended", "East coast coverage"]
  },
  {
    id: "route-7",
    from: "Dubai",
    to: "Al Ain",
    code: "ROUTE 7",
    status: "On request",
    tag: "Oasis Route",
    details: "Our Dubai to Al Ain car lift supports the inland desert-city route, popular with staff working across both cities and families visiting relatives, with private car lift as the recommended option for this longer distance.",
    pills: ["Longer-distance private lift", "On-request booking", "Comfortable long-route vehicles"]
  }
];

/**
 * Packages catalogue
 */
export const PACKAGES_DATA = [
  {
    code: "PLAN 01",
    title: "Weekly Flex",
    badge: null,
    highlight: false,
    description: "Short-term commuting for temporary work, visiting staff or trial routes before committing monthly.",
    features: [
      "Book by the week",
      "Cancel or extend anytime",
      "Sharing or private option",
      "Standard vehicle seating"
    ],
    ctaText: "Ask for Weekly Pricing"
  },
  {
    code: "PLAN 02",
    title: "Monthly Commuter",
    badge: "Best Value",
    highlight: true,
    description: "Our most-booked plan — a reserved daily seat on a fixed route at the lowest per-trip cost.",
    features: [
      "Reserved daily seat & fixed timing",
      "Same driver & direct route",
      "Priority rebooking each month",
      "Ramadan & holiday schedule support"
    ],
    ctaText: "Ask for Monthly Pricing"
  },
  {
    code: "PLAN 03",
    title: "Corporate Office Transport",
    badge: "For Companies",
    highlight: false,
    description: "Multi-staff transport contracted directly with your company, billed on a single monthly invoice.",
    features: [
      "Multiple employee pickup points",
      "Dedicated account coordinator",
      "Custom shift-based scheduling",
      "Single consolidated monthly invoice"
    ],
    ctaText: "Request Corporate Proposal"
  }
];

/**
 * FAQ list
 */
export const FAQS_DATA = [
  {
    question: "How do I book a monthly car lift?",
    answer: "Message us on WhatsApp with your pickup area, destination and preferred timing. We confirm your seat, driver contact, and start date within minutes."
  },
  {
    question: "Do you cover Abu Dhabi and Sharjah daily?",
    answer: "Yes — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain all have active daily or on-request routes."
  },
  {
    question: "Is sharing a car lift safe?",
    answer: "Every sharing car lift runs with a licensed driver on a fixed route with a strictly capped number of passengers per vehicle, ensuring a safe, clean, and respectful ride."
  },
  {
    question: "Can I book a private car lift instead of sharing?",
    answer: "Yes, private car lift is available on every route for passengers who prefer a non-stop, door-to-door ride without other passengers."
  },
  {
    question: "What are your service timings?",
    answer: "Salman Carlift operates 24 hours a day, seven days a week, including public holidays, for pre-booked rides and daily pick & drop requests."
  },
  {
    question: "How does payment work?",
    answer: "Monthly and weekly plans are payable in advance for the agreed period. Daily pick & drop and airport transfer trips can be paid per trip as agreed upon booking."
  }
];

/**
 * Customer Testimonials
 */
export const TESTIMONIALS_DATA = [
  {
    initial: "F",
    name: "Faisal R.",
    role: "Sharjah → Dubai, Monthly",
    quote: "My monthly car lift from Sharjah to Dubai has never been late in eight months. Booking a seat change on WhatsApp takes two minutes."
  },
  {
    initial: "A",
    name: "Ayesha K.",
    role: "HR Manager, Dubai",
    quote: "We moved our entire office shuttle to Salman Carlift. Twenty-two staff, one invoice, and the drivers actually know the shift timings."
  },
  {
    initial: "O",
    name: "Omar S.",
    role: "Airport Transfer, Abu Dhabi",
    quote: "Booked a last-minute airport transfer at 3am and the driver was outside Terminal 3 before I even collected my bags."
  },
  {
    initial: "H",
    name: "Huda M.",
    role: "Dubai → Ajman, Weekly",
    quote: "Needed a two-week cover while my car was in service. The weekly plan was cheaper than any taxi app and far more reliable."
  },
  {
    initial: "Y",
    name: "Yousef T.",
    role: "Private Lift, Al Ain",
    quote: "Long drive between Dubai and Al Ain twice a week — the private lift means I don't share the ride and the driver knows my exact timing."
  },
  {
    initial: "S",
    name: "Sana I.",
    role: "Sharing Lift, Dubai",
    quote: "Splitting the ride with two colleagues on the same street cut my monthly commute cost by almost half."
  }
];
