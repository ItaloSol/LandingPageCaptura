"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const templates = [
  {
    title: "Landing Page para Serviços Digitais",
    image: "/facilzap-pronto.webp",
  },
  {
    title: "Advocacia - Defesa do Consumidor",
    image: "/consumidor-pronto.webp",
  },
  {
    title: "Advocacia - Inventários e Sucessões",
    image: "/familia-pronto.webp",
  },
  {
    title: "Escritório de Advocacia Nardini",
    image: "/nardini-pronto.webp",
  },
  {
    title: "Advocacia Bressan",
    image: "/bressan-Pronto.webp",
  },
  {
    title: "Millian Cosmético",
    image: "/millian-pronto.webp",
  },
  {
    title: "BioReino - Saúde e Bem-estar",
    image: "/bioreino-pronto.webp",
  },
  {
    title: "Luan da Ribeiro - Escola de Dança",
    image: "/luanda-pronto.webp",
  },
  {
    title: "Sorrir Mais Odontologia",
    image: "/dentista-pronto.webp",
  },
  {
    title: "COOPCAM - Cooperativa Agropecuária",
    image: "/coopcam-pronto.webp",
  }
];

export default function Hero() {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (api) {
      const interval = setInterval(() => {
        if (window.innerWidth < 640) { // Only auto-play on mobile
          api.scrollNext();
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [api]);

  return (
    <section className="pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 px-4">
            Landing Pages que <span className="text-blue-600">Convertem</span> e <span className="text-orange-500">Vendem</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 px-4 max-w-2xl mx-auto">
            Aumente suas conversões e gere leads qualificados com landing pages otimizadas e entregues em até 2 dias.
          </p>
          
          <div className="flex flex-col gap-4 justify-center mb-12 sm:mb-16 px-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                asChild
                size="lg" 
                className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-6 text-base sm:text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/20 group relative overflow-hidden"
              >
                <a href={generateWhatsAppLink()} className="relative z-10 flex items-center justify-center">
                  <span className="relative z-10">Quero Aumentar Minhas Conversões</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-6 text-base sm:text-lg border-2 border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 transition-colors duration-300 relative group overflow-hidden"
              >
                <a href="#portfolio" className="relative z-10">
                  <span className="relative z-10">Ver Portfólio</span>
                  <div className="absolute inset-0 -z-10 bg-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Template Carousel */}
        <motion.div 
          className="max-w-5xl mx-auto px-4 sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {templates.map((template, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="relative group overflow-hidden rounded-xl">
                    <div className="aspect-[16/9] relative overflow-hidden rounded-xl">
                      <Image
                        src={template.image}
                        alt={template.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg">{template.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 sm:-left-6" />
            <CarouselNext className="hidden sm:flex -right-4 sm:-right-6" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}