"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Check } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export default function FinalCta() {
  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para <span className="text-orange-400">Aumentar</span> suas Conversões?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Não perca mais tempo e dinheiro com páginas que não convertem. 
            Entre em contato agora mesmo e vamos transformar seus visitantes em clientes.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Clock className="h-5 w-5 text-orange-400" />
              <span>Entrega em até 2 dias</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Check className="h-5 w-5 text-orange-400" />
              <span>Satisfação garantida</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Check className="h-5 w-5 text-orange-400" />
              <span>Suporte por 30 dias</span>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/20 group relative overflow-hidden"
            >
              <a target='_blank' href={generateWhatsAppLink("Olá, gostaria de um orçamento para uma landing page de alta conversão.")} className="relative z-10 flex items-center">
                <span className="relative z-10">Solicitar Orçamento Agora</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Special Offer */}
        <motion.div 
          className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="font-bold text-lg mb-2">
            Oferta Especial
          </div>
          <p className="mb-4 opacity-90 text-sm">
            Ao fazer seu orçamento até o final deste mês, ganhe gratuitamente uma análise de SEO para seu site atual.
          </p>
          <div className="text-xs uppercase font-semibold tracking-wider opacity-75">
            Vagas limitadas
          </div>
        </motion.div>
      </div>
    </section>
  );
}