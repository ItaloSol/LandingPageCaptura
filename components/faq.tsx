"use client";

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  formatBRL,
  PRECO_ESSENCIAL,
  PRECO_COMPLETO,
  PRAZO_ENTREGA,
  VALOR_HORA_AJUSTE,
} from '@/lib/whatsapp';

const faqs = [
  {
    question: "Quanto tempo leva para o site ficar pronto?",
    answer: `Os sites Essencial e Completo ficam prontos em ${PRAZO_ENTREGA}, contando a partir do momento em que recebo as informações e as fotos do seu negócio. Projetos sob medida têm o prazo definido na proposta.`,
  },
  {
    question: "Como funciona o processo?",
    answer: "Primeiro conversamos pelo WhatsApp sobre o seu negócio e os seus clientes. Depois eu monto a estrutura e os textos e te mostro para aprovação. Com tudo aprovado, faço o design, publico o site e faço os ajustes finais com você.",
  },
  {
    question: "O site funciona bem no celular?",
    answer: "Sim. Todo site é pensado primeiro para o celular, que é por onde a maioria das pessoas vai abrir, e testado também em tablet e computador.",
  },
  {
    question: "Quanto custa?",
    answer: `O Site Essencial custa ${formatBRL(PRECO_ESSENCIAL)} e o Site Completo, ${formatBRL(PRECO_COMPLETO)}. Loja virtual, catálogo grande ou projetos específicos são orçados à parte, depois de uma conversa.`,
  },
  {
    question: "E depois da entrega, tenho suporte?",
    answer: `Sim. Você tem 30 dias de suporte para ajustes depois que o site vai ao ar. Passado esse período, alterações são cobradas a ${formatBRL(VALOR_HORA_AJUSTE)} por hora de trabalho.`,
  },
  {
    question: "Você cuida da hospedagem e do domínio?",
    answer: "Sim. Eu publico o site e configuro o domínio para você não precisar mexer em nada técnico.",
  },
  {
    question: "Consigo saber quantas pessoas visitam e chamam no WhatsApp?",
    answer: "Sim. Configuro Google Analytics e Pixel da Meta. Se você já usa alguma ferramenta de e-mail marketing ou CRM, verifico a integração com o site.",
  },
  {
    question: "Posso ver sites que você já fez?",
    answer: "Pode. Todos os projetos do portfólio acima estão no ar e você pode abrir cada um. Se quiser exemplos do seu ramo, é só pedir no WhatsApp.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            Perguntas <span className="text-blue-600">frequentes</span>
          </h2>
          <p className="text-lg text-gray-700">
            O que mais me perguntam antes de começar um projeto.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
