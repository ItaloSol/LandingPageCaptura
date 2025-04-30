"use client";

import { motion } from 'framer-motion';
import { Zap, LineChart, Rocket, Phone as MobilePhone, Search, Laptop } from 'lucide-react';

const benefits = [
  {
    title: "Entrega Rápida",
    description: "Landing pages de alta conversão entregues em até 2 dias, sem comprometer a qualidade.",
    icon: Rocket,
    color: "bg-orange-100 text-orange-500"
  },
  {
    title: "SEO Otimizado",
    description: "Estrutura técnica que favorece o posicionamento nos mecanismos de busca desde o primeiro dia.",
    icon: Search,
    color: "bg-green-100 text-green-500"
  },
  {
    title: "100% Responsivo",
    description: "Design adaptável que funciona perfeitamente em todos os dispositivos, do celular ao desktop.",
    icon: MobilePhone,
    color: "bg-blue-100 text-blue-500"
  },
  {
    title: "Métricas Avançadas",
    description: "Acompanhamento de desempenho com análises detalhadas para otimizar continuamente seus resultados.",
    icon: LineChart,
    color: "bg-purple-100 text-purple-500"
  },
  {
    title: "Alta Performance",
    description: "Páginas ultra-rápidas que carregam em menos de 2 segundos para não perder visitantes impacientes.",
    icon: Zap,
    color: "bg-yellow-100 text-yellow-500"
  },
  {
    title: "Integrações Nativas",
    description: "Conexão perfeita com Google Analytics, CRMs e plataformas de email marketing.",
    icon: Laptop,
    color: "bg-indigo-100 text-indigo-500"
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Benefícios e <span className="text-blue-600">Qualidades</span>
          </h2>
          <p className="text-lg text-gray-700">
            Ofereço mais do que apenas páginas bonitas. Entrego soluções completas para transformar visitantes em clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`h-14 w-14 ${benefit.color} rounded-full flex items-center justify-center mb-6`}>
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}