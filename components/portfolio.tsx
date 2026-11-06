"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight } from 'lucide-react';

const categories = ['Todos', 'Advocacia', 'Saúde', 'Produtos', 'Educação', 'Serviços Digitais', 'Empresas'];

const projects = [
  {
    title: "FácilZap",
    description: "Página de vendas de serviços digitais com formulário de contato.",
    category: "Serviços Digitais",
    image: "/facilzap-pronto.webp",
    link: "https://sitefacilzap.web.app/",
  },
  {
    title: "Advocacia - Defesa do Consumidor",
    description: "Site para advogado especialista, com casos atendidos e contato direto.",
    category: "Advocacia",
    image: "/consumidor-pronto.webp",
    link: "https://consumidorsidnei.web.app/",
  },
  {
    title: "Advocacia - Inventários e Sucessões",
    description: "Página que explica inventário em linguagem simples e leva ao atendimento.",
    category: "Advocacia",
    image: "/familia-pronto.webp",
    link: "https://sucessoesnardini.web.app/",
  },
  {
    title: "Nardini Advogados",
    description: "Site institucional do escritório, com artigos jurídicos e formulário de contato.",
    category: "Advocacia",
    image: "/nardini-pronto.webp",
    link: "https://nardiniadvogados.web.app/",
  },
  {
    title: "Advocacia Bressan",
    description: "Site para advogado com áreas de atuação, casos e depoimentos.",
    category: "Advocacia",
    image: "/bressan-Pronto.webp",
    link: "https://advocaciabressanoficial.web.app/",
  },
  {
    title: "Millian Cosmético",
    description: "Página de vendas de cosméticos com vitrine de produtos.",
    category: "Produtos",
    image: "/millian-pronto.webp",
    link: "https://milliancosmetico.web.app/",
  },
  {
    title: "Fio Rico Professional",
    description: "Página de vendas de linha capilar com catálogo de produtos.",
    category: "Produtos",
    image: "/fiorico.webp",
    link: "https://fiorico.web.app/",
  },
  {
    title: "BioReino",
    description: "Página de vendas de produto de saúde com vídeo de apresentação e garantia em destaque.",
    category: "Saúde",
    image: "/bioreino-pronto.webp",
    link: "https://bioreinooficial.web.app/",
  },
  {
    title: "Luanda Ribeiro",
    description: "Site para artista e escola de dança, com agenda de eventos e galeria.",
    category: "Educação",
    image: "/luanda-pronto.webp",
    link: "https://luandaribeirohd.web.app/",
  },
  {
    title: "S.O.S Terapias Integrativas",
    description: "Página de vendas de curso de massagem com vídeo de apresentação.",
    category: "Educação",
    image: "/s-o-s.webp",
    link: "https://cursososterapias.web.app/",
  },
  {
    title: "Sorrir Mais Odontologia",
    description: "Site da clínica com especialidades e pedido de agendamento.",
    category: "Saúde",
    image: "/dentista-pronto.webp",
    link: "https://sorrirmais-odonto.web.app/",
  },
  {
    title: "Selma Silva - Enfermeira",
    description: "Site para enfermeira especialista no tratamento de feridas.",
    category: "Saúde",
    image: "/selmasilva.webp",
    link: "https://enfermeiraselmasilva.web.app/",
  },
  {
    title: "COOPCAM",
    description: "Site institucional de cooperativa agropecuária, com notícias e área do associado.",
    category: "Empresas",
    image: "/coopcam-pronto.webp",
    link: "https://coopcam-coop.web.app/",
  },
];

// Depoimentos reais enviados pelos clientes. Não editar o texto sem autorização deles.
const testimonials = [
  {
    name: "Advocacia Bressan",
    person: "João Bressan",
    avatar: "/advocacia.webp",
    text: "A transformação da minha página foi extraordinária após o seu trabalho.",
  },
  {
    name: "Clínica Sorrir Mais",
    person: "Mariana Amaral",
    avatar: "/sorrimais.webp",
    text: "A parceria com Italo Sol tem sido extremamente benéfica.",
  },
  {
    name: "Luanda Ribeiro",
    person: "Dançarina",
    avatar: "/luanda.webp",
    text: "Os resultados foram além das expectativas. Italo Sol é muito profissional e dedicado.",
  },
  {
    name: "Encapsulados BioReino",
    person: "Glaysson",
    avatar: "/bioreino.webp",
    text: "Italo Sol é extremamente competente e os resultados falam por si. Excelente parceria!",
  },
  {
    name: "Gráfica do Exército",
    person: "Shirley Vaz",
    avatar: "/grafex.webp",
    text: "A qualidade do trabalho de Italo Sol é incomparável. Estamos muito satisfeitos com os resultados.",
  },
  {
    name: "Agência Royal Motors",
    person: "Pedro Henrique",
    avatar: "/royal.webp",
    text: "A nossa agência viu um crescimento significativo após a colaboração com Italo Sol. Altamente recomendado!",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const INITIAL_COUNT = 6;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);
  const hiddenCount = filteredProjects.length - visibleProjects.length;

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            Sites que já estão <span className="text-blue-600">no ar</span>
          </h2>
          <p className="text-lg text-gray-700">
            Projetos reais para advogados, clínicas, escolas, marcas e empresas. Toque em qualquer um para ver o site funcionando.
          </p>
        </motion.div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="-mx-4 px-4 overflow-x-auto mb-8 md:mb-12">
            <TabsList className="inline-flex sm:flex sm:flex-wrap h-auto w-max sm:w-auto mx-auto sm:justify-center gap-1 p-1 bg-white border border-gray-200 rounded-full">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full px-4 py-2 text-sm whitespace-nowrap data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                >
                  <Card className="overflow-hidden group h-full">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                        <Image
                          src={project.image}
                          alt={`Site ${project.title}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-5 flex flex-col flex-1">
                        <span className="self-start bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-full text-xs mb-3">
                          {project.category}
                        </span>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:underline">
                          Ver site no ar
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>

            {hiddenCount > 0 && (
              <div className="text-center mt-8">
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 hover:bg-blue-50 transition-colors"
                >
                  Ver mais {hiddenCount} {hiddenCount === 1 ? 'projeto' : 'projetos'}
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-20 md:mt-24">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            O que meus clientes dizem
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={testimonial.name}
                className="bg-white p-6 rounded-xl shadow-lg relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <figcaption className="flex items-center mb-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 bg-gray-200 flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt=""
                      width={56}
                      height={56}
                      className="object-cover w-full h-full scale-90"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.person}</p>
                  </div>
                </figcaption>
                <blockquote className="text-gray-700">“{testimonial.text}”</blockquote>
                <div className="absolute top-4 right-4 text-blue-200 opacity-30" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                  </svg>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
