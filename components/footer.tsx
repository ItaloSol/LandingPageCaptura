import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Phone } from 'lucide-react';
import { generateWhatsAppLink, WHATSAPP_DISPLAY } from '@/lib/whatsapp';

const services = [
  { label: "Site para profissional liberal", message: "Olá, Ítalo! Quero saber mais sobre site para profissional liberal." },
  { label: "Site institucional", message: "Olá, Ítalo! Quero saber mais sobre site institucional." },
  { label: "Página de vendas", message: "Olá, Ítalo! Quero saber mais sobre página de vendas." },
  { label: "Página de captação", message: "Olá, Ítalo! Quero saber mais sobre página de captação de contatos." },
  { label: "Projeto sob medida", message: "Olá, Ítalo! Preciso de um projeto sob medida." },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div>
            <Link href="#hero" className="font-bold text-2xl text-white inline-block mb-4">
              Landing Page<span className="text-orange-500">Craft</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Sites profissionais feitos por Ítalo Sol para empresas e profissionais que querem ser encontrados e receber contatos.
            </p>
            <div className="flex space-x-3">
              <SocialLink href="https://www.instagram.com/landingpagecraft/" label="Instagram" icon={<Instagram size={18} />} />
              <SocialLink href="https://www.facebook.com/profile.php?id=61574015195577" label="Facebook" icon={<Facebook size={18} />} />
              <SocialLink href="https://www.linkedin.com/in/italo-sol/" label="LinkedIn de Ítalo Sol" icon={<Linkedin size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5">Navegação</h3>
            <ul className="space-y-3">
              <FooterLink href="#beneficios">Como trabalho</FooterLink>
              <FooterLink href="#portfolio">Portfólio</FooterLink>
              <FooterLink href="#planos">Planos</FooterLink>
              <FooterLink href="#faq">Dúvidas</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <FooterLink key={service.label} href={generateWhatsAppLink(service.message)} cta="rodape-servico">
                  {service.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5">Contato</h3>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="rodape-telefone"
              className="flex items-start hover:text-white transition-colors"
            >
              <Phone size={18} className="mr-3 mt-1 text-orange-500" aria-hidden="true" />
              <span>WhatsApp {WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} LandingPageCraft · Ítalo Sol. Todos os direitos reservados.</p>
          <div className="mt-2">
            <Link href="/politica-de-privacidade" className="hover:text-gray-200 transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, label, icon }: SocialLinkProps) => (
  <a
    href={href}
    aria-label={label}
    className="bg-gray-800 hover:bg-blue-600 transition-colors p-3 rounded-full"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  cta?: string;
}

const FooterLink = ({ href, children, cta }: FooterLinkProps) => {
  const external = href.startsWith('https://');
  return (
    <li>
      <a
        href={href}
        className="hover:text-white transition-colors"
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        data-cta={cta}
      >
        {children}
      </a>
    </li>
  );
};
