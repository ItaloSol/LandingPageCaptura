"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-primary">
          Landing Page<span className="text-orange-500">Craft</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button 
            asChild 
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
          >
            <a href="https://api.whatsapp.com/send/?phone=556199315616&text=Ol%C3%A1%21+Vim+pelo+seu+site+e+gostaria+de+saber+mais+sobre+suas+landing+pages+de+alta+convers%C3%A3o.&type=phone_number&app_absent=0" target="_blank" rel="noopener">Contato</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          <Button 
            asChild 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            <a  href="https://api.whatsapp.com/send/?phone=556199315616&text=Ol%C3%A1%21+Vim+pelo+seu+site+e+gostaria+de+saber+mais+sobre+suas+landing+pages+de+alta+convers%C3%A3o.&type=phone_number&app_absent=0" rel="noopener"
                target="_blank" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </Button>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false, onClick = () => {} }) => {
  const linkClass = mobile 
    ? "block py-2 text-gray-700 hover:text-orange-500 transition-colors"
    : "text-gray-700 hover:text-orange-500 transition-colors";

  return (
    <>
      <a href="#beneficios" className={linkClass} onClick={onClick}>
        Benefícios
      </a>
      <a href="#portfolio" className={linkClass} onClick={onClick}>
        Portfólio
      </a>
      <a href="#faq" className={linkClass} onClick={onClick}>
        FAQ
      </a>
    </>
  );
};

export default Header;