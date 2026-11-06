import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export default function CTA() {
  return (
    <section className="relative h-40 md:h-80" aria-label="Fale comigo">
      <Image
        src="/BACK.png"
        alt=""
        fill
        sizes="100vw"
        loading="lazy"
        className="object-cover md:object-contain"
      />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <Button
          asChild
          size="lg"
          className="h-auto rounded-full px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 group transition-colors pulse-animate hover:[animation:none]"
        >
          <a
            href={generateWhatsAppLink("Olá, Ítalo! Vi os sites do seu portfólio e quero um assim para o meu negócio.")}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="banner-portfolio"
            className="flex items-center justify-center text-center"
          >
            Quero um site assim para mim
            <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </section>
  );
}
