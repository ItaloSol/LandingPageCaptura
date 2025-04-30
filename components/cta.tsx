"use client";


import { generateWhatsAppLink } from '@/lib/whatsapp';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { v4 as uuidv4 } from 'uuid';


export default function CTA() { 
  // Optionally, you can set window.__USER_* variables from your auth/user context for richer data
  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      const event_id = uuidv4();
      const event_time = Math.floor(Date.now() / 1000);
      const event_source_url = window.location.href;
      window.fbq('track', 'Contact', {
        event_id,
        event_time,
        event_source_url
      });
      // Optionally, store event_id for server-side deduplication
      window.__LAST_FB_EVENT_ID = event_id;
    }
  };
  return (
      <section className="relative h-40 md:h-80">
        <style>{`
          @keyframes pulse-scale {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }
          .pulse-animate {
            animation: pulse-scale 1.5s infinite cubic-bezier(0.4,0,0.6,1);
          }
          @media (max-width: 640px) {
            .pulse-animate {
              animation: pulse-scale-mobile 1.5s infinite cubic-bezier(0.4,0,0.6,1);
            }
            @keyframes pulse-scale-mobile {
              0% { transform: scale(1); }
              50% { transform: scale(1.02); }
              100% { transform: scale(1); }
            }
          }
        `}</style>
      <Image 
            src="/BACK.png" 
            alt="Background"
            fill
            className="object-cover md:object-contain w-full md:h-full"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
        <Button
          asChild
          size="lg"
          className="w-auto sm:w-auto rounded-full px-6 sm:px-8 py-7 text-base sm:text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/20 group relative overflow-hidden hover:animate-none duration-2000 transform-gpu transition-transform will-change-transform scale-[0.98] hover:scale-100 pulse-animate"
        >
          <a href={generateWhatsAppLink()} target='_blank' className="relative z-10 flex items-center justify-center" onClick={handleClick} >
            <span className="relative  z-10">Quero Mais Clientes e Vendas<br className="sm:hidden" /> com uma Landing Page Profissional</span>
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </Button>    
        </div>
          </section>
    );
}