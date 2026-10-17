import React from 'react';
import Hero from '../components/sections/Hero';
import TrustStrip from '../components/sections/TrustStrip';
import ServicesPreview from '../components/sections/ServicesPreview';
import RoutesPreview from '../components/sections/RoutesPreview';
import PackagesPreview from '../components/sections/PackagesPreview';
import TestimonialsPreview from '../components/sections/TestimonialsPreview';
import FAQPreview from '../components/sections/FAQPreview';
import CTASection from '../components/sections/CTASection';
import { useDocumentSeo, PAGE_SEO } from '../utils/seoConfig';

export const Home = () => {
  useDocumentSeo(PAGE_SEO.home);

  return (
    <main id="main-content">
      <Hero />
      <TrustStrip />
      <ServicesPreview showViewAll />
      <RoutesPreview />
      <PackagesPreview />
      <TestimonialsPreview limit={3} />
      <FAQPreview limit={3} />
      <CTASection />
    </main>
  );
};

export default Home;
