import Header from '@/components/header';
import Hero from '@/components/hero';
import Benefits from '@/components/benefits';
import Portfolio from '@/components/portfolio';
import Pricing from '@/components/pricing';
import Faq from '@/components/faq';
import FinalCta from '@/components/final-cta';
import Footer from '@/components/footer';
import WhatsappButton from '@/components/whatsapp-button';
import CTA from '@/components/cta';
import LandingTypes from '@/components/landing-types';
import ContactTracker from '@/components/contact-tracker';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <LandingTypes />
        <Benefits />
        <Portfolio />
        <CTA />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappButton />
      <ContactTracker />
    </>
  );
}
