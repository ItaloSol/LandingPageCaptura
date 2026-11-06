"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Check } from 'lucide-react';
import { generateWhatsAppLink, PRAZO_ENTREGA } from '@/lib/whatsapp';

export default function FinalCta() {
  return (
    <section id="contato" className="py-20 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Me conte sobre o seu negócio e <span className="text-orange-300">receba uma proposta</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-50 mb-8">
            Diga o que você faz e quem são seus clientes. Eu respondo com uma sugestão de site e o valor, sem compromisso.
          </p>

          <ul className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-10 text-blue-50">
            <li className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5 text-orange-300" aria-hidden="true" />
              Pronto em {PRAZO_ENTREGA}
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="h-5 w-5 text-orange-300" aria-hidden="true" />
              Você aprova antes de publicar
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="h-5 w-5 text-orange-300" aria-hidden="true" />
              30 dias de suporte
            </li>
          </ul>

          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto h-auto rounded-full px-8 py-5 text-lg bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-900/20 group transition-colors"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              data-cta="final"
              href={generateWhatsAppLink("Olá, Ítalo! Quero uma proposta de site para o meu negócio.")}
              className="flex items-center justify-center"
            >
              Pedir proposta no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
