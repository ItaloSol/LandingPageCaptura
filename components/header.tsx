"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { generateWhatsAppLink } from '@/lib/whatsapp';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-primary">
          Landing Page<span className="text-orange-500">Craft</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8" aria-label="Navegação principal">
          <NavLinks />
          <Button
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
          >
            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" data-cta="header">
              Falar no WhatsApp
            </a>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {isMenuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal"
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col space-y-2"
        >
          <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="header-mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Falar no WhatsApp
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

const links = [
  { href: '#beneficios', label: 'Como trabalho' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#planos', label: 'Planos' },
  { href: '#faq', label: 'Dúvidas' },
];

const NavLinks = ({ mobile = false, onClick = () => {} }) => {
  const linkClass = mobile
    ? "block py-3 text-gray-700 hover:text-orange-500 transition-colors"
    : "text-gray-700 hover:text-orange-500 transition-colors";

  return (
    <>
      {links.map((link) => (
        <a key={link.href} href={link.href} className={linkClass} onClick={onClick}>
          {link.label}
        </a>
      ))}
    </>
  );
};

export default Header;
