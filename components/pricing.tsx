"use client";

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  generateWhatsAppLink,
  formatBRL,
  PRECO_ESSENCIAL,
  PRECO_COMPLETO,
  PRAZO_ENTREGA,
  VALOR_HORA_AJUSTE,
} from '@/lib/whatsapp';

const plans = [
  {
    name: "Site Essencial",
    price: formatBRL(PRECO_ESSENCIAL),
    priceNote: "valor do projeto",
    description: "Uma página completa para apresentar um produto ou serviço principal.",
    features: [
      "Uma página de rolagem, do título ao contato",
      "Textos escritos a partir da nossa conversa",
      "Botão de WhatsApp com mensagem pronta",
      "Feito para celular, tablet e computador",
      "Publicação e configuração do domínio",
      "30 dias de suporte após a entrega",
    ],
    cta: "Quero o Essencial",
    ctaId: "plano-essencial",
    message: "Olá, Ítalo! Tenho interesse no Site Essencial. Pode me explicar como funciona?",
    highlight: false,
  },
  {
    name: "Site Completo",
    price: formatBRL(PRECO_COMPLETO),
    priceNote: "valor do projeto",
    description: "Para pequenas e médias empresas que precisam mostrar vários serviços.",
    features: [
      "Tudo do Essencial",
      "Seções ou páginas para cada serviço",
      "Portfólio, depoimentos e localização",
      "Estrutura preparada para o Google",
      "Google Analytics e Pixel da Meta configurados",
      "30 dias de suporte após a entrega",
    ],
    cta: "Quero o Completo",
    ctaId: "plano-completo",
    message: "Olá, Ítalo! Tenho interesse no Site Completo para a minha empresa. Pode me explicar como funciona?",
    highlight: true,
  },
  {
    name: "Projeto Sob Medida",
    price: "Sob orçamento",
    priceNote: "conforme o escopo",
    description: "Loja virtual, catálogo grande ou um projeto com necessidades específicas.",
    features: [
      "Conversa para entender o que você precisa",
      "Proposta com escopo, valor e prazo por escrito",
      "Prazo combinado conforme o tamanho do projeto",
      "30 dias de suporte após a entrega",
    ],
    cta: "Pedir orçamento",
    ctaId: "plano-sob-medida",
    message: "Olá, Ítalo! Preciso de um projeto sob medida (loja virtual, catálogo ou outro). Podemos conversar?",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            Planos e <span className="text-blue-600">valores</span>
          </h2>
          <p className="text-lg text-gray-700">
            Valor fechado antes de começar. Os sites Essencial e Completo ficam prontos em {PRAZO_ENTREGA}.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={cn(
                "relative rounded-2xl p-6 lg:p-8 flex flex-col bg-white",
                plan.highlight
                  ? "border-2 border-blue-600 shadow-xl md:-translate-y-2"
                  : "border border-gray-200 shadow-md"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                  Recomendado
                </span>
              )}

              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-gray-600 mt-2 mb-6 min-h-[3rem]">{plan.description}</p>

              <div className="mb-6">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900">{plan.price}</p>
                <p className="text-sm text-gray-500 mt-1">{plan.priceNote}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-700">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  "w-full h-12 rounded-full text-base mt-auto transition-colors",
                  plan.highlight
                    ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20"
                    : "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                )}
              >
                <a
                  href={generateWhatsAppLink(plan.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={plan.ctaId}
                  className="flex items-center justify-center gap-2"
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10 max-w-2xl mx-auto">
          Valores atualizados conforme o salário mínimo vigente. Depois dos 30 dias de suporte, ajustes e novas alterações custam {formatBRL(VALOR_HORA_AJUSTE)} por hora.
        </p>
      </div>
    </section>
  );
}
