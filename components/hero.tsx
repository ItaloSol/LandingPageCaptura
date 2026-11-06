"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { generateWhatsAppLink, PRAZO_ENTREGA } from '@/lib/whatsapp';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const templates = [
  { title: "FácilZap - Serviços digitais", image: "/facilzap-pronto.webp" },
  { title: "Advocacia - Defesa do consumidor", image: "/consumidor-pronto.webp" },
  { title: "Millian Cosmético", image: "/millian-pronto.webp" },
  { title: "Advocacia Bressan", image: "/bressan-Pronto.webp" },
  { title: "Advocacia - Inventários e sucessões", image: "/familia-pronto.webp" },
  { title: "BioReino - Saúde e bem-estar", image: "/bioreino-pronto.webp" },
  { title: "Luanda Ribeiro - Dança", image: "/luanda-pronto.webp" },
  { title: "Nardini Advogados", image: "/nardini-pronto.webp" },
  { title: "Sorrir Mais Odontologia", image: "/dentista-pronto.webp" },
  { title: "COOPCAM - Cooperativa agropecuária", image: "/coopcam-pronto.webp" },
];

export default function Hero() {
  const [api, setApi] = useState<CarouselApi>();

  // Avança sozinho só no celular e só para quem não pediu menos movimento.
  useEffect(() => {
    if (!api) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const interval = setInterval(() => {
      if (window.innerWidth < 640) api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="hero" className="pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Sites profissionais que <span className="text-blue-600">apresentam</span> e <span className="text-orange-500">vendem</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Um site rápido no celular, preparado para o Google e com o WhatsApp a um toque. Você me conta sobre o seu negócio e em {PRAZO_ENTREGA} ele está no ar.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 py-6 text-base sm:text-lg bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20 group transition-colors"
            >
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" data-cta="hero">
                Quero um site para meu negócio
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full px-8 py-6 text-base sm:text-lg border-2 border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-600 transition-colors"
            >
              <a href="#portfolio">Ver sites que já fiz</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {templates.map((template, index) => (
                <CarouselItem key={template.image} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="relative group overflow-hidden rounded-xl">
                    <div className="aspect-[16/9] relative overflow-hidden rounded-xl bg-white">
                      <Image
                        src={template.image}
                        alt={`Site ${template.title}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 3}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-semibold text-lg">{template.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 sm:-left-6" aria-label="Site anterior" />
            <CarouselNext className="hidden sm:flex -right-4 sm:-right-6" aria-label="Próximo site" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
