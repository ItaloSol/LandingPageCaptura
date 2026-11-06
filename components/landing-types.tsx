"use client";

import { motion } from 'framer-motion';
import { Target, ShoppingCart, Briefcase, Building2, Calendar, Mail, Palette, Users, Award, MapPin, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink } from '@/lib/whatsapp';

const siteTypes = [
  {
    icon: Briefcase,
    title: "Site para profissional liberal",
    description: "Para advogados, dentistas, terapeutas e consultores que vivem de confiança e indicação.",
    color: {
      light: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-100",
      dot: "bg-purple-600",
      gradient: "from-purple-50 to-white",
      button: "bg-purple-600 hover:bg-purple-700",
    },
    characteristics: [
      { icon: Award, title: "Apresentação que passa confiança", description: "Sua formação, sua área de atuação e como você atende, explicados sem juridiquês nem tecniquês." },
      { icon: Users, title: "Depoimentos e trabalhos", description: "O que seus clientes dizem e o que você já fez, no lugar certo da página." },
      { icon: Calendar, title: "Pedido de horário", description: "O cliente escolhe o assunto e chama você no WhatsApp com a mensagem pronta." },
    ],
    benefits: [
      "Quem recebeu sua indicação encontra você no Google",
      "Clientes chegam sabendo o que você faz",
      "Menos tempo explicando o básico no WhatsApp",
    ],
    cta: "Quero um site profissional",
    ctaId: "tipo-profissional",
    whatsappMessage: "Olá, Ítalo! Sou profissional liberal e quero um site para apresentar meus serviços.",
  },
  {
    icon: Building2,
    title: "Site institucional",
    description: "Para empresas e comércios que precisam mostrar quem são, o que oferecem e onde atendem.",
    color: {
      light: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-100",
      dot: "bg-orange-600",
      gradient: "from-orange-50 to-white",
      button: "bg-orange-600 hover:bg-orange-700",
    },
    characteristics: [
      { icon: Award, title: "A cara da sua marca", description: "Cores, logotipo e fotos da empresa, sem visual de modelo pronto." },
      { icon: Users, title: "Serviços e diferenciais", description: "Cada serviço ou linha de produto explicado de forma clara." },
      { icon: MapPin, title: "Endereço e horário", description: "Mapa, horário de funcionamento e todos os canais de contato fáceis de achar." },
    ],
    benefits: [
      "Um endereço próprio para colocar no Instagram e no cartão",
      "Clientes que pesquisam antes de visitar encontram tudo",
      "Pode ganhar novas páginas conforme a empresa cresce",
    ],
    cta: "Quero um site institucional",
    ctaId: "tipo-institucional",
    whatsappMessage: "Olá, Ítalo! Quero um site institucional para a minha empresa.",
  },
  {
    icon: Target,
    title: "Página de captação",
    description: "Para quem quer juntar contatos interessados: lista de espera, material gratuito, evento ou aula.",
    color: {
      light: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
      dot: "bg-blue-600",
      gradient: "from-blue-50 to-white",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    characteristics: [
      { icon: Mail, title: "Um único objetivo", description: "A página inteira leva a pessoa a deixar o contato. Nada de distração." },
      { icon: Palette, title: "Formulário curto", description: "Só os campos que você realmente vai usar, para ninguém desistir no meio." },
      { icon: MessageCircle, title: "Contatos organizados", description: "Os cadastros vão para a ferramenta que você já usa, como planilha ou e-mail marketing." },
    ],
    benefits: [
      "Ideal para lançamentos e campanhas",
      "Funciona bem com anúncios no Instagram e no Google",
      "Você sabe quantas pessoas se cadastraram",
    ],
    cta: "Quero uma página de captação",
    ctaId: "tipo-captacao",
    whatsappMessage: "Olá, Ítalo! Quero uma página para captar contatos de interessados.",
  },
  {
    icon: ShoppingCart,
    title: "Página de vendas",
    description: "Para vender um produto, curso ou serviço específico, do primeiro contato até o pagamento.",
    color: {
      light: "bg-green-50",
      text: "text-green-600",
      border: "border-green-100",
      dot: "bg-green-600",
      gradient: "from-green-50 to-white",
      button: "bg-green-600 hover:bg-green-700",
    },
    characteristics: [
      { icon: Award, title: "Texto que explica e convence", description: "O que é, para quem serve, o que a pessoa recebe e por que comprar de você." },
      { icon: Users, title: "Prova de quem já comprou", description: "Depoimentos, fotos e vídeos de clientes reais, quando você tiver." },
      { icon: ShieldCheck, title: "Dúvidas respondidas", description: "Garantia, formas de pagamento e perguntas comuns antes do botão de compra." },
    ],
    benefits: [
      "Botão de compra ligado à sua plataforma de pagamento ou ao WhatsApp",
      "Funciona como destino dos seus anúncios",
      "Pode ter vídeo de apresentação do produto",
    ],
    cta: "Quero uma página de vendas",
    ctaId: "tipo-vendas",
    whatsappMessage: "Olá, Ítalo! Quero uma página para vender um produto ou serviço.",
  },
];

export default function LandingTypes() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            Que tipo de site o seu <span className="text-blue-600">negócio precisa?</span>
          </h2>
          <p className="text-lg text-gray-700">
            Cada objetivo pede uma estrutura diferente. Veja qual se parece mais com o seu caso. Se ficar em dúvida, a gente decide junto pelo WhatsApp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {siteTypes.map((type, index) => (
            <motion.div
              key={type.title}
              className={`bg-gradient-to-br ${type.color.gradient} rounded-xl p-5 sm:p-6 md:p-8 shadow-lg border ${type.color.border} flex flex-col`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            >
              <div className="flex items-start mb-6">
                <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-xl ${type.color.light} flex items-center justify-center mr-4 flex-shrink-0`}>
                  <type.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${type.color.text}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">O que vem no site</h4>
                <div className="grid gap-4">
                  {type.characteristics.map((characteristic) => (
                    <div key={characteristic.title} className="flex items-start">
                      <div className={`h-10 w-10 rounded-lg ${type.color.light} flex items-center justify-center mr-3 flex-shrink-0`}>
                        <characteristic.icon className={`h-5 w-5 ${type.color.text}`} />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">{characteristic.title}</h5>
                        <p className="text-sm text-gray-600">{characteristic.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Na prática</h4>
                <ul className="space-y-3">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start text-gray-700">
                      <span className={`h-2 w-2 ${type.color.dot} rounded-full mr-3 mt-2 flex-shrink-0`} aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                className={`w-full h-auto py-4 text-base ${type.color.button} text-white rounded-xl transition-colors shadow-lg touch-manipulation mt-auto`}
              >
                <a
                  href={generateWhatsAppLink(type.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={type.ctaId}
                  className="flex items-center justify-center gap-2"
                >
                  {type.cta}
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
