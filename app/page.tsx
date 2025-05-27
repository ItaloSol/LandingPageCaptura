import { Metadata } from 'next';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Problems from '@/components/problems';
import Benefits from '@/components/benefits';
import Portfolio from '@/components/portfolio';
import Faq from '@/components/faq';
import FinalCta from '@/components/final-cta';
import Footer from '@/components/footer';
import WhatsappButton from '@/components/whatsapp-button';
import CTA from '@/components/cta';
import LandingTypes from '@/components/landing-types';
import Script from 'next/script';

// This is redundant with the metadata in layout.tsx but included as an example
// of how you could have page-specific metadata in a multi-page site
export const metadata: Metadata = {
  title: 'Ítalo Sol - Landing Pages de Alta Performance',
  description: 'Aumente suas conversões e gere leads qualificados com landing pages otimizadas entregues em até 2 dias.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LandingTypes />
      <CTA />
      <Benefits />
      <CTA />
      <Portfolio />
      <CTA />
      <Faq />
      <FinalCta />
      <Footer />
      <WhatsappButton />
    </main>
  );
}