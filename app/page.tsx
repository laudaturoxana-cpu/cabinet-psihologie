'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Problems } from '@/components/sections/Problems';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Pricing } from '@/components/sections/Pricing';
import { Contact } from '@/components/sections/Contact';
import { CreatorCard } from '@/components/sections/CreatorCard';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header - Sticky Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Problems Section */}
      <Problems />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Process Section */}
      <Process />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Section */}
      <Contact />

      {/* Creator Card Section - Prima locație (înainte de footer) */}
      <CreatorCard />

      {/* Footer - Include și Creator Card integrat */}
      <Footer />
    </main>
  );
}
