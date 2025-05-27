"use client";

import { motion } from 'framer-motion';
import { Target, ShoppingCart, Briefcase, Building2, Download, Calendar, Mail, Timer, Palette, Users, Award, ChartBar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink } from '@/lib/whatsapp';

const landingTypes = [
  {
    icon: Briefcase,
    title: "Landing Page de Serviços Profissionais",
    description: "Ideal para profissionais liberais apresentarem seus serviços e conquistarem clientes",
    color: {
      light: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-100",
      dot: "bg-purple-600",
      gradient: "from-purple-50 to-white",
      button: "bg-purple-600 hover:bg-purple-700"
    },
    characteristics: [
      {
        icon: Award,
        title: "Apresentação profissional",
        description: "Design elegante que transmite autoridade e confiança"
      },
      {
        icon: Users,
        title: "Cases de sucesso",
        description: "Portfólio e depoimentos que comprovam resultados"
      },
      {
        icon: Calendar,
        title: "Agendamento integrado",
        description: "Sistema de marcação de consultas e orçamentos"
      }
    ],
    benefits: [
      "Construção de autoridade no mercado",
      "Captação qualificada de clientes",
      "Agendamentos automatizados",
      "Apresentação profissional do serviço",
      "Integração com sistemas de gestão"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre Landing Pages para Serviços Profissionais."
  },
  {
    icon: Building2,
    title: "Landing Page Institucional",
    description: "Apresenta sua empresa de forma profissional e estabelece presença digital",
    color: {
      light: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-100",
      dot: "bg-orange-600",
      gradient: "from-orange-50 to-white",
      button: "bg-orange-600 hover:bg-orange-700"
    },
    characteristics: [
      {
        icon: Award,
        title: "Design corporativo",
        description: "Visual elegante que reflete a identidade da marca"
      },
      {
        icon: Users,
        title: "Conteúdo institucional",
        description: "História, valores e diferenciais da empresa"
      },
      {
        icon: ChartBar,
        title: "Múltiplos objetivos",
        description: "Diferentes pontos de contato e conversão"
      }
    ],
    benefits: [
      "Fortalecimento da marca",
      "Presença digital profissional",
      "Múltiplos pontos de contato",
      "Blog e conteúdo integrados",
      "Ideal para empresas estabelecidas"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre Landing Pages Institucionais."
  },
  {
    icon: Target,
    title: "Landing Page de Captura",
    description: "Focada em converter visitantes em leads qualificados através de ofertas irresistíveis",
    color: {
      light: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
      dot: "bg-blue-600",
      gradient: "from-blue-50 to-white",
      button: "bg-blue-600 hover:bg-blue-700"
    },
    characteristics: [
      {
        icon: Mail,
        title: "Foco único em conversão",
        description: "Design otimizado para um único objetivo como download de e-book ou inscrição em webinar"
      },
      {
        icon: Palette,
        title: "Design clean e direto",
        description: "Layout sem distrações com CTA destacado e formulário simplificado"
      },
      {
        icon: Timer,
        title: "Gatilhos de urgência",
        description: "Elementos de escassez como contadores e vagas limitadas"
      }
    ],
    benefits: [
      "Alta taxa de conversão de visitantes em leads",
      "Processo de cadastro rápido e simplificado",
      "Mensuração precisa dos resultados",
      "Ideal para lançamentos e promoções",
      "Integração com ferramentas de email marketing"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre Landing Pages de Captura para meu negócio."
  },
  {
    icon: ShoppingCart,
    title: "Landing Page de Vendas",
    description: "Projetada para converter visitantes em compradores através de uma jornada persuasiva",
    color: {
      light: "bg-green-50",
      text: "text-green-600",
      border: "border-green-100",
      dot: "bg-green-600",
      gradient: "from-green-50 to-white",
      button: "bg-green-600 hover:bg-green-700"
    },
    characteristics: [
      {
        icon: Award,
        title: "Copywriting persuasivo",
        description: "Textos envolventes que destacam benefícios e vendem valor"
      },
      {
        icon: Users,
        title: "Prova social forte",
        description: "Depoimentos, casos de sucesso e resultados comprovados"
      },
      {
        icon: ChartBar,
        title: "Funil otimizado",
        description: "Jornada de compra fluida com eliminação de objeções"
      }
    ],
    benefits: [
      "Maior taxa de conversão em vendas",
      "Jornada guiada: conduz o usuário por cada etapa até a finalização da compra.",
      "Elementos de prova social estratégicos",
      "Seções de benefícios detalhadas",
      "Garantias e políticas claras"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre Landing Pages de Vendas para meu negócio."
  }
  
];

export default function LandingTypes() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tipos de <span className="text-blue-600">Landing Pages</span>
          </h2>
          <p className="text-lg text-gray-700">
            Escolha o modelo ideal para atingir seus objetivos de negócio com páginas otimizadas para resultados
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {landingTypes.map((type, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${type.color.gradient} rounded-xl p-6 md:p-8 shadow-lg border ${type.color.border} flex flex-col`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className={`h-14 w-14 rounded-xl  flex items-center justify-center mr-4`}>
                  <type.icon className={`h-7 w-7 ${type.color.text}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Características Principais</h4>
                <div className="grid gap-4">
                  {type.characteristics.map((characteristic, charIndex) => (
                    <motion.div
                      key={charIndex}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (charIndex * 0.1) }}
                    >
                      <div className={`h-10 w-10 rounded-lg ${type.color.light} flex items-center justify-center mr-3 flex-shrink-0`}>
                        <characteristic.icon className={`h-5 w-5 ${type.color.text}`} />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">{characteristic.title}</h5>
                        <p className="text-sm text-gray-600">{characteristic.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefícios</h4>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (benefitIndex * 0.1) }}
                    >
                      <div className={`h-2 w-2 ${type.color.dot} rounded-full mr-3`} />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                className={`w-full py-6 text-sm sm:text-base ${type.color.button} text-white rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg active:scale-95 touch-manipulation mt-auto`}
              >
                <a
                  href={generateWhatsAppLink(type.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center "
                >
                  <span className="text-center">
                    Quero uma<br className="sm:hidden" /> {type.title}
                  </span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}