"use client";

import { motion } from 'framer-motion';
import { AlertCircle, ThumbsDown, CheckCircle2 } from 'lucide-react';

const problems = [
  {
    title: "Landing pages genéricas",
    description: "Sites que não convertem visitantes em clientes e desperdiçam tráfego valioso.",
    icon: ThumbsDown,
    solution: "Landing pages personalizadas com foco em conversão e otimizadas para seu público-alvo específico."
  },
  {
    title: "Demora na entrega",
    description: "Perder oportunidades por esperar semanas para lançar sua página de vendas.",
    icon: AlertCircle,
    solution: "Entrega em até 2 dias, permitindo que você capture leads enquanto o interesse está alto."
  },
  {
    title: "Falta de estratégia",
    description: "Páginas bonitas mas sem fundamentos de marketing que realmente geram resultados.",
    icon: ThumbsDown,
    solution: "Estratégia de conversão baseada em dados, aplicando gatilhos mentais e psicologia de vendas."
  }
];

export default function Problems() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Problemas que <span className="text-blue-600">Resolvemos</span>
          </h2>
          <p className="text-lg text-gray-700">
            Transformamos desafios em oportunidades para seu negócio crescer através de landing pages estratégicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 mb-4">
                <div className="h-14 w-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <problem.icon className="h-7 w-7 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
              
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8"
                initial={{ opacity: 0.8, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-7 w-7 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">Nossa Solução</h3>
                <p className="text-gray-700">{problem.solution}</p>
                
                <div className="mt-6 flex items-center">
                  <div className="h-1 flex-1 bg-green-200 rounded">
                    <motion.div 
                      className="h-full bg-green-500 rounded"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <span className="ml-3 text-green-600 font-semibold">100%</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}