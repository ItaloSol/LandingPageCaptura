"use client";

import { motion } from 'framer-motion';
import { Zap, LineChart, Rocket, Smartphone, Search, MessageCircle } from 'lucide-react';
import { PRAZO_ENTREGA } from '@/lib/whatsapp';

const benefits = [
  {
    title: `Pronto em ${PRAZO_ENTREGA}`,
    description: "Contando a partir do momento em que recebo as informações e as fotos do seu negócio.",
    icon: Rocket,
    color: "bg-orange-100 text-orange-500",
  },
  {
    title: "Feito para o celular",
    description: "A maioria dos seus clientes vai abrir o site pelo telefone. Ele é pensado primeiro para essa tela.",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-500",
  },
  {
    title: "Contato em um toque",
    description: "Botões de WhatsApp com mensagem pronta, para o cliente não precisar pensar no que escrever.",
    icon: MessageCircle,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Preparado para o Google",
    description: "Títulos, descrições e estrutura organizados para o Google entender o que você oferece e onde atende.",
    icon: Search,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Leve e rápido",
    description: "Imagens otimizadas e código enxuto, para o site abrir rápido mesmo no 4G.",
    icon: Zap,
    color: "bg-purple-100 text-purple-500",
  },
  {
    title: "Você sabe de onde vêm os clientes",
    description: "Configuro Google Analytics e Pixel da Meta para você acompanhar visitas e cliques no WhatsApp.",
    icon: LineChart,
    color: "bg-indigo-100 text-indigo-500",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            O que você recebe <span className="text-blue-600">trabalhando comigo</span>
          </h2>
          <p className="text-lg text-gray-700">
            Eu cuido do site do começo ao fim: textos, design, publicação e ajustes. Você só precisa me contar sobre o seu negócio e aprovar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <div className={`h-12 w-12 ${benefit.color} rounded-full flex items-center justify-center mb-5`}>
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
