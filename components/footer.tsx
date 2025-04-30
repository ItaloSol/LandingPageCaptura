import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Phone } from 'lucide-react';
const generateWhatsAppLink = (message: string) => {
  const phoneNumber = "556199315616"; // Your number without special characters
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-bold text-2xl text-white inline-block mb-4">
              Landing Page<span className="text-orange-500">Craft</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transformando visitantes em clientes através de landing pages de alta performance.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <FooterLink href="#beneficios">Benefícios</FooterLink><FooterLink href="#portfolio">Portfólio</FooterLink><FooterLink href="#faq">FAQ</FooterLink><FooterLink 
                href="https://api.whatsapp.com/send/?phone=556199315616&text=Ol%C3%A1%21+Vim+pelo+seu+site+e+gostaria+de+saber+mais+sobre+suas+landing+pages+de+alta+convers%C3%A3o.&type=phone_number&app_absent=0"
                target="_blank"
              >
                Contato
              </FooterLink>
            </ul>
          </div>
          
          {/* Services */}
        
          <div>
            <h3 className="font-bold text-white mb-6">Serviços</h3>
            <ul className="space-y-3">
              <FooterLink  href={generateWhatsAppLink("Olá, gostaria de saber mais sobre Landing Pages")}>
                Landing Pages
              </FooterLink>
              <FooterLink href={generateWhatsAppLink("Olá, tenho interesse em Páginas de Vendas")}>
                Páginas de Vendas
              </FooterLink>
              <FooterLink href={generateWhatsAppLink("Olá, preciso de Otimização SEO para meu site")}>
                Otimização SEO
              </FooterLink>
              <FooterLink href={generateWhatsAppLink("Olá, gostaria de informações sobre Integrações")}>
                Integrações
              </FooterLink>
              <FooterLink href={generateWhatsAppLink("Olá, quero saber mais sobre Análise de Métricas")}>
                Análise de Métricas
              </FooterLink>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-orange-500" />
                <span>+55 (61) 9931-5616</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Landing Page Craft. Todos os direitos reservados.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a 
    href={href} 
    className="bg-gray-800 hover:bg-blue-600 transition-colors p-2 rounded-full"
    target="_blank"
    rel="noreferrer"
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const FooterLink = ({ href, children, target }: FooterLinkProps) => (
  <li>
    <a 
      href={href} 
      className="hover:text-white transition-colors"
      target={target || (href.startsWith('https://') ? '_blank' : undefined)}
      rel={target === '_blank' || href.startsWith('https://') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  </li>
);