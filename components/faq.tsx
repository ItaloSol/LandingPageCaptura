"use client";

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para entregar uma landing page?",
    answer: "O prazo padrão é de 2 dias úteis a partir da aprovação do briefing e recebimento de todo o material necessário. Para projetos mais complexos, podemos acordar um prazo específico que atenda às suas necessidades."
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "O processo começa com um briefing detalhado para entender seu negócio e objetivos. Em seguida, desenvolvo o wireframe para aprovação, crio o design, implemento o código e, por fim, faço os testes e ajustes finais antes da entrega."
  },
  {
    question: "As landing pages são responsivas para dispositivos móveis?",
    answer: "Sim, todas as landing pages são 100% responsivas e otimizadas para proporcionar a melhor experiência em qualquer dispositivo, desde smartphones e tablets até desktops."
  },
  {
    question: "Você oferece manutenção após a entrega?",
    answer: "Sim, ofereço 1 revisão gratuita após a entrega. Após essa revisão inicial, cada revisão adicional tem um custo de R$ 35,00. Também disponibilizamos planos de manutenção mensal personalizados de acordo com suas necessidades."
  },
  {
    question: "Posso ver exemplos de projetos anteriores?",
    answer: "Sim, você pode conferir meu portfólio nesta página ou solicitar exemplos específicos relacionados ao seu nicho de mercado. Também posso compartilhar casos de sucesso e depoimentos de clientes."
  },
  {
    question: "Como são feitas as integrações com ferramentas de marketing?",
    answer: "Realizo integrações nativas com Google Analytics, Facebook Pixel, diversas plataformas de email marketing (como MailChimp, ActiveCampaign, RD Station) e CRMs populares no mercado. Se você utiliza outra ferramenta específica, podemos verificar a possibilidade de integração."
  },
  {
    question: "Qual o investimento para uma landing page?",
    answer: "O valor varia de acordo com a complexidade do projeto e os recursos necessários. Para receber um orçamento personalizado, entre em contato via WhatsApp com detalhes sobre o que você precisa."
  },
  {
    question: "Você também faz a hospedagem da página?",
    answer: "Sim, posso cuidar de todo o processo de hospedagem e configuração de domínio, oferecendo uma solução completa. Trabalho com servidores de alta performance que garantem velocidade e estabilidade para sua landing page."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Perguntas <span className="text-blue-600">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-700">
            Tire suas dúvidas sobre como posso ajudar seu negócio com landing pages de alta conversão.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}