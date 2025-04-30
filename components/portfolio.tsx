"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight, Star, ArrowRight } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { Button } from '@/components/ui/button';

  const categories = ['Todos', 'Advocacia', 'Saúde', 'Serviços Digitais', 'Beleza', 'Educação'];
  
  const projects = [
    {
      id: 1,
      title: "Landing Page para Serviços Digitais",
      description: "Página de vendas otimizada para conversão de serviços digitais personalizados com formulário integrado",
      category: "Serviços Digitais",
      image: "/facilzap-pronto.webp",
      conversionRate: "+65% conversões",
      link: "https://sitefacilzap.web.app/"
    },
    {
      id: 2,
      title: "Advocacia - Defesa do Consumidor",
      description: "Landing page profissional para advogado especializado com destaque para casos de sucesso",
      category: "Advocacia",
      image: "/consumidor-pronto.webp",
      conversionRate: "+40% contatos",
      link: "https://consumidorsidnei.web.app/"
    },
    {
      id: 3,
      title: "Advocacia - Inventários e Sucessões",
      description: "Página especializada com linguagem jurídica acessível e call-to-action estratégico",
      category: "Advocacia",
      image: "/familia-pronto.webp",
      conversionRate: "50+ consultas/mês",
      link: "https://sucessoesnardini.web.app/"
    },
    {
      id: 4,
      title: "Escritório de Advocacia Nardini",
      description: "Site institucional profissional com seção de artigos jurídicos e formulário de contato",
      category: "Advocacia",
      image: "/nardini-pronto.webp",
      conversionRate: "+30% leads qualificados",
      link: "https://nardiniadvogados.web.app/"
    },
    {
      id: 5,
      title: "Advocacia Bressan",
      description: "Landing page multifuncional para advogado com portfólio de casos e depoimentos",
      category: "Advocacia",
      image: "/bressan-Pronto.webp",
      conversionRate: "+25% retorno",
      link: "https://advocaciabressanoficial.web.app/"
    },
    {
      id: 6,
      title: "Millian Cosmético",
      description: "Página de vendas para linha de cosméticos com carrossel de produtos e checkout otimizado",
      category: "Beleza",
      image: "/millian-pronto.webp",
      conversionRate: "+120% vendas",
      link: "https://milliancosmetico.web.app/"
    },
    {
      id: 7,
      title: "BioReino - Saúde e Bem-estar",
      description: "Página de vendas para infoproduto digital com vídeo sales e garantia destacada",
      category: "Saúde",
      image: "/bioreino-pronto.webp",
      conversionRate: "300+ vendas/mês",
      link: "https://bioreinooficial.web.app/"
    },
    {
      id: 8,
      title: "Luan da Ribeiro - Escola de Dança",
      description: "Site institucional para grupo de dança com agenda de eventos e galeria",
      category: "Educação",
      image: "/luanda-pronto.webp",
      conversionRate: "+80% inscrições",
      link: "https://luandaribeirohd.web.app/"
    },
    {
      id: 9,
      title: "Sorrir Mais Odontologia",
      description: "Site institucional para clínica odontológica com agendamento online e especialidades",
      category: "Saúde",
      image: "/dentista-pronto.webp",
      conversionRate: "100+ agendamentos/mês",
      link: "https://sorrirmais-odonto.web.app/"
    },
    {
      id: 10,
      title: "COOPCAM - Cooperativa Agropecuária",
      description: "Site institucional completo para cooperativa com área do associado e notícias",
      category: "Todos",
      image: "/coopcam-pronto.webp",
      conversionRate: "+50% engajamento",
      link: "https://coopcam-coop.web.app/"
    }
  ];

  const testimonials = [
    {
      id: -1,
      name: "Advocacia Bressan",
      role: "Advocacia Bressan",
      avatar: "/advocacia.webp", // Changed from "/images/advocacia.webp"
      text: "A transformação da minha página foi extraordinária após o seu trabalho...",
      url: "https://advocaciabressan.com/",
      company: "João Bressan",
    },
    {
      id: 1,
      name: "Clinica Sorrir Mais",
      role: "Cliente Satisfeito",
      avatar: "/sorrimais.webp", // Changed from "/images/sorrimais.webp"
      text: "A parceria com Italo Sol tem sido extremamente benéfica...",
      url: "https://sorrirmais.netlify.app/",
      company: "Mariana Amaral",
    },
    {
      id: 2,
      name: "Dançarina Luanda Ribeiro",
      role: "Cliente Satisfeito",
      avatar: "/luanda.webp",
      text: "Os resultados foram além das expectativas. Italo Sol é muito profissional e dedicado.",
      url: "https://luandaribeirohd.web.app/",
      company: "Luanda Ribeiro",
    },
    {
      id: 3,
      name: "Encapsualados Bioreino",
      role: "Cliente Satisfeito",
      avatar: "/bioreino.webp",
      text: "Italo Sol é extremamente competente e os resultados falam por si. Excelente parceria!",
      url: "https://bioreinooficial.com.br/",
      company: "Glaysson",
    },
    {
      id: 4,
      name: "Gráfica do Exército",
      role: "Cliente Satisfeito",
      avatar: "/grafex.webp",
      text: "A qualidade do trabalho de Italo Sol é incomparável. Estamos muito satisfeitos com os resultados.",
      url: "https://www.grafex.eb.mil.br/portifolio/",
      company: "Shirley Vaz",
    },
    {
      id: 5,
      name: "Agencia Royal Motors",
      role: "Cliente Satisfeito",
      avatar: "/royal.webp",
      text: "A nossa agência viu um crescimento significativo após a colaboração com Italo Sol. Altamente recomendado!",
      url: "#",
      company: "Pedro Henrique",
    }
  ];

  export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('Todos');
  
    const filteredProjects = activeCategory === 'Todos' 
      ? projects 
      : projects.filter(project => project.category === activeCategory);
  
    return (
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meu <span className="text-blue-600">Portfólio</span>
            </h2>
            <p className="text-lg text-gray-700">
              Conheça alguns projetos que transformaram visitantes em clientes felizes e aumentaram o faturamento dos meus clientes.
            </p>
          </motion.div>
  
          <Tabs defaultValue="Todos" className="w-full">
            <TabsList className="relative w-full max-w-4xl mx-auto mb-12 grid grid-cols-3  lg:grid-cols-7 ">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-sm m-1 p-3 truncate"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden group">
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <div className="flex justify-between items-center">
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white font-semibold hover:underline"
                              >
                                Ver Detalhes
                              </a>
                              <a
                                title="Visitar site"
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-white rounded-full p-1 hover:bg-gray-100 transition-colors"
                              >
                                <ArrowUpRight className="h-5 w-5 text-blue-600" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <div className="bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full text-sm inline-block mb-3">
                          {project.conversionRate}
                        </div>
                        <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm">{project.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
  
          {/* CTA Section */}
          <motion.div 
            className="bg-blue-600 rounded-xl p-8 md:p-12 text-center my-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Vamos criar uma landing page que converta visitantes em clientes e aumente suas vendas.
            </p>
            <a 
            rel='noopener'
              href="https://api.whatsapp.com/send/?phone=556199315616&text=Ol%C3%A1%21+Vim+pelo+seu+site+e+gostaria+de+saber+mais+sobre+suas+landing+pages+de+alta+convers%C3%A3o.&type=phone_number&app_absent=0" 
              target='_blank'
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Fale comigo agora
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Testimonials */}
          <div className="mt-24">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              O que meus clientes dizem
            </motion.h3>
  
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 bg-gray-200">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full scale-90"
                        style={{ transform: 'scale(0.9)' }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                  <div className="absolute top-4 right-4 text-blue-200 opacity-30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                    </svg>
                  </div>
                 
                </motion.div>
              ))}
            </div>
            
          </div>
          
          </div>
          
      </section>
    );
  }